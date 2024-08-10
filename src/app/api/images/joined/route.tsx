import { DOMAIN } from "@/config";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const poppins = await fetch(
    new URL(`${DOMAIN}/assets/fonts/Poppins.ttf`, import.meta.url)
  ).then((res) => res.arrayBuffer());

  const spaceGrotesk = await fetch(
    new URL(`${DOMAIN}/assets/fonts/SpaceGrotesk-Bold.ttf`, import.meta.url)
  ).then((res) => res.arrayBuffer());

  const imageResponse = new ImageResponse(
    (
      <div tw="flex flex-row bg-black w-full h-full text-white relative">
        <div
          tw="flex flex-col justify-center items-center w-full"
          style={{ fontFamily: "Poppins" }}
        >
          <img
            src="https://w0.peakpx.com/wallpaper/271/142/HD-wallpaper-abstract-minimal-blur-abstract-blur-minimalism-minimalist-deviantart.jpg"
            tw="h-full w-full absolute top-0 left-0 z-1"
            width={500}
            height={700}
          />
          <p tw="flex text-8xl leading-[2px] font-bold z-10">You Joined</p>
          <p tw="flex text-8xl leading-tight font-bold z-10">
            Farcaster Challenge
          </p>
          <div
            tw="flex flex-col mt-7 leading-[2px] text-3xl"
            style={{ fontFamily: "SpaceGrotesk" }}
          >
            Ends: 8/6/2024, 00:00AM - 8/13/2024, 11:59PM UTC
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, immutable",
      },
      fonts: [
        {
          name: "Poppins-Italic",
          data: poppins,
          style: "italic",
        },
        {
          name: "SpaceGrotesk",
          data: spaceGrotesk,
          style: "normal",
        },
      ],
    }
  );

  return imageResponse;
}
