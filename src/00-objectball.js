function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 1,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const allPlayers = () => {
  const playersCollection = {};

  for (let location in gameObject()) {
    let playersByTeamLocation = gameObject()[location].players;

    for (let player in playersByTeamLocation) {
      playersCollection[player] = playersByTeamLocation[player];
    }
  }
  return playersCollection;
};
//to view all players => console.log(allPlayers());

const getPlayerByName = (name) => { 
  for(let player in allPlayers()){
    if(player === name){return allPlayers()[player]}
  } 
}
//to get a player by name => console.log("requested player stats: ", getPlayerByName("Brendan Haywood"))


const numPointsScored = name => {return getPlayerByName(name)["points"]}
//to get points by name => console.log("points scored: ", numPointsScored("Ben Gordon"))

const shoeSize = name => {return getPlayerByName(name)["shoe"]}
//to get shoe size by name => console.log("the shoe size is: ", shoeSize("Jeff Adrien"))


//Non-iterative approach with declared function keyword
const stats = gameObject();
const homeTeamStats = stats.home;
const homeTeamRoster = homeTeamStats.players;
const awayTeamStats = stats.away;
const awayTeamRoster = awayTeamStats.players;


function teamColors(team) {
  if (homeTeamStats["teamName"] === team) {
    console.log(homeTeamStats["colors"]);
  } else if (awayTeamStats["teamName"] === team) {
    console.log(awayTeamStats["colors"]);
  } else {
    console.log(
      "Sorry we do not currently have color stats for that franchise."
    );
  }
}

function teamNames() {
  console.log([homeTeamStats.teamName, awayTeamStats.teamName]);
}


//Redo:
// function numPointsScored(name) {
//   if (homeTeamRoster[name]) {
//     console.log(homeTeamRoster[name]["points"]);
//   } else if (awayTeamRoster[name]) {
//     console.log(awayTeamRoster[name]["points"]);
//   } else {
//     console.log("Sorry we do not currently have points stats for that player.");
//   }
// }

// function shoeSize(name) {
//   if (homeTeamRoster[name]) {
//     console.log(homeTeamRoster[name]["shoe"]);
//   } else if (awayTeamRoster[name]) {
//     console.log(awayTeamRoster[name]["shoe"]);
//   } else {
//     console.log(
//       "Sorry we do not currently have the shoe size for that player."
//     );
//   }
// }

// numPointsScored("Alan Anderson");
// shoeSize("Alan Anderson");
// teamColors("Brooklyn Nets");
// teamNames();
