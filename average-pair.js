// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    let left =0;
    let right = arr.length -1;
    //our pointers
    while (left < right){ //our loop
        let avg = (arr[left] + arr[right])/2;
        if (avg === targetAvg){
            return true;
        } else if (avg > targetAvg){
            right--;
        } else {left ++}
    }
    return false;
}


