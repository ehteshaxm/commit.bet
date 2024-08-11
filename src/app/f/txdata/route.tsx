import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { encodeFunctionData, Abi } from "viem";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../../constants/contract";

export const POST = frames(async (ctx) => {
  if (!ctx.message) {
    throw new Error("No message");
  }

  const userAddress = ctx.message.connectedAddress;

  const functionName = "transfer";

  const calldata = encodeFunctionData({
    abi: contractAbi,
    functionName: functionName,
  });
  const _value = ethers.utils.parseEther("0.01").toString();

  return transaction({
    chainId: "eip155:84532",
    method: "eth_sendTransaction",
    params: {
      abi: contractAbi as Abi,
      to: contractAddress,
      data: calldata,
      value: _value,
    },
  });
});
