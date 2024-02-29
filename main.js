class book {
    constructor (title, author) {
        this.title = title;
        this.author = author;
    }
    addBooksToArray () {
        arrayOfBooks.push(`${this.title} by ${this.author}`)
    }
}

let arrayOfBooks = [];


const  oneHundredYearsOfSolitude = new book(' One Hundred Years of Solitude', 'Gabriel Garcia Marquez');
oneHundredYearsOfSolitude.addBooksToArray();

const ulysses = new book('Ulysses', 'James Joyce')
ulysses.addBooksToArray();

const theGreatGatsby = new book('The Great Gatsby', 'F. Scott Fitzgerald')
theGreatGatsby.addBooksToArray();

const inSearchOfLostTime = new book('In Search of Lost Time', 'Marcel Proust')
inSearchOfLostTime.addBooksToArray();

const donQuixote = new book('Don Quixote', 'Miguel de Cervantes')
donQuixote.addBooksToArray();

const theCatcherInTheRye = new book('The Catcher in the Rye', 'J. D. Salinger')
theCatcherInTheRye.addBooksToArray();


console.log(arrayOfBooks);

let suggestion = document.getElementById('random-book')
let anotherOptionButton = document.getElementById('another-option')
let findOutButton = document.getElementById('find-out')


const getRandomBook = (array) => {
    let x = Math.floor(Math.random() * array.length) 
    return array[x] 
}

let showSuggestion = () =>  {
    suggestion.innerHTML = getRandomBook(arrayOfBooks);
    suggestion.style.visibility = 'visible';
    findOutButton.innerHTML = 'GET ANOTHER OPTION'
}



findOutButton.onclick = showSuggestion;