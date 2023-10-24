function openNav() {
  document.getElementById("mySidebar").style.width = "30%";
  document.getElementById("mainNav").style.marginLeft = "30%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mainNav").style.marginLeft = "0";
}

function whyClick() {
  Swal.fire({
    icon: 'warning',
    title: 'Instruction',
    html: `
    <div id="game-instructions">
  <p>
    This game is designed and developed to determine, find, and decide who's going to be the head or the champion among a group of people or set of players.
  </p>
  <p>
    To start playing the game, follow these steps:
  </p>
  <ol>
    <li>Press the 'Reset' button to refresh and reset the game to its default settings.</li>
    <li>Enter your name when prompted.</li>
    <li>Press the 'Start' button to begin the game countdown (60s).</li>
    <li>Press the 'Play' button to roll the dice.</li>
    <li>Continue pressing the 'Play' button and observe the results at the top of the screen.</li>
  </ol>
  <p>
    Note: After clicking the 'Numbers' button, press the 'Value' button, and then the 'Generate' button before clicking the 'Play' button again.
  </p>
  <p>
    Please be aware that once your time elapses, you won't be able to click the 'Play' button again until the next player starts.
  </p>
  <p>
    Enjoy playing the game and have fun!
  </p>
  <p>Cheers!</p>
</div>

    `,
  })
  
 
}

function changeName() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
}


function aboutUs() {
  Swal.fire({
    icon: 'info',
    title: 'About the Game',
    html: `
      <p>This game is designed and developed by Amole Adeolu.</p>
      <p>The game was developed in the year 2022 by Adex.</p>
      <p>If you want to assist and encourage us, you can reach us at <a href="mailto:adeoluamole@gmail.com">adeoluamole@gmail.com</a> or at <a href="tel:+2347033959586">+2347033959586</a>.</p>
    `,
  });
  
}

function closeMe() {
  window.opener = self;
  window.close();
}

let counter = 0;
let count = 0;
let startPlay = false
function startCount() {
  if (document.getElementById("counter-btn").innerHTML >= 60) {
    document.getElementById("start-btn").disabled = true;
    document.getElementById("goo").disabled = true;
  } else if (document.getElementById("counter-btn").innerHTML == 60) {
    document.getElementById("start-btn").disabled = true;
    document.getElementById("goo").disabled = true;
  }
  counter += 1;
  document.getElementById("screen-btn").innerHTML =
    Math.floor(Math.random() * 6) + 1;

    if (document.getElementById("screen-btn").innerHTML == 6) {
     startPlay = true;
    }

    if (startPlay) {
       
  if (document.getElementById("screen-btn").innerHTML == 6) {
    document.getElementById("value-btn6").innerHTML =
      document.getElementById("screen-btn").innerHTML;
    sumValue6();
    //alert("Number's button available");
    document.getElementById("screen-btn").style.color = "green";
    document.getElementById("screen-btn").style.fontSize = "50px";
    document.getElementById("value-btn1").disabled = true;
    document.getElementById("value-btn2").disabled = true;
    document.getElementById("value-btn3").disabled = true;
    document.getElementById("value-btn4").disabled = true;
    document.getElementById("value-btn5").disabled = true;
    document.getElementById("value-btn6").disabled = true;
    counter = 0;
  } else if (document.getElementById("screen-btn").innerHTML == 5) {
    document.getElementById("value-btn5").innerHTML =
      document.getElementById("screen-btn").innerHTML;
    sumValue5();
    document.getElementById("screen-btn").style.color = "red";
    document.getElementById("screen-btn").style.fontSize = "50px";
    document.getElementById("value-btn1").disabled = true;
    document.getElementById("value-btn2").disabled = true;
    document.getElementById("value-btn3").disabled = true;
    document.getElementById("value-btn4").disabled = true;
    document.getElementById("value-btn5").disabled = true;
    document.getElementById("value-btn6").disabled = true;
  } else if (document.getElementById("screen-btn").innerHTML == 4) {
    document.getElementById("value-btn4").innerHTML =
      document.getElementById("screen-btn").innerHTML;
    sumValue4();
    document.getElementById("screen-btn").style.color = "red";
    document.getElementById("screen-btn").style.fontSize = "50px";
    document.getElementById("value-btn1").disabled = true;
    document.getElementById("value-btn2").disabled = true;
    document.getElementById("value-btn3").disabled = true;
    document.getElementById("value-btn4").disabled = true;
    document.getElementById("value-btn5").disabled = true;
    document.getElementById("value-btn6").disabled = true;
  } else if (document.getElementById("screen-btn").innerHTML == 3) {
    document.getElementById("value-btn3").innerHTML =
      document.getElementById("screen-btn").innerHTML;
    sumValue3();
    document.getElementById("screen-btn").style.color = "red";
    document.getElementById("screen-btn").style.fontSize = "50px";
    document.getElementById("value-btn1").disabled = true;
    document.getElementById("value-btn2").disabled = true;
    document.getElementById("value-btn3").disabled = true;
    document.getElementById("value-btn4").disabled = true;
    document.getElementById("value-btn5").disabled = true;
    document.getElementById("value-btn6").disabled = true;
  } else if (document.getElementById("screen-btn").innerHTML == 2) {
    document.getElementById("value-btn2").innerHTML =
      document.getElementById("screen-btn").innerHTML;
    sumValue2();
    document.getElementById("screen-btn").style.color = "red";
    document.getElementById("screen-btn").style.fontSize = "50px";
    document.getElementById("value-btn1").disabled = true;
    document.getElementById("value-btn2").disabled = true;
    document.getElementById("value-btn3").disabled = true;
    document.getElementById("value-btn4").disabled = true;
    document.getElementById("value-btn5").disabled = true;
    document.getElementById("value-btn6").disabled = true;
  } else if (document.getElementById("screen-btn").innerHTML == 1) {
    document.getElementById("value-btn1").innerHTML =
      document.getElementById("screen-btn").innerHTML;
    sumValue1();
    document.getElementById("screen-btn").style.color = "red";
    document.getElementById("screen-btn").style.fontSize = "50px";
    document.getElementById("value-btn1").disabled = true;
    document.getElementById("value-btn2").disabled = true;
    document.getElementById("value-btn3").disabled = true;
    document.getElementById("value-btn4").disabled = true;
    document.getElementById("value-btn5").disabled = true;
    document.getElementById("value-btn6").disabled = true;
  }
    } else {
      ("Continue rolling the dies");
    }
   
}

