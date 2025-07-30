import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0xb78506F52425a2aFF9d76096748c40B59256D9f8";

export const ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

export function getProvider() {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  }
  return null;
}