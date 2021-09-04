const ImageCard = ({image}) => {
    return (
        <div className="image-card">
        <div className="top-bar">
            <img src="/portfolioPageImages/svgs/imagecard/topbar.svg" alt=""/>
        </div>
        <div style={{overflow: 'hidden'}}>
        <img className="image" src={image} alt="Card Image"/>
        </div>

        <style jsx>
            {`
            .image-card .top-bar {
            height: 30px;
            background: #292f34;
            -webkit-box-shadow: 0px -4px 25px rgba(0, 0, 0, 0.25);
                    box-shadow: 0px -4px 25px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding-left: 10px;
            padding-top: 10px;
            }

            .image-card .image {
            width: 100%;
            height: 435.41px;
            -webkit-transition: ease-in-out 0.5s;
            transition: ease-in-out 0.5s;
            }

            .image-card .image:hover {
            -webkit-transform: scale(1.3);
                    transform: scale(1.3);
            -webkit-transition: ease-in-out 1s;
            transition: ease-in-out 1s;
            }
            `}
        </style>
    </div>
    );
};

export default ImageCard;