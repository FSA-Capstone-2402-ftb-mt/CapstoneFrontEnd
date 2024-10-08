const Base_Url = "http://localhost:3032/";
export const registerUser = (userData) => {
  const url = `${Base_Url}api/users/register`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      //if (data.token) {
        console.log(data);
        return data;
      //} else {
          //console.log(data);
          //throw new Error(data);
        //throw new Error(data.message || "failed to register new user");
      //}
    });
};

export const updateUsername = (currentUsername, newUsername) => {
    const url = `${Base_Url}api/users/update-username`;
    const userData = { currentUsername, newUsername };
    let token = sessionStorage.getItem("usertoken");
    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(userData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const updatePassword = (username, currentPassword, newPassword) => {
    const url = `${Base_Url}api/users/update-password`;
    const passwordData = { username, currentPassword, newPassword };
    let token = sessionStorage.getItem("usertoken");
    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(passwordData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const getUserStats = (username) => {
    let token = sessionStorage.getItem("usertoken");
    console.log("token:",token);
    const url = `${Base_Url}api/stats/user/${username}`;
    return fetch(url,{
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("User Stats:",data);
            return data;
        });
};