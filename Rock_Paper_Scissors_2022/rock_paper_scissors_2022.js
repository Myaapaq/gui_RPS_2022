/*
    The problem with the way I have programmed this is that the event listeners don't pass
    out any value. They try to handle everything themselves, causing lots of errors. 
    -------------------------------------------------------------------------------------
    To Fix:
    1. Event listeners pass their selection on to the playRound() function
    2. playRound() uses a switch to call functions for each case, win, lose, 
       tie and end of the round*/
    let compPoint = 0; // holds point for computer
    let userPoint = 0; // holds point for user
    let numOfGames= 0; // holds number of games played

    const rock = document.querySelector('#rock'); 
    const paper = document.querySelector('#paper'); 
    const scissors = document.querySelector('#scissors');

    const results  = document.querySelector('#results'); 
    
    const stat = document.querySelector('#status');
    const computerChoice = document.querySelector('#computerChoice');
    
    
    /* 
    1. begin with a function getComputerChoice 
    that will randomly return either ‘Rock’, ‘Paper’ or 
    ‘Scissors’. We’ll use this function in the game to 
    make the computer’s play. */
    function makeChoice(num){
        switch(num){
            case 0: 
                compChoice = "rock"; 
                break; 
            case 1:
                compChoice = "paper"
                break; 
            case 2:
                compChoice = "scissors"
                break; 
            default:
                compChoice = "invalid input";
        }
        return compChoice; 
    }
    function getComputerChoice(){
        let num = Math.floor(Math.random() * 3); // Create random num between 0 and 2
        return makeChoice(num); 
    }


    function win(){
        userPoint++;
        results.textContent = "User: " + userPoint + " Computer: " + compPoint;
        stat.textContent = "User wins the round!";
    }
    function lose(){
        compPoint++
        results.textContent = "User: " + userPoint + " Computer: " + compPoint;
        stat.textContent = "User loses the round!";
    }
    function tie(){
        stat.textContent = "It's a tie!";
        results.textContent = "User: " + userPoint + " Computer: " + compPoint;
        // need to update the text content at all? 
    }
    function endRound(){
        stat.textContent = "End of the round";
        if(userPoint > compPoint){
            stat.textContent = "User wins the game!";
        }
        else {
            stat.textContent = "Computer wins the game!";
        }
        userPoint = 0; compPoint=0; numOfGames++; 
        stat.textContent = "NEW GAME"
        return; 
    }
     /* 2. Write function playRound that plays a single round of
        Rock Paper Scissors. 
            function should take two parameters 
                - the playerSelection and 
                - computerSelection  */
    // When the button is pushed, pass the appropriate selection on to the playRound() function
    rock.addEventListener('click',() => {
        playRound("rock", getComputerChoice()); 
    })
    paper.addEventListener('click',() => {
        playRound("paper", getComputerChoice());
    })
    scissors.addEventListener('click',() => {
        playRound("scissors", getComputerChoice());
    })    


    function playRound(uS, cS){ // play a round, call the appropriate function for the next step
        if (compPoint == 5 || userPoint == 5){ 
            endRound(); 
            return; 
        }
        else if (uS == cS){tie(); }    // tie
        else if(uS == "rock" && cS == "paper"){lose();}         // comp 
        else if (uS == "scissors" && cS == "paper"){win();}     // user
        else if(uS == "rock" && cS == "scissors"){win();}       // user
        else if (uS == "paper" && cS == "scissors"){lose();}    // comp 
        else if(uS == "paper" && cS == "rock"){win();}          // user
        else if (uS == "scissors" && cS == "rock"){lose();}     // comp 
        else return;
    }

/*
// GoRbAGe CODE AFTER THIS 
    game (); // call to game which plays 5 rounds 
    // function for playing 5 rounds 
    function game (){
        win.textContent = 'hey';
        let compPoint = 0; // holds point for computer
        let userPoint = 0; // holds point for user
        let winner;    // holds who won the round
        let cS; // holds computer selection 
        for (let i = 0; i < 5; i++) {               // for five rounds do the following -->
            rock.addEventListener('click',() => {
                cS = getComputerChoice(); 
                winner = (playRound("rock", cS));
                computerChoice.textContent = cS;

                if (winner === "Computer wins!") {
                    cResults.textContent = compPoint++;
                }
                else if(winner === "User wins!") {
                    uResults.textContent = userPoint++;
                }   
            })
            paper.addEventListener('click',() => {
                cS = getComputerChoice(); 
                winner = (playRound("paper", getComputerChoice()));
                computerChoice.textContent = cS; 
                if (winner === "Computer wins!") {
                    cResults.textContent = compPoint++;
                }
                else if(winner === "User wins!") {
                    uResults.textContent = userPoint++;
                }
            })
            scissors.addEventListener('click',() => {
                cS = getComputerChoice(); 
                winner = (playRound("scissors", getComputerChoice()));
                computerChoice.textContent = cS; 
                if (winner === "Computer wins!") {
                    cResults.textContent = compPoint++;
                }
                else if(winner === "User wins!") {
                    uResults.textContent = userPoint++;
                }
            })    
        }
        if(userPoint > compPoint){
           
            win.textContent = "User wins";
            console.log('hey')
        }
        else {
            win.textContent = "Computer wins";
            console.log('hey2');
        }
        return; 
    }
    

   
    /* 2. Write function playRound that plays a single round of
        Rock Paper Scissors. 
            function should take two parameters 
                - the playerSelection and 
                - computerSelection 
                    - and then return a string 
       declare the winner of the round like so: 
       "You Lose! Paper beats Rock"
       Make your function’s playerSelection parameter 
       case-insensitive 
    function playRound(uS, cS){
        
        if (uS == cS){return ("It's a tie ");}
        else if(uS == "rock" && cS == "paper"){return ("Computer wins!");}
        else if (uS == "scissors" && cS == "paper"){return ("User wins!");}
        else if(uS == "rock" && cS == "scissors"){return ("User wins!");}
        else if (uS == "paper" && cS == "scissors"){return ("Computer wins!");}
        else if(uS == "paper" && cS == "rock"){return ("User wins!");}
        else if (uS == "scissors" && cS == "rock"){return ("Computer wins!");}
        else return ("IDK");
    }

    /*3. Write a NEW function called game(). Call the 
       playRound function inside of this one to play
       a 5 round game that keeps score and reports a 
       winner or loser at the end.
        Remember loops? This is a great opportunity to use one to play those five rounds:
        for (let i = 0; i < 5; i++) {
            // your code here!
        }
   */
    /*function game (){
        let compPoint = 0; // holds point for computer
        let userPoint = 0; // holds point for user
        let cS;        // Holds computer selection
        let uS;        // Holds user selection
        let winner;    // holds who won the round
        for (let i = 0; i < 5; i++) {
            uS = getUserChoice();       // call getuser
            cS = getComputerChoice();   // call getcomp
            winner = playRound(uS,cS);               // call one round
            if (winner == "Computer wins!") {compPoint++;}
            else if(winner == "User wins!") {userPoint++;}
            console.log("User choice: " + uS + " Computer Choice: " + cS + "\n|| Points --> User: " + userPoint + " Comp: " + compPoint);
        }
        if(userPoint > compPoint){return "User Wins"}
        else {return "Computer wins"}
    }
    */

    // TEMPORARY PAUSE ON GAME BECAUSE IT IS ANNOYING!!
    //console.log(game()); 