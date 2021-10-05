
//-----------------------------------//
//Funciones para la tabla de Clientes//
//-----------------------------------//

function traerInformacionClientes(){
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultadoClientes").empty();
            pintarRespuestaClientes(respuesta.items);
        }

    });
}

function pintarRespuestaClientes(items){

    let myTable=`<table>
    <tr>
       <th>ID</th>
       <th>NAME</th>
       <th>BRAND</th>
       <th>MODEL</th>
       <th>Acción </th>
    </tr>`;
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable += "<td><button onclick='EliminarCliente("+items[i].id+")'>Eliminar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").append(myTable);
}

function guardarInformacionClientes(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("Se guardó el cliente exitosamente!")
        }
    });
}


function editarInformacionClientes(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("Se actualizó el cliente exitosamente!")
        }
    });
}

function EliminarCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClientes").empty();
            traerInformacionClientes();
            alert("Se eliminó el cliente exitosamente!")
        }
    });
}

//---------------------------------//
//Funciones para la tabla de Fincas//
//---------------------------------//

function traerInformacionFincas(){
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultadoFincas").empty();
            pintarRespuestaFincas(respuesta.items);
        }

    });
}

function pintarRespuestaFincas(items){

    let myTable=`<table>
    <tr>
       <th>ID</th>
       <th>ADDRESS</th>
       <th>EXENSION</th>
       <th>CATEGORY_ID</th>
       <th>NAME</th>
       <th>Acción </th>
    </tr>`;
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].address+"</td>";
        myTable+="<td>"+items[i].exension+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable += "<td><button onclick='EliminarFinca("+items[i].id+")'>Eliminar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoFincas").append(myTable);
}

function guardarInformacionFincas(){
    let myData={
        id:$("#idFinca").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoFincas").empty();
            $("#idFinca").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionFincas();
            alert("Se guardó la finca exitosamente!")
        }
    });
}


function editarInformacionFincas(){
    let myData={
        id:$("#idFinca").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idFinca").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionFincas();
            alert("Se actualizó la finca exitosamente!")
        }
    });
}

function EliminarFinca(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoFincas").empty();
            traerInformacionFincas();
            alert("Se eliminó el finca exitosamente!")
        }
    });
}


//-----------------------------------//
//Funciones para la tabla de Mensajes//
//-----------------------------------//

function traerInformacionMensajes(){
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultadoMensajes").empty();
            pintarRespuestaMensajes(respuesta.items);
        }

    });
}

function pintarRespuestaMensajes(items){

    let myTable=`<table>
    <tr>
       <th>ID</th>
       <th>MENSAJE</th>
       <th>Acción </th>
    </tr>`;
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+= "<td><button onclick='EliminarMensaje("+items[i].id+")'>Eliminar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensajes").append(myTable);
}

function guardarInformacionMensajes(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#mensaje").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#idMensaje").val("");
            $("#mensaje").val("");
            traerInformacionMensajes();
            alert("Se guardó el mensaje exitosamente!")
        }
    });
}


function editarInformacionMensajes(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#mensaje").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#idMensaje").val("");
            $("#mensaje").val("");
            traerInformacionMensajes();
            alert("Se actualizó el mensaje exitosamente!")
        }
    });
}

function EliminarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gfb986b1e50cfb1-db202109232122.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            traerInformacionMensajes();
            alert("Se eliminó el mensaje exitosamente!")
        }
    });
}