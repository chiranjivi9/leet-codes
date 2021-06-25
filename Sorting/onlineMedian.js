/*
    Online Median

    Given a list of numbers, the task is to insert these
    numbers into a stream and find the median of the stream
    after each insertion. If the median is a non-integer,
    consider it’s floor value.

    The median of a sorted array is defined as the middle
    element when the number of elements is odd and the mean
    of the middle two elements when the number of elements is even.

    Example
    Input: [3, 8, 5, 2]
    Output: [3, 5, 5, 4]

    Iteration    Stream      Sorted Stream        Median

        1          [3]           [3]                  3

        2        [3, 8]         [3, 8]           (3 + 8) / 2 => 5

        3       [3, 8, 5]      [3, 5, 8]              5

        4     [3, 8, 5, 2]    [2, 3, 5, 8]       (3 + 5) / 2 => 4

*/ 

function online_median(stream) {
      //Base #1
    if(stream.length <= 1) return stream;
    
    let output = [];
    
    //Base #2
    output.push(stream[0]);
    let median = Math.floor((stream[0] + stream[1]) / 2);
    output.push(median);

    function findMedian(array) {
        let mid = Math.floor(array.length / 2);
        let arrMedian = Math.floor((array[mid] + array[mid - 1]) / 2);
        return arrMedian;
    }

    let pt1 = 3;
    while(stream.length >= pt1) {
        let slicedArr = stream.slice(0, pt1).sort((a,b) => a-b );
        pt1++;
        if(slicedArr.length % 2 === 0){
            let evenArrMed = findMedian(slicedArr);
            output.push(evenArrMed);
        } else {
            let oddArrMid = Math.floor(slicedArr.length / 2);
            output.push(slicedArr[oddArrMid]);
        }
    }
    
    return output;
}

online_median([3, 8, 5, 2]);

online_median([3, 4, 6, 22, 8, 3]); //[3,3,4,5,6,5]