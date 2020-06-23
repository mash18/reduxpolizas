import { combineReducers } from 'redux'

const booksReducer = [
        {
            name: "HECTOR",
            mount: 300
        },
        {
            name: "KARLA",
            mount: 200
        }
]

const selectepolizaReducer = (selectedBook = booksReducer, action) => {
    switch(action.type){
        case "POLIZA_SELECTED":
            return [...selectedBook, action.payload]
        case "POLIZA_DELETED":
            return selectedBook.filter(poliza => !poliza.name.includes(action.payload.name))
        default:
            return selectedBook
    }
}

const userReducers = (users = [], action) => {
    switch(action.type){
        case 'GET_USER':
            return action.payload
        default:
            return users
    }
}

export default combineReducers({
    polizaSelected: selectepolizaReducer,
    users: userReducers
})