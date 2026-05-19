"use client";

export function LogoutResetButton() {
  async function handleClick() {
    try {
      await fetch("/api/v1/auth/log", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout reset request failed:", error);
    }

    window.location.assign("/");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-foreground hover:bg-muted rounded-md border px-4 py-2 text-sm"
    >
      Log &amp; gianni817
    </button>
  );
}
