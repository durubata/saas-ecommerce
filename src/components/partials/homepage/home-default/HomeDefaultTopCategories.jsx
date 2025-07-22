import React from 'react';
import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Top categories of the month</h3>
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/1.jpg"
                            alt="appmint"
                        />
                        <p>Electronics</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/2.jpg"
                            alt="appmint"
                        />
                        <p>Clothings</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/3.jpg"
                            alt="appmint"
                        />
                        <p>Computers</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/4.jpg"
                            alt="appmint"
                        />
                        <p>Home & Kitchen</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/5.jpg"
                            alt="appmint"
                        />
                        <p>Health & Beauty</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/6.jpg"
                            alt="appmint"
                        />
                        <p>Health & Beauty</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/7.jpg"
                            alt="appmint"
                        />
                        <p>Jewelry & Watch</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={'/shop'} className="ps-block__overlay" />
                        <img
                            src="/static/img/categories/8.jpg"
                            alt="appmint"
                        />
                        <p>Technology Toys</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
