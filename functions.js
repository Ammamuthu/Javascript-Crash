
// 1.named function


function sub(a,b){
    return(a-b);
}console.log(sub(2,4))

function sb(a,b){
    return(a+b);
}console.log(sb(5,44))


// 2.anonymus function

var a=function(a,b)
{
    return a+b;
}
console.log(a(2,5));

setTimeout(function(){document.write("this is ")},1000)


// 3..constructors


alert("");

var a=new Function("a","b","return a+b;");
console.log(a(4,66));

var d=new Function("a","b","c","return a+b+c;");
console.log(d(2,2,2));

// 4.self involking

(function(a,b){
    console.log(b) ;
})(2,6);





/*

*/


function raj(){
    console.log(020);
}

raj();
