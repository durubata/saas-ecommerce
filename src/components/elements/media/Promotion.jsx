import React from 'react';
import Link from 'next/link';

const Promotion = ({ link, image }) => {
    if (image) {
        return (
            <Link href={link} className="ps-collection">
                <img src={image} alt="appmint" />
            </Link>
        );
    } else {
        return (
            <Link href={link ? link : '/shop'} className="ps-collection">
                <img src="/static/img/not-found.jpg" alt="appmint" />
            </Link>
        );
    }
};

export default Promotion;
