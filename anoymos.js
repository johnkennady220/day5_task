//a)Print odd numbers in an array:
    //anonymous function
    let arr1=[1,2,3,4,5,6,7,8,9,10]
    let oddnum=function(arr){
        let odd_arr=[];
        for(let num of arr){
           (num%2!==0)? odd_arr.push(num) : num;                    //ternary operator to split the odd number.
           }
        return odd_arr
       }
    console.log(`odd numbers in an array : [${oddnum(arr1)}]`)      //calling and printing the result in the terminal/conosle.    

//IIEF function
    let arr11=[1,2,3,4,5,6,7,8,9,10]
    console.log(`The array odd number :[${
    (function(arr){
       let odd_arr=[];
       for(let num of arr){                                         //for of loop to loop the value value till end.
           (num%2!==0)? odd_arr.push(num) : num;                    //ternary operator to optimize the code.
       }
       return odd_arr
    })(arr11)}]`);           
//The above 2 program result is ====> odd numbers in an array : [1,3,5,7,9]

//b)convert all the string to the title caps in string array.
//Anonymous function :
    let str_arr=["deepak","kumar","ramesh","kishore"]
    let title_cap=function(arr){
    title_capped_arr=[];
        for (let index in arr){
            title_capped_arr.push(arr[index].charAt(0).toUpperCase()+arr[index].slice(1));     /*this line have push,charAt,toUpperCase,slice method 
                                                                                                 to remove the word at the begining and add at the end.*/
    }
    console.log(`Title caps in a string array : [${title_capped_arr}]`);
    }
    title_cap(str_arr)                                             //calling the function.

//IIEF function:
    let str_arr1=["deepak","kumar","ramesh","kishore"]
    console.log(`Title caps in a string array :[${
    (function(str_arr){
       let title_capped_arr=[];
        for(let str of str_arr){
            title_capped_arr.push(str.charAt(0).toUpperCase()+str.slice(1));
    }
    return title_capped_arr
    })(str_arr1)}]`);     
//The above 2 program result is ====>  Title caps in a string array :[Deepak,Kumar,Ramesh,Kishore]

//c)sum of all number in an array:
//anonymous function:  
    let num1=[1,2,3,4,5]
    let sum=function(...arr){                                      //here using spread operator .
        for (let index in arr){
            console.log(`Sum of all number : ${(arr[index].reduce((prev, current) => prev + current,0))}`);
            }
    }
    sum(num1)  

//IIEF function:
   let num21=[1,2,3,4,5]
   console.log(`Sum of all number :${
   (function(num2){
   let result=0;
   for (let index in num2){
        result+=num2[index];                                       //adding result to the varialbe in this line.
       }
       return result;
   })(num21)}`)   
//The above 2 program result is ====>  Sum of all number :15

// d)Return all prime number in an array:
//anonymous function:
   let num12=[1,2,3,4,5,6,7,8,9,10]
   let primenum=[];
   let primenumber=function(arr){
         for(let aa of arr){
         if(aa>1){
               let flag=true;                                      //here using flag varialbe.
               for(let i=2;i<aa;i++){
                     aa%i===0? flag=false:true;                    //ternary and modulo operator using here.
               }flag?primenum.push(aa):true;
         }
   }}
   primenumber(num12)
   console.log(`Prime numbers is: ${primenum}`);

//IIEF function:
   let num123=[1,2,3,4,5,6,7,8,9,10]
   console.log(`Prime numbers are: ${                              // make a function inside a console.log method.
    (function(num1){
     let primenum=[];
     for (let v of num1){
           if(v>1){
                 let flag=true;
                 for(let i=2;i<v;i++){                             //normal for loop to start the loop from 2.
                       v%i===0?flag=false:true;                    //modulo operator and ternary operator.
                 }flag?primenum.push(v):true;
           }
     }
     return primenum;
    }(num123))                                                     //giving parameters to IIFE function.
   }`)
//The above 2 program result is ====>  Prime numbers are : 2,3,5

