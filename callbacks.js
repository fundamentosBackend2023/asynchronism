
const books = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}


let myBooks;

const asyncFunction = (actionToTake, secondActionToTake) => {
    setTimeout(() => { // Acción asíncrona falsa
        console.log('Hello from async function');
        myBooks = books;
        if(!myBooks){
            console.log('something went wrong :(')
        }
        actionToTake(myBooks, secondActionToTake)
    }, 2000);
}

const secondAsyncFunction = () => {
    setTimeout(() => {
        console.log('hello from other async function')
    }, 1000);
}

asyncFunction((info, cb) => { 
    console.log(info);
    cb();
}, () => { console.log('this is the third chained action') });
secondAsyncFunction();
console.log('This should be executed after async function');

const retrieveBooks = () => {
    setTimeout(() => {
        const retrievedBooks = books;
        return retrievedBooks;
    }, 1500);
}

const library = retrieveBooks();
console.log(library);