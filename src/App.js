import React from 'react';

import './App.css';
import Box1 from './Box1.js';
import Box2 from './Box2.js';
import Box3 from './Box3.js';
import Box4 from './Box4.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
      Box1Color: "green",
      Box2Color: "blue",
      Box3Color: "purple",
      Box4Color: "grey",
      colorName:""
    };
   this.setColor = this.setColor.bind(this);
   this.setColorNameFromChild = this.setColorNameFromChild.bind(this);
  }

  setColor() {
    console.log("fsdfdsf")
    this.setState({
      Box1Color: this.state.colorName,
      Box2Color: this.state.colorName,
      Box3Color: this.state.colorName,
      Box4Color: this.state.colorName,
    });
    console.log(this.state.Box1Color);

  }
   
  async setColorNameFromChild(colorname1) {
   
    
    await this.setState({
      colorName: colorname1
    });


    this.setColor();
    
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.colorName} onChange={(e) => this.setState({ colorName: e.target.value })} />
        <button  onClick={this.setColor}>Submit</button>
      <h1> My Favorite Color is {
        this.state.favoritecolor
        } </h1>
        <div style={{display: "flex"}}></div>
        <Box1 color = {
          this.state.Box1Color
        }
          changeColor = {
            this.setColorNameFromChild
          }
          
        />
         < Box2 color = {
           this.state.Box2Color
         }
           changeColor = {
             this.setColorNameFromChild
           }
        />
         < Box3 color = {
           this.state.Box3Color
         }
           changeColor = {
             this.setColorNameFromChild
           }
        />
         < Box4 color = {
           this.state.Box4Color
         }
           changeColor = {
             this.setColorNameFromChild
           }
         />
        </div>
    );
  }
}


export default App;
