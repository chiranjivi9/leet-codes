/*
     You are given an array items, where each items[i] = [typei, colori, namei] describes
     the type, color, and name of the ith item. You are also given a rule represented by
     two strings, ruleKey and ruleValue.

    The ith item is said to match the rule if one of the following is true:

    ruleKey == "type" and ruleValue == typei.
    ruleKey == "color" and ruleValue == colori.
    ruleKey == "name" and ruleValue == namei.
    Return the number of items that match the given rule.


    Example 1:
    Input: items = [["phone","blue","pixel"],
        ["computer","silver","lenovo"],["phone","gold","iphone"]],
        ruleKey = "color", ruleValue = "silver"
    Output: 1
    Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
 */

// [typei, colori, namei]
const countMatches = function(items, ruleKey, ruleValue) {
    console.log(items, ruleKey, ruleValue);
    if(items.length === 0) {
        return 0;
    }
    let arrIdx = 0;
    let count = 0;
    if(ruleKey === 'type') {
        arrIdx;
    } else if (ruleKey === 'color') {
        arrIdx = 1;
    } else {
        arrIdx = 2;
    }

    for(let i = 0; i < items.length; i++) {
        if(items[i][arrIdx] === ruleValue) {
            count++;
        }
    }

    console.log('COUNT', count);
    return count;
};


let item1 = [["phone","blue","pixel"], ["computer","silver","lenovo"], ["phone","gold","iphone"]]
countMatches(item1, 'color', 'silver');

let item2 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
countMatches(item2, "type", "phone");