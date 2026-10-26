import fs from "fs";
import path from "path";
import crypto from "crypto";
import axios from "axios";
import sizeOf from "image-size";

const UPLOAD_DIR = path.join(__dirname, "uploads");
const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
const ALLOWED_TYPES = ["png", "jpg", "gif", "webp"];

// Checks that the data really is an allowed image, saves it under a
// random file name, and returns its public URL and dimensions.
function saveImage(buffer: Buffer) {
  let info: any;
  try {
    info = sizeOf(buffer);
  } catch (e) {
    throw new Error("Not a valid image");
  }
  if (!info.type || !ALLOWED_TYPES.includes(info.type)) {
    throw new Error("Unsupported image type: " + info.type);
  }

  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  const fileName = crypto.randomBytes(8).toString("hex") + "." + info.type;
  fs.writeFileSync(path.join(UPLOAD_DIR, fileName), buffer);

  return {
    publicUrl: "/files/" + fileName,
    size: { x: info.width, y: info.height },
  };
}

// Used when a file is uploaded (drag & drop, paste, file picker)
export const uploadImage = async (
  file: { originalname: any; buffer: any },
  _originalname: string
) => {
  return saveImage(file.buffer).publicUrl;
};

// Used when an image URL is dropped from another web page
export const uploadImageURl = async (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    throw new Error("Only http(s) URLs are allowed");
  }
  const resp = await axios.get(url, {
    responseType: "arraybuffer",
    maxContentLength: MAX_BYTES,
    timeout: 10000,
  });
  return saveImage(Buffer.from(resp.data));
};
