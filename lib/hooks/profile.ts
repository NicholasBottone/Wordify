import useSWR, { mutate } from "swr";
import IUser from "../../types/IUser";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * Gets the profile of another user by their id.
 */
export const useProfile = (id: string) => {
  const { data, error } = useSWR<IUser>(`/api/user/${id}`, fetcher);

  return { user: data, error, isLoading: !data && !error };
};

/**
 * Gets the array of friends' profiles from the user's friend list.
 */
export const useFriends = () => {
  const { data, error } = useSWR<IUser[]>(`/api/user/friend`, fetcher);

  return { friends: data, error, isLoading: !data && !error };
};

/**
 * Friends or unfriends another user profile by their id.
 */
export async function setFriend(id: string, friend: boolean) {
  await fetch("/api/user/friend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, friend }),
  });
  mutate("/api/auth");
  mutate("/api/user/friend");
}

/**
 * Searches for the top 10 users whose name contains the given query string
 * @param query partial name to be queried (must be at least 2 characters long)
 * @returns list of up to 10 users that have the given string in their name
 */
export async function searchProfiles(query: string) {
  const response = await fetch(`/api/user/search?q=${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status !== 200) {
    throw new Error(await response.text());
  }
  return response.json();
}
