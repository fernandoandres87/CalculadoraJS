document.getElementById("numero_1").addEventListener("click",function numero_1() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_1").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_2").addEventListener("click",function numero_2() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_2").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_3").addEventListener("click",function numero_3() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_3").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_4").addEventListener("click",function numero_4() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_4").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_5").addEventListener("click",function numero_5() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_5").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_6").addEventListener("click",function numero_6() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_6").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_7").addEventListener("click",function numero_7() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_7").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_8").addEventListener("click",function numero_8() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_8").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_9").addEventListener("click",function numero_9() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_9").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("numero_0").addEventListener("click",function numero_0() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("numero_0").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("suma").addEventListener("click",function operation_1() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("suma").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("resta").addEventListener("click",function operation_2() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("resta").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("division").addEventListener("click",function operation_3() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("division").innerHTML;
	document.getElementById('display').innerHTML = actual + sumado
});
document.getElementById("multiplicacion").addEventListener("click",function operation_4() {
	let actual = document.getElementById('display').innerHTML;
	let sumado = document.getElementById("multiplicacion").innerHTML;
	document.getElementById('display').innerHTML = actual +  sumado
});
document.getElementById("igual").addEventListener("click",function showResult() {
	let actual = document.getElementById('display').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("display").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("display").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("display").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("display").innerHTML = res;
		
	}
});
document.getElementById("delete").addEventListener("click", function del() {
    var contenido= documet.getElementById("display").value;
  document.getElementById("display").value= contenido.substring(0, contenido.length-1);

})

