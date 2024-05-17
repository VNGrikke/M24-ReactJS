import React, { Component } from 'react';
import Exercise1 from './component/ss30/Exercise1';
import Exercise2 from './component/ss30/Exercise2';
import Exercise3 from './component/ss30/Exercise3';
import Exercise4 from './component/ss30/Exercise4';

// interface Props {
//   name: string;
// }

// interface State {
//   name: string;
//   count: number;
// }

// export default class App extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       name: "minh thu",
//       count: 0
//     };
//     console.log("constructor");
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({count: prevState.count + 1}));
//   };

//   // componentDidMount(): void {
//   //   console.log("didMount");
//   // }

//   // componentWillUnmount(): void {
//   //   console.log("willUnmount");
//   // }

//   shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
//       console.log(11111);
//     return true;
//   }
//   componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
//     console.log("componentWillUpdate");
//   }
//   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
//     console.log("componentDidUpdate")  
//     this.componentWillUnmount();    
//   }
//   componentWillUnmount(): void {
//       console.log("componentWillUnMount");
//   }
//   render() {
//     console.log("re-render");
//     return (
//       <>
//         {this.state.name}
//         <p>giá trị biến count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Count</button>
//       </>
//     );
//   }
// }

export default function 
() {
  return (
    <div>
      <Exercise1></Exercise1>
      <Exercise2></Exercise2>
      <Exercise3></Exercise3>
      <Exercise4></Exercise4>
    </div>
  )
}
