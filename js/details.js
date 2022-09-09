const id = new URLSearchParams(window.location.search).get('id');
const detailsContainer = document.getElementById('details');
const deleteBtn = document.getElementById('btn');
const renderDetails = async () => {
    let url = 'https://jsonplaceholder.ir/posts/' + id;
    const res = await fetch(url);
    const blog = await res.json();

    let template = '';
    template = `
        <h2>${blog.title}</h2>
        <p><small>${blog.likes}</small></p>
        <p>${blog.body}</p>
    `;


    detailsContainer.innerHTML = template;
}
deleteBtn.addEventListener('click' , async (e) => {
    const res = await fetch('http://localhost:3000/blogs/' + id, {
        method: "DELETE"
    });
    window.location.replace('/index.html');
})
window.addEventListener('DOMContentLoaded' , () => renderDetails());