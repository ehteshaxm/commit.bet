import { frames } from "../../frames/frames" // Adjust the path if necessary
import { transaction } from "frames.js/core";
import { encodeFunctionData, Abi } from 'viem';
import { ethers } from 'ethers';
import { contractAddress, contractAbi } from "../../constants/contract"




export const POST = frames(async (ctx) => {
  if (!ctx.message) {
    throw new Error("No message");
  }

  const userAddress = ctx.message.connectedAddress;

  const functionName = "mint";
  const args = [userAddress, ethers.utils.parseEther("1.0")];

  const calldata = encodeFunctionData({
    abi: contractAbi,
    functionName: functionName,
    args: args,
  });


  return transaction({
    chainId: "eip155:84532", 
    method: "eth_sendTransaction",
    params: {
      abi: contractAbi as Abi,
      to: contractAddress,
      data: calldata,
      value: "0",
    },
  });
});
