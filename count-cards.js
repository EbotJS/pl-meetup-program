var count = 0;

function cc(card) {
  // Only change code below this line
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
     count++;
   
     break;
  case 7:   
  case 8:   
  case 9: 
     count = count + 0;
     break;
  case 10:     
  case 'J':     
  case 'Q':         
  case 'K':     
  case 'A': 
      count--;
     
      break;  
} 
 if(count>0) return (count+" Bet");
 if(count<=0) return (count+" Hold");

  return "Change Me";
  // Only change code above this line
}

console.log(cc(2)); cc('J'); cc(9); cc(2); cc(7);