import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Cart.css";

 

const Cart = () => {

  const [total, setTotal] = useState(0);

  const [data, setData] = useState([]);

  const [user, setUser] = useState([]);

 

  let navigate = useNavigate();

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("data"));

    if (data) {

      setData(data);

    }

    if (data == null) {

      JSON.parse(localStorage.getItem("data"));

    } else {

      setTotal(data.reduce((sum, item) => sum + item.price * item.quantity, 0));

    }

    const user = JSON.parse(localStorage.getItem("userData"));

    if (user) {

      setUser(user);

    }

  }, []);

 

  let date = new Date();

  let day = date.getDate();

  let month = date.getMonth() + 1;

  let year = date.getFullYear();

  const summary = [

    {

      date: `${day}/${month}/${year}`,

      orderId: "SCA" + Math.ceil(Math.random() * 10000000),

      name: user.map((val) => val.fName + "  " + val.lName).toString(),

      email: user.map((val) => val.email).toString(),

      item: data.length,

      price: Math.ceil(total)

    }

  ];

  console.log(summary);

  useEffect(() => {

    if (data.length !== 0) {

      const sum = JSON.parse(localStorage.getItem("sum"));

      if (sum == null) {

        localStorage.removeItem("data");

        localStorage.setItem("sum", JSON.stringify(summary));

      } else {

        localStorage.setItem("sum", JSON.stringify([...sum, ...summary]));

      }

    }

  }, [summary]);

 

  // const total = calculateTotal();

 

  // function calculateTotal(){

  //   let t=0;

  //   data.forEach(data=>{

  //     if(t==0){

  //       t=data.price

  //     }

  //     else{

  //       t=t+data.price;

  //     }

  //   })

  //   return t;

  // }

 

  const removeItemFromCart = (value) => {

    if (data != null && data.find((data) => data.id == value.id)) {

      value.quantity = value.quantity - 1;

      localStorage.setItem("data", JSON.stringify(data));

    }

  };

  const addItemToCart = (value) => {

    if (data != null && data.find((data) => data.id == value.id)) {

      value.quantity = value.quantity + 1;

      localStorage.setItem("data", JSON.stringify(data));

    }

  };

  const handleCheck = () => {

    localStorage.removeItem("data");

  };

 

  return (

    <>

      <nav className="navbar navbar-expand-lg bg-dark text-warning sticky-top">

        <div className="container-fluid">

          <a className="navbar-brand text-warning fw-bold" href="/home">

        Fashion Paradise

          </a>

        </div>

      </nav>

      <h1 className=" container text-center text-warning mt-4 bg-light fw-bold">

        Your Cart

      </h1>

      {data == null ? (

        <h1 className="center-screen text-danger ">Your cart is empty !</h1>

      ) : (

        data.map((val) => {

          return (

            <div className="container mt-4">

              <div className="row border border-dark-4 p-3 g-0">

                <div className="col-md-2 col-sm-2 ">

                  <img

                    src={val.image}

                    className=" border border-dark-2 p-2 img"

                  />

                </div>

                <div className="col-md-5 col-sm-1">

                  <h5 className="p-4">{val.title}</h5>

                  <p className="ms-4">Quantity : {val.quantity}</p>

                  <div>

                    <button

                      className="btn-danger ms-4"

                      onClick={() => removeItemFromCart(val)}

                    >

                      <span

                        style={{ fontSize: "10px" }}

                        className="material-symbols-outlined"

                      >

                        remove

                      </span>

                    </button>

                    <button

                      className="btn-success ms-4"

                      onClick={() => addItemToCart(val)}

                    >

                      <span

                        style={{ fontSize: "10px" }}

                        className="material-symbols-outlined"

                      >

                        add

                      </span>

                    </button>

                  </div>

                </div>

                <div className="col-md-2 ">

                  <h5 className="p-4">

                    {val.quantity} x ₹ {Math.ceil(val.price)}

                  </h5>

                </div>

                <div className="col-md-2 ">

                  <h5 className="p-4">

                    {" "}

                    ₹ {Math.ceil(val.quantity * val.price)}

                  </h5>

                </div>

              </div>

            </div>

          );

        })

      )}

      {data == null ? (

        0

      ) : (

        <div>

          <h4 className="col-md-3 border border-success p-3  mx-auto me-5  bg-light mt-5 text-warning  ">

            Total Amount : ₹ {Math.ceil(total)}

          </h4>

          <div className="col-md-3 mx-auto me-5  mt-3">

            <button

              className=" btn btn-dark text-warning "

              onClick={() => {

                handleCheck();

                setTimeout(() => {

                  navigate("/order");

                }, 1000);

              }}

            >

              CHECKOUT

            </button>

          </div>

        </div>

      )}

    </>

  );

};

 

export default Cart;
