import speakeasy from "speakeasy";
// @ts-ignore
import base32 from "base32.js";

const SECRET_KEY = process.env.TEST_2FA!.toUpperCase().replace(/ /g, "");

const SECRET_KEY_BUFFER = Buffer.from(base32.decode(SECRET_KEY));

export default function getToken() {
  return speakeasy.totp({
    // @ts-ignore
    secret: SECRET_KEY_BUFFER,
    encoding: "base32",
  });
}
