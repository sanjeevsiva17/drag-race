import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from './Draggable';

class App extends Component{
  state = {
    comp : null,
    num:0,
    arr:[]
  };

  getComp = () =>{
    const {Comp, num} = this.state;

    let _arr = [...this.state.arr]

    if (_arr.length > 0 ){
      let h = _arr[num - 1].h + 150;
      let w = _arr[num - 1].w + 150;
      let bg = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
      _arr.push({
        h,
        w,
        bg
      });
    }
    else{
      let h = 100,
      w = 100,
      bg = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
      _arr = [{
        h,
        w, 
        bg
      }];
    }
    
    
    this.setState({
      arr: _arr,
      num: num +1
    })

    let index = num -1 > 0? num -1 : 0;

    return(
      <Draggable
      height={`${_arr[index].h}px`}
      width={`${_arr[index].w}px`}
      bg={`${_arr[index].bg}`}
    >
      {Comp && Comp}
      </Draggable>
    );


  }

  add =() =>{
    let Comp = this.getComp();
    this.setState({
      Comp
    })
  }

  render = () =>{
    return (
      <div>
        <button onClick={this.add}> Add Parent </button>
        {this.state.Comp}
      </div>
    )
  }

}
export default App;
