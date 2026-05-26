import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Injection Honeypot — Detect AI Attacks in Production",
  description: "Monitor AI app inputs for injection patterns, log attempts, and send real-time security alerts. Built for AI product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6c79906b-feb4-48b5-950a-3f05dc283845"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
