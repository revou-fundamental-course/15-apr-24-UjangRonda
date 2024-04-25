var calculate_type = 0;

function calculate() {
	var celcius = document.getElementById('celciusvalue').value;
	let conversion = Math.round((9/5 * celcius) + 32);
	document.getElementById('farenhaitvalue').value = conversion;
	document.getElementById('cara-kalkulasi').value = "9/5 * T°C + 32";
	document.getElementById('rumus2').style.display="none";
	document.getElementById('rumus1').style.display="flex"
}
function reset(){
	document.getElementById('celciusvalue').value = "";
	document.getElementById('farenhaitvalue').value = "";
	document.getElementById('cara-kalkulasi').value = "";
	document.getElementById('rumus1').style.display="none"
	document.getElementById('rumus2').style.display="none"

}
function reverse() {
	reset();
	if (calculate_type == 0){
		document.getElementById('kalkulasi').setAttribute("onclick","calculatereverse()");
		document.getElementById('celcius-label').innerHTML = "Fahrenheit (T°F)";
		document.getElementById('farenhait-label').innerHTML = "Celcius (T°C)";
		calculate_type = 1;
	}else{
		document.getElementById('kalkulasi').setAttribute("onclick","calculate()");
		document.getElementById('celcius-label').innerHTML = "Celcius (T°C)";
		document.getElementById('farenhait-label').innerHTML = "Fahrenheit(T°F)";
		calculate_type = 0;
	}
}
function calculatereverse() {
	var celcius = document.getElementById('celciusvalue').value;
	let conversion = Math.round((celcius - 32) * 5/9);
	document.getElementById('farenhaitvalue').value = conversion;
	document.getElementById('cara-kalkulasi').value = "T°C - 32 * 5/9 "
	document.getElementById('rumus2').style.display="flex";
	document.getElementById('rumus1').style.display="none"
}

