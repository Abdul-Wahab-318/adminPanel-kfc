import './UserProfile.css'
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    let [user,setUser] = useState({activeOrders:[]})
    let {slug} = useParams() // GET USER ID FROM URL
    let [loading ,setLoading] = useState(false)
    let getUser = async ()=>{
        setLoading(true)
        await fetch(`http://localhost:8000/kfc/users/userID/${slug}`).then(resp=> resp.json()).then(data=> setUser(data.user) , setLoading(false))
    }
    console.log(user)

    useEffect(()=>{
        getUser()
    },[])

    

    console.log(user.activeOrders)
    return (
        <main className="user-profile-parent">
            <section className="hero-section">
                <h6>{`${user.firstName} ${user.lastName}`}</h6>
            </section>
            <section className="user-details">
                <div className="personal-details">
                    <h6>Personal Details</h6>
                    <p>Email : {user.email}</p>
                    <p>Country : {user.country}</p>
                    <p>Province : {user.province}</p>
                    <p>City : {user.city}</p>
                </div>
                <div className="order-details">
                    <h6>Order Details</h6>
                    {user.activeOrders.map((el,i)=>{
                        return <p key={i}>{el}</p>
                    })}
                </div>
            </section>
        </main>
    )
}
