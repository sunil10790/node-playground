const book = {
    title: 'Who am I?',
    author: 'Sunil'
}

console.log("object: ", book)

// Convert object to JSON
const bookJSON = JSON.stringify(book)
console.log("JSON: ", bookJSON)


// COnvert JSON to object
const parsedBook = JSON.parse(bookJSON)
console.log("object: ",parsedBook)
console.log(parsedBook.author)