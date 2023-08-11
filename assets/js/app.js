 //-----------------------------Html------------------------
//constantes------------------------
const div=document.querySelector('.contenedor-inputs');
 const input1=document.createElement('div');
 input1.classList.add('nota');
 input1.innerHTML='<input type="number" value="" placeholder="nota1" class="input" id="boton1">'
 const input2=document.createElement('div');
 input2.innerHTML='<input type="number" value="" placeholder="nota2" class="input" id="boton2">'
 input2.classList.add('nota');
 const input3=document.createElement('div');
 input3.innerHTML='<input type="number" value="" placeholder="nota3" class="input" id="boton3">'
 input3.classList.add('nota');
 const input4=document.createElement('div');
 input4.innerHTML='<input type="number" value="" placeholder="nota4" class="input" id="boton4">'
 input4.classList.add('nota');
 const calculo=document.createElement('button');
 calculo.classList.add('calcular');
 calculo.textContent='Calcular';
 //---------------------------------------
 div.appendChild(calculo)
 div.appendChild(input1);
 div.appendChild(input2);
 div.appendChild(input3);
 div.appendChild(input4);
 //------------------------------------------------------------
 //-----------------------------Javascript------------------------



const calcular = () => {
    const input11 = parseFloat(document.getElementById('boton1').value);
    const input22 = parseFloat(document.getElementById('boton2').value);
    const input33 = parseFloat(document.getElementById('boton3').value);
    const input44 = parseFloat(document.getElementById('boton4').value);
  
    const arreglo = [];
    arreglo.push(input11, input22, input33, input44);
  
    let camilo = notaFinal(arreglo,porcentajes);
    console.log(`El promedio de nota es ${camilo}`);
  }
  
  let suma = 0;
  function notaFinal(arreglo,porcentajes) {
    arreglo.forEach(z => {
      suma = suma + z/arreglo.length;
    });

   console.log( porcentajes(arreglo));
    
    return suma;
  }

  calculo.addEventListener('click', calcular);
 //---------------------------------

//  general()

// function general(){
//     alert('mi nombre es')
//     funcion2(funcion3)
// }
//  function funcion2(funcion3){
//     funcion3()
//  }
//  function funcion3(){
//     alert('Camilo Estevan Tacue Salazar')
//  }
 
//-----------------------------------------------
//crear funcion,recibe como parametro un arreglo,hacer calculo pos sus posisicones y retornar al inicio
function porcentajes (arreglo){
    let p1 = arreglo[0] * 0.03;
    let p2 = arreglo[1] * 0.03;
    let p3 = arreglo[2] * 0.03;
    let p4 = arreglo[3] * 0.03;
    let arreglo2 = [p1,p2,p3,p4]

    return arreglo2;

}
