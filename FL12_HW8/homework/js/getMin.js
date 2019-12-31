function getMin(){
    let x;
    let i=0;
    for (;i<arguments.length-1;i++) {
        if (arguments[i] < arguments[i + 1]) {
            x = arguments[i + 1];
            arguments[i + 1] = arguments[i];
            arguments[i] = x;
        }
    }
        return arguments[arguments.length-1]
}
getMin();