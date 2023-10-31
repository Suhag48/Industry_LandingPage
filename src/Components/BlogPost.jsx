import "./BlogPostStyle.css"
import { BlogPostData } from "./BlogPostData"


import {AiOutlineHeart} from "react-icons/ai"
import {BiMessageRounded} from "react-icons/bi"

const BlogPost = () => {
    return(
        <div className="blogPost">
            <h1>Latest Posts From Our Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            <br></br>labore et dolore magna aliqua.</p>

            <div className="card">
                {
                    BlogPostData.map((data, index) => {
                        const { CardImage, authorImg, authorName, postDate, postReact, postMessage, cardHeading, cardText } = data

                        return(
                            <div key={index} className="card-body">
                                <div className="card-content">
                                    <div className="card-image">
                                        <img src={CardImage} alt="" />
                                    </div>

                                    <div className="author">
                                        <div className="author-info">
                                            <img src={authorImg} alt="" />
                                            <p> {authorName} </p>
                                        </div>

                                        <div className="post-info">
                                            <p className="post-date"> {postDate} </p>

                                            <span>
                                                <AiOutlineHeart/>
                                            </span>
                                            <p> {postReact} </p>
                                            
                                            <span className="message">
                                                <BiMessageRounded/>
                                            </span>
                                            <p> {postMessage} </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="card-text">
                                    <h2> {cardHeading} </h2>
                                    <p>
                                        {cardText}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default BlogPost