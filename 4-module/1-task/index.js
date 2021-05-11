function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  ul.classList.add('friendsList');

  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += `${friends[i].firstName}  ${friends[i].lastName}`;
  }

  return ul;
}
