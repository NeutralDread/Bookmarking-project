// Listen for form sumbit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(e) {

  // Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  /*
      // Local storage test
      localStorage.setItem('Test', 'Hello Wolrd');
      console.log(localStorage.getItem('Test'));
      localStorage.removeItem('Test');
    */

  // Checks if bookmarks are null
  if (localStorage.getItem('bookmarks') === null) {
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);

    // Add to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Fetch from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  }
  // Prevents immediate form submit
  e.preventDefault();
}
