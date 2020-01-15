import React from 'react';
import './Todo.css';

export default props => 
<div class="custom-control custom-checkbox list" >
            <input  onClick={props.toogleComplete} type="checkbox" class="custom-control-input" id={props.id} />
            <label style={{textDecoration: props.complete? "line-through":"", color:props.complete? "gray":""}}
            class="custom-control-label" for={props.id} key={props.id}><span>{props.text}</span></label>
          </div> 