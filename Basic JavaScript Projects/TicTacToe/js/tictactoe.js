
// This variable keeps track of whose turn it is:
let activePlayer = "X";
// This [] stores an [] of moves; used to determine win conditions:
let selectedSquares = [];

// This function places an "X" or "O" in a square:
function placeXOrO(squareNumber) {
    /* This condition ensures a square hasn't been selected already.
    The .some method is used to check each element of selectedSquare []
    to see if it contains the square number clicked on.*/
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        // This condition checks whose turn it is:
        if (activePlayer === "X") {
            // If activePlayer is equal to "X", place the x.png in HTML:
            select.style.backgroundImage = "url('images/x.png')";
        }  else {
            // If activePlayer is equal to "O", place the o.png in HTML:
            select.style.backgroundImage = "url('images/o.png')";
        }
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions:
        checkWinConditions();
        // This condition changes activePlayer:
        if (activePlayer === 'X') {
            // If activePlayer is "X", change it to "O":
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // This function plays the "placement" sound:
        audio("media/place.mp3");
        // This condition checks if it is the computer's turn:
        if(activePlayer === "O") {
            disableClick();
            // This function waits 1 second before computer places image & enables click:
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        // Returning TRUE is needed for the computersTurn() to work:
        return true;
    }

    // This function results in a random square being selected:
    function computersTurn() {
        let success = false;
        // This variable stores a random number 0-8:
        let pickASquare;
        // This condition allows our while loop to keep trying if a square is selected already:
        while(!success){
            // A random number between 0 & 8 is selected:
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns TRUE, the square hasn't been selected yet:
            if (placeXOrO(pickASquare)) {
                // This line calls the function:
                placeXOrO(pickASquare);
                // This changes our boolean and ends the loop:
                success = true;
            };
        }
    }
}

/* This function parses the selectedSquares [] to search for win conditions.
drawWinLine() is called to draw a line if condition is met. */
function checkWinConditions() {
    // X 0, 1, 2 condition:
    if         (arrayIncludes('OX', '1X', '2X')) { drawWinLine(50, 100, 588, 100) }
    // X 3, 4, 5 condition:
    else if    (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if    (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 304) }
    else if    (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if    (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 100, 558) }
    else if    (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if    (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if    (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition:
    else if    (arrayIncludes('00', '10', '20')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition:
    else if    (arrayIncludes('30', '40', '50')) { drawWinLine(50, 304, 558, 304) }
    else if    (arrayIncludes('60', '70', '80')) { drawWinLine(50, 508, 558, 508) }
    else if    (arrayIncludes('00', '30', '60')) { drawWinLine(100, 50, 100, 558) }
    else if    (arrayIncludes('10', '40', '70')) { drawWinLine(304, 50, 304, 558) }
    else if    (arrayIncludes('20', '50', '80')) { drawWinLine(508, 50, 508, 558) }
    else if    (arrayIncludes('60', '40', '20')) { drawWinLine(100, 508, 510, 90) }
    else if    (arrayIncludes('00', '40', '80')) { drawWinLine(100, 100, 520, 520) }
    //* This condition checks for a tie.  If none of the above conditions register
    // and all 9 squares have been selected, the code executes
    else if    (selectedSquares.length >= 9) {
        // This function plays the "tie game" sound:
        audio("Media/tie.mp3");
        // This function sets a .3 second timer before the resetGame() is called:
        setTimeout(function () { resetGame(); }, 1000);
    }
    // This function checks if an [] includes 3 strings (checks for each win condition):
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variables will be used to check for 3 in a row:
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        /* If the 3 variables we pass are all included in our [], TRUE is returned,
        and our else/if condition executes drawWinLine() */
        if (a === true && b === true && c === true) { return true }
    }
}

// This function resets the game in the event of a tie or a win:
function resetGame() {
    // This "for loop" iterates through each HTML square element:
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
      // This resets our array so it is empty and we can start over:
    selectedSquares = [];
}

// This function makes the body element temporarily unclickable:
function disableClick() {
    // This makes the body unclickable:
    body.style.pointerEvents = "none";
    setTimeout(function()  {body.style.pointerEvents = 'auto';}, 1000);
}

/* This function takes a string parameter of the path set eariler for the
"placement" sound ("./MEDIA/place.mp3"): */
function audio(audioURL) {
    // New audio object is created, passing the path as a parameter:
    let audio = new Audio(audioURL);
    // This ".play" method plays the audio sound:
    audio.play();
}

// This function utilizes HTML canvas to draw win lines:
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line accesses the HTML canvas element:
    const canvas = document.getElementById('win-lines')
    // This line gives us access to methods & properties to use on canvas:
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        x2 = coordX2,
        y1 = coordY1,
        y2 = coordY2,
        x = x1,
        y = y1;


    // This function interacts with the canvas:
    function animateLineDrawing() {
        // This variable creates a loop:
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from last loop iteration:
        c.clearRect(0, 0, 608, 608)
        // This method starts a new path:
        c.beginPath();
        // This method moves us to the line's starting point:
        c.moveTo(x1, y1)
        c.lineTo (x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        // This condition checks if the endpoint's been reached:
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        /* This condition is similar to the one above;
        (necessary for the "6, 4, 2" win condition): */
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }
    // This function clears the canvas after the win line is drawn:
    function clear() {
        // This line starts the animation loop:
        const animationLoop = requestAnimationFrame(clear);
        // This line clears the canvas:
        c.clearRect(0, 0, 608, 608);
        // This line stops the animation loop:
        cancelAnimationFrame(animationLoop);
        
    }
    // This line disallows clicking while the "win" sound is playing:
    disableClick();
    // This line plays the "win" sound:
    audio('media/winGame.mp3');
    // This line calls the main animation loop:
    animateLineDrawing();
    // This line waits 1 second, then clears canvas, resets game, & allows clicking again:
    setTimeout(function() {
        clear();
        resetGame();
    }, 1000);
}





