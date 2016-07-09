//When the document is ready, perform this function.
$(document).ready(function(){
	var obi = $("#movableObi");
	var luke = $("#movableLuke");
	var maul = $("#movableMaul");
	var vader = $("#movableVader");

	var charSelect = $("#charSelectDiv");
	var yourFighter = $("#charSlot");
	var yourEnemies = $("#becomeEnemy")
	var yourDefender = $("#defenderSlot");
	var fightSection = $("#fightSection");

	var charNum = 0;

	//Select the character and it gets pulled to the left. All other characters pulled to the right.
	//Also, once a character has been selected, the others cannot be selected anymore.
	//However, the player can press their selected character to put it back on the roster.

	obi.on("click", function(){
   		if (charNum == 0){
	    	//Give the enemies highlights
	    	luke.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(obi);
	    	yourEnemies.append(luke, maul, vader);

	    	//Resize the div to fill out the full width of the 6 column div
	    	obi.removeClass("col-sm-2");
	    	luke.removeClass("col-sm-2");
	    	maul.removeClass("col-sm-2");
	    	vader.removeClass("col-sm-2");

	    	obi.addClass("col-sm-12");
	    	luke.addClass("col-sm-4");
	    	maul.addClass("col-sm-4");
	    	vader.addClass("col-sm-4");


	    	charNum = 1;
	    	console.log("You selected Obi-Wan: " + charNum);
	    }
	    else if (charNum == 1) {
	    	//Remove the enemy highlights
	    	luke.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(obi);
	    	charSelect.append(luke, maul, vader);

	    	//Resize the div to fit the 12 column div
	    	obi.removeClass("col-sm-12");
	    	luke.removeClass("col-sm-4");
	    	maul.removeClass("col-sm-4");
	    	vader.removeClass("col-sm-4");

	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

	    	charNum = 0;
	    	console.log("You de-selected Obi-Wan: " + charNum);
	    }

	    //
    	//If vader or maul is chosen first and obi second.	    
	    if (charNum == 4 || charNum == 3){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(obi);
	    	obi.removeClass("col-sm-4");
	    	obi.addClass("col-sm-12");

	    	//Resize the enemies div
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	obi.removeClass("highlightEnemies");
	    	obi.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }
	    //Else if luke first and obi second
	    else if (charNum == 2){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(obi);
	    	obi.removeClass("col-sm-4");
	    	obi.addClass("col-sm-12");

	    	//Resize the enemies div
	    	maul.addClass("firstMargin");

	    	//Change color of defender
	    	obi.removeClass("highlightEnemies");
	    	obi.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }
    })
    luke.on("click", function(){
    	if (charNum == 0){
	    	//Give the enemies highlights
	    	obi.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(luke);
	    	yourEnemies.append(obi, maul, vader);

	    	//Resize the div to fill out the full width of the 6 column div
	    	luke.removeClass("col-sm-2");
	    	obi.removeClass("col-sm-2");
	    	maul.removeClass("col-sm-2");
	    	vader.removeClass("col-sm-2");

	    	luke.addClass("col-sm-12");
	    	obi.addClass("col-sm-4");
	    	maul.addClass("col-sm-4");
	    	vader.addClass("col-sm-4");

	    	charNum = 2;
	    	console.log("You selected Luke: " + charNum);
	    }
	    else if (charNum ==2) {
	    	//Remove the enemy highlights
	    	obi.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(luke);
	    	charSelect.append(obi, maul, vader);

	    	//Resize the div to fit the 12 column div
	    	luke.removeClass("col-sm-12");
	    	obi.removeClass("col-sm-4");
	    	maul.removeClass("col-sm-4");
	    	vader.removeClass("col-sm-4");

	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

	    	charNum = 0;
	    	console.log("You de-selected Luke: " + charNum);
	    }

	    //
    	//If vader or maul is chosen first and luke second.	    
	    if (charNum == 4 || charNum == 3){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(luke);
	    	luke.removeClass("col-sm-4");
	    	luke.addClass("col-sm-12");

	    	//Resize the enemies div
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	obi.removeClass("highlightEnemies");
	    	obi.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }
	    //Else if obi was chosen second and luke second
	    else if (charNum == 1){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(luke);
	    	luke.removeClass("col-sm-4");
	    	luke.addClass("col-sm-12");

	    	//Resize the enemies div
	    	maul.addClass("firstMargin");

	    	//Change color of defender
	    	luke.removeClass("highlightEnemies");
	    	luke.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }	       
    })
    maul.on("click", function(){
    	if (charNum == 0){
	    	//Give the enemies highlights
	    	obi.addClass("highlightEnemies");
	    	luke.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(maul);
	    	yourEnemies.append(obi, luke, vader);

	    	//Resize the div to fill out the full width of the 6 column div
	    	maul.removeClass("col-sm-2");
	    	obi.removeClass("col-sm-2");
	    	luke.removeClass("col-sm-2");
	    	vader.removeClass("col-sm-2");

	    	maul.addClass("col-sm-12");
	    	obi.addClass("col-sm-4");
	    	luke.addClass("col-sm-4");
	    	vader.addClass("col-sm-4");

	    	charNum = 3;
	    	console.log("You selected Maul: " + charNum);
		}
		else if (charNum == 3) {
	    	//Remove the enemy highlights
	    	obi.removeClass("highlightEnemies");
	    	luke.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(maul);
	    	charSelect.append(obi, luke, vader);

	    	//Resize the div to fit the 12 column div
	    	maul.removeClass("col-sm-12");
	    	obi.removeClass("col-sm-4");
	    	luke.removeClass("col-sm-4");
	    	vader.removeClass("col-sm-4");

	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

	    	charNum = 0;
	    	console.log("You de-selected Maul: " + charNum);
		}

		//
    	//If obi is chosen first and maul second.	    
	    if (charNum == 1){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(maul);
	    	maul.removeClass("col-sm-4");
	    	maul.addClass("col-sm-12");

	    	//Resize the enemies div
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	maul.removeClass("highlightEnemies");
	    	maul.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }
	    //If luke or vader is chosen first and maul second
	    else if (charNum == 2 || charNum == 4){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(maul);
	    	maul.removeClass("col-sm-4");
	    	maul.addClass("col-sm-12");

	    	//Resize the enemies div
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	maul.removeClass("highlightEnemies");
	    	maul.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }	    	
    })
    vader.on("click", function(){
    	if (charNum == 0){
	    	//Give the enemies highlights
	    	obi.addClass("highlightEnemies");
	    	luke.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(vader);
	    	yourEnemies.append(obi, luke, maul);

	    	//Resize the div to fill out the full width of the 6 column div
	    	vader.removeClass("col-sm-2");
	    	obi.removeClass("col-sm-2");
	    	luke.removeClass("col-sm-2");
	    	maul.removeClass("col-sm-2");

	    	vader.addClass("col-sm-12");
	    	obi.addClass("col-sm-4");
	    	luke.addClass("col-sm-4");
	    	maul.addClass("col-sm-4");

	    	charNum = 4;
	    	console.log("You selected Vader: " + charNum);	
	    }
	    else if (charNum == 4) {
	    	//Remove the enemy highlights
	    	obi.removeClass("highlightEnemies");
	    	luke.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(vader);
	    	charSelect.append(obi, luke, maul);

	    	//Resize the div to fit the 12 column div
	    	vader.removeClass("col-sm-12");
	    	obi.removeClass("col-sm-4");
	    	luke.removeClass("col-sm-4");
	    	maul.removeClass("col-sm-4");

	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

	    	charNum = 0;
	    	console.log("You de-selected Vader: " + charNum);
	    }

	    //
    	//If obi is chosen first and vader second.	    
	    if (charNum == 1){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(vader);
	    	vader.removeClass("col-sm-4");
	    	vader.addClass("col-sm-12");

	    	//Resize the enemies div
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	vader.removeClass("highlightEnemies");
	    	vader.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }
	    //If luke is chosen first and vader second.
	    else if (charNum == 2){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(vader);
	    	vader.removeClass("col-sm-4");
	    	vader.addClass("col-sm-12");

	    	//Resize the enemies div
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	vader.removeClass("highlightEnemies");
	    	vader.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }	    
	    //If luke is chosen first and vader second
	    else if (charNum == 3){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(vader);
	    	vader.removeClass("col-sm-4");
	    	vader.addClass("col-sm-12");

	    	//Resize the enemies div
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	vader.removeClass("highlightEnemies");
	    	vader.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    }	        
    })
	





})