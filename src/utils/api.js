// The url for the api we are hitting
// TODO change this once we deploy our db to heroku
const URL_PREFIX = "http://localhost:3001"

const API = {
        // use this for the homepage (to show all the user profiles optional)
        getAllData: () => {
                return fetch(`${URL_PREFIX}/api/users`).then(res => res.json())
        },

        createUser: (userObj) => {
                return fetch(`${URL_PREFIX}/api/users`, {
                        method: "POST",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                }).then(res => res.json())
        },

        isValidToken: (token) => {
                return fetch(`${URL_PREFIX}/api/users/isValidToken`, {
                        headers: {
                                "authorization": `Bearer ${token}`
                        }
                }).then(res => res.json())
                        .catch(err => console.log(err))
        },

        login: userObj => {
                return fetch(`${URL_PREFIX}/api/users/login`, {
                        method: "POST",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                }).then(res => res.json())
        },

        // Use this for profile pages (for editing AND storefront views)
        getSingleUser: (username) => {
                return fetch(`${URL_PREFIX}/api/users/getUser/${username}`).then(res => res.json());
        },

        // Use this when a user wants to update their profile
        updateUser: (username, userObj) => {
                return fetch(`${URL_PREFIX}/api/users/${username}`, {
                        method: "PUT",
                        body: JSON.stringify(userObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                }).then(res => res.json());
        },

        deleteUser: (username) => {
                return fetch(`${URL_PREFIX}/api/users/${username}`, {
                        method: "DELETE"
                }).then(res => res.json());
        },

        // TODO make login/logout, follow/unfollow functions

        createCompany: (companyObj) => {
                return fetch(`${URL_PREFIX}/api/companies`, {
                        method: "POST",
                        body: JSON.stringify(companyObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                }).then(res => res.json())
        },

        updateCompany: (companyId, companyObj) => {
                return fetch(`${URL_PREFIX}/api/companies/${companyId}`, {
                        method: "PUT",
                        body: JSON.stringify(companyObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                }).then(res => res.json())
        },

        sendMessage: (msgObj) => {
                return fetch(`${URL_PREFIX}/api/users/message`, {
                        method: "POST",
                        body: JSON.stringify(msgObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                })
        },

        createItem: (itemObj) => {
                return fetch(`${URL_PREFIX}/api/items`, {
                        method: "POST",
                        body: JSON.stringify(itemObj),
                        headers: {
                                "Content-Type": "application/json"
                        }
                }).then(res => res.json())
        },
}

export default API
