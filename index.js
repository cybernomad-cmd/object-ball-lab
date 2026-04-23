const gameObject = {
  home: {
    teamName: "Lakers",
    colors: ["Purple", "Gold"],
    players: [
      { name: "LeBron James", points: 30, rebounds: 8, steals: 2 },
      { name: "Anthony Davis", points: 25, rebounds: 10, steals: 1 }
    ]
  },
  away: {
    teamName: "Warriors",
    colors: ["Blue", "Yellow"],
    players: [
      { name: "Stephen Curry", points: 35, rebounds: 5, steals: 3 },
      { name: "Klay Thompson", points: 20, rebounds: 4, steals: 1 }
    ]
  }
};

const allPlayers = () =>
  Object.values(gameObject).flatMap(team => team.players);

function playerPoints(name) {
  const player = allPlayers().find(p => p.name === name);
  return player ? player.points : null;
}

function teamColors(teamName) {
  const team = Object.values(gameObject).find(
    t => t.teamName === teamName
  );
  return team ? team.colors : null;
}

function mostPointsScored() {
  return allPlayers().reduce((max, player) =>
    player.points > max.points ? player : max
  ).name;
}


function winningTeam() {
  const totals = Object.values(gameObject).map(team => ({
    name: team.teamName,
    points: team.players.reduce((sum, p) => sum + p.points, 0)
  }));

  return totals.reduce((max, t) =>
    t.points > max.points ? t : max
  ).name;
}

function playerWithLongestName() {
  return allPlayers().reduce((longest, player) =>
    player.name.length > longest.length ? player.name : longest
  , "").toString();
}

function doesLongNameStealATon() {
  const longest = playerWithLongestName();
  const player = allPlayers().find(p => p.name === longest);

  const maxSteals = allPlayers().reduce((max, p) =>
    p.steals > max ? p.steals : max
  , 0);

  return player.steals === maxSteals;
}

module.exports = {
  playerPoints,
  teamColors,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
};