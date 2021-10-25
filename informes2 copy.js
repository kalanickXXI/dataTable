$(document).ready(function () { 
    
   let datos = ''; 
   let vari = ''; 
   let vari2 = ''; 
   let msg = ''; 
   let datatable;
    $.ajax({
        url : "https://es.gar.com.ar/comprobantes/sis",
        
        type: "GET",
        dataType: "text",
        contentType : 'application/json',

        success: function(data) {
            //console.log(data);
            datos = JSON.parse(data);
            dibujarTable(datos);
        }
    });  
    
    
    function dibujarTable(datos) {
        //console.log(datos);
         
        datatable =  $('#example').DataTable( {
            data:datos,           
            "columns": [
                //{data: 'id'}  ,
                {data: "cuit"},
                {data: "razon_social"},
                {data: "fecha_comprobante"},
                {data: "responsable"},
                //{data: "tipo_movimiento"},
                {data: "descripcion"},
                {defaultContent: "<button type='button' class='editar btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"} 
            ],
            "responsive" : true,
            buttons : [
                { extends : 'Nuevo'}
            ]                                 
        }); 
        
        $('#example tbody').on( 'click', 'button.editar', function () {
             let datos = datatable.row( this ).data();
             mostrar(datos);
        } );
                   
    } 

    function mostrar(data) {
        
        //console.log(data);
        
        $(".modal-body").empty();
        $.each(data, function(index, value){
            console.log(index);
            console.log(value);
            
            $(".modal-body").append(`<div class="form-group">
            <label for="recipient-name" class="col-form-label">${index}</label>
            <input type="text" value="${value}" class="form-control">
            </div>`)
        }, 
            $('#datostablas').modal('toggle')
        );
    }

    $(".apple-switch").click(function(){
        if( $(".apple-switch").is(":checked") ){
            alert('activo');
        } else {
            alert("Inactivo");
        }
    });

    // Canvas Imagen
    crearImagen = (posicion, texto, fondo) => {
        let canvas1 = document.getElementById(posicion);
        let context = canvas1.getContext("2d");
        context.beginPath();
        context.fillStyle = fondo;
        context.strokeStyle = "black";
        context.font = "20px Georgia";
        context.lineWidth = 10;
        context.arc(75, 75, 55, 0, 2 * Math.PI, false);
        context.fill();
        context.beginPath();
        context.fillStyle = "red";
        context.fillText(texto, 25, 85);
        context.fill();
    }


    crearImagen("canvas1", 'Wellcome', "#bb44ee");
    crearImagen("canvas2", 'Tutoriales', "#AA2200");
    crearImagen("canvas3", ' Mi Perfil ', "#00FF22");
    crearImagen("canvas4", '   Otros   ', "#0022FF")

});