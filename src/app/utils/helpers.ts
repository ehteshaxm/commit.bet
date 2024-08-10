import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "app", "data", "fids.json");

export async function addFid(fid: number) {
  try {
    let data;

    try {
      const fileContents = await fs.readFile(filePath, "utf8");
      data = JSON.parse(fileContents);
    } catch (error) {
      data = {};
    }

    if (!Array.isArray(data.fids)) {
      data.fids = [];
    }

    if (!data.fids.includes(fid)) {
      data.fids.push(fid);

      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error adding fid:", error);
    throw error;
  }
}

export async function checkIfFidExists(fid: number) {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return Array.isArray(data.fids) && data.fids.includes(fid);
  } catch (error) {
    console.error("Error verifying fid:", error);
    return false;
  }
}
