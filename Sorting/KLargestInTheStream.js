/*
    Kth Largest In A Stream
    Given an initial list along with another list of
    numbers to be appended with the initial list and
    an integer K, return an array consisting of the
    Kth largest element after adding each element from
    the first list to the second list.

    Example
    Input: [ 2, [4, 6], [5, 2, 20] ]
    Output: [5, 5, 6]

    Append     Stream       SortedStream   2ndlargest

      5        [4,6,5]        [4,5,6]         5

      2        [4,6,5,2]      [2,4,5,6]       5 
    
      20       [4,6,5,2,20]   [2,4,5,6,20]    6
    
*/


function kth_largest(k, initial_stream, append_stream) {
    let output = [];
    
    while(append_stream.length) {
        let temp = append_stream.shift();
        initial_stream.push(temp);
        initial_stream.sort((a,b) => a-b);
        let kthLargestElement = initial_stream[initial_stream.length - k];
        output.push(kthLargestElement);
    }
    
    console.log(output);
    return output;
}

kth_largest(2, [4, 6], [5, 2, 20]);