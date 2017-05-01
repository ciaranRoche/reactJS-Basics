/**
 * Created by muldoon on 22/01/17.
 */
import React from "react";

export class Home extends React.Component{
    render(){
        var random = "Hello there my old friend"
        console.log(this.props);
        return(
            <div>
                <p>In a new Component!</p>
                <p>{random}</p>
                <p>Your name is {this.props.name} and your age is {this.props.age}</p>
                <p>User Object => Name : {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number,
    user : React.PropTypes.object,
    childen : React.PropTypes.element.isRequired
};