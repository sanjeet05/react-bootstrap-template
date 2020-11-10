// user
function _setUser(userObj) {
  const user = JSON.stringify(userObj);
  localStorage.setItem("user", user);
}
function _getUser() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return user;
}
function _clearUser() {
  localStorage.removeItem("user");
}

// all
function _clearAll() {
  _clearUser();
}

const LocalStorageService = {
  setUser: _setUser,
  getUser: _getUser,
  clearAll: _clearAll,
};

export default LocalStorageService;
