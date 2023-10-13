function toFahrenheit(celsius) {
 // Write your code here
	let F = (9 * celsius) / 5 + 32;
	return F;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
