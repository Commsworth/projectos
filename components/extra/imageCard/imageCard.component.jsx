import './imageCard.styles.scss';

const ImageCard = ({image}) => {
    return (
        <div className="image-card">
        <div className="top-bar">
            <img src="assets/svgs/topbar.svg" alt=""/>
        </div>
        <div style={{overflow: 'hidden'}}>
        <img className="image" src={image} alt="Card Image"/>
        </div>
    </div>
    );
};

export default ImageCard;