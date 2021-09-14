import React , {useState , useEffect} from 'react'
import './ProductTableRow.css'


export default function ProductTableRow(props) {
    let product = props.product
    product.stock = String(product.stock).padStart(2,"0")

    
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
 
    let [editProduct , setEditProduct ] = useState({...product})


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
            {hiddenForm? <div className="d-none"></div> :<div className="edit-form bg-dark rounded">
                <button className="close-form btn-danger rounded" onClick={hideEditForm}>x</button>
                <h5 className="text-primary">Title</h5>
                <input spellCheck="false" type="text" className="mb-4 border-2 border-primary rounded" value={editProduct.title} onChange={(e)=> setEditProduct({...editProduct , title : e.target.value })}  />
                <h5 className="text-primary">Description</h5>
                <textarea className="w-100 mb-4 border-2 border-primary rounded" name="description" id="description"  rows="5" value={editProduct.description} onChange={(e)=>setEditProduct({...editProduct  , description: e.target.value})}></textarea>
                <h5 className="text-primary">Category</h5>
                <select name="category" id="category" className="mb-4 border-2 border-primary rounded" value={editProduct.category} onChange={(e)=> setEditProduct({...editProduct  , category: e.target.value})}>
                    <option value="everyday-value">everyday-value</option>
                    <option value="make-it-a-meal">make-it-a-meal</option>
                    <option value="signature-box">signature-box</option>
                    <option value="sharing">sharing</option>
                    <option value="promotions">promotions</option>
                    <option value="snacks">snacks</option>
                    <option value="midnight-deals">midnight-deals</option>
                    <option value="featured">featured</option>
                </select>   
                <h5 className="text-primary">Price</h5>
                <input type="numeric" className="mb-4 border-2 border-primary rounded" value={editProduct.price} onChange={(e)=> setEditProduct({...editProduct , price : e.target.value })} />
                <h5 className="text-primary">Stock</h5>
                <input type="numeric" className="mb-4 border-2 border-primary rounded" value={editProduct.stock} onChange={(e)=> setEditProduct({...editProduct , stock : e.target.value })} />
                <input type="submit" className="btn-primary btn border-2 border-primary" onClick={()=> {handleEdit(editProduct._id) ;setHiddenForm(true)}}  />
            </div>}
        </main>
    )
}
