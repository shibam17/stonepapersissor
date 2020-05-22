

const checkOutput = (wordGiven) =>{
  let value = randomOutput()
  if (value === wordGiven){
    console.log(`match draw, mine was ${value}.`)
  }
  else if ( value ==='Scissors' && wordGiven === 'Stone') {
    console.log(`you win, mine was ${value}.`)
  }
  else if( value === 'Stone' && wordGiven === 'Paper'){
    console.log(`you win, mine was ${value}`)
  }
  else if( value === 'Paper' && wordGiven === 'Scissors'){
    console.log(`you win, mine was ${value}`)
  }
  else{
    console.log(`I win, mine was ${value}`)
  }
  
}




const randomOutput = () => {
  let random = Math.random();
  if (random < 0.3) {
    return "Scissors";
  } else if (random >= 0.3 && random < 0.6) {
    return "Paper";
  } else {
    return "Stone";
  }
};

console.log(checkOutput(/*your words*/))


