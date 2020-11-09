import React from 'react';

const Products = (props) => {
  return (
    <div className='product-list-entry' onClick={()=>{}}>
      <img src={props.product.image}/>
      <div><h3>{props.product.item}</h3></div>
      <div>Current Bid: ${props.product.curr_bid}</div>
      <div>{props.product.ends_in} Days</div>
      <br></br><br></br><br></br>
    </div>
  );
};

export default Products;