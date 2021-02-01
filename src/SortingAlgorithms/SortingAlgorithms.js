export const mergeSort = array => {
    if(array.length===1) return array;
    const mid = Math.floor(array.length/2);
    const firstHalf = mergeSort(array.slice(0, mid));
    const secondHalf = mergeSort(array.slice(mid));
    const sortedArray = [];
    let i=0,j=0;
    while(i<firstHalf.length && j<secondHalf.length){
        if(firstHalf[i]<secondHalf[j]){
            sortedArray.push(firstHalf[i++]);
        }else{
            sortedArray.push(secondHalf[j++]);
        }
    }
    while(i<firstHalf.length)sortedArray.push(firstHalf[i++]);
    while(j<secondHalf.length)sortedArray.push(secondHalf[j++]);
    return sortedArray;
}

export const bubbleSort = originalArray=>{
    let j=0,i=0;
    for(i=0;i<originalArray.length;i++){
        for(j=0;j<originalArray.length-i-1;j++){
            if(originalArray[j]<originalArray[j+1]){
                let temp = originalArray[j];
                originalArray[j]=originalArray[j+1];
                originalArray[j+1]=temp;           
            }
        }
       
    }
        return originalArray;
}