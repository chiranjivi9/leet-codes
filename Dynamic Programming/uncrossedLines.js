/*
    We write the integers of nums1 and nums2 (in the order they are given)
    on two separate horizontal lines.

    Now, we may draw connecting lines: a straight line connecting
    two numbers nums1[i] and nums2[j] such that:

    nums1[i] == nums2[j];
    The line we draw does not intersect any other connecting
    (non-horizontal) line.
    Note that a connecting lines cannot intersect even at
    the endpoints: each number can only belong to one connecting line.

    Return the maximum number of connecting lines we can draw in this way.

    Example 1:
    Input: nums1 = [1,4,2], nums2 = [1,2,4]
    Output: 2
    1   4   2
    |    \
    |     \
    |      \
    1   2   4

    Explanation: We can draw 2 uncrossed lines as in the diagram.
    We cannot draw 3 uncrossed lines, because the line
    from nums1[1]=4 to nums2[2]=4 will intersect the line from nums1[2]=2 to nums2[1]=2.

*/


let maxUncrossedLines = (nums1, nums2) => {
    if (nums1.length < 1 && nums2.length > 1 ||
        nums1.length > 1 && nums2.length < 1) return 0;

    let hm1 = new Map();
    let hm2 = new Map();
    let counter = 0;
    let len = nums1.length > nums2.length ? nums1.length : nums2.length;

    nums1.forEach((item, itemIdx) => {
        hm1.set(item, itemIdx);
    });

    nums2.forEach((element, elementIdx) => {
        hm2.set(element, elementIdx);
    });

    for (let i = 0; i < len; i++) {
        let currKey = nums1[i];
        if (hm2.has(currKey)) {
            let hm2Val = hm2.get(currKey);
            let hm1Val = hm1.get(currKey);

            if (hm1Val === hm2Val || hm2Val - 1 === hm1Val) {
                counter += 1;
            }
        }
    }

    console.log(counter);

    return counter;
};


// maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]);

// maxUncrossedLines([1, 4, 2], [1, 2, 4]);

// maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]);

maxUncrossedLines([1, 2, 3, 4, 5, 6], [1, 2, 4, 5, 3, 6]);