/**
 * Function ES5
 */

 function sum(param1, param2) {
     console.log(param1+param2);
 }
 sum(1,2); //output: 3

 /**
  * Function ES6 (new)
  */

 let sumArrow = (param1, param2) => {
     console.log(param1 + param2);
 }
 sumArrow(2,3); //output 5

 /**
  * Different between function es5 and arrow function
  */

 const profile = {
     name : 'Jojon',
     age : 21,
     sumAge : function(param){
         console.log(this.age+param); 
     }
    //  ,
    //  sumAgeArrow : (param) => {
    //      console.log(this.age); //tidak bisa mengambil object di luar function.    
    //  }
 }
 profile.sumAge(1); //output 22
//  profile.sumArrow(1); //output error,
 