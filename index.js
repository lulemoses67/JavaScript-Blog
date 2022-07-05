//Modal 
const toggleModal  = () => {

    let modal = document.getElementById('modal');
    if(modal.style.display == 'none'){
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
};

//Blogs Container , will be used for listing and rendering a single blog
const blogContainer = document.getElementById('blogs');

//Listing All Blogs
const listBlogs = (newBlogs) => {
    blogs = newBlogs;
    //Receive an array of blogs and map through it as blog
    const blogList = blogs.length ? (
        blogs.map((blog) => {
            return `<div class="blog" onclick="blogDetail(${blog.id})">
                <h2>${blog.title}</h2>
                <p>${blog.body.slice(0,100)}</p>
            </div>`;
        })
    ) : `<p> No Blogs Now  </p>`;

    //Outputting blogs
    blogContainer.innerHTML = blogList;
}

//Outputting blogs Initially
listBlogs(blogs);

//Show Blog Details
const blogDetail = (id) => {
    // Create a new array with only one blog the has that Id
    const newBlogs = blogs.filter(blog => {
        return blog.id == id
    });

    //Then select that blog
    const blog = newBlogs[0];
    const result = `<div>
        <h2>${blog.title}</h2>
        <p>${blog.body}</p>
        <button type="button" onclick="deleteBlog(${blog.id})">Delete</button>
        <button type="button" onclick="listBlogs(blogs)">return</button>
    </div>`;

    //Outputting blog
    blogContainer.innerHTML = result;
}

// Deleting a Blog
const deleteBlog = (id) => {
    // Create a new blogs without the selected blog id
    const newBlogs = blogs.filter(blog => {
        return blog.id !== id
    });

    // Update our blog list 
    listBlogs(newBlogs);
}

// Adding Blog 
const addBlog = () => {
    //First Create a new blog to add
    let blog = {
        id : Math.random(),
        title : null,
        body : null
    }

    //Give the blog values from the form inputs
    blog.title = document.getElementById('title').value;
    blog.body = document.getElementById('body').value;

    //Adding the values and update our blog list 
    blogs.push(blog);
    listBlogs(blogs);

    //Clear the form inputs and close the modal
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
    toggleModal();
}