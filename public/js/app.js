<<<<<<< HEAD
console.log('Client side server is up...');
let fetchdata = 0;
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    response.json().then((data) => {
        fetchdata = data.userId;
        console.log('Fetch data:', data);
    })
=======
console.log('Client side server is up...');
let fetchdata = 0;
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    response.json().then((data) => {
        fetchdata = data.userId;
        console.log('Fetch data:', data);
    })
>>>>>>> Initial commit
})