const Base_Url = "http://localhost:3032/";
export const registerUser = (userData) => {
  const url = `${Base_Url}/users/register`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        console.log(data.token);
        return data.token;
      } else {
        throw new Error(data.message || "failed to register new user");
      }
    });
};