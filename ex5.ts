function count(value: string) :number{
        return value.length;
    }


function count_with_no_spaces(value:string):number{
    return value.replace(" ","").length;
}

function count_with_both(value:string,spaces?:boolean){
    let count=0;

    if(spaces){
        count = value.length;;
    }
    else{
        count = value.replace(" ","").length;
    }
    return count;
}

    let count1 = count("John ");
    let count2=count_with_no_spaces(" john");
console.log("Count is: "+count1);
console.log("Count is: "+count2);

console.log(count_with_both("Test 1"));
console.log(count_with_both("Test 1",true));