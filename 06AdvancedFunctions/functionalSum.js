function add(num) {
    let sum = 0;

    function inner (nextNum) {
        sum += nextNum;
        return inner;
    }
    
    inner.toString = () => {
        return sum;
    }
    
    return inner(num);
}

add(1)
add(1)(6)(-3)