$(document).ready(function() {
//COUNTER STARTS NY DATO NEW DATE START TELLER keywords
let dager = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
let maaneder = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];

  let today = new Date();
  let now1 = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());

//QUIZ
  let date1 = new Date("Aug 22, 2019 18:00:00");
  let date2 = new Date("Sep 05, 2019 18:00:00");
  let date3 = new Date("Sep 19, 2019 18:00:00");
  let date4 = new Date("Oct 03, 2019 18:00:00");
  let date5 = new Date("Oct 17, 2019 18:00:00");
  let date6 = new Date("Oct 31, 2019 18:00:00");
  let date7 = new Date("Nov 14, 2019 18:00:00");
  let quizTab = [date1, date2, date3, date4, date5, date6, date7];
  let passertequizer = 0;

  //DEFAULT TIL QUIZ
let nextQuizDate = date1;
  for(let i = 0; i<quizTab.length;i++){
    if(quizTab[i].getTime() <= now1.getTime()){
      nextQuizDate = quizTab[i+1];
      passertequizer++;
        console.log(i);
      }
  }
    let countDownDate = nextQuizDate;
//JAM
let jamdate1 = new Date("Aug 25, 2019 18:00:00");
let jamdate2 = new Date("Sep 19, 2019 18:00:00");
let jamdate3 = new Date("Sep 19, 2019 18:00:00");
let jamdate4 = new Date("Oct 03, 2019 18:00:00");
let jamdate5 = new Date("Oct 17, 2019 18:00:00");
let jamdate6 = new Date("Oct 31, 2019 18:00:00");
let jamdate7 = new Date("Nov 14, 2019 18:00:00");
let jamTab = [jamdate1, jamdate2, jamdate3, jamdate4, jamdate5, jamdate6, jamdate7];
let passertejam = 0;
let nextJamDate = jamdate1;
for(let i = 0; i<jamTab.length;i++){
  if(jamTab[i].getTime() <= now1.getTime()){
    nextJamDate = jamTab[i+1];
    passertejam++;
    }
}

//Spillkveld
let spilldate1 = new Date("Aug 27, 2019 18:00:00");
let spilldate2 = new Date("Sep 27, 2019 18:00:00");
let spilldate3 = new Date("Oct 24, 2019 18:00:00");

let spillTab = [spilldate1, spilldate2, spilldate3];
let passertespill = 0;
let nextspilldate = spilldate1;
for(let i = 0; i<spillTab.length;i++){
  if(spillTab[i].getTime() <= now1.getTime()){
    nextspilldate = spillTab[i+1];
    passertespill++;
    }
}

/*
  var leggTil = document.createDocumentFragment();

  for(var i=passertequizer; i < quizTab.length; i++){
    console.log(i)
     var newOption = document.createElement('option');
     newOption.id = 'option'+i;
     newOption.className = 'poption';
     newOption.value = quizTab[i];
     newOption.innerHTML = quizTab[i];
     leggTil.appendChild(newOption);
   }
  document.getElementById('datovelger').appendChild(leggTil);
	// Set the date we're counting down to
  //Tags: NY DATO, Sett ny dato, new date, countdown, quiz dag;
*/
		// Update the count down every 1 second
		var x = setInterval(function() {
      $( ".datovelger" ).change(function() {

      if(this.value === "quiz"){
        countDownDate = nextQuizDate;
        }
        if(this.value === "jam"){
          countDownDate = nextJamDate;
          }
          if(this.value === "spillkveld"){
            countDownDate = nextspilldate;
            }
      });
		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in an element with id="demo"
		// document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
		// + minutes + "Minutes " + seconds + "Seconds ";

		// Display the result in an element with id="demo"
		document.getElementById("days").innerHTML = days +" <small>days</small>";
		document.getElementById("hours").innerHTML = hours + " <small>hours</small> ";
		document.getElementById("minutes").innerHTML = minutes + " <small>minutes</small> ";
		document.getElementById("seconds").innerHTML = seconds + " <small>seconds</small> ";


    document.getElementById("datePlacer").innerHTML = dager[countDownDate.getDay()] + " " + countDownDate.getDate()+ ". " + maaneder[countDownDate.getMonth()];

		// If the count down is finished, write some text
		}, 1000);
});
