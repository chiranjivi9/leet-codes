var checkIfPangram = function(sentence) {
    console.log(new Set(sentence).size === 26)
    return new Set(sentence).size === 26;    
};

checkIfPangram('thequickbrownfoxjumpsoverthelazydog')

checkIfPangram('leetcode')


