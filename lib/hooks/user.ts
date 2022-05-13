/**
 * Searches for the top 10 users whose name contains the given query string
 * @param query partial name to be queried (must be at least 2 characters long)
 * @returns list of all users who have the given string in their name
 */
export const search = async (query: String) => {
  const response = await fetch(`/api/user/search?q=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data);
  }
  console.log(data);
  return data;
};
