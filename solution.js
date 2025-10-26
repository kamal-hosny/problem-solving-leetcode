var number = function(busStops){
  // Good Luck!
  let people = 0 
    for (let i = 0; i < busStops.length; i++) {
        people += busStops[i][0]
        people -= busStops[i][1]
        
    }
  return people
}

console.log(number([[3, 0], [5, 2], [2, 1]]));
