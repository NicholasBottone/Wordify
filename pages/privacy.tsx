import React from "react";
import { Container } from "react-bootstrap";

export default function Privacy() {
  return (
    <Container className="pt-5">
      <h1 className="text-center">Wordify Privacy Policy</h1>
      <br />
      <p className="fs-5">
        Wordify is committed to privacy. We will never sell your personal
        information to anyone. We only collect basic information and statistics
        about your game play and your usage of the game, such as your win count
        and win streak. We do not track your IP address or use targeted
        advertising.
      </p>
      <p className="fs-5">
        For user account registration and authentication, we make use of Google
        OAuth2. When you choose to login to an account, we store a cookie with a
        user session id that allows us to keep you signed-in to your account
        across multiple visits in the same browser. For users that choose to
        login with Google, we receive some basic Google account details,
        including your email address, profile picture, and name. We cannot
        modify these Google account details, nor do we receive any sensitive
        information from Google, such as passwords. For more information
        regarding how Google handles your information, please visit{" "}
        <a href="https://policies.google.com/privacy">
          Google&apos;s Privacy Policy
        </a>
        .
      </p>
      <p className="fs-5">
        For web and mobile analytics, we make use of Vercel Analytics. Vercel
        Analytics is a service provided by Vercel that allows us to collect
        performance data about how the web app is performing on user devices.
        This information is not tied to any personally identifiable information
        and is used to help us improve the web app. For more information about
        how Vercel handles your information, please visit{" "}
        <a href="https://vercel.com/legal/privacy-policy">
          Vercel&apos;s Privacy Policy
        </a>
        .
      </p>
      <p className="fs-5">
        As part of our commitment to privacy and the open source community, the
        codebase of Wordify is open source and licensed under the AGPL-3.0
        license. To visit the codebase, please visit{" "}
        <a href="https://github.com/NicholasBottone/Wordify">
          our repository on GitHub
        </a>
        .
      </p>
    </Container>
  );
}
