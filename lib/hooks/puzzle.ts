import useSWR from "swr";
import IDailyPuzzle from "../../types/IDailyPuzzle";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * Gets today's daily puzzle.
 */
export const useDailyPuzzle = () => {
  const { data, error } = useSWR<IDailyPuzzle>("/api/puzzle/daily", fetcher);

  return { puzzle: data, error, isLoading: !data && !error };
};

/**
 * Gets the daily puzzle for the given date.
 * @param daysAgo The number of days ago to get the puzzle for
 * (0 = today, 1 = yesterday, etc).
 */
export const useDailyPuzzleForDate = (daysAgo: number) => {
  const { data, error } = useSWR<IDailyPuzzle>(
    `/api/puzzle/daily/${daysAgo}`,
    fetcher
  );

  return { puzzle: data, error, isLoading: !data && !error };
};

/**
 * Submits a result for today's daily puzzle.
 * @param resultBoard The resultBoard to submit.
 * @param win Whether the user won the puzzle.
 * @param timeSpent The time spent on the puzzle.
 */
export const submitDailyPuzzleResult = async (
  resultBoard: number[][],
  win: boolean,
  timeSpent: number
) => {
  const response = await fetch("/api/puzzle/daily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resultBoard,
      win,
      timeSpent,
    }),
  });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data);
  }
  return data;
};
