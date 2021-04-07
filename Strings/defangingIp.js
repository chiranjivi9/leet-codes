/*
    Given a valid (IPv4) IP address, return a defanged version of 
    that IP address.
    A defanged IP address replaces every period "." with "[.]".

    Example 1:
    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"

    Example 2:
    Input: address = "255.100.50.0"
    Output: "255[.]100[.]50[.]0"
*/

const defangIPaddr = function(address) {
    let arr = address.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '.') {
            arr.splice(i, 1, '[.]');
        }
    }
    console.log(arr.join(''));
    return arr.join('');
};

defangIPaddr("1.1.1.1");

defangIPaddr("255.100.50.0")