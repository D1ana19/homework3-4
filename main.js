let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  
  users = users.map(user => ({ user,
    admin: user.id === 3 ? true : false 
  }));
  
  console.log(users);
  