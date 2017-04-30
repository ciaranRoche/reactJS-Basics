/**
 * Created by muldoon on 22/01/17.
 */
import React from "react";

export class Home extends React.Component{
    render(){
        let content = "";
        if(true){
            content = <p>Hello World</p>
        }
        return(
            <div>
                <p>In a new Component!</p>
                {content}
            </div>
        );
    }
}