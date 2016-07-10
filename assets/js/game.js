//When the html is fully loaded...
$(document).ready(function(){
	var attack = $("#attackButton");

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

	var obiWan = {
		baseAttackPower:5,
		currentAttackPower:5,
		health:180,
		attackDefend:-1
	};
	var lukeSkywalker = {
		baseAttackPower:6,
		currentAttackPower:6,
		health:150,
		attackDefend:-1
	};
	var darthMaul = {
		baseAttackPower:7,
		currentAttackPower:7,
		health:140,
		attackDefend:-1
	};
	var darthVader = {
		baseAttackPower:7,
		currentAttackPower:7,
		health:170,
		attackDefend:-1
	};





	attack.on("click", function(){
		//If obiWan is the attacker
		if (obiWan.attackDefend == 1){
			obiAttacks();
		}
		//If luke skywalker is the attacker
		else if (lukeSkywalker.attackDefend == 1){
			lukeAttacks();
		}
		//If darth maul is the attacker
		else if (darthMaul.attackDefend == 1){
			maulAttacks();
		}
		//If darth vader is the attacker
		else if (darthVader.attackDefend == 1){
			vaderAttacks();
		}
		else {
			alert("Get started!");
		}
	})





	function obiAttacks(){
		//Obi attacking darth maul
		if (darthMaul.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			obiWan.health -= darthMaul.baseAttackPower;
			darthMaul.health -= obiWan.currentAttackPower;
			obiWan.currentAttackPower += obiWan.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#obiHealth").html(obiWan.health);
			$("#maulHealth").html(darthMaul.health);
		}
		//Obi attacking luke skywalker
		else if (lukeSkywalker.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			obiWan.health -= lukeSkywalker.baseAttackPower;
			lukeSkywalker.health -= obiWan.currentAttackPower;
			obiWan.currentAttackPower += obiWan.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#obiHealth").html(obiWan.health);
			$("#lukeHealth").html(lukeSkywalker.health);
		}
		//Obi attacking darth vader
		else if (darthVader.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			obiWan.health -= darthVader.baseAttackPower;
			darthVader.health -= obiWan.currentAttackPower;
			obiWan.currentAttackPower += obiWan.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#obiHealth").html(obiWan.health);
			$("#vaderHealth").html(darthVader.health);

		}
		else {
			console.log("nothing");
		}
	}
	function lukeAttacks(){
		//Luke skywalker attacking darth maul
		if (darthMaul.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			lukeSkywalker.health -= darthMaul.baseAttackPower;
			darthMaul.health -= lukeSkywalker.currentAttackPower;
			lukeSkywalker.currentAttackPower += lukeSkywalker.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#lukeHealth").html(lukeSkywalker.health);
			$("#maulHealth").html(darthMaul.health);
		}
		//Luke skywalker attacking obi-wan
		else if (obiWan.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			lukeSkywalker.health -= obiWan.baseAttackPower;
			obiWan.health -= lukeSkywalker.currentAttackPower;
			lukeSkywalker.currentAttackPower += lukeSkywalker.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#lukeHealth").html(lukeSkywalker.health);
			$("#obiHealth").html(obiWan.health);
		}
		//Luke skywalker attacking darth vader
		else if (darthVader.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			lukeSkywalker.health -= darthVader.baseAttackPower;
			darthVader.health -= lukeSkywalker.currentAttackPower;
			lukeSkywalker.currentAttackPower += lukeSkywalker.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#lukeHealth").html(lukeSkywalker.health);
			$("#vaderHealth").html(darthVader.health);
		}
	}
	function maulAttacks(){
		//Darth maul attacking luke skywalker
		if (lukeSkywalker.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			darthMaul.health -= lukeSkywalker.baseAttackPower;
			lukeSkywalker.health -= darthMaul.currentAttackPower;
			darthMaul.currentAttackPower += darthMaul.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#maulHealth").html(darthMaul.health);
			$("#lukeHealth").html(lukeSkywalker.health);
		}
		//Darth maul attacking obi-wan
		else if (obiWan.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			darthMaul.health -= obiWan.baseAttackPower;
			obiWan.health -= darthMaul.currentAttackPower;
			darthMaul.currentAttackPower += darthMaul.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#maulHealth").html(darthMaul.health);
			$("#obiHealth").html(obiWan.health);
		}
		//Darth maul attacking darth vader
		else if (darthVader.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			darthMaul.health -= darthVader.baseAttackPower;
			darthVader.health -= darthMaul.currentAttackPower;
			darthMaul.currentAttackPower += darthMaul.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#maulHealth").html(darthMaul.health);
			$("#vaderHealth").html(darthVader.health);
		}
	}
	function vaderAttacks(){
		//Darth vader attacking luke skywalker
		if (lukeSkywalker.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			darthVader.health -= lukeSkywalker.baseAttackPower;
			lukeSkywalker.health -= darthVader.currentAttackPower;
			darthVader.currentAttackPower += darthVader.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#vaderHealth").html(darthVader.health);
			$("#lukeHealth").html(lukeSkywalker.health);
		}
		//Darth vader attacking obi-wan
		else if (obiWan.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			darthVader.health -= obiWan.baseAttackPower;
			obiWan.health -= darthVader.currentAttackPower;
			darthVader.currentAttackPower += darthVader.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#vaderHealth").html(darthVader.health);
			$("#obiHealth").html(obiWan.health);
		}
		//Darth vader attacking darth maul
		else if (darthMaul.attackDefend == 0){
			//Attackers health can only decrease by the defender's base attack power.
			//Defenders health will decrease by currentAttackPower
			//Increase attackers current power by their (the attackers) base power
			darthVader.health -= darthMaul.baseAttackPower;
			darthMaul.health -= darthVader.currentAttackPower;
			darthVader.currentAttackPower += darthVader.baseAttackPower;

			//Change the html text to reflect the changes in health
			$("#vaderHealth").html(darthVader.health);
			$("#maulHealth").html(darthMaul.health);
		}
	}








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
	    	obiWan.attackDefend = 1;
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
	    	obiWan.attackDefend = -1;
	    	console.log("You de-selected Obi-Wan: " + charNum);
	    }

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.
	    
    	//If vader or maul is chosen first and obi second...	    
	    if (charNum == 4 || charNum == 3){
	    	//Put the character in the defender section
	    	yourDefender.append(obi);

			//Resize by removing, then adding css classes
	    	obi.removeClass("col-sm-4");
	    	obi.addClass("col-sm-12");
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	obi.removeClass("highlightEnemies");
	    	obi.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    	obiWan.attackDefend = 0;
	    }
	    //Else if luke first and obi second...
	    else if (charNum == 2){
	    	//Put the character in the defender section
	    	yourDefender.append(obi);

	    	//Resize by removing, then adding css classes
	    	obi.removeClass("col-sm-4");
	    	obi.addClass("col-sm-12");
	    	maul.addClass("firstMargin");

	    	//Change color of defender
	    	obi.removeClass("highlightEnemies");
	    	obi.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	charNum = 5;
	    	obiWan.attackDefend = 0;
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
	    	lukeSkywalker.attackDefend = 1;
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
	    	lukeSkywalker.attackDefend = -1;
	    	console.log("You de-selected Luke: " + charNum);
	    }

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.

    	//If vader or maul is chosen first and luke second...	    
	    if (charNum == 4 || charNum == 3){
	    	//Put the character in the defender section
	    	yourDefender.append(luke);

	    	//Resize by removing, then adding css classes
	    	luke.removeClass("col-sm-4");
	    	luke.addClass("col-sm-12");
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	luke.removeClass("highlightEnemies");
	    	luke.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	lukeSkywalker.attackDefend = 0;
	    	charNum = 5;
	    }
	    //Else if obi was chosen second and luke second...
	    else if (charNum == 1){
	    	//Put the character in the defender section
	    	yourDefender.append(luke);

	    	//Resize by removing, then adding css classes
	    	luke.removeClass("col-sm-4");
	    	luke.addClass("col-sm-12");
	    	maul.addClass("firstMargin");

	    	//Change color of defender
	    	luke.removeClass("highlightEnemies");
	    	luke.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	lukeSkywalker.attackDefend = 0;
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
	    	darthMaul.attackDefend = 1;
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
	    	darthMaul.attackDefend = -1;
	    	console.log("You de-selected Maul: " + charNum);
		}

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.

    	//If obi is chosen first and maul second.	    
	    if (charNum == 1){
	    	//Put the character in the defender section
	    	yourDefender.append(maul);

			//Resize by removing, then adding css classes
	    	maul.removeClass("col-sm-4");
	    	maul.addClass("col-sm-12");
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	maul.removeClass("highlightEnemies");
	    	maul.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	darthMaul.attackDefend = 0;
	    	charNum = 5;
	    }
	    //If luke or vader is chosen first and maul second
	    else if (charNum == 2 || charNum == 4){
	    	//Put the character in the defender section
	    	yourDefender.append(maul);

			//Resize by removing, then adding css classes
	    	maul.removeClass("col-sm-4");
	    	maul.addClass("col-sm-12");

	    	//Resize the enemies div
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	maul.removeClass("highlightEnemies");
	    	maul.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	darthMaul.attackDefend = 0;
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
	    	darthVader.attackDefend = 1;
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
	    	darthVader.attackDefend = -1;
	    	console.log("You de-selected Vader: " + charNum);
	    }

	    //The above if else-if acts as a toggle. When it is "toggled on", the user is able to enter the if else-if below.
	    //The user must first choose their character and then they are able to choose their enemy.
	    
    	//If obi is chosen first and vader second...	    
	    if (charNum == 1){
	    	//Put the character in the defender section
	    	yourDefender.append(vader);

	    	//Resize by removing, then adding css classes
	    	vader.removeClass("col-sm-4");
	    	vader.addClass("col-sm-12");
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	vader.removeClass("highlightEnemies");
	    	vader.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	darthVader.attackDefend = 0;
	    	charNum = 5;
	    }
	    //If luke is chosen first and vader second...
	    else if (charNum == 2){
	    	//Put the character in the defender section
	    	yourDefender.append(vader);

	    	//Resize by removing, then adding css classes
	    	vader.removeClass("col-sm-4");
	    	vader.addClass("col-sm-12");
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	vader.removeClass("highlightEnemies");
	    	vader.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	darthVader.attackDefend = 0;
	    	charNum = 5;
	    }	    
	    //If maul is chosen first and vader second...
	    else if (charNum == 3){
	    	//Put the character in the defender section
	    	yourDefender.append(vader);

	    	//Resize by removing, then adding css classes
	    	vader.removeClass("col-sm-4");
	    	vader.addClass("col-sm-12");
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	vader.removeClass("highlightEnemies");
	    	vader.addClass("highlightDefender");

	    	//Make it so the attacker/defender is locked in
	    	darthVader.attackDefend = 0;
	    	charNum = 5;
	    }	        
    })





})

