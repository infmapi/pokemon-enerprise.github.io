var apps = [
  {
    'id': 'customapp',
    'title': 'Add custom app',
    'image': 'assets/addicon.png'
  },
  
]

var customapps = JSON.parse(localStorage.getItem("customapps"))
customapps.forEach(app => {
  apps.push(app)
})

console.log("Loaded " + apps.length + " apps")
console.log("Loaded " + customapps.length + " custom apps")
