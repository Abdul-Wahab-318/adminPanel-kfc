import React , {useState , useEffect} from 'react'
import './Table.css'
import TableRow from '../tableRow/TableRow';
import UserTableRow from '../userTableRow/UserTableRow';

export default function Table() {

    let serverUrl= "http://localhost:8000"
    //GET ALL PRODUCTS FROM DB AND SET THEM
    let [products , setProducts] = useState([])
    let getProducts = async ()=>{
      await fetch(`${serverUrl}/kfc/products`).then(resp=> resp.json()).then((data)=>{setProducts(data.allProducts) ; console.log("success")})
    }
    useEffect(()=>{
      getProducts()
      getUsers()
    },[])

    //GET ALL USERS FROM DB
    let [users, setUsers] = useState([])
    let getUsers = async ()=>{
      await fetch(`${serverUrl}/kfc/users`).then(data=> data.json()).then(data=> setUsers(data.users)).then(e=> console.log("users loaded"))
    }

    return (
        <div className="table-parent">
            <h2>Products</h2>
            <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                <th>#id</th>
                <th>title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Stock</th>
                </tr>
                </thead>
            <tbody>
              {products.map((el,index)=> <TableRow key={index} product={el} getProducts={getProducts}/>)}

          </tbody>
        </table>
        <h2 className="mt-5">User Accounts</h2>
        <table className="table table-striped table-sm">
                <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Action</th>
                </tr>
                </thead>
            <tbody>
              {users.map((el,index)=> <UserTableRow key={index} user={el} getUsers={getUsers}/>)}

          </tbody>
        </table>
      </div>
        </div>
    )
}
