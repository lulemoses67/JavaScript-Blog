const blogContainer = document.getElementById('blogs');
const searchForm = document.getElementById('hul');

const renderBlogs = async (term) => {
    let url = 'https://jsonplaceholder.ir/posts?_sort=likes&_order=desc';
    if(term) {
        url += `&q=${term}`;
    }
    const res = await fetch(url);
    const blogs = await res.json();

    let template = '';
    blogs.forEach(blog => {
        template += `
            <div class="blog">
                <h2>${blog.title}</h2>
                <p>${blog.body.slice(0,200)}</p>
                <p><small><a href="/details.html?id=${blog.id}">read more...</a></small></p>
            </div>
        `;

    });
    blogContainer.innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderBlogs(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded' , () => renderBlogs());