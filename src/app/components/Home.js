/**
 * Created by muldoon on 22/01/17.
 */
import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            newAge : props.age,
            status: 0
        };
    }


    onMakeOlder(){
        this.setState({
            newAge : this.state.newAge + 3
        });
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name} and your age is {this.state.newAge}</p>
                <p>Status : {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number,
};