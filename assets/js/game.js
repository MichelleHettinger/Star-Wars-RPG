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
		//Since charNum loads up as 0, this means that when the user clicks on obi, the following if statement will execute.
   		if (charNum == 0){
	    	//Give the enemies highlights
	    	luke.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(obi);
	    	yourEnemies.append(luke, maul, vader);

	    	//Resize the div to fill out the full width of the very first row div
	    	obi.removeClass("col-sm-2");
	    	luke.removeClass("col-sm-2");
	    	maul.removeClass("col-sm-2");
	    	vader.removeClass("col-sm-2");
			//With bootstrap col classes removed, add them back, but change the size.
	    	obi.addClass("col-sm-12");
	    	luke.addClass("col-sm-4");
	    	maul.addClass("col-sm-4");
	    	vader.addClass("col-sm-4");

	    	//charNum is changed to 1, which is a value that will later signify having selected obi-wan 
	    	charNum = 1;
	    	console.log("You selected Obi-Wan: " + charNum);
	    }
	    //After the first click on vader, charNum is 1. Therfore, the next time vader is clicked this else if will run.
	    //Essentially, it changes the classes back to what they were before the above if statement arranged them.	    
	    else if (charNum == 1) {
	    	//Remove the enemy highlights
	    	luke.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(obi);
	    	charSelect.append(luke, maul, vader);

	    	//Resize the div to fill out the full width of the very first row div
	    	obi.removeClass("col-sm-12");
	    	luke.removeClass("col-sm-4");
	    	maul.removeClass("col-sm-4");
	    	vader.removeClass("col-sm-4");
	    	//With bootstrap col classes removed, add them back, but change the size.
	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

			//charNum is changed to 0, which is a value that will later signify having de-selected obi-wan 
	    	charNum = 0;
	    	console.log("You de-selected Obi-Wan: " + charNum);
	    }

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.
	    
    	//If vader or maul is chosen first and obi second...	    
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
	    //Else if luke first and obi second...
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
 		//Since charNum loads up as 0, this means that when the user clicks on obi, the following if statement will execute.
    	if (charNum == 0){
	    	//Give the enemies highlights
	    	obi.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(luke);
	    	yourEnemies.append(obi, maul, vader);

	    	//Resize the div to fill out the full width of the very first row div
	    	luke.removeClass("col-sm-2");
	    	obi.removeClass("col-sm-2");
	    	maul.removeClass("col-sm-2");
	    	vader.removeClass("col-sm-2");
	    	//With bootstrap col classes removed, add them back, but change the size.
	    	luke.addClass("col-sm-12");
	    	obi.addClass("col-sm-4");
	    	maul.addClass("col-sm-4");
	    	vader.addClass("col-sm-4");

			//charNum is changed to 2, which is a value that will later signify having selected luke skywalker. 
	    	charNum = 2;
	    	console.log("You selected Luke: " + charNum);
	    }
	    //After the first click on luke skywalker, charNum is 2. Therfore, the next time vader is clicked this else if will run.
	    //Essentially, it changes the classes back to what they were before the above if statement arranged them.	    
	    else if (charNum ==2) {
	    	//Remove the enemy highlights
	    	obi.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(luke);
	    	charSelect.append(obi, maul, vader);

	    	//Resize the div to fill out the full width of the very first row div
	    	luke.removeClass("col-sm-12");
	    	obi.removeClass("col-sm-4");
	    	maul.removeClass("col-sm-4");
	    	vader.removeClass("col-sm-4");
	    	//With bootstrap col classes removed, add them back, but change the size.
	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

			//charNum is changed to 0, which is a value that will later signify having selected luke skywalker.
	    	charNum = 0;
	    	console.log("You de-selected Luke: " + charNum);
	    }

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.

    	//If vader or maul is chosen first and luke second...	    
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
	    //Else if obi was chosen second and luke second...
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
 		//Since charNum loads up as 0, this means that when the user clicks on obi, the following if statement will execute.
    	if (charNum == 0){
	    	//Give the enemies highlights
	    	obi.addClass("highlightEnemies");
	    	luke.addClass("highlightEnemies");
	    	vader.addClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	yourFighter.append(maul);
	    	yourEnemies.append(obi, luke, vader);

	    	//Resize the div to fill out the full width of the very first row div
	    	maul.removeClass("col-sm-2");
	    	obi.removeClass("col-sm-2");
	    	luke.removeClass("col-sm-2");
	    	vader.removeClass("col-sm-2");
	    	//With bootstrap col classes removed, add them back, but change the size.
	    	maul.addClass("col-sm-12");
	    	obi.addClass("col-sm-4");
	    	luke.addClass("col-sm-4");
	    	vader.addClass("col-sm-4");

			//charNum is changed to 3, which is a value that will later signify having selected darth maul.
	    	charNum = 3;
	    	console.log("You selected Maul: " + charNum);
		}
	    //After the first click on darth maul, charNum is 3. Therfore, the next time vader is clicked this else if will run.
	    //Essentially, it changes the classes back to what they were before the above if statement arranged them.
		else if (charNum == 3) {
	    	//Remove the enemy highlights
	    	obi.removeClass("highlightEnemies");
	    	luke.removeClass("highlightEnemies");
	    	vader.removeClass("highlightEnemies");

	    	//Shuffle the character divs around into fighter and enemy divs
	    	charSelect.append(maul);
	    	charSelect.append(obi, luke, vader);

	    	//Resize the div to fill out the full width of the very first row div
	    	maul.removeClass("col-sm-12");
	    	obi.removeClass("col-sm-4");
	    	luke.removeClass("col-sm-4");
	    	vader.removeClass("col-sm-4");
	    	//With bootstrap col classes removed, add them back, but change the size.
	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

	    	//charNum is changed to 0, which is a value that will later signify having de-selected darth maul
	    	charNum = 0;
	    	console.log("You de-selected Maul: " + charNum);
		}

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.

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
		//Since charNum loads up as 0, this means that when the user clicks on obi, the following if statement will execute.
    	if (charNum == 0){
	    	//Give the enemies highlights
	    	obi.addClass("highlightEnemies");
	    	luke.addClass("highlightEnemies");
	    	maul.addClass("highlightEnemies");

	    	//Shuffle the character into the fighter and enemy divs
	    	yourFighter.append(vader);
	    	yourEnemies.append(obi, luke, maul);

	    	//Resize the div to fill out the full width of the very first row div
	    	vader.removeClass("col-sm-2");
	    	obi.removeClass("col-sm-2");
	    	luke.removeClass("col-sm-2");
	    	maul.removeClass("col-sm-2");

	    	//With bootstrap col classes removed, add them back, but change the size.
	    	vader.addClass("col-sm-12");
	    	obi.addClass("col-sm-4");
	    	luke.addClass("col-sm-4");
	    	maul.addClass("col-sm-4");

			//charNum is changed to 4, which is a value that will later signify having selected darth vader
	    	charNum = 4;
	    	console.log("You selected Vader: " + charNum);	
	    }
	    //After the first click on vader, charNum is 4. Therfore, the next time vader is clicked this else if will run.
	    //Essentially, it changes the classes back to what they were before the above if statement arranged them.
	    else if (charNum == 4) {
	    	//Remove the enemy highlights
	    	obi.removeClass("highlightEnemies");
	    	luke.removeClass("highlightEnemies");
	    	maul.removeClass("highlightEnemies");

	    	//Shuffle the character into the fighter and enemy divs
	    	charSelect.append(vader);
	    	charSelect.append(obi, luke, maul);

	    	//Resize the div to fill out the full width of the very first row div
	    	vader.removeClass("col-sm-12");
	    	obi.removeClass("col-sm-4");
	    	luke.removeClass("col-sm-4");
	    	maul.removeClass("col-sm-4");
	    	//With bootstrap col classes removed, add them back, but change the size.
	    	obi.addClass("col-sm-2");
	    	luke.addClass("col-sm-2");
	    	maul.addClass("col-sm-2");
	    	vader.addClass("col-sm-2");

			//charNum is changed to 0, which is a value that will later signify having de-selected darth vader
	    	charNum = 0;
	    	console.log("You de-selected Vader: " + charNum);
	    }

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.
	    
    	//If obi is chosen first and vader second...	    
	    if (charNum == 1){
	    	//Put the character in the defender section and resize
	    	yourDefender.append(vader);
	    	//Resize by removing, then adding
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
	    //If luke is chosen first and vader second...
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
	    //If maul is chosen first and vader second...
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