var song6 ="audio/mixkit-church-light-applause-501.wav"
var lastToPlay = new Audio (song6)

var song2 ="audio/You-are-a-Mumu-Man.mp3" 
var audioToPlay = new Audio (song2)

var song4 ="audio/wowowowowowowow-103214.mp3"
var youToPlay = new Audio (song4)

function FIZZBUZZ() {
    if(num.value !="" ) {
     if (num.value == 15 || num.value == 30 || num.value == 45 || num.value == 60 || num.value == 75 || num.value == 90 || num.value == 105 || num.value == 120 || num.value == 135 ||num.value == 150 ||num.value == 165 ||num.value == 180 ||num.value == 195 ||num.value == 210 ||num.value == 225 ||num.value == 240 ||num.value == 255 ||num.value == 270 ||num.value == 285 ||num.value == 300 ||num.value == 315 ||num.value == 330 ||num.value == 345 ||num.value == 360 ||num.value == 375 ||num.value == 390 ||num.value == 405 ||num.value == 400){
     console.log("FIZZBUZZ✔✔");
     show.innerHTML ="FIZZBUZZ✔✔" 
     lastToPlay.play()
    } else if(num.value == 5 || num.value == 10 || num.value == 15 || num.value == 20 || num.value == 25 || num.value == 30 || num.value == 35 || num.value == 40 || num.value == 45 ||num.value == 50 ||num.value == 55 ||num.value == 60 ||num.value == 65 ||num.value == 70 ||num.value == 75 ||num.value == 80 ||num.value == 85 ||num.value == 90 ||num.value == 95 ||num.value == 100 ||num.value == 105 ||num.value == 110 ||num.value == 115 ||num.value == 120 ||num.value == 125 ||num.value == 130 ||num.value == 135 ||num.value == 140)
    {
     console.log("Buzz✔✔"); 
     show.innerHTML= "Buzz✔✔ "
     lastToPlay.play()
   }
   else if(num.value == 3 ||num.value ==  6 || num.value ==  9 || num.value ==  12 ||num.value ==  15|| num.value == 18 ||num.value == 21 ||num.value == 24 ||num.value == 27 ||num.value == 30 ||num.value == 33 ||num.value == 36 ||num.value == 39 ||num.value == 42 ||num.value == 48 ||num.value == 51 ||num.value == 54 ||num.value == 57 ||num.value == 60 ||num.value == 63 ||num.value == 66 ||num.value == 69 ||num.value == 72 ||num.value == 75 ||num.value == 78 ||num.value == 81 ||num.value == 84 ||num.value == 87 ||num.value == 90 ||num.value == 93 ||num.value == 96 ||num.value == 99 ||num.value == 102 ||num.value == 105 ||num.value == 108 ||num.value == 111)
   {
    console.log("Fizz✔✔"); 
    show.innerHTML= "Fizz✔✔"
    lastToPlay.play()
  }   else if(num.value == 15 || num.value == 30 || num.value == 45 || num.value == 60 || num.value == 75 || num.value == 90 || num.value == 105 || num.value == 120 || num.value == 135 ||num.value == 150 ||num.value == 165 ||num.value == 180 ||num.value == 195 ||num.value == 210 ||num.value == 225 ||num.value == 240 ||num.value == 255 ||num.value == 270 ||num.value == 285 ||num.value == 300 ||num.value == 315 ||num.value == 330 ||num.value == 345 ||num.value == 360 ||num.value == 375 ||num.value == 390 ||num.value == 405 ||num.value == 400 || num.value == 5 || num.value == 10 || num.value == 15 || num.value == 20 || num.value == 25 || num.value == 30 || num.value == 35 || num.value == 40 || num.value == 45 ||num.value == 50 ||num.value == 55 ||num.value == 60 ||num.value == 65 ||num.value == 70 ||num.value == 75 ||num.value == 80 ||num.value == 85 ||num.value == 90 ||num.value == 95 ||num.value == 100 ||num.value == 105 ||num.value == 110 ||num.value == 115 ||num.value == 120 ||num.value == 125 ||num.value == 130 ||num.value == 135 ||num.value == 140 || num.value == 3 ||num.value ==  6 || num.value ==  9 || num.value ==  12 ||num.value ==  15|| num.value == 18 ||num.value == 21 ||num.value == 24 ||num.value == 27 ||num.value == 30 ||num.value == 33 ||num.value == 36 ||num.value == 39 ||num.value == 42 ||num.value == 48 ||num.value == 51 ||num.value == 54 ||num.value == 57 ||num.value == 60 ||num.value == 63 ||num.value == 66 ||num.value == 69 ||num.value == 72 ||num.value == 75 ||num.value == 78 ||num.value == 81 ||num.value == 84 ||num.value == 87 ||num.value == 90 ||num.value == 93 ||num.value == 96 ||num.value == 99 ||num.value == 102 ||num.value == 105 ||num.value == 108 ||num.value == 111 == false)
  
  {
    
   console.log("you are a fool"); 
   show.innerHTML= "mumu😂😂"
   err.innerHTML= "you think you can disturb me abi"
   audioToPlay.play()
 }
   }
   }