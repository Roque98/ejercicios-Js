document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos() {
    //1
    const xhr = new XMLHttpRequest();

    //2
    xhr.open('GET','datos.txt',true);

    //3
    xhr.onload = function () {
        if(xhr.status==200){
            document.getElementById('listado').innerHTML = xhr.responseText;
        }
    }

    //4
    xhr.send();
}