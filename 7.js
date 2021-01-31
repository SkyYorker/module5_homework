let arr = [1,2,3,4,5,6,7,8,9, 'm', '1', ',', null, undefined, NaN];

let even = [];
let neven = [];
for (var i = arr.length - 1; i >= 0; i--) {

  if(typeof(arr[i]) == 'number' && !Number.isNaN(arr[i]) && arr[i] > 0) {
    if(arr[i] % 2 == 0) {
      even.push(arr[i]);
    }else{
      neven.push(arr[i])
    }
  }
}

console.log('Четные:', even);
console.log('Нечетные',neven);