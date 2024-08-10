import { frames } from "../frames";
import { Button } from "frames.js/next";
import { DOMAIN } from "@/config";
import { addUserToDatabase, verifyUserExists } from "@/app/utils/helpers";

const handler = frames(async (ctx) => {
  console.log(ctx);

  const fid = ctx?.message?.requesterFid;

  if (fid) {
    const isParticipant = await verifyUserExists(fid);

    if (!isParticipant) {
      //add fid to the list
      await addUserToDatabase(fid);

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
