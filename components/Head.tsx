import React from "react";
import NextHead from "next/head";

interface Props {
  title?: string;
  description?: string;
}

export default function Head({
  title = "Wordify | Social Word Game",
  description = "Challenge your friends to a new Wordify puzzle every day, or create your own puzzles to stump others and get to the top of the leaderboard!",
}: Props) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/icon.png" />
      <meta name="theme-color" content="#d5ebff" />
    </NextHead>
  );
}
