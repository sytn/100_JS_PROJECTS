document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('rollButton');
    const dice = document.getElementById('dice');
    const dotContainer = document.getElementById('dotContainer');
    const historyList = document.getElementById('historyList');
    
    let rollHistory = [];
    
    rollButton.addEventListener('click', rollDice);
    
    function rollDice() {
        // Disable button during animation
        rollButton.disabled = true;
        
        // Add roll animation
        dice.classList.add('roll-animation');
        
        // After animation ends, show the result
        setTimeout(() => {
            dice.classList.remove('roll-animation');
            
            // Generate random number between 1 and 6
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            
            // Display the dice face
            displayDiceFace(randomNumber);
            
            // Add to history
            rollHistory.unshift(randomNumber);
            updateHistory();
            
            // Re-enable button
            rollButton.disabled = false;
        }, 500);
    }
    
    function displayDiceFace(number) {
        // Clear previous dots
        dotContainer.innerHTML = '';
        
        // Create dots based on the number
        const dotPositions = {
            1: [[1, 1]],
            2: [[0, 0], [2, 2]],
            3: [[0, 0], [1, 1], [2, 2]],
            4: [[0, 0], [0, 2], [2, 0], [2, 2]],
            5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
            6: [[0, 0], [0, 1], [0, 2], [2, 0], [2, 1], [2, 2]]
        };
        
        dotPositions[number].forEach(pos => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.gridColumn = pos[0] + 1;
            dot.style.gridRow = pos[1] + 1;
            dotContainer.appendChild(dot);
        });
    }
    
    function updateHistory() {
        // Clear history list
        historyList.innerHTML = '';
        
        // Add each roll to the history
        rollHistory.forEach((roll, index) => {
            const li = document.createElement('li');
            li.textContent = `Roll ${index + 1}: ${roll}`;
            historyList.appendChild(li);
        });
    }
    
    // Initialize with a 1
    displayDiceFace(1);
});