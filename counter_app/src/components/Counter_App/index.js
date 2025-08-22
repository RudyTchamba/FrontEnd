import { Component } from "react";
class CounterApp extends Component{
    state={count:0}

    
    render(){
        return (
        <div className="app-container">
            <div className="content-container">
                <h1 className="heading">Counter</h1>
                <p className="counter"></p>
                <div>
                    <button className="decrease-button" type="button" onClick={this.onDecrement}>Decrease</button>
                    <button className="increase-button" type="button" onClick={this.onIcreament}>Increase</button>
                </div>
            </div>

        </div>
    )}
}

export default CounterApp