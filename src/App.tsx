import React from 'react';

import {TodoList, UserList} from "./components";

const App: React.FC = (): React.ReactElement => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
};

export default App;