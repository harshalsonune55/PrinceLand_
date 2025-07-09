import React from "react";

export default function LoadingLogo() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src="/main.png" // replace with your actual logo path
        alt="Princeland Logo"
        className="w-24 h-24 object-contain animate-pulse"
      />
    </div>
  );
}