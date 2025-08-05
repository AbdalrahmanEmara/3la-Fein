export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const saveUser = (newUser) => {
  const users = getUsers();
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
};

export const clearCurrentUser = () => {
  localStorage.removeItem("currentUser");
};

export const clearAllUsers = () => {
  localStorage.removeItem("users");
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};
