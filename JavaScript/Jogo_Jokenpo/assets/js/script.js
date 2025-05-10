const playHuman = (humanChoise) => { 
    console.log(humanChoise);
    console.log(`Pc escolheu ${playComputer()}`);
    
}

const playComputer = () => {
    const choices = ['rock', 'paper', 'scissors'];
    

    return choices[Math.floor(Math.random() * choices.length)];
}