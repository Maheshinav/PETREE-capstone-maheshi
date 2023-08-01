import Userone from "../../assets/icons/Avatar.svg";
import './comments.css';

const Comments = () => {
    return (
        <div>
            <hr class="hr divider hr-blurry" />
            <div className="container mt-5">
               <div>
               <h1 className="page-title">
                    Hear From Real Petree Owners!
                </h1>
               </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">

                        <div className="card  comments__card-border p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user d-flex flex-row align-items-center">
                                    <img src={Userone} alt="avatar" />
                                    <span>
                                        <small className="comments__username">Carl Conrad Corriander</small>

                                    </span>
                                </div>
                                <small className="comments__date">2023-01-02</small>
                            </div>
                            <div className=" d-flex justify-content-between mt-2 align-items-center">
                                <div className="reply px-4">
                                    <small className="comments__description">Just received my tree pot from Petree, and it's fantastic! The quality is top-notch, and it looks great in my garden.</small>
                                </div> 
                                


                            </div>
                            
                        </div>

                        <div className="card comments__card-border p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user d-flex flex-row align-items-center">
                                    <img src={Userone} alt="" />
                                    <span>
                                        <small className="comments__username">Bastian Baltazar Buks</small>

                                    </span>
                                </div>
                                <small className="comments__date">2023-01-27</small>
                            </div>
                            <div className=" d-flex justify-content-between mt-2 align-items-center">
                                <div className="reply px-4">
                                    <small className="comments__description">Hmm, This poster looks cool</small>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
