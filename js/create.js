const form = document.querySelector('form');

const createBlog = async (e) => {
    e.preventDefault();

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('https://jsonplaceholder.ir/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type' : 'application/json'}
    });
    window.location.replace('/index.html');
}
form.addEventListener('submit', createBlog)