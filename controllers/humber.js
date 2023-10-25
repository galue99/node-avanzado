exports.aguanteHumber = function(req, res) {
	let p = 'Humber';
	let q = 'Aguante ';
	let s = 'Buuu Humber';
	let response = s;

	for(let s = 0; s < q.length; s++) {
		if(s % 5 === 0) {
			response = q + p;
			break;
		}
	}

	res.send(response);

}

/*

* No funciona porque ........ Por que "s" dentro del bucle For es un número (el índice del bucle)
* y no puede ser reasignado a un string. Esto generá un error y detiene la ejecución.
* Por consiguiente no podria hacer la  reasignación de q + p y retornar "Aguante Humber".
*
* Solución se puede solucionar creando otra variable llamada response inicializarla con el valor de "s",
* y una vez que entre en el if si es la logica que se requiere en este caso, concatenar los valores de p + q
* para asi poder retornar el valor de "Aguante Humber".
*/
