let Player1= prompt("Enter a choice from s,w ,g")



let input= Math.floor(Math.random() * 3)+1;
console.log(input)
let Player2= ["s", "w", "g"][input]
console.log(Player2);

function match(Player1, Player2){
  
  if(Player1==Player2){
    return "It's a tie"
  }
  else if(Player2=== "s" && Player1==="w"){
    return "Player2 wins"
  }
  
   else if(Player2=== "s" && Player1==="g"){
    return "Player1 wins"
  }
  
   else if(Player2=== "w" && Player1==="s"){
    return "Player1 wins"
  }
  
   else if(Player2=== "w" && Player1==="g"){
    return "Player2 wins"
  }
  
   else if(Player2=== "g" && Player1==="w"){
    return "Player1 wins"
  }
  
   else if(Player2=== "g" && Player1==="s"){
    return "Player2 wins"
  }
  
}

console.log(match(Player1, Player2));
document.write(match(Player1, Player2));