//e)Palandrome in an array:
//Annonymous functon:
   let arr12=["did","asddsa","dkdd",123321,121,1234];
   let reverse=function(num){
        let a=String(num).split("")
        let rev=[];
        let l=a.length;
        for(let i=l-1;i>=0;i--){                                    //using normal loop to generate index from descendeing order.
            rev.push(a[i]);
            }
        rev=rev.join("");                                           //joining the elements in the array using join function and make a string word.
        return rev;
        }
        result1_arr=[];
        for(let v of arr12){
            v=String(v);                                            //convering number to string by using type casting.
            v==reverse(v)? result1_arr.push(v):false;
        }
   console.log(result1_arr);

//IIEF function:
       let arr13=["did","asddsa","dkdd",123321,121,1234];
       console.log(
       (function(arr){
            result=[];
            for(let num of arr){                                     //for of loop.
            let a=String(num).split("")
            let rev=[];
            let l=a.length;
            for(let i=l-1;i>=0;i--){
                rev.push(a[i]);
            }
            rev=rev.join("");
            a=a.join("")
            rev===a? result.push(rev):false;
       }   return result;
       })(arr13));
//  The above 2 program result is ====>  [ 'did', 'asddsa', '123321', '121' ]

//f)Median of two sorted arrays of same size:
//annonymous Function:
       let arr121=[2, 3, 5, 8]
       let arr222=[10, 12, 14, 16, 18, 20]
       let median=function(arr1,arr2){
            let arr_com=[...arr1,...arr2];                            //using spread opertor to combine a array.
            arr_com.sort((a,b)=>a-b)                                  //sorting  an array using bubble sort method.
            let len=arr_com.length;
            let arr_l=len/2;
            let result=arr_com[arr_l]+arr_com[arr_l-1];
            return result/2;
       }
       console.log(`Median for given two equal arrays are: ${median(arr121,arr222)}`);

//IIFE Function:
       let arr111=[2, 3, 5, 8];
       let arr221=[10, 12, 14, 16, 18, 20];
       console.log(`Median for given two equal arrays are: ${
       (function(arr1,arr2){
            let arr_com=[...arr1,...arr2];
            arr_com.sort((a,b)=>a-b);
            let len=arr_com.length;                                    //finding length by using length method.
            let arr_l=len/2;
            let result=arr_com[arr_l]+arr_com[arr_l-1];
            return result/2;
       })(arr111,arr221)
       }`);
 //The above 2 program result is ====>  Median for given two equal arrays are: 11

//g)Remove duplicates from a array:
//Annonymous function:
       var arr_s = ["apple", "mango", "apple","orange", "mango", "mango"];
   
       let remove_duplicates=function(arr){
            let a=[];
            console.log([...new Set(arr)])                              //using set remove duplicate and make new array using spread operator.
       }
       remove_duplicates(arr_s);

//IIPE Function:
       var arr_s1 = ["apple", "mango", "apple",
               "orange", "mango", "mango"];
       (function(arr){
            let a=[];
            console.log([...new Set(arr)])
       }(arr_s1));                                                      //input parameter.
//The above 2 program result is ====> [ 'apple', 'mango', 'orange' ]

//h)Rotate an array bye K times:
//Annonymous function:
       let arr10=["santa","monica","colombia","zimbabe","hutson"];
       let k1=5;
       let rotate_array=function(arr1,k){
            let arr=[...arr1];
            arr.push(arr.shift());
            for(let i=1;i<=k;i++){
            }
            return arr;
       };
       console.log(rotate_array(arr10,k1));                             //calling function and insert input parameter inside the console.log.

//IIFE Function:
       let arr100=["santa","monica","colombia","zimbabe","hutson"];
       let k=3;
       (function(arr1,k){
            let arr=[...arr1];                                          //copying array value using spread operator.
            for(let i=1;i<=k;i++){
            arr.push(arr.shift());
            }
            console.log(arr);
       }(arr100,k));
//The above 2 program result is ====> [ 'zimbabe', 'hutson', 'santa', 'monica', 'colombia' ]
