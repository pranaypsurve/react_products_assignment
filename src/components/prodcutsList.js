import React , {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
function ProdcutsList() {
    const [prodcuts,setProdcuts] = useState([]);
    async function getAllProdcuts(){
        // https://fakestoreapi.com/products/
        let prodcutsData = await fetch('https://fakestoreapi.com/products/')
        let data = await prodcutsData.json();
        setProdcuts(data)
    }
    useEffect(()=>{
        getAllProdcuts()
    },[]);
    return (
        <section style={{backgroundColor:'#eee'}}>
            <div className="container py-5">
                <div className="row">
                    {
                        prodcuts.length === 0 ? <div>Loading....</div> : prodcuts.map((val,index)=><div key={index} className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light text-center"
                            data-mdb-ripple-color="light">
                            <img src={val.image} className="img-fluid" style={{height: '200px',width: '200px'}} alt={val.title} />
                          </div>
                          <div className="card-body">
                            <NavLink to={`/product/`+val.id} className="text-reset">
                              <h6 className="card-title mb-3">{val.title}</h6>
                            </NavLink>
                            <h6 className="mb-3">${val.price}</h6>
                          </div>
                        </div>
                      </div>) 
                    }
                </div>
            </div>
        </section>
    )
}
export default React.memo(ProdcutsList)