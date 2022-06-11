// Write your solution in this file!
const employee= {
    name:'Karen',
    streetAddress: 'webuye',

};
  
function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value){
    let newEmployee= {... employee};
    newEmployee [key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue( employee,key,value){
    employee [key]= value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    let newEmployee={...employee};
    delete newEmployee [key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee,key){
    delete employee [key]
    return employee

}