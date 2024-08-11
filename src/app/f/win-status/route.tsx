import { DOMAIN } from "@/config";
import { frames } from "../frames";
import { Button } from "frames.js/next";

const handler = frames(async (ctx) => {
  return {
    image: `${DOMAIN}/api/images/won`,
    buttons: [
      <Button key="1" action="tx" target={`${DOMAIN}/f/txclaim`}>
        Claim
      </Button>,
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
