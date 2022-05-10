let counter = 0;
let count = 0;
function startCount() {
    counter+= 1;
    document.getElementById("screen-btn").innerHTML = Math.floor(Math.random() * 6) + 1;
    if (document.getElementById("screen-btn").innerHTML >= 6 ){
        alert(" You've successfully found 6 after   seconds");
        document.getElementById("screen-btn").style.color = "green";
        document.getElementById("screen-btn").style.fontSize = "50px";
          counter = 0;
    } else if (document.getElementById("screen-btn").innerHTML <= 6) {
        document.getElementById("screen-btn").style.color = "red";
        document.getElementById("screen-btn").style.fontSize = "50px";
    }
    else {
        "Continue rolling the dies"
    }
};

setInterval(myDays);
function myDays() {
  const days = new Date();
  document.getElementById("time").innerHTML = days.toDateString() + " " + days.toLocaleTimeString();
};

function saveName() {
    let short = 30;
    document.getElementById("countdown").innerHTML = short;
    document.getElementById("start-btn").disabled = false;
    document.getElementById("start-btn").style.backgroundColor = "darkblue";
    document.getElementById("start-btn").style.borderBottomColor = "blue";
    document.getElementById("start-btn").innerHTML = "Play";
    document.getElementById("start-btn").style.color = "white";
    document.getElementById("value-btn").disabled = false;
    document.getElementById("value-btn2").disabled = false;
    document.getElementById("value-btn3").disabled = false;
    document.getElementById("value-btn4").disabled = false;
    document.getElementById("value-btn5").disabled = false;
    document.getElementById("value-btn6").disabled = false;
    document.getElementById("counter-btn").innerHTML = 0;
    document.getElementById("num1").style.backgroundColor = "brown";
    document.getElementById("num2").style.backgroundColor = "brown";
    document.getElementById("num3").style.backgroundColor = "brown";
    document.getElementById("num4").style.backgroundColor = "brown";
    document.getElementById("num5").style.backgroundColor = "brown";
    document.getElementById("num6").style.backgroundColor = "brown";
    document.getElementById("num7").style.backgroundColor = "brown";
    document.getElementById("num8").style.backgroundColor = "gray";
    document.getElementById("num9").style.backgroundColor = "gray";
    document.getElementById("num10").style.backgroundColor = "gray";
    document.getElementById("num11").style.backgroundColor = "gray";
    document.getElementById("num12").style.backgroundColor = "paleturquoise";
    document.getElementById("num13").style.backgroundColor = "paleturquoise";
    document.getElementById("num14").style.backgroundColor = "paleturquoise";
    document.getElementById("num15").style.backgroundColor = "paleturquoise";
    document.getElementById("num16").style.backgroundColor = "paleturquoise";
    document.getElementById("num17").style.backgroundColor = "paleturquoise";
    document.getElementById("num18").style.backgroundColor = "paleturquoise";
    document.getElementById("num19").style.backgroundColor = "deeppink";
    document.getElementById("num20").style.backgroundColor = "deeppink";
    document.getElementById("num21").style.backgroundColor = "deeppink";
    document.getElementById("num22").style.backgroundColor = "deeppink";
    document.getElementById("num23").style.backgroundColor = "deeppink";
    document.getElementById("num24").style.backgroundColor = "black";
    document.getElementById("num25").style.backgroundColor = "black";
    document.getElementById("num26").style.backgroundColor = "black";
    document.getElementById("num27").style.backgroundColor = "black";
    document.getElementById("num28").style.backgroundColor = "black";
    document.getElementById("num29").style.backgroundColor = "black";
    document.getElementById("num30").style.backgroundColor = "steelblue";
    document.getElementById("num31").style.backgroundColor = "steelblue";
    document.getElementById("num32").style.backgroundColor = "greenyellow";
    document.getElementById("num33").style.backgroundColor = "greenyellow";
    document.getElementById("num34").style.backgroundColor = "whitesmoke";
    document.getElementById("num35").style.backgroundColor = "whitesmoke";
    document.getElementById("entry").style.backgroundColor = "black";
    document.getElementById("home").style.backgroundColor = "yellow";
    let name = prompt("please enter your name", "Adex");
        if (name == null) {
        document.getElementById("save-name").style.visibility = "visible";
        document.getElementById("screen-btn").innerHTML = "Enter a name, you just cancel";
    }else if (name != "") {
        document.getElementById("save-name").style.visibility = "hidden";
        document.getElementById("save-name").innerHTML = name;
    }else{
        document.getElementById("save-name").style.visibility = "visible"
        document.getElementById("screen-btn").innerHTML = "Please enter your name";
    }
};


