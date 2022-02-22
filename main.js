function getGameMode() {
    let choice;
    while (true) {
        choice = prompt('Please select the game difficulty: 1 for normal, 2 for impossible');
        if (choice === '1' || choice === '2') {
            return choice;
        }
        else 
            alert('Wrong input! Please insert 1 or 2')
    }
}