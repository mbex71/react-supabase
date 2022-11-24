import axios from "axios"

// const triviaUrl = 'https://opentdb.com/api.php?amount=10&type=boolean'

const api = axios.create({
    baseURL:'https://opentdb.com/api.php'
})

export default api