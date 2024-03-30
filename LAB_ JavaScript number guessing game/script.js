function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
    let guess;

    while (numGuesses < totalGuesses) {
        guess = prompt(getPromptText(guess, numToGuess));

        // If user clicks cancel or inputs null/empty string, return 0
        if (guess === null || guess.trim() === "") {
            alert("Game canceled.");
            return 0;
        }

        // If input is not a number, prompt again
        if (isNaN(guess)) {
            alert("Please enter a number.");
            continue;
        }

        // Increment the number of guesses
        numGuesses++;

        // Convert the input to a number
        guess = parseInt(guess);

        // Check if the guess is correct
        if (guess === numToGuess) {
            alert(`Congratulations! You guessed the number ${numToGuess} in ${numGuesses} attempts.`);
            return numGuesses;
        }

        // Provide feedback based on the guess
        if (guess < numToGuess) {
            alert(`${guess} is too small. Guess a larger number.`);
        } else {
            alert(`${guess} is too large. Guess a smaller number.`);
        }
    }

    // Return 0 if user exceeds totalGuesses
    alert(`Sorry, you've exceeded the maximum number of guesses (${totalGuesses}). The correct number was ${numToGuess}.`);
    return 0;
}

function getPromptText(guess, numToGuess) {
    if (guess === undefined) {
        return "Enter a number between 1 and 100.";
    } else if (guess < numToGuess) {
        return `${guess} is too small. Guess a larger number.`;
    } else {
        return `${guess} is too large. Guess a smaller number.`;
    }
}

// Call playGuessingGame() to start the game
playGuessingGame(5);
