import React, { Component } from "react";
import PropTypes from 'prop-types';  


export default class Header extends Component {

    constructor(props){
        super(props);

        this.state={
              companyName:"Tech By Abhi",
              title:"Header",
       };

       this.Click=this.Click.bind(this);
       console.log("constructor");

    }


    Click(e){
           e.preventDefault();
          this.setState({companyName:"Logo"});
    }

    /***
     * 
     1-Initialzation getDefaultProps,getIntialState
     2-Mounting
     componentWillMount()-Depericated it calls before intialization of dome
     componentDidMount()-Calls when dom is initialized
     render()-return the html over the dom
     3-Updation

     ComponentWillUpdate-Depericiate
     shouldComponentUpdate(prevProps,prevState)=handle the state and manage the rerender process
     render-
     componentDidUpdate- calls once any changes in the component
     4-Demounting

     
     */

     
    componentWillMount(){
        console.log("ComponentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
   }

   componentWillUnmount(){
       console.log("componentWillUnmount");
   }

   componentDidUpdate(prevProps,prevState){
   
      console.log("update me")
   }


   shouldComponentUpdate(prevProps,prevState){
    console.log(prevProps,prevState);

       if(this.state.companyName == prevState.companyName){
           console.log("Matched")
        return false;
       }else{
        console.log("Not Matched")
          return true;
       }
      
   }



  render() {
    console.log("consol")
    const {title,companyName}=this.state;

    const {keys}=this.props;

    return (
      <div>
        <header className="header-fixed">
          <div className="header-limiter">
            <h1>
              <a href="#" onClick={this.Click}>
                {companyName}
              </a>
            </h1>

            <nav>
              {
                  
                 keys.map((item,key)=>{
                    return (<a href="#" key={key}>{item}</a>)

                 }) 
              
              
              }
             
            </nav>
          </div>
        </header>

        <div className="header-fixed-placeholder"></div>
      </div>
    );
  }
}



Header.propTypes = {  
    keys: PropTypes.array.isRequired,  
  
}  
Header.defaultProps = {  
    keys: [],  
}