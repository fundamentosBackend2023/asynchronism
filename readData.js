const read = require('node:readline');

const myRl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (message) => {
    return new Promise((resolve, reject) => {
        myRl.question(message, (answer) => {
            answer ? resolve(answer) : reject('There was some issue');
        });
    });
}

(async () => {
    const color = await askQuestion('What\'s your favorite color');
    console.log(color);
    const dish = await askQuestion('What\'s your favorite dish');
    console.log(dish);
})();