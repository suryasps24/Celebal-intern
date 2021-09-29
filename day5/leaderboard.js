function climbingLeaderboard(ranked, player) {
    let rank = [];
  for (let i = 0; i < ranked.length; i++) {
    if (rank.length === 0) {
      rank.push(ranked[i]);
    } else {
      if (rank[rank.length - 1] === ranked[i]) {
        continue;
      }
      rank.push(ranked[i]);
    }
  }
  
  let res = [];
  let lowestRank = rank.length;
  for (let i = 0; i < player.length; i++) {
    while (player[i] >= rank[lowestRank - 1] && lowestRank > 0) {
      rank.pop;
      lowestRank--;
    }
    res.push(lowestRank + 1);
  }
  return res;// Write your code here

}
