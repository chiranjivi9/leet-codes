/*
    This question is asked by Google.
    Given two integer arrays, return their intersection.
    Note: the intersection is the set of elements that are
    common to both arrays.

    Ex: Given the following arrays...

    nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
    nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
    nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/


let findIntersection = (arr1, arr2) => {
    if (arr1.length < 1 || arr2.length < 1) return [];

    let uniqSet = new Set();
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            uniqSet.add(arr1[i]);
        }
    }

    console.log(Array.from(uniqSet));
    return Array.from(uniqSet);
}

findIntersection([2, 4, 4, 2], [2, 4]);

findIntersection([2, 4, 6, 8], [1, 3, 5, 7]);