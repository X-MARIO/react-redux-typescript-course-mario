export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: UserInterface[]
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

export interface UserState {
    users: UserInterface[],
    loading: boolean,
    error: null | string
}

export interface UserInterface {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}