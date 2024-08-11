"use client";
import { AuthKitProvider, SignInButton, useProfile } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { useEffect, useState } from "react";
import { addToWaitlistDB } from "./utils/helpers";

const config = {
  // For a production app, replace this with an Optimism Mainnet
  // RPC URL from a provider like Alchemy or Infura.
  relay: "https://relay.farcaster.xyz",
  rpcUrl:
    "https://opt-mainnet.g.alchemy.com/v2/vgrSjtAW-PFeIK8TeeM1OohDpAVzILWh",
  domain: "commitbet.xyz",
  siweUri: "https://www.commitbet.xyz/login",
};

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const profile = useProfile();

  function joinWaitlist() {
    setLoading(true);
    const signInButton = document
      ?.querySelector(".fc-authkit-signin-button")
      ?.querySelector("button");
    if (signInButton instanceof HTMLElement) {
      signInButton.click();
    }
  }

  async function addToWaitList({
    fid,
    username,
    displayName,
    verifications,
  }: {
    fid: number;
    username: string;
    displayName: string;
    verifications: string[];
  }) {
    console.log(fid, username, displayName, verifications);
    addToWaitlistDB(fid, username, displayName, verifications);
    setLoading(false);
    setCompleted(true);
  }

  return (
    <AuthKitProvider config={config}>
      <main className="min-h-screen relative flex flex-col items-center justify-center">
        <img
          src="/assets/images/frame.png"
          alt="bg"
          className="w-full h-full absolute top-0 left-0 z-1"
        />
        <section className="relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-0 h-0 border-l-[20px] md:border-l-[50px] border-l-transparent border-b-[30px] md:border-b-[75px] border-b-green-500 border-r-[20px] md:border-r-[50px] border-r-transparent mt-2 md:mt-4 mr-4"></div>
            <h1 className="text-5xl md:text-9xl poppins-extrabold-italic">
              commit.bet
            </h1>
          </div>
          {completed ? (
            <p className="text-2xl poppins-medium ">
              {"You're on the waitlist! 🚀"}
            </p>
          ) : (
            <button
              className="bg-white text-black px-6 py-2 rounded-full mt-16 poppins-medium hover:bg-gray-100"
              onClick={joinWaitlist}
            >
              {loading ? "Loading..." : "Join Waitlist"}
            </button>
          )}
          <div className="hidden">
            <SignInButton
              onSuccess={({ fid, username, displayName, verifications }) => {
                if (fid && username && displayName && verifications) {
                  addToWaitList({
                    fid,
                    username,
                    displayName,
                    verifications,
                  });
                }
              }}
              onError={() => setLoading(false)}
              onStatusResponse={() => setLoading(false)}
            />
          </div>
        </section>
      </main>
    </AuthKitProvider>
  );
};

export default LandingPage;
