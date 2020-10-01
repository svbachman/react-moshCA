import React,{Component} from "react";
import Counter from "./counter";



class Counters extends Component {

render(){
  const {onReset,counters,onDelete,onIncrement,onDecrement}= this.props;
  return(
    <div>
    <button onClick={onReset} className="btn bnt-primary m-2"> RESET</button>
    {this.props.counters.map(counter => 
     <Counter key={counter.id} 
     onDelete={onDelete} 
     onIncrement={onIncrement}
     onDecrement={onDecrement}
      counter= {counter}
      />
     
     )}
    </div>
  );
}
}

export default Counters;