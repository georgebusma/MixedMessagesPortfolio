function generateRandomNumber(num) {
    //Gets number from 0 -> num - 1
    return Math.floor(Math.random() * num);
}

const motivationalWords = {
    youFeel: ['messy', 'sad', 'ill', 'good', 'hopeful', 'great'],
    today: ['Friday', 'your Birthday', 'rainy', 'sunny', 'another day'],
    advice: ["don't give up", 'try again', 'be nice', 'cheer up', 'calm down']
};

//Store the 'motivation' in an array
let personalMotivation = [];

//Iterate over the object
for (let prop in motivationalWords) {
    let optionIdx = generateRandomNumber(motivationalWords[prop].length);

    //Use the object's properties to customise the message being added to personalMotivation
    switch (prop) {
        case 'youFeel':
            personalMotivation.push(`You're feeling ${motivationalWords[prop][optionIdx]},`);
            break;
        case 'today':
            personalMotivation.push(`because today is ${motivationalWords[prop][optionIdx]}`);
            break;
        case 'advice':
            personalMotivation.push(`so ${motivationalWords[prop][optionIdx]}.`);
            break;
        default:
            personalMotivation.push('There is not enough info.');
    }
}

function formatText(text) {
    const formatted = personalMotivation.join(' ');
    console.log(formatted);
}

formatText(personalMotivation);
