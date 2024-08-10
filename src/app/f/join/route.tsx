import { addFid, checkIfFidExists } from "@/app/utils/helpers";
import { frames } from "../frames";
import { Button } from "frames.js/next";
import { DOMAIN } from "@/config";

const handler = frames(async (ctx) => {
  const fid = ctx?.message?.requesterFid;

  if (fid) {
    const isParticipant = await checkIfFidExists(fid);

    if (!isParticipant) {
      //add fid to the list
      await addFid(fid);

      return {
        image: `${DOMAIN}/api/images/joined`,
        buttons: [
          <Button key="1" action="post" target={`${DOMAIN}/f/`}>
            Back to the detail
          </Button>,
          <Button key="2" action="link" target={`${DOMAIN}/f/`}>
            See more contests
          </Button>,
        ],
      };
    }

    if (isParticipant) {
      return {
        image: `${DOMAIN}/api/images/already-joined`,
        buttons: [
          <Button key="1" action="post" target={`${DOMAIN}/f/`}>
            Back to the detail
          </Button>,
          <Button key="2" action="post" target={`${DOMAIN}/f/win-status`}>
            Check status
          </Button>,
          <Button key="3" action="link" target={`${DOMAIN}/f/`}>
            See more contests
          </Button>,
        ],
      };
    }
  }

  return {
    image: `${DOMAIN}/api/images/initial`,
    buttons: [
      <Button key="1" action="post">
        Join Contest
      </Button>,
      <Button key="2" action="link" target={`${DOMAIN}/f/`}>
        See more contests
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
