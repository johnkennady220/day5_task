
// a) Print odd number in an array: 
let arr=[1,2,3,4,5,6,7,8,9,10];
const oddnum=(arr)=>{
let result=[];
for(let v of arr){
    v%2!==0?result.push(v):false;                          //identifying odd number and then insert into the resutl array in this line.
};
return result;
}
console.log(`Odd number array is: [${oddnum(arr)}]`);
//  Output array is ===>   Odd number array is: [1,3,5,7,9]

// b)Convert all the strings to title caps in a string array
let arr1=["deepak","kumar","kishore","lodash","harry"];
const titlecap=(arr)=>{
    let res=[];
    for(let v of arr){
       res.push(v[0].toUpperCase()+v.slice(1,v.length))    //Changing the first element to caps and added to res array.
}
return res;
}
console.log(titlecap(arr1));                               //here calling the function and also passing the parameters.
//   Output array is ===>  Title caped array is : [Deepak,Kumar,Kishore,Lodash,Harry]

// c) Sum of all numbers in an array:
let arr2=[1,2,3,4,5,6,7,8,9,10];
const sum_arr=(arr)=>{
     return arr.reduce((a,b)=>a+b,0);                      //one liner for modern js. we are using arrow function to reduce.
}
console.log(`Sum of all number in an array is: ${sum_arr(arr2)}`);
// Output array is ===>    Sum of all number in an array is: 55

// d) Return all prime numbers in an array:
let arr3=[1,2,3,4,5,6,7,8,9,10];
let prime_number=(array)=>{                                //function to sort prime numbers.
   let result=[];
   for(let v of array){
       let flag=true;
       if(v>1){
           for(let i=2;i<v;i++){
               if(v%2===0){
                   flag=false;
                   break;
               }
           }
       }(flag)? result.push(v):false;                     //Ternary operator.
     }return result;
}
let resultvbl=prime_number(arr3);
console.log(`Prime numbers in an array : [${resultvbl}]`); 
// Output array is ===>   Prime numbers in an array : [1,2,3,5,7,9]

// e) Return all palindromes in an array:
let arr4=["did","asddsa","dkdd",123321,121,1234];
let palindrome=(array)=>{                                 //function to find palindrome in array.
   let res1=[];
   for(let v of array){                                  //for of loop to loop the values.
       v=String(v);
       let l=v.length;
       let tem="";
       for(i=l-1;i>=0;i--){                              //normal for loop in descending order.
           tem+=v[i]
           // console.log(tem);
       }v===tem? res1.push(v):false;
   }
  return res1;
};
let z=palindrome(arr4);                                   //storing function output in variable.
console.log(`Palindrome array is ; [${z}]`);
//Output array is ===> Palindrome array is ; [did,asddsa,123321,121]
