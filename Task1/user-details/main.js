// В user-details.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в user-details.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// user-details.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/USER_ID/posts${id}`)
    .then(list => list.json())
    .then(user => {

        function toUpper(text) {
            return text[0].toUpperCase() + text.slice(1);
        } //не відноситься до завдання.

        let div = document.createElement('div');
        div.classList.add('textPart');

        for (const key in user) {
            if (typeof user[key] === "object") {

                let addressDiv = document.createElement('div');
                addressDiv.classList.add('textInfo');
                addressDiv.innerText = `${toUpper(key)}:`;

                let ul = document.createElement('ul');
                addressDiv.appendChild(ul);

                let a = user[key];
                for (const aElement in a) {
                    let liAddress = document.createElement('li');
                    liAddress.innerHTML = `${toUpper(aElement)}: ${JSON.stringify(a[aElement]).replace(/[{}"]/gi, ' ')}`;
                    ul.appendChild(liAddress);
                }

                div.appendChild(addressDiv);

            } else {

                let userDiv = document.createElement('div');
                userDiv.classList.add('textInfo');
                userDiv.innerText = `${toUpper(key)}: ${user[key]}`;

                div.appendChild(userDiv);


                let insert = document.getElementsByClassName('userInfo')[0];
                insert.appendChild(div);
            }
        }


        let btn = document.createElement('button');
        btn.classList.add('mainButton');
        btn.innerText = 'Posts of user';

        let bigButton = document.getElementsByClassName('btn')[0];
        bigButton.appendChild(btn);

        btn.onclick = () => {
            btn.disabled = true;



            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(titles => titles.json())
                .then(posts => {

                        let titleDiv = document.createElement('div');
                        titleDiv.classList.add('titleCard');

                        for (let i = 0; i < posts.length; i++) {

                            let idTitle = document.createElement('div');
                            idTitle.classList.add('cards');

                            idTitle.innerText = `Title: ${posts[i].title}`;

                            titleDiv.appendChild(idTitle);


                            let titleButton = document.createElement('button');
                            titleButton.classList.add('titButton');
                            titleButton.innerText = 'Details';

                            idTitle.appendChild(titleButton);


                            titleButton.onclick = () => {
                                location.href = `post-details.html?id=${user.id}&post=${posts[i].id}`;
                            }
                        }

                        let postPage = document.getElementsByClassName('postsTitle')[0];
                        postPage.appendChild(titleDiv);

                    }
                )
            let titles = document.getElementsByClassName('postsTitle')[0];
            titles.classList.add('show');
        };
    });

// (`https://jsonplaceholder.typicode.com/users/USER_ID/posts`)
//      fetch(url)
//     .then((value) => value.json())
//     .then(value => {
//         console.log(value);
//     });