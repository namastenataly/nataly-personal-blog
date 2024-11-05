const blogPost = document.querySelector('#blog');

const backBtn = document.querySelector('#back');

let blogStorageObject = [];

// This shows the blog posts on the page 

function renderBlogPosts() {
   
// This is a variable for stored blog posts 
    const storedBlogPosts = blogStorageObject;
  

    if (storedBlogPosts.length === 0) {
        return;
    }


    blogPost.textContent = '';


    // A for loop
    for (let i = 0; i < storedBlogPosts.length; i++) {
        const { title, content, username } = storedBlogPosts[i];
       
// These are HTML elements 
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const span = document.createElement('span');


        h2.textContent = title;
        p.textContent = content;
        span.textContent = 'Posted by: ' + username;
        // This is to append to the HTML elemtns
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(span);
        
        blogPost.appendChild(div);
    }
}


function init() {

    const storeBlogs = JSON.parse(localStorage.getItem('blogPosts')) || [];


    if (storeBlogs.length !== 0) {
        blogStorageObject = storeBlogs;
    }
 

    renderBlogPosts();
}



backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.assign('index.html');
});


init();