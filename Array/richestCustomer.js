
const maximumWealth = (accountsArray) => {
    let total = 0;
    accountsArray.forEach((element) => {
        let temp = 0;
        element.forEach((item) => {
            temp += item;
            console.log('temp', temp);
        });

        if(temp > total) {
            total = temp;
        }
    })
    console.log('total', total);

    return total;
}


maximumWealth([[1,2,3], [1,1,1]])

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])