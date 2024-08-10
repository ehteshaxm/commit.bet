import { DOMAIN } from "@/config";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  console.log(DOMAIN);

  const poppins = await fetch(
    new URL(`${DOMAIN}/assets/fonts/Poppins-Italic.ttf`, import.meta.url)
  ).then((res) => res.arrayBuffer());

  const spaceGrotesk = await fetch(
    new URL(`${DOMAIN}/assets/fonts/SpaceGrotesk-Bold.ttf`, import.meta.url)
  ).then((res) => res.arrayBuffer());

  const imageResponse = new ImageResponse(
    (
      <div tw="flex flex-row bg-black w-full h-full text-white relative">
        <div
          tw="flex flex-col justify-center items-center w-1/2"
          style={{ fontFamily: "Poppins" }}
        >
          <img
            src="https://commit-bet.vercel.app/assets/images/frame.png"
            tw="h-full w-full absolute top-0 left-0 z-1"
            width={500}
            height={700}
          />
          <p tw="flex text-8xl leading-[2px] font-bold z-10 mt-28">Farcaster</p>
          <p tw="flex text-8xl leading-tight font-bold z-10">Challenge</p>
        </div>
        <div
          tw="flex flex-col justify-center w-1/2 bg-white p-10 text-black"
          style={{ fontFamily: "SpaceGrotesk" }}
        >
          <div tw="flex flex-col">
            <h1 tw="text-5xl font-bold leading-[2px]">Farcaster Challenge</h1>
            <div tw="flex items-center mt-2 text-lg">
              <p>by</p>
              <img
                src="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/ba776434-7fd2-4038-34be-f17e94546300/original"
                tw="h-10 w-10 rounded-full mx-2"
                width={500}
                height={700}
              />
              <p>Yuki</p>
            </div>
          </div>
          <div tw="flex mt-7 text-2xl">
            Commit to posting on Farcaster every day this week and win from the
            prize pool.
          </div>
          <div tw="flex flex-col mt-7 leading-[2px] text-xl">
            Entry: 8/5/2024, 00:00AM - 8/6/2024, 11:59PM UTC
            <br tw="my-1" />
            Ends: 8/6/2024, 00:00AM - 8/13/2024, 11:59PM UTC
          </div>
          <div tw="flex justify-between space-x-2 mt-10 min-h-[160px]">
            <div tw="flex flex-col items-center text-2xl p-3 w-1/3 h-full bg-green-500 rounded-xl border border-b-2 border-black shadow-md shadow-black">
              Entry Fee
              <div tw="bg-white text-xl mt-5 p-1 rounded-lg">0.222 ETH</div>
            </div>
            <div tw="flex flex-col items-center text-2xl p-3 w-1/3 h-full bg-lime-500 rounded-xl border border-b-2 border-black shadow-md shadow-black mx-2">
              Players
              <div tw="bg-white text-xl mt-5 p-1 rounded-lg">100</div>
            </div>
            <div tw="flex flex-col items-center text-2xl p-3 w-1/3 h-full bg-fuchsia-300 rounded-xl border border-b-2 border-black shadow-md shadow-black">
              Prize Pool
              <div tw="bg-white text-xl mt-5 p-1 rounded-lg">0.222 ETH</div>
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
