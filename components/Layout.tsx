import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
