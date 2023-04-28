function stringLength(...parameters){
    let sumLength = 0;
    let averageLength = 0;

    for(let el of parameters){
        sumLength += el.length;
    }

    averageLength = sumLength / parameters.length;

    console.log(Math.floor(sumLength));
    console.log(Math.floor(averageLength));

}

stringLength('chocolate', 'ice cream', 'cake')