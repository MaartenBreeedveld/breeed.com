import React, { Component } from 'react';
import ProductList from '../components/ProductList';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ProductList />
      </div>
      )
  }
}
export default Home;