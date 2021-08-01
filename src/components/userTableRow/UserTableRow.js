import React from 'react'
import './UserTableRow.css'
import copy from  '../../copy.svg'
import {Link} from 'react-router-dom'


export default function UserTableRow(props) {
    let user = props.user
    let copyEmail = ()=>{
        let copied = navigator.clipboard.writeText(user.email)
        console.log(copied)
    }
    return (
        <tr className="user-table-row">
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email} <button className="unset ms-1 p-1" onClick={()=> copyEmail()}> <img src={copy} width="18px" alt="" /></button></td>
            <td>{user.phone}</td>
            <td> <Link to={`/user/profile/${user._id}`}><button className="btn btn-primary">View Profile</button></Link></td>
        </tr>
    )
}
