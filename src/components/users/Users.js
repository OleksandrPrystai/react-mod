import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services";
;

export default function Users({postLift}){

   let [users,setUsers] = useState([]);

   useEffect(()=>{
       getUsers().then(({data}) => setUsers([...data]))
   },[])


    return(
        <div>
            {
                users.map(user => <User
                key={user.id}
                item={user}
                postLift={postLift}
                />)
            }

        </div>
    )
}