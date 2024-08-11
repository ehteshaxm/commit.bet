import { DOMAIN } from "@/config";
import { frames } from "../frames";
import { Button } from "frames.js/next";

const handler = frames(async (ctx) => {
  //write code to airdrop back the balance
  // find wallet address on ctx

  
  return {
    image: `${DOMAIN}/api/images/claimed`,
    buttons: [
      <Button key="2" action="post" target={`${DOMAIN}/f/`}>
        Back to the detail
      </Button>,
      <Button key="3" action="link" target={`${DOMAIN}/f/`}>
        See more contests
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
