const newFormHandler = async (event) => {
    console.log("hello");
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const userId = document.getElementById('userId').value.trim();
    

    let checkedOptions = {
        user_id: userId,
        title: title,
        content: content,
        

        // "title": "Music Near Me",
        // "content": "A mobile app that will send you notifications whenever a concert is playing in your area.",
        // "date_created": "Dec 21, 2021",
        // "user_id": 1
    };

    if (title && content && userId) {
        const response = await fetch(`/api/blog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkedOptions),
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert("All fields are mandatory!");
        return;
    }

};


const button = document.querySelector(".btn");

button.addEventListener('click', newFormHandler);
