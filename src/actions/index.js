import userApi from '../api/userApi'

//Actions creator
export const selectPoliza = (book) => {
    //Action
    return {
        type: 'POLIZA_SELECTED',
        payload: book
    }
} 

export const deletePoliza = (book) => {
    //Action
    return {
        type: 'POLIZA_DELETED',
        payload: book
    }
} 

export const getUsers = () => {
    return async (dispatch, getState) => {
        const users = await userApi.get('/users')
        dispatch({
            type: 'GET_USER',
            payload: users.data
        })
    }
}