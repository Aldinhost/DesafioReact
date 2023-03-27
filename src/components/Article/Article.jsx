import React from 'react';
import dateFormat from '../../Helpers/dateFormat';
import './Article.scss';

const Article = ({articleData}) => {
    const {title, content, coverImage, tags, createdAt} = articleData;

    return (
        <>
            <div className="card container-fluid px-0 cardArticle">
                <img
                    src={coverImage}
                    className="card-img-top coverImage" 
                    alt="Cover image"
                    />
                <div className="cardBody">
                    <div className="cardBody__about d-flex ">
                        <div className="profilePicture">
                            <img 
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--dhPfh0qb--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/417922/d5a37d43-1157-4c3a-b4dd-8b5a111371ca.png" 
                            alt="profile picture" 
                            />
                        </div>
                        <div className="authorDate">
                            <h4>Jorge Monterrosas</h4>
                            <p>Posted on {dateFormat(createdAt)}</p>
                        </div>
                    </div>
                    <div className="card__content">
                        <h1>{title}</h1>
                        <div className="tags d-flex">
                            {tags?.map(
                                (tag)=> 
                                <p 
                                className='articleBadge'
                                >
                                    {`#${tag}`}
                                </p>
                            )}
                        </div>
                        <p>{content}</p>
                    </div>   
                </div>
            </div>
        </>
    );
}

export default Article;