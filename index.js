function fetchBooks() {
  
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(data => data)
  return data
}renderBooks(fetchBooks())


  


function renderBooks(book) {
  const main = document.querySelector('main');
  book.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
   
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(book);
});
