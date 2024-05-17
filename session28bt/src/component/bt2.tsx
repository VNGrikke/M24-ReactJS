import React, { Component } from 'react';

interface InfoState {
    id:number,
    name:string,
    birthdate:string,
    address:string
}

interface ComponentInfoState {
    info:InfoState
}
export default class bt2 extends Component<ComponentInfoState, InfoState>{
    constructor(props:ComponentInfoState){
        super(props);
        this.state={
            id:1,
            name:"Nguyen Van Vuong",
            birthdate :"15/11/2005",
            address :"Hai Duong",}
    }
    render() {
        return (
            <>
                <h1>thông tin cá nhân</h1>
                <p>id: {this.state.id}</p>
                <p>tên: {this.state.name}</p>
                <p>Ngày sinh: {this.state.birthdate}</p>
                <p>Địa chỉ: {this.state.address}</p>

            </>
        )
      }
}

