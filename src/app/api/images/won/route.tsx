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
        <div tw="flex flex-col justify-center items-center w-full">
          <img
            src="https://commit-bet.vercel.app/assets/images/frame.png"
            tw="h-full w-full absolute top-0 left-0 z-1"
            width={500}
            height={700}
          />
          <p
            tw="flex text-8xl font-bold z-10"
            style={{ fontFamily: "Poppins" }}
          >
            You won!
          </p>

          <div
            tw="flex justify-between space-x-2 mt-10 min-h-[200px] text-black max-w-[700px] mx-auto"
            style={{ fontFamily: "SpaceGrotesk" }}
          >
            <div tw="flex flex-col items-center text-4xl p-5 w-1/3 h-full bg-green-500 rounded-xl border border-b-2 border-black shadow-md shadow-black">
              Your Prize
              <div tw="bg-white text-3xl mt-7 p-1 rounded-lg">0.01 ETH</div>
            </div>
            <div tw="flex flex-col items-center text-4xl p-5 w-1/3 h-full bg-lime-500 rounded-xl border border-b-2 border-black shadow-md shadow-black mx-2">
              Players
              <div tw="bg-white text-3xl mt-7 p-1 rounded-lg">100</div>
            </div>
            <div tw="flex flex-col items-center text-4xl p-5 w-1/3 h-full bg-fuchsia-300 rounded-xl border border-b-2 border-black shadow-md shadow-black">
              Prize Pool
              <div tw="bg-white text-3xl mt-7 p-1 rounded-lg">1 ETH</div>
            </div>
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