function btn() {
    let shortit = 30;
    let timeleft = document.getElementById("countdown").innerHTML;
    document.getElementById("countdown").style.display = "block";
     document.getElementById("save-name").style.visibility = "visible"
    document.getElementById("save-name").innerHTML = document.getElementById("save-name").innerHTML;
    let downloadTimer = setInterval(function(){
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("start-btn").disabled = true;
        document.getElementById("start-btn").style.backgroundColor = "gray";
        document.getElementById("start-btn").style.borderBottomColor = "white";
        document.getElementById("start-btn").innerHTML = "Inactive";
        document.getElementById("start-btn").style.color = "black";
        document.getElementById("value-btn").disabled = true;
        document.getElementById("value-btn2").disabled = true;
        document.getElementById("value-btn3").disabled = true;
        document.getElementById("value-btn4").disabled = true;
        document.getElementById("value-btn5").disabled = true;
        document.getElementById("value-btn6").disabled = true;
        //document.getElementById("value-btn5").style.backgroundColor = "gray";
        //document.getElementById("value-btn6").style.backgroundColor = "gray";
        //document.getElementById("screen-btn").innerHTML = "Your time Expired";
        document.getElementById("screen-btn").style.fontSize = "15px";
        document.getElementById("remin").style.display = "none";
        document.getElementById("countdown").innerHTML = shortit;
        document.getElementById("countdown").style.color = "white";
        document.getElementById("screen-btn").innerHTML =  document.getElementById("save-name").innerHTML + " you've reach " + document.getElementById("counter-btn").innerHTML;
  } else if (timeleft < 10) {
        document.getElementById("countdown").style.color = "red";
        document.getElementById("countdown").innerHTML = timeleft /* + " seconds remaining"*/;
        document.getElementById("remin").style.display = "block";
  } else {
        document.getElementById("countdown").innerHTML = timeleft /* + " seconds remaining"*/;
        document.getElementById("remin").style.display = "block";
  }
  timeleft -= 1;
}, 1000);
}

/*function startCount2() {
        document.getElementById("start-btn").innerHTML = "Continue"
        document.getElementById("start-btn2").innerHTML = ""
    
};

function startCount3() {
    document.getElementById("start-btn").innerHTML = "Play"
    document.getElementById("start-btn2").innerHTML = "You've stop clicking"
};*/




function sumValue() {
     if (document.getElementById("value-btn").innerText == 1)  {
           document.getElementById("clickValue").innerHTML =  1
      }
      else{
          document.getElementById("clickValue").innerHTML = "You've not click what you got"
      }
    
}


function sumValue2() {
     if (document.getElementById("value-btn2").innerText == 2)  {
           document.getElementById("clickValue").innerHTML =  2
      }
      else{
          document.getElementById("clickValue").innerHTML = "You've not click what you got"
      }
    
}

function sumValue3() {
     if (document.getElementById("value-btn3").innerText == 3)  {
           document.getElementById("clickValue").innerHTML =  3
      }
      else{
          document.getElementById("clickValue").innerHTML = "You've not click what you got"
      }
    
}

function sumValue4() {
     if (document.getElementById("value-btn4").innerText == 4)  {
           document.getElementById("clickValue").innerHTML =  4
      }
      else{
          document.getElementById("clickValue").innerHTML = "You've not click what you got"
      }
    
}

function sumValue5() {
     if (document.getElementById("value-btn5").innerText == 5)  {
           document.getElementById("clickValue").innerHTML =  5
      }
      else{
          document.getElementById("clickValue").innerHTML = "You've not click what you got"
      }
    
}

function sumValue6() {
     if (document.getElementById("value-btn6").innerText == 6)  {
           document.getElementById("clickValue").innerHTML =  6
      }
      else{
          document.getElementById("clickValue").innerHTML = "You've not click what you got"
      }
    
}




function pasteValue() {
     document.getElementById("counter-btn").innerHTML = parseInt(document.getElementById("clickValue").innerHTML) + parseInt(document.getElementById("counter-btn").innerHTML)
     document.getElementById("clickValue").innerHTML = count;
}

function sumCount() {
    if (document.getElementById("counter-btn").innerHTML == 1) {
        document.getElementById("num1").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 2) {
        document.getElementById("num2").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 3) {
        document.getElementById("num3").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 4) {
        document.getElementById("num4").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 5) {
        document.getElementById("num5").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 6) {
        document.getElementById("num6").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 7) {
        document.getElementById("num7").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 8) {
        document.getElementById("num8").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 9) {
        document.getElementById("num9").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 10) {
        document.getElementById("num10").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 11) {
        document.getElementById("num11").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 12) {
        document.getElementById("num12").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 13) {
        document.getElementById("num13").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 14) {
        document.getElementById("num14").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 15) {
        document.getElementById("num15").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 16) {
        document.getElementById("num16").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 17) {
        document.getElementById("num17").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 18) {
        document.getElementById("num18").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 19) {
        document.getElementById("num19").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 20) {
        document.getElementById("num20").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 21) {
        document.getElementById("num21").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 22) {
        document.getElementById("num22").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 23) {
        document.getElementById("num23").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 24) {
        document.getElementById("num24").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 25) {
        document.getElementById("num25").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 26) {
        document.getElementById("num26").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 27) {
        document.getElementById("num27").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 28) {
        document.getElementById("num28").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 29) {
        document.getElementById("num29").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 30) {
        document.getElementById("num30").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 31) {
        document.getElementById("num31").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 32) {
        document.getElementById("num32").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 33) {
        document.getElementById("num33").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 34) {
        document.getElementById("num34").style.backgroundColor = "orange";
    }
    else if (document.getElementById("counter-btn").innerHTML == 35) {
        document.getElementById("num35").style.backgroundColor = "orange";
    }
    else{
        document.getElementById("entry").style.backgroundColor = "cyan";
        document.getElementById("home").style.backgroundColor = "white"
        let image = document.createElement("img");
        image.src = "comment.jpg";
        let div = document.getElementById("home");
        div.appendChild(image);
        
    }
}