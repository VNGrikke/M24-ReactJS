import React, { Component } from 'react'

export default class Class extends Component {
    handleClick = () =>{
        console.log("classssss");
        
    }
    handleDelete = (userID:any) =>{
        console.log( userID);
        
    }
    render() {
    return (
        <div>class
            <p onClick={() => this.handleDelete(22) }>Hai</p>
            <button onClick={this.handleClick}>click meeee</button>
        </div>
      
    )
  }
}