setInterval(myDays);
function myDays() {
  const days = new Date();
  document.getElementById("time").innerHTML =
    days.toDateString() + " " + days.toLocaleTimeString();
}

function saveName() {
  let name = prompt("please enter your name", "Adex");
  if (name == null) {
    document.getElementById("save-name").style.visibility = "visible";
    document.getElementById("screen-btn").innerHTML =
      "Enter a name, you just cancel";
  } else if (name != "") {
    document.getElementById("save-name").style.visibility = "hidden";
    document.getElementById("save-name").innerHTML = name;
  } else {
    document.getElementById("save-name").style.visibility = "visible";
    document.getElementById("screen-btn").innerHTML = "Please enter your name";
  }
  //let short = 300;
  // document.getElementById("countdown").innerHTML = short;

  document.getElementById("countdown").innerHTML = 65;
  document.getElementById("goo").disabled = false;
  document.getElementById("start-btn").style.backgroundColor = "darkblue";
  document.getElementById("start-btn").style.borderBottomColor = "blue";
  document.getElementById("start-btn").innerHTML = "Play";
  document.getElementById("start-btn").style.color = "white";
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
}

function startGame() {
  let welcome = "Please wait, game is loading ";
  document.getElementById("time").style.visibility = "visible";
  document.getElementById("time").style.color = "darkblue";
  document.getElementById("screen-btn").innerHTML = welcome; //+ " " + document.getElementById("screen-btn").innerHTML + " please waite";
  document.getElementById("screen-btn").style.backgroundColor = "white";
  document.getElementById("screen-btn").style.color = "darkblue";
  //   document.getElementById("remin").style.visibility = "visible";
  document.getElementById("start-btn").disabled = true;
  let waitingTime = setInterval(function () {
    if ((document.getElementById("screen-btn").innerHTML = welcome)) {
      clearInterval(waitingTime);
      document.getElementById("screen-btn").innerHTML = "";
      //   document.getElementById("remin").style.visibility = "hidden";
    } else {
      //document.getElementById("screen-btn").innerHTML = " Hello";
    }
  }, 5000);
  let sound1 = new Audio("warning.wav");
  let shortit = 65;
  let timeleft = document.getElementById("countdown").innerHTML;
  document.getElementById("save-name").style.visibility = "visible";
  document.getElementById("save-name").style.color = "darkblue";
  document.getElementById("save-name").innerHTML =
    document.getElementById("save-name").innerHTML;
  let downloadTimer = setInterval(function () {
    if (timeleft <= 60) {
      document.getElementById("countdown").style.visibility = "visible";
      document.getElementById("remin").style.visibility = "visible";
      document.getElementById("countdown").style.color = "darkblue";
      document.getElementById("remin").style.color = "darkblue";
      document.getElementById("goo").disabled = true;
      document.getElementById("start-btn").disabled = false;
    }
    if (timeleft < 0) {
      clearInterval(downloadTimer);
      document.getElementById("start-btn").disabled = true;
      document.getElementById("goo").disabled = true;
      document.getElementById("start-btn").style.backgroundColor = "gray";
      document.getElementById("start-btn").style.borderBottomColor = "white";
      document.getElementById("start-btn").innerHTML = "Inactive";
      document.getElementById("start-btn").style.color = "black";
      document.getElementById("value-btn1").disabled = true;
      document.getElementById("value-btn2").disabled = true;
      document.getElementById("value-btn3").disabled = true;
      document.getElementById("value-btn4").disabled = true;
      document.getElementById("value-btn5").disabled = true;
      document.getElementById("value-btn6").disabled = true;
      document.getElementById("screen-btn").style.fontSize = "15px";
      document.getElementById("remin").style.visibility = "hidden";
      document.getElementById("countdown").style.visibility = "hidden";
      document.getElementById("countdown").innerHTML = shortit;
      document.getElementById("countdown").style.color = "white";
      document.getElementById("screen-btn").innerHTML =
        document.getElementById("save-name").innerHTML +
        " you've reach " +
        document.getElementById("counter-btn").innerHTML;
    } else if (timeleft < 15) {
      document.getElementById("countdown").style.color = "red";
      document.getElementById("countdown").innerHTML = timeleft;
      sound1.play();
    } else {
      document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

function sumValue1() {
  if (document.getElementById("value-btn1").innerText == 1) {
    document.getElementById("clickValue").innerHTML = 1;
    document.getElementById("value-btn1").style.backgroundColor = "orange";
    document.getElementById("value-btn2").style.backgroundColor = "pink";
    document.getElementById("value-btn3").style.backgroundColor = "pink";
    document.getElementById("value-btn4").style.backgroundColor = "pink";
    document.getElementById("value-btn5").style.backgroundColor = "pink";
    document.getElementById("value-btn6").style.backgroundColor = "pink";
  } else {
    document.getElementById("clickValue").innerHTML =
      "You've not click what you got";
  }
}

function sumValue2() {
  if (document.getElementById("value-btn2").innerText == 2) {
    document.getElementById("clickValue").innerHTML = 2;
    document.getElementById("value-btn2").style.backgroundColor = "orange";
    document.getElementById("value-btn1").style.backgroundColor = "pink";
    document.getElementById("value-btn3").style.backgroundColor = "pink";
    document.getElementById("value-btn4").style.backgroundColor = "pink";
    document.getElementById("value-btn5").style.backgroundColor = "pink";
    document.getElementById("value-btn6").style.backgroundColor = "pink";
  } else {
    document.getElementById("clickValue").innerHTML =
      "You've not click what you got";
  }
}

function sumValue3() {
  if (document.getElementById("value-btn3").innerText == 3) {
    document.getElementById("clickValue").innerHTML = 3;
    document.getElementById("value-btn3").style.backgroundColor = "orange";
    document.getElementById("value-btn1").style.backgroundColor = "pink";
    document.getElementById("value-btn2").style.backgroundColor = "pink";
    document.getElementById("value-btn4").style.backgroundColor = "pink";
    document.getElementById("value-btn5").style.backgroundColor = "pink";
    document.getElementById("value-btn6").style.backgroundColor = "pink";
  } else {
    document.getElementById("clickValue").innerHTML =
      "You've not click what you got";
  }
}

function sumValue4() {
  if (document.getElementById("value-btn4").innerText == 4) {
    document.getElementById("clickValue").innerHTML = 4;
    document.getElementById("value-btn4").style.backgroundColor = "orange";
    document.getElementById("value-btn1").style.backgroundColor = "pink";
    document.getElementById("value-btn2").style.backgroundColor = "pink";
    document.getElementById("value-btn3").style.backgroundColor = "pink";
    document.getElementById("value-btn5").style.backgroundColor = "pink";
    document.getElementById("value-btn6").style.backgroundColor = "pink";
  } else {
    document.getElementById("clickValue").innerHTML =
      "You've not click what you got";
  }
}

function sumValue5() {
  if (document.getElementById("value-btn5").innerText == 5) {
    document.getElementById("clickValue").innerHTML = 5;
    document.getElementById("value-btn5").style.backgroundColor = "orange";
    document.getElementById("value-btn1").style.backgroundColor = "pink";
    document.getElementById("value-btn2").style.backgroundColor = "pink";
    document.getElementById("value-btn3").style.backgroundColor = "pink";
    document.getElementById("value-btn4").style.backgroundColor = "pink";
    document.getElementById("value-btn6").style.backgroundColor = "pink";
  } else {
    document.getElementById("clickValue").innerHTML =
      "You've not click what you got";
  }
}

function sumValue6() {
  if (document.getElementById("value-btn6").innerText == 6) {
    document.getElementById("clickValue").innerHTML = 6;
    document.getElementById("value-btn6").style.backgroundColor = "orange";
    document.getElementById("value-btn1").style.backgroundColor = "pink";
    document.getElementById("value-btn2").style.backgroundColor = "pink";
    document.getElementById("value-btn3").style.backgroundColor = "pink";
    document.getElementById("value-btn4").style.backgroundColor = "pink";
    document.getElementById("value-btn5").style.backgroundColor = "pink";
  } else {
    document.getElementById("clickValue").innerHTML =
      "You've not click what you got";
  }
}

function pasteValue() {
  if (document.getElementById("counter-btn").innerHTML == 60) {
    document.getElementById("counter-btn").innerHTML = count;
  } else if (
    document.getElementById("counter-btn").innerHTML < 60 &&
    document.getElementById("clickValue").innerHTML > 0
  ) {
    document.getElementById("counter-btn").innerHTML =
      parseInt(document.getElementById("clickValue").innerHTML) +
      parseInt(document.getElementById("counter-btn").innerHTML);
    document.getElementById("clickValue").innerHTML = count;
    
  } else if (
    document.getElementById("counter-btn").innerHTML < 60 &&
    parseInt(document.getElementById("clickValue").innerHTML) +
      parseInt(document.getElementById("counter-btn").innerHTML) >
      60
  ) {
    document.getElementById("counter-btn").innerHTML = 60;
  }
}

function sumCount() {
  if (document.getElementById("counter-btn").innerHTML == 1) {
    document.getElementById("num1").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 2) {
    document.getElementById("num2").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 3) {
    document.getElementById("num3").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 4) {
    document.getElementById("num4").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 5) {
    document.getElementById("num5").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 6) {
    document.getElementById("num6").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 7) {
    document.getElementById("num7").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 8) {
    document.getElementById("num8").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 9) {
    document.getElementById("num9").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 10) {
    document.getElementById("num10").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 11) {
    document.getElementById("num11").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 12) {
    document.getElementById("num12").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 13) {
    document.getElementById("num13").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 14) {
    document.getElementById("num14").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 15) {
    document.getElementById("num15").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 16) {
    document.getElementById("num16").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 17) {
    document.getElementById("num17").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 18) {
    document.getElementById("num18").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 19) {
    document.getElementById("num19").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 20) {
    document.getElementById("num20").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 21) {
    document.getElementById("num21").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 22) {
    document.getElementById("num22").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 23) {
    document.getElementById("num23").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 24) {
    document.getElementById("num24").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 25) {
    document.getElementById("num25").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 26) {
    document.getElementById("num26").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 27) {
    document.getElementById("num27").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 28) {
    document.getElementById("num28").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 29) {
    document.getElementById("num29").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 30) {
    document.getElementById("num30").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 31) {
    document.getElementById("num31").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 32) {
    document.getElementById("num32").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 33) {
    document.getElementById("num33").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 34) {
    document.getElementById("num34").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 35) {
    document.getElementById("num35").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 36) {
    document.getElementById("num36").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 37) {
    document.getElementById("num37").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 38) {
    document.getElementById("num38").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 39) {
    document.getElementById("num39").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 40) {
    document.getElementById("num40").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 41) {
    document.getElementById("num41").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 42) {
    document.getElementById("num42").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 43) {
    document.getElementById("num43").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 44) {
    document.getElementById("num44").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 45) {
    document.getElementById("num45").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 46) {
    document.getElementById("num46").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 47) {
    document.getElementById("num47").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 48) {
    document.getElementById("num48").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 49) {
    document.getElementById("num49").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 50) {
    document.getElementById("num50").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 51) {
    document.getElementById("num51").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 52) {
    document.getElementById("num52").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 53) {
    document.getElementById("num53").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 54) {
    document.getElementById("num54").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 55) {
    document.getElementById("num55").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 56) {
    document.getElementById("num56").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 57) {
    document.getElementById("num57").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 58) {
    document.getElementById("num58").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 59) {
    document.getElementById("num59").style.backgroundColor = "orange";
  } else if (document.getElementById("counter-btn").innerHTML == 60) {
    document.getElementById("num60").style.backgroundColor = "orange";
  } else {
    document.getElementById("entry").style.backgroundColor = "cyan";
    document.getElementById("home").style.backgroundColor = "white";
  }
}
