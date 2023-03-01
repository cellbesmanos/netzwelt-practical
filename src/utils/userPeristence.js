export function persistUser(user) {
  localStorage.setItem("user", user);
}

export function unpersistUser() {
  localStorage.removeItem("user");
}
