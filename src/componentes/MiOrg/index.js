import "../MiOrg/MiOrg.css"


const MiOrg =(props) => {

    //const [mostrar,actualizarNombre]= useState(true);

    //const manejarClick = () => {

        //console.log("Mostrar/Ocultar elemento", !mostrar);
        //actualizarNombre(!mostrar)

        

    //}

return  <section className="orgSection">

<h3 className="title"> Mi organizacion </h3>
<img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
</section>
}

export default MiOrg