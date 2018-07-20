document.getElementById('boton1').addEventListener('click',mostrarEmpleado);

function mostrarEmpleado() {
    //1
    const ajax = new XMLHttpRequest();

    //2
    ajax.open('GET','empleado.json',true);

    //3
    ajax.onload = function () {
        if (ajax.status==200) {
            const persona = JSON.parse(ajax.responseText);

            let htmlTemplate = `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Trabajo: ${persona.trabajo}</li>
                </ul>
            `;  

            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    //4
    ajax.send();
}



document.getElementById('boton2').addEventListener('click',mostrarEmpleados);

function mostrarEmpleados() {
    //1
    const ajax = new XMLHttpRequest();

    //2
    ajax.open('GET','empleados.json',true);

    //3
    ajax.onload = function () {
        if (ajax.status==200) {
            const personal = JSON.parse(ajax.responseText);

            
            let htmlTemplate = "";
            personal.forEach(persona => {
                htmlTemplate+=
              `   <ul>
                      <li>ID: ${persona.id}</li>
                      <li>Nombre: ${persona.nombre}</li>
                      <li>Empresa: ${persona.empresa}</li>
                      <li>Trabajo: ${persona.trabajo}</li>
                  </ul>
              `;  
            });

            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }

    //4
    ajax.send(); 
}
