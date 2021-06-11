import {Dispatch} from "redux";
import axios from "axios";

import {UserAction, UserActionTypes, UserInterface} from "../../types/user";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})

            const {data} = await axios.get<UserInterface[]>(`https://jsonplaceholder.typicode.com/users`)
            console.log(data)
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data})
            }, 500)
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}