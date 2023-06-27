// code your solution here
// index.js

// SaturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }


// MondayWork function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };


// WrapAdjective function
function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
   