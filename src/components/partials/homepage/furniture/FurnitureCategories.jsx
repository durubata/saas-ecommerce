import React from 'react';
import Link from 'next/link';

const FurnitureCategories = () => {
    return (
        <div className="ps-home-categories ps-section--furniture">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Shop by categories</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/1.png"
                                    alt="appmint"
                                />
                                <p>Sofas</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/2.png"
                                    alt="appmint"
                                />
                                <p>Chairs</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/3.png"
                                    alt="appmint"
                                />
                                <p>Tables</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/4.png"
                                    alt="appmint"
                                />
                                <p>TV Boards</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/5.png"
                                    alt="appmint"
                                />
                                <p>Storages</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/6.png"
                                    alt="appmint"
                                />
                                <p>Rugs</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/7.png"
                                    alt="appmint"
                                />
                                <p>Lamp &amp; Lighting</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/8.png"
                                    alt="appmint"
                                />
                                <p>Furnishings</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/9.png"
                                    alt="appmint"
                                />
                                <p>Ottomans</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/10.png"
                                    alt="appmint"
                                />
                                <p>Shelfs</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/11.png"
                                    alt="appmint"
                                />
                                <p>Kid Furnitures</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--category">
                                <Link href={'/shop'} />
                                <img
                                    src="/static/img/categories/furniture/12.png"
                                    alt="appmint"
                                />
                                <p>Kitchen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FurnitureCategories;
