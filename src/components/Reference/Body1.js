import React from "react";
import Body from "../Body";
import withHoc from "../Hoc";


const Body1 = withHoc(React.forwardRef((props, ref) => {
    return <Body {...props} innerRef={ref} />;
  }));


  export default Body1;