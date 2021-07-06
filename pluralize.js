// '''
// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once
// in the list.
// '''

// pluralize(["cow", "pig", "cow", "cow"])
// pluralize(["table", "table", "table"])
// pluralize(["chair", "pencil", "arm"])

// '''
// pluralize(["cow", "pig", "cow", "cow"]) âžž { "cows", "pig" }
// pluralize(["table", "table", "table"]) âžž { "tables" }
// pluralize(["chair", "pencil", "arm"]) âžž { "chair", "pencil", "arm" }
// '''


const pluralize = (array) => {
    let pluralObj = {};
    let pluralArr = [];

    array.forEach((item) => {
        if (!pluralObj[item]) {
            pluralObj[item] = 1;
        } else {
            pluralObj[item]++;
        }
    });

    for (const [key, value] of Object.entries(pluralObj)) {
        if (value > 1) {
            pluralArr.push(key + 's');
        } else {
            pluralArr.push(key);
        }
    }
}

// Test Case #1
pluralize(["cow", "pig", "cow", "cow"]);
// Test Case #2
pluralize(["table", "table", "table"]);
// Test Case #3
pluralize(["chair", "pencil", "arm"]);