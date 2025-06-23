import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  1: {
    AAVEPOOL: {
      address: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
      abi: [
        {
          inputs: [{ internalType: "address", name: "admin", type: "address" }],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "implementation", type: "address" }],
          name: "Upgraded",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [],
          name: "admin",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_logic", type: "address" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newImplementation", type: "address" }],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newImplementation", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
