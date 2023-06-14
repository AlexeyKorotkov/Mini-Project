const userId = new URL(location.href).searchParams.get('userId');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
        console.log(user)
        let block = document.getElementsByClassName('wrap')[0];
        let ul = document.createElement('ul');
        recursiveBuild(user, ul);
        block.appendChild(ul);
    });

function liCreator(key, value, parent) {
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}

function ulBuilder(key, object, parent) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}

function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }
}
