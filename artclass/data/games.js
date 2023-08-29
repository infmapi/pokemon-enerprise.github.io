// 

/* GAMES TO ADD



*/

var games = [
  {
    'id': 'customgame',
    'title': 'Add custom game',
    'image': 'assets/addicon.png'
  },
 
]

var customgames = JSON.parse(localStorage.getItem("customgames"))
customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
console.log("Loaded " + customgames.lenfth + " custom games")
