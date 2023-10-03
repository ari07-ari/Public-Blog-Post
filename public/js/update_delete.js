const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

const upButtonHandler = async (event) => {

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const userId = document.getElementById('userId').value.trim();
    
    let Options = {
        user_id: userId,
        title: content,
        content: title,
    }


    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT', // Use PUT or POST based on your server API
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Options)
          });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};


const delete_btn = document.querySelector(".delete");
const update = document.querySelector(".update");

delete_btn.addEventListener('click', delButtonHandler);
update.addEventListener('click', upButtonHandler);