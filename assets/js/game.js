//When the document is ready, perform this function.
$(document).ready(function(){
	var obi = $("#movableObi");
	var luke = $("#movableLuke");
	var maul = $("#movableMaul");
	var vader = $("#movableVader");
	var charNum = 0;

	//Select the character and it gets pulled to the left. All other characters pulled to the right.
	//Also, once a character has been selected, the others cannot be selected anymore.
	//However, the player can press their selected character to put it back on the roster.
	obi.on("click", function(){
   		if (charNum == 0){
	    	obi.addClass("pull-left");
	    	luke.addClass("pull-right");
	    	maul.addClass("pull-right");
	    	vader.addClass("pull-right");

	    	luke.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	charNum = 1;
	    	console.log("You selected Obi-Wan: " + charNum);
	    }
	    else if (charNum == 1) {
	    	obi.removeClass("pull-left");
	    	luke.removeClass("pull-right");
	    	maul.removeClass("pull-right");
	    	vader.removeClass("pull-right");

	    	luke.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	charNum = 0;
	    	console.log("You de-selected Obi-Wan: " + charNum);
	    }
    })
    luke.on("click", function(){
    	if (charNum == 0){
	    	obi.addClass("pull-right");
	    	luke.addClass("pull-left");
	    	maul.addClass("pull-right");
	    	vader.addClass("pull-right");

	    	obi.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	charNum = 2;
	    	console.log("You selected Luke: " + charNum);
	    }
	    else if (charNum ==2) {
	    	obi.removeClass("pull-right");
	    	luke.removeClass("pull-left");
	    	maul.removeClass("pull-right");
	    	vader.removeClass("pull-right");

	    	obi.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	charNum = 0;
	    	console.log("You de-selected Luke: " + charNum);
	    }
    })
    maul.on("click", function(){
    	if (charNum == 0){
	    	obi.addClass("pull-right");
	    	luke.addClass("pull-right");
	    	maul.addClass("pull-left");
	    	vader.addClass("pull-right");	

	    	obi.addClass("highlightEnemies");
	    	luke.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	charNum = 3;
	    	console.log("You selected Maul: " + charNum);
		}
		else if (charNum == 3) {
	    	obi.removeClass("pull-right");
	    	luke.removeClass("pull-right");
	    	maul.removeClass("pull-left");
	    	vader.removeClass("pull-right");

	    	obi.removeClass("highlightEnemies");
	    	luke.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	charNum = 0;
	    	console.log("You de-selected Maul: " + charNum);
		}
    })
    vader.on("click", function(){
    	if (charNum == 0){
	    	obi.addClass("pull-right");
	    	luke.addClass("pull-right");
	    	maul.addClass("pull-right");
	    	vader.addClass("pull-left");

	    	obi.addClass("highlightEnemies");
	    	luke.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");

	    	charNum = 4;
	    	console.log("You selected Vader: " + charNum);	
	    }
	    else if (charNum == 4) {
	    	obi.removeClass("pull-right");
	    	luke.removeClass("pull-right");
	    	maul.removeClass("pull-right");
	    	vader.removeClass("pull-left");
	    	
	    	obi.removeClass("highlightEnemies");
	    	luke.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");

	    	charNum = 0;
	    	console.log("You de-selected Vader: " + charNum);
	    }
    })
	





})