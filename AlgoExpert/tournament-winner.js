const tournamentWinner = (tournament, result) => {
  let currentBestTeam = "";
  const hash = {[currentBestTeam]: 0};
  for (let i = 0; i < tournament.length; i++) {
    const [homeTeam, awayTeam] = tournament[i];
    const winningTeam = result[i] === 1 ? homeTeam : awayTeam;
    if (!(winningTeam in hash)) {
      hash[winningTeam] = 0;
    }
    hash[winningTeam] += 3;
    if (hash[winningTeam] > hash[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
};

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const result = [0, 0, 1];

console.log(tournamentWinner(competitions, result));
