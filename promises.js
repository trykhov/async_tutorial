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


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// it waits first (2 sec), then if there is no error, it resolves the getPosts
// createPost({title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Promise.all
// const promiseOne = Promise.resolve('Hello World');
// const promiseTwo = 10;
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// });
// const promiseFour = fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json());

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then(values => console.log(values));


//  Async / Await
// Another way of dealing with promises
// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }

// init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    console.log(data);
}

fetchUsers();