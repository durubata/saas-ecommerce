import React from 'react';
import Link from 'next/link';

const ShopBrands = () => (
    <div className="ps-shop-brand">
        <Link href={'/shop'}>
            <img src="/static/img/brand/1.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/2.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/3.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/4.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/5.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/6.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/7.jpg" alt="appmint" />
        </Link>
        <Link href={'/shop'}>
            <img src="/static/img/brand/8.jpg" alt="appmint" />
        </Link>
    </div>
);

export default ShopBrands;
