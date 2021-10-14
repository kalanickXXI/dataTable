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
                {data: 'id'}  ,
                {data: "cuit"},
                {data: "razon_social"},
                {data: "fecha_comprobante"},
                {data: "responsable"},
                {data: "tipo_movimiento"},
                {data: "descripcion"} 
            ],
            "responsive" : true,
        })
            
    }
   
    

});