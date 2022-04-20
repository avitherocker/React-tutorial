import React from "react";

class Body extends React.Component {
    constructor(props){
           super(props);
           this.state={
               name:"",
               class:""
           }

           this.handleChange=this.handleChange.bind(this);
    }


    submitForm(e){

        e.preventDefault();
        


    }


    handleChange(e){

        this.setState({

             [e.target.name]:e.target.value

        })
    }

  render() {
    return (

        //Controllable Component
         <React.Fragment>
            
                <form  onSubmit={this.submitForm}>

                   <input name="name" value={this.state.name}  onChange={this.handleChange} ></input>
                   <input name="class" value={this.state.class}  onChange={this.handleChange} ></input>

                </form>




         </React.Fragment>


    );
  }
}

export default Body;
