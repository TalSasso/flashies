// JavaScript source code

//let time;
//time[2] secpnds
//time[1] secpnds
//time[0] secpnds
// let countdownInterval;
// let tableObject;
// let timerObject;

let cardsArray;


let currArrayOfSides;

let sideIndex;
let NumberOfSides;

window.addEventListener("load", () => {
    console.log("connected");
    console.log(data)
    cardsArray=data.cardsArray;

    generatenewCard();
    document.getElementById("card").addEventListener("click", flip);
    document.getElementById("genBtn").addEventListener("click", generatenewCard);

    // document.addEventListener("keydown" , startCountDown);
    // timerObject = document.getElementById("timer");
    // tableObject = document.getElementById("results-table");
    // console.log(timerObject.innerText);
});

generatenewCard=()=>{
    let random =Math.random();
    //console.log("random:"+random)
    let newIndex =  Math.floor(random*(cardsArray.length));
    // console.log(newIndex);
    setVariablesForNewCard(newIndex);
    for(let i=0;i<NumberOfSides;i++){
        // console.log(cardsArray[newIndex][i]);
        currArrayOfSides[i].innerHTML = cardsArray[newIndex][i];
    }
}

setVariablesForNewCard=(newCardIndex)=>{
    sideIndex=1;
    // console.log(newCardIndex);
    // console.log(cardsArray[newCardIndex]);
    // console.log(cardsArray[newCardIndex].length);

    NumberOfSides= cardsArray[newCardIndex].length;
    currArrayOfSides=[];

    for(let i=0;i<NumberOfSides;i++){
        // console.log("i:"+i);
        // console.log(`side${i+1}`);  
        // console.log( document.getElementById(`side${i+1}`));  
        currArrayOfSides[i]= document.getElementById(`side${i+1}`);
        currArrayOfSides[i].classList.remove("visible");
    }
    currArrayOfSides[sideIndex-1].classList.add("visible");
}

flip = () => {
    currArrayOfSides[sideIndex-1].classList.remove("visible");
    sideIndex =(sideIndex+1)%currArrayOfSides.length;
    if(sideIndex==0){sideIndex = currArrayOfSides.length;}
    console.log(sideIndex)
    currArrayOfSides[sideIndex-1].classList.add("visible");

}


startCountDown = () => {
    document.removeEventListener("keydown" , startCountDown);
    document.addEventListener("keydown" , stopCounting);
    time =  [0,0,0 ,0];
    timerObject.innerHTML = "0:0:0";
    countdownInterval = setInterval( countDown , 10);

}

countDown =()=> {
    time[3]++;
    if(time[3]==100) {
        time[3]=0;
        time[2]++;
    } 
    if(time[2]==60) {
        time[2]=0;
        time[1]++;
    } 
    if(time[1]==60) {
        time[2]=0;
        time[1]=0;
        time[0]++;
    }
    timerObject.innerHTML = twoDigitFormat(time[0]) +":" + twoDigitFormat(time[1]) +":"+ twoDigitFormat(time[2])+":"+ twoDigitFormat(time[3]);
}

twoDigitFormat = (num) => {
    if(num<10) {
        return "0"+num;
    } else {
        return num;
    }
}

stopCounting =() => {
    document.removeEventListener("keydown" , stopCounting);
    clearInterval(countdownInterval);
    document.addEventListener("keydown" , startCountDown);
    addtoList(time);
}

addtoList = (array) => {
    tableObject.innerHTML+="<tr><td>"+twoDigitFormat(time[0]) +":" + twoDigitFormat(time[1]) +":"+ twoDigitFormat(time[2])+":"+ twoDigitFormat(time[3])+"<tr><td>";

}