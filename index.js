/*
let nombre = prompt("Ingresa tu nombre:");
console.log(nombre);

let edad = parseInt(prompt("Ingresa tu edad:"));
console.log(edad);

alert("Hola bienvenida");

let _variableNumero1 = "Hola";
const PI = 3.14;

let nombre1 = 23, nombre2, nombre3 = "hola";

let nombre4 = 23;
let nombre5;
let nombre6 = "hola";

let objeto = {
    propiedad: "valor",
    propiedad2: 23,
    propiedad3: "chau"
};

nombre2 = nombre6 +" "+ objeto.propiedad + nombre4;

console.log(nombre2.length);

console.log(nombre2.toUpperCase());

console.log(nombre2.toLowerCase());

console.log(nombre2.repeat(5));

console.log(nombre2.replace(nombre6, objeto.propiedad3));*/

/* const IVA = 1.21;
const GANANCIAS = 0.65; //0.65 representa el 100% descontandole en 35% de gananancias, por eso multiplico por (1-0.35) = 0.65
const CUENTADNI = 0.30;

alert("Hola a continuación se le pedira informacion personal, desde ya muchas gracias.");


let usuario = prompt("Ingrese su nombre:");
console.log("su nombre es: "+ usuario);

let apellido = prompt("Ingrese su apellido:");
console.log("su apelido es: "+ apellido);

let ingreso = prompt("Ingrese sus ingresos:");
console.log("Su ingresos son: "+ ingreso+"$");

let descuentoGanancias = ingreso-(ingreso*GANANCIAS);
console.log("Se le descontaran de ganancias: "+ descuentoGanancias+"$");

let sueldoFinal = ingreso-descuentoGanancias;
console.log("Su sueldo final es: "+sueldoFinal+"$"); 

let gasto = prompt("Ingrese el valor de su gasto para calcular el IVA:");
console.log("El valor de gasto con el IVA agregado es de: "+(gasto*IVA)+"$");

let devolucionIVA = (gasto*IVA)-gasto;
console.log("Su devolución del IVA sera de: "+devolucionIVA+"$");

let gastoDni = prompt("Ingrese cuanto gasto con su cuenta DNI:");
let devolucionDni= gastoDni*CUENTADNI;
console.log("Se le devolveran: "+devolucionDni+"$ en total a su cuenta DNI");


alert("Su salario es: "+ingreso+ " Su salario final es de: "+sueldoFinal);*/

/*let edad = parseInt(prompt("ingrese su edad:"))

if(edad >= 21){
    alert("Acceso permitido");
} else if ((edad >=18) && (edad<21)){
    alert("Solicite el permiso de sus padres");
} else{
    alert("acceso denegado");
};

let permiso = edad >= 21 ? "Acceso permitido": edad >=18 && edad<21 ? "Solicite el permiso de sus padres" : "Acceso denegado";
console.log(permiso);*/

let dni = prompt("ingrese su tipo DNI (argentino, español, brasileño, etc):");

