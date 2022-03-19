// Packages
import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:5005",
    headers: {
        "Content-type": "application/json",
    },
})

class Service {
    allUsers() {
        return http.get("/all-users")
    }

    search(query) {
        return http.get(`/search/${query}`)
    }
}

export default new Service()
