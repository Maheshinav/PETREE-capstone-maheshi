import Userone from "../../assets/icons/Avatar.svg";
import './comments.css';

const Comments = () => {
    return (
        <div>
            <hr className="hr divider hr-blurry" />
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
                                    <small className="comments__description">Petree is Amazing. I always wanted to grow my own fruit tree. But I couldn't do that because I am a mom with 2 kids. Have no enough time for gardening.
                                        But Petree changed everything. Now I have my own pet tree and PETREE helps me to take care of it easily.Thanks Petree for this stress reliver</small>
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
                                    <small className="comments__description">Just got my dwarf plum tree and the handmade clay pot. They are awesome!!</small>
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
