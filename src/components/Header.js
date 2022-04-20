import React, { Component } from "react";

export default class Header extends Component {

    constructor(props){
        super(props);

        this.state={
              companyName:"Tech By Abhi",
              title:"Header",
       };

       this.Click=this.Click.bind(this);


    }


    Click(){
          this.setState({companyName:"Logo"});
    }


  render() {
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
