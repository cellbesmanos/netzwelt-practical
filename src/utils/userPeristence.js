export function persistUser(user) {
  localStorage.setItem("user", user);
}

export function unpersistUser() {
  localStorage.removeItem("user");
}

export function checkIfPersistedUserExists() {
  // converts it to a boolean
  return !!localStorage.getItem("user");
}
