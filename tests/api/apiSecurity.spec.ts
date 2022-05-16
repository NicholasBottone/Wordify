import { test, expect } from "@playwright/test";

test("API should return 401 when no token is provided", async ({ request }) => {
  const response = await request.get("/api/user/search?q=test");
  expect(response.status()).toBe(401);

  const response2 = await request.post("/api/user/friend", {
    data: {
      id: "this is a fake mongo id",
      friend: true,
    },
  });
  expect(response2.status()).toBe(401);

  const response3 = await request.get("/api/user/friend");
  expect(response3.status()).toBe(401);

  const response4 = await request.get("/api/puzzle/daily");
  expect(response4.status()).toBe(401);

  const response5 = await request.get("/api/puzzle/daily/1");
  expect(response5.status()).toBe(401);

  const response6 = await request.post("/api/puzzle/daily/create", {
    data: {
      word: "crane",
      daysAgo: 0,
    },
  });
  expect(response6.status()).toBe(401);

  const response7 = await request.post("/api/cron/midnight");
  expect(response7.status()).toBe(401);
});
