function findLeapYear(years) {
    let leapYear = [];
    for (i = 0; i < years.length; i++){
        // let index = i;
        let year = years[i];
        // console.log(index,year);
        if (year % 4 == 0) {
            leapYear.push(year);
        }
    }
    return leapYear;
}

let yearsArray = [2023, 2024, 2025, 2028, 2030, 2031, 2032, 2035, 2036, 2039, 2040];
let leapYear = findLeapYear(yearsArray);
console.log(leapYear);
