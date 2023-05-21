
//TODO:  This is to show the Menu Icons

function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// TODO: DARK MODE / LIGHT MODE

function dark(){
  var d = document.getElementById("darkM");
  var tt = document.getElementById("tts");
  var bsx = document.getElementById("bsx");
  var pp2 =  document.getElementById("pp2");
  var b = document.body;
  var nv = document.getElementById("nav");
  var edu = document.getElementById("edu");
  var pro = document.getElementById("pro");
  var ser_1 = document.getElementById("srv_1");
  var ser_2 = document.getElementById("srv_2");
  var ser_3 = document.getElementById("srv_3");
  var ser_4 = document.getElementById("srv_4");
  var ser_5 = document.getElementById("srv_5");
  var ser_6 = document.getElementById("srv_6");
  b.classList.toggle("dark-mode");

  ser_1.style.background = ser_1.style.background === 'whitesmoke' ? '' : 'whitesmoke';
  ser_2.style.background = ser_2.style.background === 'whitesmoke' ? '' : 'whitesmoke';
  ser_3.style.background = ser_3.style.background === 'whitesmoke' ? '' : 'whitesmoke';
  ser_4.style.background = ser_4.style.background === 'whitesmoke' ? '' : 'whitesmoke';
  ser_5.style.background = ser_5.style.background === 'whitesmoke' ? '' : 'whitesmoke';
  ser_6.style.background = ser_6.style.background === 'whitesmoke' ? '' : 'whitesmoke';
  edu.style.color = edu.style.color === 'lightgrey' ? '' : 'lightgrey';
  pro.style.color = pro.style.color === 'lightgrey' ? '' : 'lightgrey';
  pp2.style.color = pp2.style.color === 'white' ? '' : 'white';
  d.style.backgroundColor = d.style.backgroundColor === 'whitesmoke' ? '' : 'whitesmoke';
  nv.style.backgroundColor = nv.style.backgroundColor === 'indigo' ? '' : 'indigo';
  d.style.color = d.style.color === 'black' ? '' : 'black';
  tt.style.boxShadow = tt.style.boxShadow === 'none' ? '' : 'none';
  bsx.style.boxShadow = bsx.style.boxShadow === 'none' ? '' : 'none';
  }
  var sers = document.getElementById("ser_1");
   sers.addEventListener("mouseeenter", dark());

// TODO:
