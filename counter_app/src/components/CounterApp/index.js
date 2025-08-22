import { Component } from "react";
class CounterApp extends Component{
    state={count:0}

    onDecrement=()=>{
        this.setState((prevsate=>({count:prevsate.count-1})))
    }

    onIncreament=()=>{
        this.setState((prevsate=>({count:prevsate.count+1})))
    }

    render(){
        return (
        <div className="app-container">
            <div className="content-container">
                <h1 className="heading">Counter</h1>
                <p className="counter"></p>
                <div>
                    <button className="decrease-button" type="button" onClick={this.onDecrement}>Decrease</button>
                    <button className="increase-button" type="button" onClick={this.onIncreament}>Increase</button>
                </div>
            </div>

        </div>
    )}
}

export 