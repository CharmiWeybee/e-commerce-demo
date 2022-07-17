    import React,{useState,useEffect} from 'react';
    import axios from 'axios';
    
    function Products() {
        const [products, setProducts] = useState([ ])
        useEffect(()=>{
            // var axios = require('axios');
            var config = {
              method: 'get',
              url: 'https://kamaraapi.weybee.in/api/products',
              headers: { }
            };

axios(config)
.then(function (response) {
  console.log(response.data.data);
  setProducts(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
        },[])
      return (
        <div><ul>
            {
              products.map(items =>
                  <div className="card d-flex" key={items.id}>
                      <img className="card-img-top" src={items.base_image.small_image_url} alt="Card cap"></img>
                      <div className="card-body">
                          <div className='card-details' id="details">
                            <p className='card-name'>{items.name}</p>  
                            <p className='card-name'>{items.sku}</p>  
                            {items.description}  
                            <p className="card-price">₹{items.price}</p>
                          </div>
                        </div>
                      <div className= "card-footer">
                        {/* <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onAdd(items)}>+ Add To Cart</button> */}
                    </div>
                  </div>
              )
            }
        </ul></div>
      )
    }
    
    export default Products