// for testing
export const doSignInWithEmailAndPassword = async (email, password) => {
  return new Promise((resolve, reject) => {
    // Set up the timeout
    setTimeout(() => {
      if (email === "admin@test.com" && password === "admin@123") {
        const user = {
          _id: "5f22d9c2e60fb936f2f9abe4",
          name: "John Doe",
          email: "admin@test.com",
        };
        resolve(user);
      } else {
        reject("Login failed");
      }
    }, 1000);
  });
};
