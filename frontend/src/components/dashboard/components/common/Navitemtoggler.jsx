import React from 'react';
import { UncontrolledCollapse } from 'reactstrap';


const Navitemtoggler = () => {
    return (
        <div>
            <li className="sa-nav__menu-item sa-nav__menu-item--has-icon" id="toggler" style={{ marginBottom: '1rem' }} >
                <a href className="sa-nav__link" data-sa-collapse-trigger>
                    <span className="sa-nav__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8,6C4.7,6,2,4.7,2,3s2.7-3,6-3s6,1.3,6,3S11.3,6,8,6z M2,5L2,5L2,5C2,5,2,5,2,5z M8,8c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3S2,9.7,2,8V5C2,6.7,4.7,8,8,8z M14,5L14,5C14,5,14,5,14,5L14,5z M2,10L2,10L2,10C2,10,2,10,2,10z M8,13c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3s-6-1.3-6-3v-3C2,11.7,4.7,13,8,13z M14,10L14,10C14,10,14,10,14,10L14,10z" />
                        </svg>
                    </span>
                    <span className="sa-nav__title">Catalog</span>
                    <span className="sa-nav__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width={6} height={9} viewBox="0 0 6 9" fill="currentColor">
                            <path d="M5.605,0.213 C6.007,0.613 6.107,1.212 5.706,1.612 L2.696,4.511 L5.706,7.409 C6.107,7.809 6.107,8.509 5.605,8.808 C5.204,9.108 4.702,9.108 4.301,8.709 L-0.013,4.511 L4.401,0.313 C4.702,-0.087 5.304,-0.087 5.605,0.213 Z" />
                        </svg>
                    </span>
                </a>
                <UncontrolledCollapse toggler="#toggler">
                    <ul className="sa-nav__menu sa-nav__menu--sub" data-sa-collapse-content>
                        <li className="sa-nav__menu-item">
                            <a href="app-products-list.html" className="sa-nav__link">
                                <span className="sa-nav__menu-item-padding" />
                                <span className="sa-nav__title">Products List</span>
                            </a>
                        </li>
                        <li className="sa-nav__menu-item">
                            <a href="app-product.html" className="sa-nav__link">
                                <span className="sa-nav__menu-item-padding" />
                                <span className="sa-nav__title">Product</span>
                            </a>
                        </li>
                        <li className="sa-nav__menu-item">
                            <a href="app-categories-list.html" className="sa-nav__link">
                                <span className="sa-nav__menu-item-padding" />
                                <span className="sa-nav__title">Categories List</span>
                            </a>
                        </li>
                        <li className="sa-nav__menu-item">
                            <a href="app-category.html" className="sa-nav__link">
                                <span className="sa-nav__menu-item-padding" />
                                <span className="sa-nav__title">Category</span>
                            </a>
                        </li>
                    </ul>

                </UncontrolledCollapse>

            </li>
        </div>



    );
}

export default Navitemtoggler;