function enviarDatos(){
    let palabrauno, separa, invierte, une, min, eliminar; // Declarar variables necesarias
        palabrauno = document.getElementsByName('palabrauno')[0].value;
        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
       } 
        palabrauno = removeAccents(palabrauno); // Apartado para remover acentos y algunos caracteres especiales
    palabrauno = palabrauno.toLowerCase(); // Para convertir el texto a minúsculas
    palabrauno = palabrauno.replace(/\s+/g, ''); // Para eliminar espacios
    separa = palabrauno.split(""); // Dividir el texto en letras
    invierte = separa.reverse(); // Invertir el orden de las letras que fueron separadas en el paso anterior
    une = invierte.join(""); // Unir nuevamente las letras en una cadena
    let palabrados = une; // Asignar el resultado de la cadena ya invertida a la variable palabrados
    
    document.getElementsByName('palabrados')[0].value=`${palabrados}`;
        
        if(document.getElementsByName('palabrauno')[0].value=='') // Validaciones para el correcto uso de los cuadros de texto
            {
            alert('Por favor, ingrese la palabra.');
            document.getElementsByName("palabrauno")[0].style.backgroundColor="rgb(255, 175, 175)";
            return false;
            }
        else{
            document.getElementsByName("palabrauno")[0].style.backgroundColor="white";
            }
    
        if (palabrauno==palabrados) // Mensaje de comprobación 
            {
            alert("La palabra ingresada SÍ es un palíndromo.")
            }   
        else{
            alert("La palabra ingresada NO es un palíndromo")
            }
        }