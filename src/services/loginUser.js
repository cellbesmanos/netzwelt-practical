export default async function (username, password) {
  try {
    if (username === "foo" && password === "bar") {
      return Promise.resolve({
        username: "foo",
        displayName: "Foo Bar Foo",
        roles: ["basic-user"],
      });
    } else {
      return Promise.reject("Invalid username or password.");
    }
  } catch (error) {
    throw error;
  }
}

// use this after fixing cors errors

// const res = await fetch(
//   "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
//   {
//     method: "POST",
//     body: {
//       username,
//       password,
//     },
//     headers: {
//       "Content-Type": "application/json",
//       accept: "text/plain",
//     },
//   }
// );

// return res.json();
