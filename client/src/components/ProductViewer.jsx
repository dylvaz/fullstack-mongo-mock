import axios from 'axios';
import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCurrBid: 0,
      current: this.props.products[0]
    };
    this.handleInput = this.handleInput.bind(this);
    this.updateBid = this.updateBid.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  updateCurrent() {
    this.setState({
      current: this.props.product
    });
  }

  updateBid(e) {
    e.preventDefault();
    if (curr_bid <= this.props.products.curr_bid) {
      window.alert(`Bid must be greater than ${this.props.products.curr_bid}.`);
    } else {
      axios.put(`/products/${this.props.products._id}`, {
        curr_bid: this.state.newCurrBid
      })
        .then(() => {
          window.alert(`Your bid of ${this.curr_bid} has been made.`);
          this.props.getProducts();
          this.state.newCurrBid = 0;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <div className='product-viewer'>
        <form onSubmit={this.updateBid}>
          <img src={this.props.products.image} />
          <div><h3>{this.props.products.item}</h3></div>
          <div>Original Bid: {this.props.products.min_cost}</div>
          <div>Current Bid: ${this.props.products.curr_bid}</div>
          <div>{this.props.products.ends_in} Days</div>
          <div>{this.state.current}</div>
          <input name={this.newCurrBid} placeholder={this.props.products.curr_bid}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}