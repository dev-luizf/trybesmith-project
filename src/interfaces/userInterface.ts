interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

interface CreatedUser extends User {
  id: number,
}

export {
  User,
  CreatedUser,
};
