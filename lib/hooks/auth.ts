import useSWR from "swr";
import IUser from "../../types/IUser";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * Gets the user that is currently logged in.
 */
export const useUser = () => {
  const { data, error } = useSWR<IUser>("/api/auth", fetcher);

  return { user: data, error, isLoading: !data && !error };
};

/**
 * Redirects the user to the login page.
 */
export function login() {
  window.open("/api/auth/login", "_self");
}

/**
 * Logs the user out.
 */
export async function logout() {
  await fetch("/api/auth/logout");
}
