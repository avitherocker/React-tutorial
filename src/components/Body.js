import React from "react";
import withHoc from "./Hoc";
const TextInput = React.forwardRef((props, ref) => (  
  <input type="text" placeholder="Hello World" ref={ref} />  
));  


  

class Body extends React.Component {
    constructor(props){
           super(props);
           this.state={
               name:"",
               class:"",
               bool:false
           }

           this.handleChange=this.handleChange.bind(this);
           this.submitForm=this.submitForm.bind(this);
           this.callRef = React.createRef();  
           this.submitForm = this.submitForm.bind(this);  
    }

    componentDidMount(){
      console.log("props",this.props);
    }
  

    submitForm(e){

        e.preventDefault();

        console.log(this.callRef.current.value);
        //this.setState({bool:true})

      
        


    }

   


    handleChange(e){

        this.setState({

             [e.target.name]:e.target.value

        })

       
    }

    forC(e){
        alert("dffds");
    }

  render() {
    return (

        //Controllable Component
         <React.Fragment>
            
                {
                
                this.state.bool ?
                
                <label>{this.state.name}</label>:""
                
                
                
                }

                <form  onSubmit={this.submitForm}>

                   <input name="name" value={this.state.name}  onChange={this.handleChange} ></input>
                   <input name="class" value={this.state.class}  onClick={this.forC}  onChange={this.handleChange} ></input>
                    <TextInput  ref={this.callRef}></TextInput>
                   <button type="submit">submit</button>

                </form>




         </React.Fragment>


    );
  }
}

export default withHoc(Body);
