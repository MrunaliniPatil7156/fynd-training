const arr=['girafee','tiger','lion'];//homogeneous data
const arr2=[1,2,3,4];//homogeneous data
arr.push('cheetah');//adding elements to an array using push function
arr2.push(6);
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple');//will add elements in the beginning of the array
console.log(fruits);
fruits.findIndex(findFruit);