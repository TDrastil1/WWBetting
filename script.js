document.getElementById('bet-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const player = document.getElementById('player').value;
    const stat = document.getElementById('stat').value;
    const amount = document.getElementById('amount').value;
    const target = document.getElementById('target').value;

    // Display the bet details
    document.getElementById('bet-info').innerHTML = `
        <h3>Your Bet</h3>
        <p>Player: ${player}</p>
        <p>Stat: ${stat}</p>
        <p>Bet Amount: ${amount} ς</p>
        <p>Target: ${target} ${stat}</p>
    `;
});
