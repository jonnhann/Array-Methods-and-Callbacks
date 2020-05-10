import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let lookFor = fifaData.find((cb)=>{
  return cb.Stage === "Final" && cb.Year === 2014;
});
//a 
console.log(lookFor["Home Team Name"]);
//b
console.log(lookFor["Away Team Name"]);
//c 
console.log(lookFor["Home Team Goals"]);
//d
console.log(lookFor["Away Team Goals"]);
//e
if(lookFor["Home Team Goals"] > lookFor["Away Team Goals"]){
  console.log(lookFor["Home Team Name"])
} else if(lookFor["Home Team Goals"] === lookFor["Away Team Goals"]){
  console.log("Tie")
}else{
  console.log(lookFor["Away Team Name"]);
}



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

  return data.filter((cb)=>{
   return cb.Stage === "Final"
  })

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, arr) {

  /* code here */
  let years = [];
  callback(arr).map((cb)=>{
    years.push(cb.Year);
  });
  return years;
  

};



console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, arr) {

  /* code here */
   let winners = callback(arr).map((cb)=>{
      if(cb["Home Team Goals"] > cb["Away Team Goals"]){
        return cb["Home Team Name"]
      }else {
        return cb["Away Team Name"]
      }
   });
   return winners;

};

console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
* callback function getWinners
* callback function getYears
*/

function getWinnersByYear(cb1, cb2){
let country = cb1(getFinals, fifaData);
let years = cb2(getFinals, fifaData);



for(let i = 0; i < country.length; i++){
 console.log(`In ${years[i]}, ${country[i]} won the world cup!` ) ;
}


}

getWinnersByYear(getWinners, getYears);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {

  /* code here */
  let finals = getFinals(data);
  let winners = finals.map((item)=>{
    if(item["Home Team Goals"]> item["Away Team Goals"]){
      return item["Home Team Initials"];
    } else {
      return item["Away Team Initials"];
    }
  });

  let wins = winners.reduce((acc, count)=>{
    if(count === teamInitials){
      return acc + 1
    }
    return acc
  },0)
  return wins;
};

console.log(getCountryWins(fifaData, "BRA"));



/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */
  let avgHomeGoals; 
  let homeGoals = data.reduce((acc, match)=>{
    acc = acc + match["Home Team Goals"];

    return acc;
  },0);
  avgHomeGoals= homeGoals/data.length;

  let avgAwayGoals;
  
  let awayGoals = data.reduce((acc, match)=>{
    acc = acc + match["Away Team Goals"];

    return acc;
  },0);

  avgAwayGoals = awayGoals/data.length;

return {
  avgHome: avgHomeGoals,
  avgAway: avgAwayGoals,
}
};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
