import useSWR from "swr";
import IUser from "../../types/IUser";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * Gets the profile of another user by their id.
 */
export const useProfile = (id: string) => {
  const { data, error } = useSWR<IUser>(`/api/user/${id}`, fetcher);

  return { user: data, error, isLoading: !data && !error };
};
