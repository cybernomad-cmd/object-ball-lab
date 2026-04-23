const {
  playerPoints,
  teamColors,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
} = require("./index");

test("playerPoints works", () => {
  expect(playerPoints("LeBron James")).toBe(30);
});

test("teamColors works", () => {
  expect(teamColors("Lakers")).toEqual(["Purple", "Gold"]);
});

test("mostPointsScored works", () => {
  expect(mostPointsScored()).toBe("Stephen Curry");
});

test("winningTeam works", () => {
  expect(winningTeam()).toBe("Warriors");
});

test("playerWithLongestName works", () => {
  expect(playerWithLongestName()).toBe("LeBron James");
});

test("doesLongNameStealATon works", () => {
  expect(typeof doesLongNameStealATon()).toBe("boolean");
});