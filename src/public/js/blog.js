const $img_selected = document.querySelector("#img_selected"),
$img_viewer = document.querySelector("#img_viewer");

//escuchar cuando cambie
$img_selected.addEventListener("change",()=>{
    //los archivos seleccionado, pueden ser mucho o uno
    const archivo = $img_selected.files;
    //si no hay archivos salimos de funcion y quitamos la imagen
    if (!archivo || !archivo.length) {
        $img_viewer.src = "";
        return;
    }
    //ahora tomo el primer archivo, el cual voy a previsualizar
    const primerArchivo = archivo[0];
    //lo convierto a un obj de tipo obgctURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // y la fuente de la imagen le ponemos el objectURL
    $img_viewer.src=objectURL;
});