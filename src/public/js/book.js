const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')

let books = []

// Book infos are pushing to books array

fetch('/allBooks')
    .then((response) => response.json())
    .then((data) => {
        books = data.map((book) => {
            return {
                id : book.id,
                title : book.title,
                description : book.description,
                author : book.author,
                year : book.year,
                cover : book.cover
            }
        })
    });

// Search Book

searchBtn.addEventListener('click', () => {
    if(searchInput.value == ''){
        window.location.href = `/books`
    }
    books.forEach(element => {
        if(element.title.toLowerCase() == searchInput.value.toLowerCase()){
            const bookId = element.id
            window.location.href = `/books/${bookId}`
        }        
    });
})