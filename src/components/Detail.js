import React, {useEffect, useState} from "react";

import axios from "axios";

import { Link, useParams } from "react-router-dom";

 

const  Detail= () => {

    const[product,setProduct] = useState([]);

   

    const {id} = useParams();

   

    useEffect(()=>{

        loadAllProduct();

    },[])

 

    const loadAllProduct = async ()=>{

      const response = await axios.get(`http://localhost:3005/products/${id}`);  

      setProduct(response.data);  

    }

 

  return (

    <>
<nav className="navbar navbar-expand-lg bg-dark ">
        
        
      <div className="container-fluid">
        <a className="navbar-brand text-warning" href="/home">
          <b>Fashion Paradise</b>
        </a>
      </div>
    </nav>
    <div className="container">
    
    <h3 className="text-warning text-center mt-4">Item Details</h3>

    <br/>

    

    <div className="card mb-3" >

  <div className="row g-0">

    <div className="col-md-4">

      <img src={product.image} className="img-fluid rounded-start h-100 p-5 shadow-lg" alt="img"/>

</div>

<div className="col-md-8">

  <div className="card-body">

    <h2 className="card-title">  Title : {product.title}</h2>

    <h3 > Category : {product.category}</h3>

    <h4 > Price : ₹ {Math.ceil (product.price)} </h4>

<p className="card-text"><h6>Product description:</h6> {product.description}</p>


<Link  to="/home" className="btn btn-dark text-warning ms-4 ">Back</Link >

  </div>

     

    </div>

  </div>

</div>

   </div>

    </>

   

  )

}

 

export default Detail