/*

Crear una función padding-left que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Toma 3 parámetros:
	- La cadena inicial
	- Un tamaño final
	- Un valor del padding, por defecto es un espacio
Ejemplo: padding-left('hola', 6, 'x') devuelve 'xxhola'
Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.

*/

// function paddingLeft(word) {
//     return word+2;
// }

function paddingLeft(initialString, finalSize, paddingValue) {
    if(finalSize <= initialString.length){
        return initialString;
    } else {
        let fillnumber = finalSize - initialString.length;

        if (paddingValue === null || paddingValue === undefined ){
            paddingValue = " ";
        }

        for (let i=0; i<fillnumber; i++){
            initialString = paddingValue + initialString;
        }
        return initialString;
    }

}
module.exports = paddingLeft;
