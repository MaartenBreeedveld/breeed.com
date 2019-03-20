import React, { Component } from 'react';
import MarkdownReader from '../components/helpers/MarkdownReader';
import qs from 'qs';

class Products extends Component {
  constructor(props) {
    super(props)
    this.query = undefined;
  }

  componentDidMount() {
    this.query = qs.parse(window.location.search, { ignoreQueryPrefix: true }).query;
  }

  render() {
    return (
      <MarkdownReader src={qs.parse(window.location.search, { ignoreQueryPrefix: true }).query}/>
    )
  }
}

export default Products;