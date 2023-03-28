import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Footer } from '../footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import './DetallesPost.scss';
import {TbHeartPlus, TbMessageCircle2} from "react-icons/tb";
import {BsBookmark} from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/si";
import Article from '../../components/Article/Article';

const DetallesPost = () => {
    const apiUrl = 'https://backendchallengekodemia-production.up.railway.app/api/v1/posts/';
    const params = useParams();
    const { id } = params;

    const [articleInfo, setArticleInfo] = useState({});

    useEffect(
        () => {
            const getArticleData = async (articleId) => {
                const response = await fetch(`${apiUrl}${articleId}`);
                const data = await response.json();
                console.log(data);
                //set a state variable
                setArticleInfo(data)
            }

            getArticleData(id)
        }
        , []);

    return (
        <>
            <Navigation />
            <main className="articleContainer">
                <section className="page-container container-xl d-flex justify-content-between">
                    <section className="page__leftColumn">
                        <div className="interactions">
                            <div className="interactions__detail">
                                <div className="icon">
                                    <TbHeartPlus />
                                </div>
                                <p>56</p>
                            </div>
                            <div className="interactions__detail">
                                <div className="icon">
                                    <TbMessageCircle2 />
                                </div>
                                <p>9</p>
                            </div>
                            <div className="interactions__detail">
                                <div className="icon">
                                    <BsBookmark />
                                </div>
                                <p>89</p>
                            </div>
                            <div className="interactions__detail">
                                <div className="icon">
                                    <BsBookmark />
                                </div>
                                <p>89</p>
                            </div>
                        </div>
                    </section>
                    <section className="page__centerColumn">
                        {articleInfo === {} ? 
                            <p>Cargando</p>
                            :
                            <Article articleData = {articleInfo} />
                        }
                    </section>

                    <section className="page__rightColumn">
                        c
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default DetallesPost;