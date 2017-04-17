
//boxes adding
var boxArea = $('#boxArea');
var boxModel = '<div class="box">' + 
		  '<p class="letter">'+ 
		  '</p>'+ 
		  '</div>';  
var boxNumber = 25;

for(i=0; i<boxNumber; i++){
	$(boxArea).append($(boxModel).attr('id', 'box-' + i));
} 

//global variables
var letterInput = $('#letterInput');
var box = $('#boxArea .box');
var boxLetter = $('#boxArea .box .letter');
var errorMessage = $('#errorMessage');


//keyboard press
$(letterInput).keyup(function(e) {

	 percentFunc();

	 var key = e.which;

	 var inputText = $(this).val();
	 //console.log(inputText.length)

  	  var letterArray = [];
	  letterArray.push(inputText);
	  var str = letterArray.toString();
	  var lastArray = str.split("");
	  //console.log(lastArray);
	
	  jQuery.each( lastArray, function( index, value ) {
  	 	  $("#" + "box-" + index + " .letter").text(value);
  	 	  if($("#" + "box-" + index + " .letter").text().indexOf(" ") == -1){
  	 	  	$("#" + "box-" + index + " .letter").parent().addClass('active')
  	 	  } else {
  	 	  	$("#" + "box-" + index + " .letter").parent().removeClass('active')
  	 	  }
  	  //console.log($("#" + "box-" + index + " .letter").val())
  	 	   
  	 	
	  });

	     
	   if(inputText.length >= boxNumber){
  		$(box).addClass('limit');
  		$(errorMessage).fadeIn();
  	  } else{
  	  	$(box).removeClass('limit');
    	$(errorMessage).fadeOut();
  	  }

	
});


// percent calculate
var percentPrint = $('#percent');
var barPrint = $('#rangeFill');
function percentFunc(){
	var percent = Math.round($(letterInput).val().length / boxNumber * 100);
	$(percentPrint).text(percent);
	$(barPrint).css('width',percent + "%")
}

//reset 
var resetButton = $('#resetButton');
function resetFunc(){
    $(letterInput).val('');
	$(percentPrint).text('0');
    $(barPrint).css('width', 0 + "%")
    $(boxLetter).text('');
    $(box).removeClass('active limit');
    $(errorMessage).hide();
}

$(resetButton).on('click', resetFunc)

