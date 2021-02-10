import React from 'react';
import './featureDescriptionBlock.scss';

const FeatureDescriptionBlock = ({image,title,description}) => {
    return (
       <article className="feature-description-block">
           <span><img src={image} alt=""/></span>
           <section>
               <h3>{title}</h3>
               <p>{description}</p>
           </section>
       </article> 
    );
};

export default FeatureDescriptionBlock;