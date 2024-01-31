let num: number = 23;
console.log("The value of number is "+num);
let myName: string = "Joe";
console.log("My name is "+myName);
let flag:boolean=true;
console.log("The value of flag is: "+flag);

let myArray:number[]=[1,2,3];

for(let i=0;i<myArray.length;i++){
    console.log("The value at position "+i+" is "+myArray[i]);
}


let myArray2:Array<number>=[1,2,3];
myArray2.forEach((item)=>{
    console.log("The value of myarry2 is:")
})

let myUnknown:any = "Unknown";
console.log("The value of myUnknown is "+myUnknown);
