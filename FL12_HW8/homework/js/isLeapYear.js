function isLeapYear(arg) {
    let dateobj = new Date(arg);
    let year = dateobj.getFullYear();
    if (year) {
        if (year % 4 === 0) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    } else {
        console.log('Invalid Date');
    }
}
isLeapYear();