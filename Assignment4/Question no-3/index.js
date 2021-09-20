let array = [1,33,99,50,150,60,99,1000,999,0,-1,10]
console.log(array);
array.filter( (item) =>{
if(item>=150){
    console.log("More than or equal to 150 are", item);
}
});