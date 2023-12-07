//your JS code here. If required.
function solve(y) {
	if((y % 400 == 0) ||
       (y % 100 != 0) && 
       (y % 4 == 0)))return 366;
	return 365;
}
const year=prompt("Enter the year : ");
alert(solve(year));
