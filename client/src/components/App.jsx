import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      clicked: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      clicked: this.product
    })
  }

  getProducts() {
    axios.get('/products')
      .then(results => {
        this.setState({
          products: results.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {

    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer products={this.state.products} getProducts={this.getProducts}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.products} getProducts={this.getProducts} onClick={this.hand}/>
          </div>
        </div>
      </div>
    );
  }
}
