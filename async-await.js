let books = {
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

const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myBooks = books;
            if(!myBooks){
                reject(new Error('something went wrong :('))
            }
            resolve(myBooks)
        }, 2000);
    })
}

const retrieveBooks = async () => {
    try{
        const myBooks = await asyncFunction();
        return myBooks
    }catch(error){
        console.log('something went wrong')
    }
}

(async () => {
    const retrievedBooks = await retrieveBooks();
    console.log(retrievedBooks)
})();

