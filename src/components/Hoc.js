import React from "react";


function  withHoc(Component){

    return class extends React.Component{


        constructor(props) {
            super(props);
            this.state = {
              posts: [{id:1,value:"AVX"}],
            };
         }

          render(){
            return (<Component   {...this.props} data={this.state.posts} />)

          }
    }

}

export default withHoc;