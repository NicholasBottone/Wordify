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
  mutate("/api/user");
}
