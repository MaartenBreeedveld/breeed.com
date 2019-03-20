import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Axios from 'axios';

export default class MarkdownReader extends Component {
  constructor(props){
    super (props) 
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    const dataString = `${process.env.PUBLIC_URL}/markdown/${this.props.src}.md`;
    Axios.get(dataString).then((res) => {
      const content = res.data;
      this.setState({ content });
    }).catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <Markdown source={this.state.content} escapeHtml={false} />
    )
  }
}

