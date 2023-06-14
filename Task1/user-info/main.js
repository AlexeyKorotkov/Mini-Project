// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then((users) => {
//     let block=document.getElementsByClassName('wrap')[0];
//     for (const user of users) {
//         let div=document.createElement('div');
//         div.innerText=`${user.id}. ${user.name}`;
//         block.appendChild(div);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>
        console.log(data));


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
       let users = document.querySelector('#users');
        data.forEach(user => {
            let userBlock = document.createElement('div');
            userBlock.innerHTML = `${user.id}. ${user.name}`;
            users.appendChild(userBlock);
        });
    });
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let users = document.querySelector('#users');
        data.forEach(user => {
           let userBlock = document.createElement('div');
            userBlock.innerHTML = `<p> ${user.id}. ${user.name}</p>`;
            let button = document.createElement('button');
            button.innerText = 'Info';
            button.addEventListener('click', () => {
                window.location.href = `../user-details/index.html?userId=${user.id}`;
            });
            userBlock.appendChild(button);
            users.appendChild(userBlock);
        });
    });


        // console.log(users)
//     }
//
//     // for (const user of value) {
//     //
//     // }
// })