// /В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку index.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице index.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку index.html, котра має детальну інфу про поточний пост.
//
//     На странице index.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     index.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     index.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
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
                window.location.href = `../user-details/index.html`;
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