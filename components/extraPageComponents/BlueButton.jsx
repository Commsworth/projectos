import React from 'react';
import Link from 'next/link';     

const BlueButton = () => {
    return (
        <Link href="/services">
        <button className="heading-button">Learn More</button>
      </Link>
    );
};

export default BlueButton;