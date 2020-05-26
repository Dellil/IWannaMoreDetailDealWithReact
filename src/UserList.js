import React, {useContext} from 'react';
import {UserDispatch} from './App';


const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);
    const { username, email, id, active } = user;
    
    return (
        <div>
            <div>
                <b
                    style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}
                    onClick={() => dispatch({type: 'TOGGLE_USER', id})}
                >
                    {username}
                </b>
                &nbsp;
                <span>{email}</span>
                <button onClick={() => dispatch({type: 'REMOVE_USER', id})}>삭제</button>
            </div>
        </div>
    );
});

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    user => (
                        <User
                            user={user}
                            key={user.id}
                        >
                        </User>
                    )
                )
            }
        </div>
    );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);