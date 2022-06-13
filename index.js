function scuberGreetingForFeet(value){
  if(400 >= value){
    return "This one is on me!";
  } else if (2001 >= value){
      return "I will gladly take your thirty bucks.";
  } else if (2501 >= value){
      return "No can do.";
  }
}

function ternaryCheckCity(isCity){
  const city = 'NYC';
  return (isCity === city ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){

  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    case 'thanks for everything' :
      return 'Bye.'
    default:
  }

}
