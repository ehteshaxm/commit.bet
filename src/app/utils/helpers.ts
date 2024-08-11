"use server";
import { prisma } from "../lib/prisma";

export async function addUserToDatabase(fid: number): Promise<void> {
  try {
    await prisma.user.create({
      data: {
        fid: fid,
      },
    });
  } catch (error) {
    console.error("Error adding user to database:", error);
    throw error;
  }
}

export async function verifyUserExists(fid: number): Promise<boolean> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        fid: fid,
      },
    });
    return user !== null;
  } catch (error) {
    console.error("Error verifying user existence:", error);
    throw error;
  }
}

export async function addToWaitlistDB(
  fid: number,
  username: string,
  displayName: string,
  verifications: string[]
) {
  try {
    await prisma.waitlist.create({
      data: {
        fid: fid,
        username: username,
        displayName: displayName,
        verifications: verifications,
      },
    });
  } catch (error) {
    console.error("Error adding user to waitlist:", error);
  }
}
