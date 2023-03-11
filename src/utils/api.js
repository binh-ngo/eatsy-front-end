// The url for the api we are hitting
// TODO change this once we deploy our db to heroku
const URL_PREFIX = "http://localhost:3001"

const API = {
        // use this for the homepage (to show all the user profiles optional)
        getAllData :  () => {
                return  fetch(`${URL_PREFIX}/api/users`).then(res => res.json())
        },

        createUser :  (userObj) => {
                return  fetch(`${URL_PREFIX}/api/users`, {
                        method: "POST",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json())
        },

        // Use this for profile pages (for editing AND storefront views)
        getSingleUser :  (username) => {
                return  fetch(`${URL_PREFIX}/api/users/${username}`).then(res => res.json());
        },

        // Use this when a user wants to update their profile
        updateUser :  (username, userObj) => {
                return  fetch(`${URL_PREFIX}/api/users/${username}`, {
                        method: "PUT",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json());
        },

        deleteUser :  (username) => {
                return  fetch(`${URL_PREFIX}/api/users/${username}`, {
                        method: "DELETE"
                }).then(res => res.json());
        },

        // TODO make login/logout, follow/unfollow functions

        createCompany :  (companyObj) => {
                return  fetch(`${URL_PREFIX}/api/companies`, {
                        method: "POST",
                        body: JSON.stringify(companyObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json())
        },

        updateCompany :  (companyId, companyObj) => {
                return  fetch(`${URL_PREFIX}/api/companies/${companyId}`, {
                        method: "PUT",
                        body: JSON.stringify(companyObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json())
        },

        sendMessage : (msgObj) => {
                return fetch(`${URL_PREFIX}/api/users/message`, {
                        method: "POST",
                        body: JSON.stringify(msgObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                })
        }

}

export default API


/* Example how to GET DAT all data (useres and companies)*/
// API.getAllData().then(res => console.log(res))

/* Example user CREATE*/
// const userObj = {
//         username: "test",
//         email: "test@test.com",
//         password: "password",
//         address: "testing",
// }
// API.createUser(userObj).then(res => console.log(res));

/* Example how to get data for a single user (user and company data) */
// API.getSingleUser("Luke").then(res => console.log(res))

/* Example user UPDATE*/
// const userObj = {
//         username: "timmy",
//         email: "test@test.com",
//         password: "newpassword",
//         address: "testing",
// }
// API.updateUser("test", userObj).then(res => console.log(res));

/* Example user DELETE*/
// API.deleteUser("timmy").then(res => console.log(res))
