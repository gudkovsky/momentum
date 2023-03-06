const searchBar = document.querySelector('.search-bar')

searchBar.addEventListener(('keypress'), (event) => {
  if (event.key === "Enter") {  
    let url = 'https://www.google.com/search?q=' + searchBar.value
  window.open(url)
}

});

const clearSearchTextButton = document.querySelector('.search-bar__clear')

clearSearchTextButton.addEventListener('click', () => {
  searchBar.value = ''
})