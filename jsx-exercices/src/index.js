import React from 'react';
import ReactDOM from 'react-dom';
function MyThings(){
    return(
        /*<div className='book'>
            <div className='title'>
              The Title
            </div>
            <div className='author'>
                The Author
            </div>
            <ul className='stats'>
                <li className='rating'>
                5 stars
                </li>
                <li className='isbn'>
                12-345678-910
                </li>
            </ul>
        </div>*/
        React.createElement('div',{className:'book'},
            React.createElement('div',{className:'title'},'The title'),
            React.createElement('div',{className:'author'},'The author'),
            React.createElement('div',{className:'stats'},
                React.createElement('ul',{className:'rating'},
                    React.createElement('li',{className:'rating'},'5 stars'),
                    React.createElement('li',{className:'isbn'},'12-345678-910')
                )    
            )
        )
    );
}
function Greeting(){
    var username=null;
    return(
        <div>{username? 'Hello, {username}':'Not logged in'}</div>
    );
}
ReactDOM.render(<Greeting/>,document.getElementById('root'));