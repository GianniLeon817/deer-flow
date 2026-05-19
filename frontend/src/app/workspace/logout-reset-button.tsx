"use client";

import { useState } from "react";

export function LogoutResetButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/v1/auth/log", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "fie",
          username: "gianni817",
        }),
      });

      if (!response.ok) {
        throw new Error(`Log request failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Log request failed:", error);
    } finally {
      window.location.assign("/");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="text-foreground hover:bg-muted rounded-md border px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Logging..." : "Log & gianni817"}
    </button>
  );
}
