import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import shortid from 'shortid'
import autoBind from 'react-autobind';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
        autoBind(this);
    }

    handleText(ev) {
        this.setState({text: ev.target.value});
  }

    handleSubmit = ev=> {
     ev.preventDefault();
     this.props.onSubmit({
         id: shortid.generate(),
         text: this.state.text,
         complete: false
     })
     this.setState({text:""})
     }
        

render() {
    // alert(this.props.Tasks)



    return (
        <Jumbotron>
            <Container>
                <h1>
                    Todos
                    </h1>
                <form onSubmit={this.handleSubmit}> 
                    <input placeholder="what's next?" onChange={this.handleText} value={this.state.text}></input>
                </form>
             
            </Container>
        </Jumbotron>

    );
}

}





export default Header;