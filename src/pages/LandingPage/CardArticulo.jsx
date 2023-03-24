import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardArticulo = (props) =>{

    const { title, cover_image, tag_list, url, comments_count, user, published_at, public_ractions_count, positive_reactions_count } = props.data;
    
    console.log("articulo data", props.data)
    return(
        <article className='articulo'>
            {
                cover_image && (
                    <a 
                    href={url}
                    className="articulo__imagen"
                    style={{backgroundImage: `url(${cover_image})`, }}
                    >
                        &nbsp;
                    </a>
            )}
    
            <div className='articulo_detalles'>
                <div className="u-pic">
                    <img src={user.profile_image_90} alt="imagen de perfil" />
                </div>
                <div className='u-datails'>
                    <a href={`http://dev.to/${user.username}`}>
                        <span className='u-name'> {user.username} </span>
                    </a>
                    <a href={url}>
                        <span className='time'> Marzo 24 (3 days ago ) </span>
                    </a>
                    <a href={url}>
                        <h3> {title} </h3>
                    </a>
                    <div className='tags'>
                        {
                            tag_list.map((tag,id)=>{
                                return(
                                    <a key={id} href={`http://dev.to/t/${tag}`}>
                                        <span className="tag">
                                            #{tag}
                                        </span>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="detalles">
                        <div className="reacciones">
                            {
                                public_ractions_count + positive_reactions_count > 0 && (
                                    <a href={url}>
                                        <span>
                                            <i>
                                                icono
                                            </i>
                                            &nbsp;
                                            {positive_reactions_count + positive_reactions_count}
                                        </span>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardArticulo;








// function CardArticulo() {
//     return (
//       <Card >
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     );
//   }