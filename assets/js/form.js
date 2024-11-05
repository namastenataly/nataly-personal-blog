// These are the DOM elements needed to create the JS
//All of these have a specific purpose
const blogUsername = document.querySelector('#username');
const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

let blogStorageObject = [];

function init() {
    const storeBlogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogStorageObject = storeBlogs;
}

// This function is for updating blog posts in local storage so that when we refresh the page, it will keep the blog posts on the page. 
function updateBlogPosts() {
    localStorage.setItem('blogPosts', JSON.stringify(blogStorageObject));
}

// This is an event listener for the submit button to work properly. 
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
  
    const userTemp = blogUsername.value.trim();
    const titleTemp = blogTitle.value.trim();
    const contentTemp = blogContent.value.trim();
    
    // This is in case a user leaves a field empty, this lets them know that they have to fill in the form to post a blog post. 
    if (userTemp === '' || titleTemp === '' || contentTemp === '') {
        alert("Please insert unfilled items before proceeding! Don't forget to try to switch between light and dark mode!");
        return; // Exit function if any field is empty
    }
    
    blogStorageObject.unshift({
        username: userTemp,
        title: titleTemp,
        content: contentTemp,
    });

    updateBlogPosts();
    
    window.location.assign('blog.html');
});

// This gets the script to work. 
init();