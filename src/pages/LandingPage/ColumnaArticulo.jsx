import React, { useEffect, useState } from "react";
import CardArticulo from "./CardArticulo";


const ColumnaArticulo = () =>{

    const [articulo, setArticulo] = useState(null);

    useEffect(()=>{

        setTimeout( async () => {
            const response = await fetch("https://backendchallengekodemia-production.up.railway.app/api/v1/posts");
            const data = await response.json();

            setArticulo(data);

        }, 2000);
    },[]);

    return (
        <>
            <div className="container-lg crayons-header ps-0">
            <ul className="nav tabContainer">
              <li className="nav-item">
                <a
                  className="nav-link fs-5 fw-bold text-dark"
                  aria-current="page"
                  href="asdad"
                  >Relevant</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled fs-5" href="aasdas">Latest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled fs-5" href="sdasd">Top</a>
              </li>
            </ul>
          </div>
          <div className="articles" id="articlesContainer">
                {/* <CardArticulo /> */}
                { articulo && articulo.map((item, id)=>{
                    return <CardArticulo 
                            key={id}
                            data={item}
                            />
                })} 
          </div>
        </>
    )
}

export default ColumnaArticulo;