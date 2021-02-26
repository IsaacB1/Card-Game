let Score1M = 0
let Score2M = 0

let Play1Win = 0
let Play2Win = 0


let cardDeckr = ["r1","r2","r3","r3","r4","r5","r6","r7","r8","r9","r10"] // this is the individual cards
let cardDeckb = ["b1","b2","b3","b3","b4","b5","b6","b7","b8","b9","b10"]
let cardDecky = ["y1","y2","y3","y3","y4","y5","y6","y7","y8","y9","y10"]

let cardDeckM = [] // master array

function buildDeck(){

  cardDeckM = cardDeckb.concat(cardDeckr)
  cardDeckM = cardDeckM.concat(cardDecky)

}

function shuffleDeck(){ // shuffles deck
  for (let i = cardDeckM.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardDeckM[i], cardDeckM[j]] = [cardDeckM[j], cardDeckM[i]];
  }

}
 // These are the two players cards
let Play1 = []
let Play2 = []
let Play1s = []
let Play2s = []
let Play1n = []
let Play2n = []

let Score1 = 0
let Score2 = 0

function play(){

  for(let j = 0; j < 15; j ++){
    Play1[j] = cardDeckM[j]
  }
  console.log("This is Play1's card " + Play1)

  for(let k = 15 ; k < 30 ; k++ ){
    Play2[(k - 15)] = cardDeckM[k]
  }
    console.log("This is Play2's card " + Play2)

  for(let l = 0; l < 15; l ++){
     Play1s[l] = Play1[l].slice(0,1)
  }
  for(let z = 0; z < 15; z ++){
     Play2s[z] = Play2[z].slice(0,1)
  }
  for(let q = 0; q < 15; q ++){
     Play1n[q] = Play1[q].slice(1,2)
  }
  for(let w = 0; w < 15; w ++){
     Play2n[w] = Play2[w].slice(1,2)
  }
  console.log(Play1s)
  console.log(Play2s)
  for(let g= 0; g < 14; g++){
      //let Play1s = String(Play1[g].slice(0,1))
      //let Play2s = String(Play2[g].slice(0,1))
      //Play1s = String(Play1s)
      //Play2s = String(Play2s)
      if(Play1s[g] == Play2s[g]){ //seperates the colour form the number and sees if colours the same
        console.log("The same colour")
        if(Play1n > Play2n){ //seperates the number and seems which is greater
          console.log("Player one wins one point")
          Play1.push(Play2[g])
          Score1 = Score1 + 1
          console.log("Player1 > " + Score1 + "" + " || " + "" + "Player2 > " + Score2)

        }else if(Play1n < Play2n){
          console.log("Player two wins one point")
            Play1.push(Play2[g])
          Score2 = Score2 + 1
          console.log("Player1 > " + Score1 + "" + " || " + "" + "Player2 > "  + Score2)
        }else if(Play1n == Play2n){
          console.log("Values are the same no one wins")
        }

       }else{
        console.log("Not the same, comparing colours")
        if((Play1s[g] == "r") && (Play2s[g] == "b")){ // compares the colours
          console.log("Player one wins red beats black ")
            Play1.push(Play2[g])
          Score1 = Score1 + 1
          console.log("Player1 > " + Score1 + "" + "||" + "" + "Player2 > " + Score2)// need to do comparison for all the other colours

        }else if((Play1s[g]== 'y') && (Play2s[g] == 'r')){ // compares the colours
          console.log("Player one wins yellow beats red")
            Play1.push(Play2[g])
          Score1 = Score1 + 1
          console.log("Player1 > " + Score1 + "" + "||" + "" + "Player2 > " + Score2)

        }else if((Play1s[g]== 'b') && (Play2s[g] == 'y')){ // compares the colours
          console.log("Player one wins black beats yellow")
            Play1.push(Play2[g])
          Score1 = Score1 + 1
          console.log("Player1 > " + Score1 + "" + "||" + "" + "Player2 > " + Score2)

        }else if((Play2s[g]== 'r') && (Play1s[g] == 'b')){ // compares the colours
          console.log("Player two wins Red beats black")
            Play2.push(Play1[g])
          Score2 = Score2 + 1
          console.log("Player1 > " + Score1 + "" + "||" + "" + "Player2 > " + Score2)

        }else if((Play2s[g]== 'y') && (Play1s[g] == 'r')){ // compares the colours
          console.log("Player two wins yellow beats red")
          Play2.push(Play1[g])
          Score2 = Score2 + 1
          console.log("Player1 > " + Score1 + "" + "||" + "" + "Player2 > " + Score2)

        }else if((Play2s[g]== 'b') && (Play1s[g] == 'y')){ // compares the colours
          console.log("Player two wins black beats yellow")
          Play2.push(Play1[g])
          Score2 = Score2 + 1
          console.log("Player1 > " + Score1 + "" + "||" + "" + "Player2 > " + Score2)
        }
      }
    }
    if (Score1 > Score2){
      Play1Win = Play1Win + 1
      Score1M = Score1M + 1
    }else if (Score2 > Score1){
      Play2Win = Play2Win + 1
      Score2M = Score2M + 1
    }else{
    }

}


 function master(){
  console.log("Instructions: \n Each Player will take a card \n If both players have the same colour the player with the highest number wins \n If different colours Red beats Black, Yellow Beats Red, Black beats yellow")
  console.log("Shuffling Deck")
  buildDeck();
  shuffleDeck()
  play()
}
function master2(){
  for(let i = 0; i < 10; i++){
    master()
  }
  document.write ("Player 1 - " + Score1M + " Player 2 - " + Score2M)
  if(Score1M > Score2M){
    document.write(" Player 1 wins")
  }else if (Score1M < Score2M){
    document.write(" Player 2 wins")
  }else{
    document.write(" Draw")
  }
}
master2()

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

let filename = "scores.txt"
let filetext = "Player1 - " + Play1Win + "\nPlayer2 - " + Play2Win
