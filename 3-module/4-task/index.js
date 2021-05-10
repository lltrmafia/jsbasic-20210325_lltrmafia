function showSalary(users, age) {
  // ваш код...
  let res = '';
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      res += `${users[i].name}, ${users[i].balance}` + '\n';
    }
  }
  console.log(res = res.substring(0, res.lastIndexOf('\n')));
  return res;
}
