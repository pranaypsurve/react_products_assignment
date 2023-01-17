import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

function ProductDetails() {
  const [prodcut, setProdcut] = useState(null);
  const { id } = useParams();
  console.log(id)
  async function getAllProdcut() {
    // https://fakestoreapi.com/products/1
    let prodcutsData = await fetch(`https://fakestoreapi.com/products/` + id)
    let data = await prodcutsData.json();
    console.log(data)
    setProdcut(data)
  }
  useEffect(() => {
    getAllProdcut()
  }, []);
  return (
    <>
    {
      prodcut && <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img id="main-image" src={prodcut.image} width="250" alt={prodcut.title} /> </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <NavLink to='/' > <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div></NavLink> <i className="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div className="mt-4 mb-3">
                      <h5 className="text-uppercase">{prodcut.title}</h5>
                      <div className="price d-flex flex-row align-items-center"> <span className="act-price">${prodcut.price}</span>
                        <div className="ml-2 ps-2"> <span>40% OFF</span> </div>
                      </div>
                    </div>
                    <p className="about">{prodcut.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }</>
    
      )
}
export default React.memo(ProductDetails)