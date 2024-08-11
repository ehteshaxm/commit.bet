import { DOMAIN } from "@/config";
import { frames } from "./frames";
import { Button } from "frames.js/next";

const handler = frames(async (ctx) => {
  return {
    image: `${DOMAIN}/api/images/initial`,
    buttons: [
      <Button key="1" action="post" target={`${DOMAIN}/f/join`}>
        Join Contest
      </Button>,
      <Button key="2" action="post" target={`${DOMAIN}/f/status`}>
        Check Status
      </Button>,
      <Button key="3" action="link" target={`${DOMAIN}/f/`}>
        See more contests
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;

// Initial -> Join -> if not staked -> Stake -> joined Contest
// Initial -> Join -> if staked -> Already Joined -> Check Status
// Check Status -> Won -> Claim -> Claimed
