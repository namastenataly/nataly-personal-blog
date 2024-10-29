
const blogUsername = document.querySelector('$username');
const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');


let blogStorageObject = [];

function init() {
  const storeBlogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogStorageObject = storeBlogs;
}

function updateBlogPosts() {
  localStorage.setItem('blogPosts', JSON.stringify(blogStorageObject));
}

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const userTemp = blogUsername.value.trim();
  const titleTemp = blogTitle.value.trim();
  const contentTemp = blogContent.value.trim ();

  
})