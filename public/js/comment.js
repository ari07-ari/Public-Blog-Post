const newFormHandler = async (event) => {
    console.log("hello");
    event.preventDefault();
    const comment = document.querySelector('#comment').value.trim();
    const userId = document.getElementById('userId').value.trim();
    const blogId = document.getElementById('blogId').value.trim();
    

    let checkedOptions = {
        user_id: userId,
        comment_text: comment,
        blog_id: blogId,

        // "comment": "I like it!",
        // "date_created": "Dec 21, 2021",
        // "user_id": 1
    };
    console.log(comment , userId , blogId)
    if  (comment && userId && blogId) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkedOptions),
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } else {
        alert("All fields are mandatory!");
        return;
    }

};


const submit = document.querySelector(".submit");

submit.addEventListener('click', newFormHandler);