//When the html is fully loaded...
$(document).ready(function(){
	var attack = $("#attackButton");

	var obi = $("#movableObi");
	var luke = $("#movableLuke");
	var maul = $("#movableMaul");
	var vader = $("#movableVader");

	var obiHealthBar = $("#obiHealth");
	var lukeHealthBar = $("#lukeHealth");
	var vaderHealthBar = $("#vaderHealth");
	var maulHealthBar = $("#maulHealth");

	var charSelect = $("#charSelectDiv");
	var yourFighter = $("#charSlot");
	var yourEnemies = $("#becomeEnemy")
	var yourDefender = $("#defenderSlot");
	var fightSection = $("#fightSection");

	var charNum = 0;

	var obiWan = {
		name: "Obi-Wan",
		baseAttackPower:5,
		currentAttackPower:5,
		health:180,
		attackDefend:-1
	};
	var lukeSkywalker = {
		name: "Luke Skywalker",
		baseAttackPower:6,
		currentAttackPower:6,
		health:150,
		attackDefend:-1
	};
	var darthMaul = {
		name: "Darth Maul",
		baseAttackPower:7,
		currentAttackPower:7,
		health:140,
		attackDefend:-1
	};
	var darthVader = {
		name: "Darth Vader",
		baseAttackPower:7,
		currentAttackPower:7,
		health:170,
		attackDefend:-1
	};

	var currentAttacker = {
		name: " ",
		baseAttackPower: 0,
		currentAttackPower: 0,
		health: 0,
		attackDefend: 20
	}

	var currentDefender = {
		name: " ",
		baseAttackPower: 0,
		currentAttackPower: 0,
		health: 0,
		attackDefend: 20
	}

	var attackerHealthBar;
	var defenderHealthBar;


	attack.on("click", function(){
		if (charNum > 4) {
			clickBattle(currentAttacker, attackerHealthBar, currentDefender, defenderHealthBar);
		}
	})





	function clickBattle(attacker, attackerHB, defender, defenderHB){

		//Attackers health can only decrease by the defender's base attack power.
		//Defenders health will decrease by currentAttackPower
		//Increase attackers current power by their (the attackers) base power
		attacker.health -= defender.baseAttackPower;
		defender.health -= attacker.currentAttackPower;
		attacker.currentAttackPower += attacker.baseAttackPower;

		//If either attacker or defender's health falls below zero, make it zero.
		if (defender.health <= 0){
			defender.health = 0;

			//Attack/defend value of 2 signifies a death.
			defender.attackDefend = 2;
		}
		if (attacker.health <= 0){
			attacker.health = 0;

			attacker.attackDefend = 2;
		}

		//Change the html text to reflect the changes in health
		attackerHB.html(attacker.health);
		defenderHB.html(defender.health);

		$("#emptyAttack").html("You attacked " + defender.name + " for " + attacker.currentAttackPower + " damage.");
		$("#emptyDefend").html(defender.name + " counter attacked for " + defender.baseAttackPower + " damage.");

	}



	function lockChars(attacker, defender){
		//Fill in the empty objects with the values for the attacker
		currentAttacker.name = attacker.name;
		currentAttacker.health = attacker.health;
		currentAttacker.baseAttackPower = attacker.baseAttackPower;
		currentAttacker.currentAttackPower = attacker.currentAttackPower;
		currentAttacker.attackDefend = attacker.attackDefend;
		//Do the same for the defender
		currentDefender.name = defender.name;
		currentDefender.health = defender.health;
		currentDefender.baseAttackPower = defender.baseAttackPower;
		currentDefender.currentAttackPower = defender.currentAttackPower;
		currentDefender.attackDefend = defender.attackDefend;

		//With charNum set to 5, the character divs cannot be clicked on
		charNum = 5;

		//Signify that the defender is in the defensive state
		//Before this lockChars function was run, the attackers attackDefend was set to 1, which was then brought into this function and assigned currentAttacker.attackDefend
		currentDefender.attackDefend = 0;

		console.log(currentAttacker.name + " vs. " + currentDefender.name);
		console.log("Attacker status: " + currentAttacker.attackDefend + "\n" + "Defender status: " + currentDefender.attackDefend + "\n" + "charNum: " + charNum);
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
	    
    	//If vader is chosen first and obi second...	    
	    if (charNum == 4){
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
	    	lockChars(darthVader, obiWan);
	    	attackerHealthBar = vaderHealthBar;
	    	defenderHealthBar = obiHealthBar;
	    }
    	//If maul is chosen first and obi second...	    
	    else if (charNum == 3){
	    	//Put the character in the defender section
	    	yourDefender.append(obi);

			//Resize by removing, then adding css classes
	    	obi.removeClass("col-sm-4");
	    	obi.addClass("col-sm-12");
	    	luke.addClass("firstMargin");

	    	//Change color of defender
	    	obi.removeClass("highlightEnemies");
	    	obi.addClass("highlightDefender");

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = maulHealthBar;
	    	defenderHealthBar = obiHealthBar;

	    	//Make it so the attacker/defender is locked in
	    	lockChars(darthMaul, obiWan);	  
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = lukeHealthBar;
	    	defenderHealthBar = obiHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(lukeSkywalker, obiWan);    	
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

    	//If vader is chosen first and luke second...	    
	    if (charNum == 4){
	    	//Put the character in the defender section
	    	yourDefender.append(luke);

	    	//Resize by removing, then adding css classes
	    	luke.removeClass("col-sm-4");
	    	luke.addClass("col-sm-12");
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	luke.removeClass("highlightEnemies");
	    	luke.addClass("highlightDefender");

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = vaderHealthBar;
	    	defenderHealthBar = lukeHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(darthVader, lukeSkywalker);
	    }
    	//If maul is chosen first and luke second...	    
	    if (charNum == 3){
	    	//Put the character in the defender section
	    	yourDefender.append(luke);

	    	//Resize by removing, then adding css classes
	    	luke.removeClass("col-sm-4");
	    	luke.addClass("col-sm-12");
	    	obi.addClass("firstMargin");

	    	//Change color of defender
	    	luke.removeClass("highlightEnemies");
	    	luke.addClass("highlightDefender");

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = maulHealthBar;
	    	defenderHealthBar = lukeHealthBar;

	    	//Make it so the attacker/defender is locked in
	    	lockChars(darthMaul, lukeSkywalker);
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = obiHealthBar;
	    	defenderHealthBar = lukeHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(obiWan, lukeSkywalker);
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = obiHealthBar;
	    	defenderHealthBar = maulHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(obiWan, darthMaul);	    	
	    }
	    //If vader is chosen first and maul second
	    else if (charNum == 4){
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = vaderHealthBar;
	    	defenderHealthBar = maulHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(darthVader, darthMaul);	
	    }
	    //If luke is chosen first and maul second
	    else if (charNum == 2){
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = lukeHealthBar;
	    	defenderHealthBar = maulHealthBar;

	    	//Make it so the attacker/defender is locked in
	    	lockChars(lukeSkywalker, darthMaul);	
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = obiHealthBar;
	    	defenderHealthBar = vaderHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(obiWan, darthVader);	    	
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = lukeHealthBar;
	    	defenderHealthBar = vaderHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(lukeSkywalker, darthVader);
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

	    	//Current attackers health bar to the <p></p> associated with the characters health.
	    	attackerHealthBar = maulHealthBar;
	    	defenderHealthBar = vaderHealthBar;	

	    	//Make it so the attacker/defender is locked in
	    	lockChars(darthMaul, darthVader);    	
	    }	        
    })





})

