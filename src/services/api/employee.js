import instance from './../axios';

export function getEmployee(){
  
   return  instance.get('employees');

}



export function create(data){

    return  instance.post('create',data);
}