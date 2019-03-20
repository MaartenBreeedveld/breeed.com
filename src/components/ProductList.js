import React, { Component } from 'react';
import image from '../img/kast_img.jpg'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <img className="product-image" src={image} />
          </div>
          <div className="line-break" />
          <h1>Bookcase</h1>
          <p className="paragraph-sub">By Maarten Breedveld</p>
          <p>The random dents and occasional paint splatters make it clear to see that it's materials had a 'previous life'.
          </p>
          <p>
            In fact, it's previous life used to be the floor of the 'cinema room' of a good friend of this case's creator. Many good evenings were spent on this floor. 
            It would be a waste to erase those memories.
          </p>
          <div className="line-break" />
          <h2>3d viewer</h2>
          <div id="holoscope-3d-viewer">
            <iframe className="three-viewer" sandbox="allow-scripts allow-same-origin allow-popups" src="http://localhost:3000/embed/5b7543dc2b6e101214785fbd" ></iframe>
          </div>
          <br/>
        </div>
      </div>
      )
  }
}
export default ProductList;