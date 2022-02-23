export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface CreatedUser extends User {
  id: number,
}
