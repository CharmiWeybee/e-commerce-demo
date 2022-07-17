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
             products.map(product=><li key={product.id}>{product.name}</li>)
            }
        </ul></div>
      )
    }
    
    export default Products