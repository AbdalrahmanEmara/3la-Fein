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

export const addFavoriteToCurrentUser = (favoriteItem) => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    console.warn("No current user set");
    return;
  }

  if (!Array.isArray(currentUser.favorites)) {
    currentUser.favorites = [];
  }

  const exists = currentUser.favorites.some(
    (item) => item.name === favoriteItem.name
  );

  if (!exists) {
    currentUser.favorites.push(favoriteItem);

    setCurrentUser(currentUser);

    const users = getUsers();
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? currentUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
};

export const removeFavoriteFromCurrentUser = (favoriteItemName) => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    console.warn("No current user set");
    return;
  }

  if (!Array.isArray(currentUser.favorites)) {
    currentUser.favorites = [];
  }

  currentUser.favorites = currentUser.favorites.filter(
    (item) => item.name !== favoriteItemName
  );

  setCurrentUser(currentUser);

  const users = getUsers();
  const updatedUsers = users.map((user) =>
    user.id === currentUser.id ? currentUser : user
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

export const isFavorite = (favoriteItemName) => {
  const currentUser = getCurrentUser();
  if (!currentUser || !Array.isArray(currentUser.favorites)) return false;

  return currentUser.favorites.some((item) => item.name === favoriteItemName);
};
