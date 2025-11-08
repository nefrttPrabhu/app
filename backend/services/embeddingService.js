// Dummy embedding placeholder (replace with real vector DB / API)
import crypto from "crypto";

export const generateEmbedding = async (text) => {
  const hash = crypto.createHash("sha256").update(text).digest("hex");
  return { id: `vec_${hash.slice(0, 8)}`, vector: Array(512).fill(Math.random()) };
};
