// find the second largest element in an array
let arr = [1,2,3,4,5]

function secondLargest(arr){
    let largest = arr[0];
    let secondLargest = -1;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];            
        }
        else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;   
}