const initialState = {
  isLoading: true,
  counter:0
};

const Auth = (state = initialState, { type, payload = null }) => {



  switch (type){

    case "incrementOrdecrement":
      console.log("reducers");
      return Object.assign({}, state, {
        counter: payload,
      });

      break;


      default:
        return state;
  }
  


 
};

export default Auth;
