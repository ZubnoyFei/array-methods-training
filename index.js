let array = [1,2,3,4,5];

 const mapper = function map(array, callback) {
    return array.reduce((accum, curr, index, array) => {
        accum.push(callback(curr, index, array));
        return accum + curr;
    }, 0);
}
mapper(array);

const filterArray = array.filter(function(num){
    return num > 2;
})

console.log(filterArray);

const everyArray = function(element, index, array) {
    return element >=2;
}
everyArray(array, 0, []);


console.log(array.some(item=> item>2));

console.log(array.every(item=>typeof(item)==='number'));

const reducedArray = array.reduce((sum, current) => sum+current);



