export const DOMAIN =
  process.env.NODE_ENV === "development"
    ? "https://b4a7-2401-4900-57e3-abae-3d1b-b88b-b84a-f553.ngrok-free.app"
    : process.env.NEXT_PUBLIC_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_DOMAIN}`
    : "https://commit-bet.vercel.app";
