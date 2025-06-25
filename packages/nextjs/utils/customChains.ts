import { defineChain } from "viem";

export const base = defineChain({
  id: 8453,
  name: "Base",
  nativeCurrency: { name: "Base", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://basescan.org",
    },
  },
});

export const baseSepolia = defineChain({
  id: 84532,
  name: "Base Sepolia",
  nativeCurrency: { name: "Base Sepolia", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org/"],
    },
  },
});

// export const baseFork = defineChain({
//   id: 8453,
//   name: "BaseFork",
//   nativeCurrency: { name: "Forked Base", symbol: "ETH", decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: ["https://127.0.0.1:8545"],
//     },
//   },
// });
