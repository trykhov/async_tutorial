const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    // setTimeout takes a callback function and runs it after milliseconds
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); 
};


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


// getPosts();

// Post Three will not show because DOM finished rendering before createPost could be ran
// createPost({title: 'Post Three', body: 'This is post three'});

// we're going to move getPosts into createPost as a callback so it runs after the post has been pushed
// it waits two seconds to add the third post and then calls the callback
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);