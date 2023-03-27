import React from  'react';
import { useParams } from "react-router-dom";
import { Footer } from '../footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import './DetallesPost.scss';   

const DetallesPost = () => {
    const params = useParams();
    const { id } = params;

    return(
        <>
            <Navigation /> 
            <main className="articleContainer">
                <p>{id}</p>
            </main>
            <Footer />
        </>
    );
}

export default DetallesPost;