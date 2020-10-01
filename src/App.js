import React,{Component} from "react";
import "./style.css";
import Movies from "./Components/movies";
import Counters from "./Components/Counters";
import NavBar from "./Components/navbar";

class App extends Component{
render(){
  return(
    <main className="container">
    <Movies />
    </main>
  );
}
}


//  class App extends Component{
//   state={
//   counters: [
//     {id:1,value: 2},
//     {id:2,value: 1},
//     {id:3,value: 1},
//     {id:4,value: 6},
    
//   ]
// };

// constructor(){
//   super();
//   console.log("App constructor");
//   //this.state=
// }
// componentDidMount(){
//   console.log("App Mounted");
// }

// handleReset = () =>{
  
//     const counters = this.state.counters.map(c => 
//     { c.value = 0;
//     return c; });
//     this.setState({ counters })
//     console.log(counters)
    

//   };

// handleDelete = (counterId) =>{
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters })

//   };

//   handleIncrement = (counter) =>{
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index]= {...counter};
//     counters[index].value++;
//     this.setState({counters});

//   };

//     handleDecrement = (counter) =>{
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index]= {...counter};
//     counters[index].value--;
//     this.setState({counters});

//   };
  
//   render(){
//     console.log("App Rendered");
//   return (
//     <React.Fragment>
//     <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
//     <main className="container">
    
//       <Counters onReset={this.handleReset}
//       onIncrement={this.handleIncrement} 
//       onDecrement={this.handleDecrement} 
//       onDelete={this.handleDelete} 
//       counters = {this.state.counters}/>
//     </main>
//     </React.Fragment>
//   );
//   }
// }
 export default App;