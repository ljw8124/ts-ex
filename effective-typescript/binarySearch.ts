// 이진탐색구현
function binarySearch(arr: Array<number>, target: number) {
    let idxHigh: number = arr.length - 1;
    let idxLow: number = 0;
    let returnVal: number = -1;

    while(idxLow <= idxHigh) {
        let idxMid: number = Math.floor((idxHigh + idxLow) / 2);

        if(arr[idxMid] == target) {
            returnVal = idxMid;
            break;
        }

        if(arr[idxMid] < target) {
            idxLow = idxMid + 1;
        } else if(arr[idxMid] > target) {
            idxHigh = idxMid - 1;
        }
    }

    // 실패할 경우
    return `${returnVal} 번째 파라미터`
}

console.log(binarySearch([1,2,3,4,5], 3));
