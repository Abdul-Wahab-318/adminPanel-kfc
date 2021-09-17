import React , {useState , useEffect} from 'react'
import ProdEditForm from '../prodEditForm/ProdEditForm'
import './ProductTableRow.css'


export default function ProductTableRow(props) {

    
    let product = props.product
    product.stock = String(product.stock).padStart(2,"0")
    let [editProduct , setEditProduct ] = useState({...product})

    
    let handleDelete = async (id)=>{
        await fetch(`http://localhost:8000/kfc/delete/${id}`,
        {method: "DELETE" , credentials:'include'  } )
        .then(resp=>resp.json)
        props.getProducts()
    }

    let [hiddenForm ,setHiddenForm]= useState(true)

    let showEditForm =  (id) =>{
        setHiddenForm(false)
    }

    let hideEditForm =  (id) =>{
        setHiddenForm(true)
    }
 


    let handleEdit = async (id) =>{
        await fetch(`http://localhost:8000/kfc/update/${id}`,
        {method: "PUT" ,
        headers: {"Content-Type" : "application/json"} ,
        credentials:'include',
        body : JSON.stringify(editProduct) })
        .then(_=> console.log("successully updated"))
        props.getProducts()
    }


    return (
        <main className="table-row prod-table-row">
     
            <p className="fw-bold">{product.title}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.stock}</p>
            <button className="btn btn-danger delete-btn w-75" onClick={()=>handleDelete(product._id)}>delete</button>
            <button className="btn btn-warning delete-btn w-75" onClick={()=> showEditForm(product._id)}>edit</button>
            {hiddenForm? null : <ProdEditForm product =  {product} setHiddenForm = {setHiddenForm} getProducts = {props.getProducts}  />}
        </main>
    )
}
