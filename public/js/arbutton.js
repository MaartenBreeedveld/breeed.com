var arText = 'https://images.holoscope.io/Web/ar_text.svg';
var arImg = 'https://images.holoscope.io/Web/AR3.png';
var visible = true
var collapsed = false;

function onCollapseButtonClick() {
  collapsed = !collapsed;
  document.getElementById('holoscope-ar-button-holder').innerHTML = createButton(collapsed, visible, function() { onCollapseButtonClick(); });
}

function renderARButton () {

  var child = document.createElement("div")
  child.setAttribute("id", "holoscope-ar-button-holder");
  child.innerHTML = createButton(collapsed, visible, function() { onCollapseButtonClick(); })
  
  var doc = document.getElementById('holoscope-3d-viewer');
  console.log(doc);
  doc.appendChild(child);
  console.log('arbutton loaded');

}


function createButton(collapsed, visible, collapseClick) {
  if ( !window.orientation) {
    // visible = false;
  }

  var width = collapsed ? '115px' : '245px';

  return (
    `
      <div>
        <style>
        .ar-button-container {
          position: absolute;
          top: 0px;
          right: 0px;
          height: 40px;
          background-color: #fff;
          cursor: pointer;
          display: flex;
        }
        
        .ar-button-content {
          display: flex;
          transition: 0.3s all ease;
        
        }
        
        .ar-button-text {
          width: 40px;
          height: 40px;
          background-repeat: no-repeat;
          background-size: 35px;
          background-position: center;
        }
        
        .ar-button-message {
          display: flex;
          align-items: center;
          white-space: nowrap; 
          overflow: hidden;
          text-overflow: clip;
        }
        
        .ar-button-message > a {
          font-style: normal;
          font-family: 'Open Sans', sans-serif;
          text-shadow: none;
          font-size: 13px;
          font-weight: 400;
          text-decoration: none;
          color: #111;
          margin: 0 10px;
        }
        
        .ar-button-closed {
          background-color: #2f8bbd;
          color: #fff;
          height: 40px;
          display: flex;
          align-items: center;
        }        
        </style>  
        <div id="holoscope-ar-button" className="ar-button-container">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link href="./styles/arbutton.css" rel="stylesheet">
          ${visible ? 
            `<div className="ar-button-content" style="width: ${width}" onClick=${collapseClick}>
              <div className={'ar-button-closed'} >
                ${collapsed ? 
                  `<i className="material-icons">chevron_left</i>`
                  :
                  `<i className="material-icons">chevron_right</i>`
                }
              </div>
              ${!collapsed ?
                `<div className="ar-button-message" >
                  <a href=https://view.holoscope.io/model/${'id'}} target="_blank" rel="noopener noreferrer">View in AR on the HoloScope app</a>
                </div>`
                :
                `<div className="ar-button-message">
                  <div className="ar-button-text" style={{backgroundImage: url(${arText}), backgroundSize: '35px', marginLeft: '5px' }} />
                  <img src={arImg} style={{width: '40px', height: '40px'}} />
                </div>`
              }
            </div>`
            : 
            null 
          }
        </div>
      </div>
    `
  )
}
