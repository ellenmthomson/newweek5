//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//authored by Ellen Thomson with help From James Johnson


var churchillSpeech = {
      author:'Churchill',
      year: 1940,
      yearIsBCE: false,
      authorAge: '66'
    };

var ghandiSpeech = {
      author: 'Ghandi',
      year: 1942,
      yearIsBCE: false,
      authorAge: '73'
    };

var demosthenesSpeech = {
      author: 'Demosthenes',
      year: 342,
      yearIsBCE: true,
      authorAge: '42'
    };

// James' version without using switch
// var speeches = {
//   'Churchill': churchillSpeech,
//   'Ghandi': ghandiSpeech,
//   'Demosthenes': demosthenesSpeech,
// }

var speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];
    
document.getElementById('BtnDonate').addEventListener('click', function() {
  //Code in here executes when the user clicks the "Donate" button.

  var favoriteSpeech = window.prompt('Who is your favorite speech author?');
  console.log(favoriteSpeech);

// James' version without using switch
  // var favoriteSpeech = window.prompt('Who is your favorite speech author?');
  // var speech = speeches[favoriteSpeech];
  // console.log(speech.author + ' was ' + speech.authorAge + ' during this speech.');

//   if (favoriteSpeech === 'Churchill') {
//     console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
//   }

switch(favoriteSpeech) {
 		case 'Churchill':
   		console.log(speechesArray[0].author + ' was' + speechesArray[0].authorAge + ' during this speech.');
   		break;
 		case 'Ghandi':
   		console.log(speechesArray[1].author + ' was' + speechesArray[1].authorAge + ' during this speech.');
   		break;
		case 'Demosthenes':
   		console.log(speechesArray[2].author + ' was' + speechesArray[2].authorAge + ' during this speech.');
   		break;
 		default:
   		console.log('Please reenter your favorite author\'s name and check your spelling!');
   		break;
}
});
	


// //churchill button

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
	console.log ('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.');
  
  	if (speechesArray[0].yearIsBCE === true) {
  		console.log('This speech took place before the common era.');
  	} else {
  		console.log('This speech took place during the common era.');
  	}
   	if(speechesArray[0].year < speechesArray[1].year && speechesArray[1].year < speechesArray[2].year){
   		console.log('This is the oldest speech on the page.');
   
	} else if(speechesArray[0].year > speechesArray[1].year && speechesArray[1].year > speechesArray[2].year){
   		console.log('This is the most recent speech on the page.');
}
});



// //ghandi button

document.getElementById("BtnGhandi").addEventListener("click", function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  	console.log ('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.');

 if (speechesArray[1].yearIsBCE === true) {
  console.log('This speech took place before the common era.');
  } else {
  console.log('This speech took place during the common era.');
  }
  
  if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
   		console.log('This is the oldest speech on the page.');
   
	} else if (speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
   		console.log('This is the most recent speech on the page.'); 
  
}
});



//demosthenes button

document.getElementById("BtnDemosthenes").addEventListener("click", function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
	console.log ("This speech was written by " + speechesArray[2].author + " in " + speechesArray[2].year + ".");

 if (speechesArray[2].yearIsBCE === true){
  console.log('This speech took place before the common era.');
  } else {
  console.log('This speech took place during the common era.');
  }
  
  if(speechesArray[2].year < speechesArray[1].year && speechesArray[2].year < speechesArray[0].year){
   		console.log('This is the oldest speech on the page.');
   
	} else if (speechesArray[2].year > speechesArray[1].year && speechesArray[2].year > speechesArray[0].year){
   		console.log('This is the most recent speech on the page.');
}
});


document.addEventListener('DOMContentLoaded', function() {

var userName = window.prompt("Hi there, what is your name?");

	if (typeof userName === "string" && userName !== "") {
console.log("Hi " + userName + "!");
	} else {
     userName = "User";
     console.log ("Ok, I’ll just call you " + userName + ".");
   }
 });





