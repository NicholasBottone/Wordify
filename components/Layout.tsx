import React from "react";
import Head from "./Head";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head />
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
