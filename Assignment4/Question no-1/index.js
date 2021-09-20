let values = ["green", "green", "red", "red", "yellow", "pink", "pink", "yellow"];
let uniquearr = [];
let counting = 0;
let found = false;

for (i = 0; i < values.length; i++) {
	for (y = 0; y < uniquearr.length; y++) {
		if ( values[i] == uniquearr[y] ) {
			found = true;
		}
	}
	counting++;
	if (counting == 1 && found == false) {
		uniquearr.push(values[i]);
	}
	found = false;
	counting = 0;
}
console.log(values);
console.log("unique values are", uniquearr);
document.getElementById('Result').innerHTML = uniquearr;