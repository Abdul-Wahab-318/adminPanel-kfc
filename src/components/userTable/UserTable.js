import React , {useState,useEffect} from 'react'
import UserTableRow from '../userTableRow/UserTableRow'

export default function UserTable() {

    let serverUrl= "http://localhost:8000"
    //GET ALL USERS FROM DB
    let [users, setUsers] = useState([])
    let getUsers = async ()=>{
        await fetch(`${serverUrl}/kfc/users`)
        .then(data=> data.json())
        .then(data=> setUsers(data.users))

    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="user-table-component">
            <h2 id="userAccounts">User Accounts</h2>
            <div className="table-inner">
              <div className="table-inner-headings">
                <span>Name</span>
                <span>Email</span>
                <span>Contact No.</span>
              </div>
              {users.map((el,index)=> <UserTableRow key={index} user={el} getUsers={getUsers}/>)}
            </div>
        </div>
    )
}
