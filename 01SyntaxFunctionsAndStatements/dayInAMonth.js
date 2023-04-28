function dayInAMonth(month, year) {

    let daysCount = new Date(year, month, 0).getDate();

    console.log(daysCount)

}

dayInAMonth(1, 2012);
dayInAMonth(2, 2021);