switch(dni){
    case "argentino":
        let numeroAr = parseInt(prompt("Ingrese su numero de documento: "));
        if(numeroAr>=10000000 && numeroAr<55000000){
            alert("su dni es: " + numeroAr);
            alert("Su dni esta dentro de los parametros del país");
        }  else{
            alert("Su dni no es valido, tal vez pertenezca a otra nacionalidad");
        }
        break
    case "español":
        let numeroEs = parseInt(prompt("Ingrese su numero de documento: "));
        if(numeroEs>=10000 && numeroEs<55000){
            alert("su dni es: " + numeroEs);
            alert("Su dni esta dentro de los parametros del país");
        }  else{
            alert("Su dni no es valido, tal vez pertenezca a otra nacionalidad");
        }
        break  
    case "brasileño":
        let numeroBr = parseInt(prompt("Ingrese su numero de documento: "));
        if(numeroBr>=55001 && numeroBr<100000){
            alert("su dni es: " + numeroBr);
            alert("Su dni esta dentro de los parametros del país");
        }  else{
            alert("Su dni no es valido, tal vez pertenezca a otra nacionalidad");
        }
        break    
}
/*
let mes = prompt("Ingrese el mes a buscar: ");

switch(mes){
    case "enero":
        alert("En el mes de "+ mes + " el día lunes 16, miercoles 25 y viernes 27 seran feriados.");
        break;
    case "febreo":
        alert("En el mes de "+ mes + " el día martes 2, miercoles 16 y lunes 20 seran feriados.");
        break;   
    case "marzo":
        alert("En el mes de "+ mes + " el día lunes 3, miercoles 24 y lunes 29 seran feriados."); 
        break;
    case "abril":
        alert("En el mes de "+ mes + " el día lunes 1, martes 13 y viernes 30 seran feriados."); 
        break;
    case "mayo":
        alert("En el mes de "+ mes + " el día lunes 9, jueves 15 y miercoles 23 seran feriados."); 
        break;
    case "junio":
        alert("En el mes de "+ mes + " el día viernes 3, martes 14 y lunes 28 seran feriados."); 
        break;
    case "julio":
        alert("En el mes de "+ mes + " el día viernes 9, miercoles 14 y martes 30 seran feriados."); 
        break;   
    case "agosto":
        alert("En el mes de "+ mes + " el día sabado 12, miercoles 29 y viernes 30 seran feriados."); 
        break;  
    case "septiembre":
        alert("En el mes de "+ mes + " el día lunes 3, martes 4 y lunes 17 seran feriados."); 
        break;
    case "octubre":
        alert("En el mes de "+ mes + " el día jueves 4, miercoles 15 y lunes 26 seran feriados."); 
        break;
    case "noviembre":
        alert("En el mes de "+ mes + " el día lunes 17, martes 18 y miercoles 19 seran feriados."); 
        break;
    case "diciembre":
        alert("En el mes de "+ mes + " el día viernes 22, lunes 25 y sabado 30 seran feriados."); 
        break;
    default:
        alert("Por favor ingrese un mes.");   
}*/



//19/10/23
let operacion = prompt("Ingrese uno de los signos:")
let variable1 = parseInt(prompt("Ingrese un primer número"));
let variable2 = parseInt(prompt("Ingrese un segundo número"));
/*
//Declaración de una función
function sumar(variable1, variable2){
    return variable1 + variable2;
}

//Llamado 
let suma = sumar(variable1, variable2);
console.log(suma) 

//arrow function
const sumar2 = (a, b)=>{
    let resultado2 = a+b;
    console.log("El resultado de la suma es: " + resultado2);
    return resultado2;
}

let suma2 = sumar2(variable1, variable2);

//callback

const sumar3 = (a, b) => a+b;
*/
/*
function resolver(variable1, variable2, operacion){
    switch(operacion){
        case "+":
            return alert("El resultado de la sumas es: " + (variable1+variable2));
        break;
        case "-":
            return alert("El resultado de la resta es: " + (variable1-variable2));
        break;
        case "*":
            return alert("El resultado de la multiplicación es: " + (variable1*variable2));
        break;
        case "/":
            return alert("El resultado de la división es: " + (variable1/variable2));
        break;
        default:
            return alert("Ingrese nuevamente los datos");  
        break;    
    }
}
console.log(resolver(variable1, variable2, operacion));
*/
/*
//arrow function:
const resolver = (variable1, variable2, operacion)=>{
    switch(operacion){
        case "+":
            return alert("El resultado de la sumas es: " + (variable1+variable2));
        break;
        case "-":
            return alert("El resultado de la resta es: " + (variable1-variable2));
        break;
        case "*":
            return alert("El resultado de la multiplicación es: " + (variable1*variable2));
        break;
        case "/":
            return alert("El resultado de la división es: " + (variable1/variable2));
        break;
        default:
            return alert("Ingrese nuevamente los datos");  
        break;    
    }
}
console.log(resolver(variable1, variable2, operacion));
*/


const resolver2 = (variable1, variable2, operacion)=>{
    let resultado;
    switch(operacion){
        case "+":
            resultado = variable1+variable2;
        break;
        case "-":
            resultado = variable1-variable2;
        break;
        case "*":
            resultado = variable1*variable2;
        break;
        case "/":
            resultado = variable1/variable2;
        break;
        default:
            return alert("Ingrese nuevamente los datos");  
        break;    
    }
    return resultado;

}
console.log(resolver2(variable1, variable2, operacion));