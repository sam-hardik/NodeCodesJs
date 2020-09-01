function square(number) {
    if (number===NaN) {
        return NaN;
    }
    return number**2;  
}

module.exports=square;
