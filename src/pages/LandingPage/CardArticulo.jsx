
import "./CardArticulo.scss";
import imagen from "./corazon.png"


const CardArticulo = (props) =>{

    const {_id, title, coverImage, tags } = props.data;
    console.log(props)
    return(
        <article className='articulo'>
            {
                 _id === '640151306599f55c6db1f523' && coverImage && (
                    <a 
                    href={'sdasd'}
                    className="articulo__imagen"
                    >
                        <img src={coverImage} alt="" />
                        &nbsp;
                    </a>
            )}
    
            <div className='articulo_detalles'>
                <div className="user_image">
                    <img src="user.jpg" alt="imagen de perfil" />
                </div>
                <div className='user_datails'>
                    <a href={`asas`}>
                        <span className='user-name'> Aldo Mardel </span>
                    </a>
                    <a href={`asas`}>
                        <span className='time'> Marzo 24 (3 days ago ) </span>
                    </a>
                    <a href={`/post/${_id}`}>
                        <h3 className="titulo_articulo"> {title} </h3>
                    </a>
                    <div className='tags'>
                        {
                            tags.map((tag,id)=>{
                                return(
                                    <a key={id} href={`http://dev.to/t/${tag}`}>
                                        <span className="tag">
                                            #{`${tag} `}
                                        </span>
                                    </a>
                                )
                            })
                        }
                    </div>

                    <div className="interacciones">
                        <div className="reactions">
                            {
                                    <a href={'adasd'}>
                                        <span>
                                                <img src={imagen} alt="icono me gusta" />
                                            &nbsp;
                                            12
                                            <span className='hidden-mobile'> reacciones</span>
                                        </span>
                                    </a>
                                
                            }

                                    <a href={'adasd'}>
                                        <span>
                                            <img src="comments.png" alt="icono comments" />
                                            &nbsp;
                                            
                                            <span>3
                                            <span className='hidden-mobile'> comentarios</span>
                                            </span> 
                                        </span>
                                    </a>

                                    <div className='save'>
                                        <span>3 min read</span>
                                        <img src="marcador.png" alt="icono marcador" />                  
                                    </div>
                        </div>



                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardArticulo;