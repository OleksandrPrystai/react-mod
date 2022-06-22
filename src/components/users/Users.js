import {useEffect, useState} from "react";
import User from "../user/User";
import './usersStyle.css'

export default function Users() {

    let [users, setUsers] = useState([])
    let [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

    }, []);

    const choseUser = (user) => {
        setUser(user);
    }

    return (
        <div>
            {
                user.id && <div className='styleUsers'>{user.name}{' '}{user.email}</div>
            }
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                    choseUser={choseUser}

                />)
            }


        </div>
    )

}