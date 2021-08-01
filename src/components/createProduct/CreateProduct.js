import React, { useState } from 'react'
import './CreateProduct.css'

export default function CreateJob() {


    let handleSubmit = async (newProduct) =>{
        if(validateForm() == false) return false
        await fetch("http://localhost:8000/kfc/create" , {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(resp=> console.log("added successfully")).then(resp => alert("Job Created Successfully !"))
        setNewProduct({title:"" , image:"" , description: "" , price:"" , stock:"" , slug: "make-it-a-meal" , category:"make-it-a-meal"})
    }

    let validateForm= ()=>{
        /*if(Object.keys(newProduct).length == 7 ) return true
        return false*/
        for(let el of Object.keys(newProduct))
        {
            if(newProduct[el]===null) return false
        }
        return true
    }

    let [newProduct , setNewProduct] = useState({title:"" , image:"" , description: "" , price:"" , stock:"" , slug: "make-it-a-meal" , category:"make-it-a-meal"})
    console.log(newProduct)
    return (
        <div className="create-job bg-light py-5">
            <div className="container">
             <div className="row px-5">
                 <div className="col-6">
                 <input value={newProduct.title} type="text" className="form-control" placeholder="Product Title" spellCheck="false"  onChange={(e)=> setNewProduct({...newProduct , title : e.target.value})} />
                 </div>
                 <div className="col-6">
                 <input value={newProduct.image} type="text" className="form-control  " placeholder="Image URL" onChange={(e)=> setNewProduct({...newProduct , image: e.target.value})}  />
                 </div>
                 <div className="col-12">
                     <textarea value={newProduct.description} className="form-control " name="Description" id="" cols="20" rows="5" spellCheck="false"  placeholder="Description" onChange={(e)=> setNewProduct({...newProduct , description: e.target.value})}></textarea>
                 </div>
                 <div className="col-6">
                     <input value={newProduct.price} type="text" className="form-control" placeholder="Price " onChange={(e)=> setNewProduct({...newProduct , price: e.target.value})}  />
                 </div>
                 <div className="col-6">
                     <input value={newProduct.stock} type="text"  className="form-control" placeholder="Stock " onChange={(e)=> setNewProduct({...newProduct , stock: e.target.value})} />
                 </div>
                 <div className="col-6">
                     <select  name="slug" id="slug" className="form-control" onChange={e=> setNewProduct({...newProduct , slug : e.target.value})}>
                         <option value="make-it-a-meal">make-it-a-meal</option>
                         <option value="everyday-value">everyday-value</option>
                         <option value="signature-box">signature-box</option>
                         <option value="sharing">sharing</option>
                         <option value="promotions">promotions</option>
                         <option value="snacks">snacks</option>
                         <option value="midnight-deals">midnight-deals</option>
                     </select>
                 </div>
                 <div className="col-6">
                     <select  name="category" id="category" className="form-control" onChange= {e=> setNewProduct({...newProduct , category: e.target.value})}>
                         <option value="make-it-a-meal">make-it-a-meal</option>
                         <option value="everyday-value">everyday-value</option>
                         <option value="signature-box">signature-box</option>
                         <option value="sharing">sharing</option>
                         <option value="promotions">promotions</option>
                         <option value="snacks">snacks</option>
                         <option value="midnight-deals">midnight-deals</option>
                     </select>
                 </div>
             </div>
             <button className="btn-primary mx-auto d-block submit-job" onClick={_=>handleSubmit(newProduct)}>Submit</button>
            </div>
        </div>
    )
}
