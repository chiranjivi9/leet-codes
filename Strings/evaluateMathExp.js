let evalMathExp = (str) => {
    let newStr = str.replace(/[^-()\d/*+.]/g, '');
    console.log(eval(str));
};


evalMathExp('1+2*3*1000');