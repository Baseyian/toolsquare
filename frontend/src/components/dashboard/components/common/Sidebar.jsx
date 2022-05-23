import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
    faTree,
    faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";
import PerfectScrollbar from 'react-perfect-scrollbar';

const Sidebar = ({ isOpen, toggle }) => (
    <div className={classNames("sa-app__sidebar", { "is-open": isOpen })}>
        <div className="sa-sidebar">

            <div className="sa-sidebar__header">
                <a className="sa-sidebar__logo" href="index.html">

                    <div className="sa-sidebar-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="20px">
                            <path
                                d="M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6z"
                            ></path>
                        </svg>
                        <div className="sa-sidebar-logo__caption">Admin</div>
                    </div>

                </a>
            </div>
            <div className="sa-sidebar__body">
                <PerfectScrollbar >

                    <div className="sa-nav sa-nav--sidebar">

                        <div class="sa-nav__section-title my-2"><span>Application</span></div>








                        <Nav vertical className="sa-nav sa-nav--sidebar">

                            <NavItem className="sa-nav__menu-item sa-nav__menu-item--has-icon">
                                <NavLink tag={Link} to={"/about"} className="sa-nav__link">
                                    <div className="sa-nav__icon" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                            <path
                                                d="M8,13.1c-4.4,0-8,3.4-8-3C0,5.6,3.6,2,8,2s8,3.6,8,8.1C16,16.5,12.4,13.1,8,13.1zM8,4c-3.3,0-6,2.7-6,6c0,4,2.4,0.9,5,0.2C7,9.9,7.1,9.5,7.4,9.2l3-2.3c0.4-0.3,1-0.2,1.3,0.3c0.3,0.5,0.2,1.1-0.2,1.4l-2.2,1.7c2.5,0.9,4.8,3.6,4.8-0.2C14,6.7,11.3,4,8,4z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="sa-nav__title">Dashboard</span>
                                </NavLink>
                            </NavItem>

                            <SubMenu title="Catalog" svg={<span class="sa-nav__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M8,6C4.7,6,2,4.7,2,3s2.7-3,6-3s6,1.3,6,3S11.3,6,8,6z M2,5L2,5L2,5C2,5,2,5,2,5z M8,8c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3S2,9.7,2,8V5C2,6.7,4.7,8,8,8z M14,5L14,5C14,5,14,5,14,5L14,5z M2,10L2,10L2,10C2,10,2,10,2,10z M8,13c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3s-6-1.3-6-3v-3C2,11.7,4.7,13,8,13z M14,10L14,10C14,10,14,10,14,10L14,10z"
                                    ></path>
                                </svg>
                            </span>} items={submenus[0]} />
                            <SubMenu title="Customer" svg={<span class="sa-nav__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M8,10c-3.3,0-6,2.7-6,6H0c0-3.2,1.9-6,4.7-7.3C3.7,7.8,3,6.5,3,5c0-2.8,2.2-5,5-5s5,2.2,5,5c0,1.5-0.7,2.8-1.7,3.7c2.8,1.3,4.7,4,4.7,7.3h-2C14,12.7,11.3,10,8,10z M8,2C6.3,2,5,3.3,5,5s1.3,3,3,3s3-1.3,3-3S9.7,2,8,2z"
                                    ></path>
                                </svg>
                            </span>} items={submenus[1]} />

                            <SubMenu title="Orders" svg={<span class="sa-nav__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M14.2,10.3c-0.1,0.4-0.5,0.7-0.9,0.7H4.8c-0.5,0-0.9-0.3-1-0.8L2.2,4C2.1,3.4,1.6,3,1,3H0.4C0.2,3,0,2.8,0,2.6V1.4C0,1.2,0.2,1,0.4,1h1.4c1,0,1.9,0.7,2.1,1.7l1.5,6.1C5.5,8.9,5.7,9,5.8,9h6.5c0.1,0,0.2-0.1,0.3-0.2l1.1-3.4C13.8,5.2,13.7,5,13.5,5H7.4C7.2,5,7,4.8,7,4.6V3.4C7,3.2,7.2,3,7.4,3H15c0.6,0,1,0.4,1,1v1L14.2,10.3z M4.5,13C5.3,13,6,13.7,6,14.5C6,15.3,5.3,16,4.5,16S3,15.3,3,14.5C3,13.7,3.7,13,4.5,13z M11.5,13c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5S10,15.3,10,14.5C10,13.7,10.7,13,11.5,13z"
                                    ></path>
                                </svg>
                            </span>} items={submenus[2]} />
                            <SubMenu title="Marketing" svg={<span class="sa-nav__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M11.5,3C12.9,3,14,4.1,14,5.5c0,2.7-4.3,6.4-6,7.4c-1.7-1-6-4.7-6-7.4C2,4.1,3.1,3,4.5,3C5.3,3,6,3.3,6.4,3.9L8,5.3l1.6-1.4C10,3.3,10.7,3,11.5,3 M11.5,1C10.1,1,8.8,1.6,8,2.7C7.2,1.6,5.9,1,4.5,1C2,1,0,3,0,5.5C0,10,7,15,8,15s8-5,8-9.5C16,3,14,1,11.5,1L11.5,1z"
                                    ></path>
                                </svg>
                            </span>} items={submenus[3]} />



                            <NavItem className="sa-nav__menu-item sa-nav__menu-item--has-icon">
                                <NavLink tag={Link} to={"/about"} className="sa-nav__link">
                                    <FontAwesomeIcon icon={faTree} className="sa-nav__icon" />
                                    <span className="sa-nav__title">Icons</span>
                                </NavLink>
                            </NavItem>
                            <NavItem className="sa-nav__menu-item sa-nav__menu-item--has-icon">
                                <NavLink tag={Link} to={"/about"} className="sa-nav__link">
                                    <FontAwesomeIcon icon={faChartPie} className="sa-nav__icon" />
                                    <span className="sa-nav__title">Charts</span>
                                </NavLink>
                            </NavItem>



                        </Nav>
                    </div>
                </PerfectScrollbar >
            </div>
        </div>
    </div >
);







const submenus = [
    [
        {

            title: "Product",
            target: "dashboard/product",


        },
        {

            title: "Product List",
            target: "dashboard/product-list",


        },
        {

            title: "Category",
            target: "dashboard/category",


        },
        {

            title: "Category List",
            target: "dashboard/category-list",


        },
    ],
    [

        {
            title: "Customer",
            target: "dashboard/customer",
        },
        {
            title: "Customer List",
            target: "dashboard/category-list",
        },

    ],
    [
        {
            title: "Order List",
            target: "dashboard/order-list",
        },
        {
            title: "Order Details",
            target: "dashboard/order",
        },
    ],
    [
        {
            title: "Coupon List",
            target: "dashboard/coupon-list",
        },
        {
            title: "Coupon",
            target: "dashboard/coupon",
        },
    ],
];

export default Sidebar;
