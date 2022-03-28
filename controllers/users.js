import { v4 as uuid4 } from 'uuid';
let users = [];

// get all users
export const getAllUsers = (req, res) => {
  res.send(users);
};

// create new user
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid4() });

  res.send(users);
};

// get user with id
export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
};

// delete user
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

// update user
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(user);
};
