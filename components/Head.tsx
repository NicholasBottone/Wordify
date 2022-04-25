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
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#d5ebff" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </NextHead>
  );
}
