import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action_creators/user";
import {useActions} from "../hooks/useActions";


const UserList: React.FC = (): React.ReactElement => {
        const {users, error, loading} = useTypeSelector(state => state.user);
        const {fetchUsers} = useActions();

        useEffect(() => {
            fetchUsers()
        }, [])

        if (loading) {
            return <h1>Идёт загрузка...</h1>
        }

        if (error) {
            return <h1>{error}</h1>
        }

        return (
            <div>
                {
                    users && users.map((user) => {
                        return (
                            <div key={user.id}>{user.name}</div>
                        )
                    })
                }
            </div>
        );
    }
;

export default UserList;