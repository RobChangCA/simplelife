$(function(){
//Build a variable to collect additional time
var time = 0;
var recentValue = 0;
var snd = new Audio("assets/talk.mp3");
var aah = new Audio("assets/aah.mp3");
var ooh = new Audio("assets/ooh.mp3");
//typeOfParty 
// add 20 minutes for fancy. 
	$('form').on('submit', function(e){
		time = 0;
		e.preventDefault();
		var typeOfParty = $('input[name="clothing"]:checked').val();
		var timeToDest = $('select option:selected').val();
		var clean = $('input[name="cleanBody"]:checked').val();
		var makeup = $('input[name="makeup"]').val();
		var procrastinate = $('input[name="procrastinate"]:checked').val();
		var arrival = $('input[name="arrival"]:checked').val();
		typeOfParty = parseInt(typeOfParty)
		timeToDest = parseInt(timeToDest);
		clean = parseInt(clean);
		makeup = parseInt(makeup);
		procrastinate = parseInt(procrastinate);
		arrival = parseInt(arrival);

	    var sel = $('input[type=checkbox]:checked').map(function(_, el) {
	        return $(el).val();
	    });
	    sel.get().forEach(function(option) {
	    	time = time + parseInt(option);
	    });

		time = time + typeOfParty + timeToDest + clean + makeup + procrastinate; 

		$('.departureTime').html('<h2 class="choice">' + "You need to get ready "+ time + " minutes in advance!" + '</h2>');
		var arrival = document.querySelector(".choice");
			arrival.style.backgroundColor = 'rgba(225,225,225,.9)';
			arrival.style.padding = '50px';
			arrival.style.width = '40%';
			arrival.style.fontFamily = '"Dancing Script", cursive';
			arrival.style.color = 'hotpink';
			arrival.style.fontSize = '3.5vw';
			arrival.style.fontWeight = 'bold';
			arrival.style.borderRadius = '50%';
			arrival.style.position = 'absolute';
			arrival.style.left = '0';
			arrival.style.top = '0';


	});

//Index to quiz
	$("p a").hover(function () {
    	ooh.play();
    	console.log("hi");
});

//Click - text
//time to destination
	$('.timeToDest__button').on('click', function(){
		$(".typeOfParty").removeClass("invisible");
		$(".timeToDest").addClass("invisible");
	});
//type of party
	$('#typeOfParty--fancy').on('click', function(){
		snd.play();
		$('.sassy').text(`I wonder if anyone will recognize you.`);
		$('.sassy').removeClass('invisible');

	});
	$('#typeOfParty--casual').on('click', function(){
		aah.play();
		$('.sassy').text(`There is a thin line between your "casual" and looking homeless.`);
		$('.sassy').removeClass('invisible');
	});
	$('#typeOfParty--ready').on('click', function(){
		aah.play();
		$('.sassy').text(`It's so refreshing to meet someone who doesn't care how they look!`);
		$('.sassy').removeClass('invisible');
	});
	
	$('.typeOfParty__button').on('click', function(){
		$(".clean").removeClass("invisible");
		$(".typeOfParty").addClass("invisible");
		$('.sassy').addClass("invisible");
	});
//clean
	$('#clean--clean').on('click', function(){
		$('.sassy').text(`You are as disgusting as I thought`);
		$('.sassy').removeClass('invisible');
	});
	$('#clean--touchUp').on('click', function(){
		$('.sassy').text(`I didn't know you could wash off ugly`);
		$('.sassy').removeClass('invisible');
	});
	$('#clean--shower').on('click', function(){
		$('.sassy').text(`That's a REALLY good idea`);
		$('.sassy').removeClass('invisible');
	});
	$('#clean--disgusting').on('click', function(){
		$('.sassy').text(`I couldnt have said it better`);
		$('.sassy').removeClass('invisible');
	});
	$('.clean__button').on('click', function(){
		$(".grooming").removeClass("invisible");
		$(".clean").addClass("invisible");
		$('.sassy').addClass("invisible");
	});
//grooming
	$('#grooming--shave').on('click', function(){
		
	});
	$('#grooming--brushTeeth').on('click', function(){
		
	});
	$('#grooming--hair').on('click', function(){
		
	});
	$('.grooming__button').on('click', function(){
		$(".makeup").removeClass("invisible");
		$(".grooming").addClass("invisible");
		$('.sassy').addClass("invisible");
	});
//makeup
	// if the value is <20 then alert ok
	$("#makeup").on("input change", function() { 
		var makeupvar = $('input[name="makeup"]').val();
		if(makeupvar < 30) {
			$('.clown').attr('src','assets/littleGhost.png');
			console.log('clown');
			var makeup = document.querySelector(".clown");
			console.log(makeup.style);
			makeup.style.marginLeft = '0';
		}else if(makeupvar < 60){
			$('.clown').attr('src','assets/secondGhost.png');
			var makeup = document.querySelector(".clown");
			makeup.style.marginLeft = '120px';
			// makeup.style.left = '100px';
			console.log('>60');
		}else if(makeupvar < 90){
			$('.clown').attr('src','assets/ghost3.png');
			var makeup = document.querySelector(".clown");
			makeup.style.marginLeft = '250px';
			console.log(">90");
		}else if(makeupvar < 120){
			$('.clown').attr('src','assets/Clown-PNG-File.png');
			var makeup = document.querySelector(".clown");
			makeup.style.marginLeft = '350px';
			console.log("120");
		}

		var makeup = document.querySelector(".clown");
		makeup.style.t = "10%";
	});
	$('.makeup__button').on('click', function(){
		$(".procrastinate").removeClass("invisible");
		$(".makeup").addClass("invisible");
		$('.sassy').addClass("invisible");
	});
//procrastinate
	$('#procrastinate--yes').on('click', function(){
		
	});
	$('#procrastinate--no').on('click', function(){
		
	});
	$('.procrastinate__button').on('click', function(){
		$(".arrival").removeClass("invisible");
		$(".procrastinate").addClass("invisible");
		$('.sassy').addClass("invisible");
	});
//arrival
	$('#arrival--ok').on('click', function(){
		
	});
	$('#arrival--late').on('click', function(){
		
	});
	





});

	// $('input[name="clothing"]').on('change', function(){
	// 	console.log("final tiiim", time);
	// // });

	// $('select').on('change', function(){
	// 	var timeToDest = $('select option:selected').val();


	// 	time = time + timeToDest;
	// 	console.log("final time", time);
	// });

	// console.log(time);


	// $('form').on('submit', function(e){
	// 	e.preventDefault();
	// });

	// $('#typeOfParty--fancy').on('change',function(){

	// 	// time =- recentValue;
	// 	// recentValue = 20;
	// 	// time =+ recentValue;
	// 	// console.log(time);
	// });
	// console.log("updated time", time)
	
// 	$('#typeOfParty--casual').on('click',function(){
// 		time =- recentValue;
// 		recentValue = 10;
// 		time =+ recentValue;
// 		console.log(time);
// 	});

// 	$('#typeOfParty--ready').on('click',function(){
// 		time =- recentValue;
// 		recentValue = 0;
// 		time =+ recentValue;
// 		console.log(time);
// 	});

// //time to destination
// 	$('#typeOfParty--casual').on('click',function(){
// 		time =- recentValue;
// 		recentValue = 10;
// 		time =+ recentValue;
// 		// console.log(time);
// 	});