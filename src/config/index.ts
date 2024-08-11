export const DOMAIN =
  process.env.NODE_ENV === "development"
    ? "https://60f1-103-148-62-35.ngrok-free.app"
    : process.env.NEXT_PUBLIC_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_DOMAIN}`
    : "https://commit-bet.vercel.app";
