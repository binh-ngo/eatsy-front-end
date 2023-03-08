// The url for the api we are hitting
// TODO change this once we deploy our db to heroku
const URL_PREFIX = "http://localhost:3001"

const API = {
        // use this for the homepage (to show all the user profiles optional)
        getAllData : async () => {
                return await fetch(`${URL_PREFIX}/api/users`).then(res => res.json())
        },

        createUser : async (userObj) => {
                return await fetch(`${URL_PREFIX}/api/users`, {
                        method: "POST",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json())
        },

        // Use this for profile pages (for editing AND storefront views)
        getSingleUser : async (username) => {
                return await fetch(`${URL_PREFIX}/api/users/${username}`).then(res => res.json());
        },

        // Use this when a user wants to update their profile
        updateUser : async (username, userObj) => {
                return await fetch(`${URL_PREFIX}/api/users/${username}`, {
                        method: "PUT",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json());
        },

        deleteUser : async (username) => {
                return await fetch(`${URL_PREFIX}/api/users/${username}`, {
                        method: "DELETE"
                }).then(res => res.json());
        },

        // TODO make login/logout, follow/unfollow functions

        createCompany : async (companyObj) => {
                return await fetch(`${URL_PREFIX}/api/companies`, {
                        method: "POST",
                        body: JSON.stringify(companyObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json())
        },

        updateCompany : async (companyId, companyObj) => {
                return await fetch(`${URL_PREFIX}/api/companies/${companyId}`, {
                        method: "PUT",
                        body: JSON.stringify(companyObj),
                        headers: {
                                "Content-Type":"application/json"
                        }
                }).then(res => res.json())
        },

}


/* Example how to GET DAT all data (useres and companies)*/
API.getAllData().then(res => console.log(res[0].company.menu))

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
