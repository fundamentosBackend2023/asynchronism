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
books = undefined

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

asyncFunction()
    .then( (response) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(response)
                resolve(response)
            }, 1000);
        })
    })
    .then( (response) => {
        console.log('those were your books')
        console.log('and here they are again')
        console.log(response)
    })
    .catch( (err) => console.log(err.stack) )