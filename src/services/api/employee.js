import instance from './../axios';

export function getEmployee(){
  
   return  instance.get('employees');

}
const configs = () => {
    return {
      headers: { 'Authorization': "bearer " + localStorage.getItem('auth_jwt_token') }
    }
  }


export function create(data){

    return  instance.post('users/register',data,configs());
}