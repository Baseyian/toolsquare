import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Barchart from '../components/chart/Barchart';
import Piechart from './../components/chart/Piechart';
import CardBox from '../components/common/CardBox';
import { Carddata } from '../data/Carddata';
import Sidebar from './../components/common/Sidebar';



const Dashboard = () => {
    const sidebar = "sa-app sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed sa-app--desktop-sidebar-shown";


    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const [CardData, setcarddata] = useState(Carddata);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);


    const handlesidebar = () => {

        setCls(!cls);
    };
    return (
        <div className='sa-app sa-app--desktop-sidebar-shown sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed'>

            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <div className="sa-app__content">
                <div className="sa-toolbar sa-app__toolbar sa-toolbar--search-hidden">
                    <div className="sa-toolbar__body">
                        <div className="sa-toolbar__item">
                            <button className="sa-toolbar__button" type="button" aria-label="Menu" onClick={handlesidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M1,11V9h18v2H1z M1,3h18v2H1V3z M15,17H1v-2h14V17z" />
                                </svg>
                            </button>
                        </div>
                        <div className="sa-toolbar__item sa-toolbar__item--search">
                            <form className="sa-search sa-search--state--pending">
                                <div className="sa-search__body">

                                    <div className="sa-search__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M16.243 14.828C16.243 14.828 16.047 15.308 15.701 15.654C15.34 16.015 14.828 16.242 14.828 16.242L10.321 11.736C9.247 12.522 7.933 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.933 12.522 9.247 11.736 10.321L16.243 14.828ZM6.5 2C4.015 2 2 4.015 2 6.5C2 8.985 4.015 11 6.5 11C8.985 11 11 8.985 11 6.5C11 4.015 8.985 2 6.5 2Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-search" className="sa-search__input" placeholder="Search for the truth" autoComplete="off" />
                                    <button className="sa-search__cancel d-sm-none" type="button" aria-label="Close search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="currentColor">
                                            <path d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6 c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4 C11.2,9.8,11.2,10.4,10.8,10.8z" />
                                        </svg>
                                    </button>
                                    <div className="sa-search__field" />
                                </div>
                                <div className="sa-search__dropdown">
                                    <div className="sa-search__dropdown-loader" />
                                    <div className="sa-search__dropdown-wrapper">
                                        <div className="sa-search__suggestions sa-suggestions" />
                                        <div className="sa-search__help sa-search__help--type--no-results">
                                            <div className="sa-search__help-title">
                                                No results for "
                                                <span className="sa-search__query" />
                                                "
                                            </div>
                                            <div className="sa-search__help-subtitle">Make sure that all words are spelled correctly.</div>
                                        </div>
                                        <div className="sa-search__help sa-search__help--type--greeting">
                                            <div className="sa-search__help-title">Start typing to search for</div>
                                            <div className="sa-search__help-subtitle">Products, orders, customers, actions, etc.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sa-search__backdrop" />
                            </form>
                        </div>
                        <div className="mx-auto" />
                        <div className="sa-toolbar__item d-sm-none">
                            <button className="sa-toolbar__button" type="button" aria-label="Show search" data-sa-action="show-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M16.243 14.828C16.243 14.828 16.047 15.308 15.701 15.654C15.34 16.015 14.828 16.242 14.828 16.242L10.321 11.736C9.247 12.522 7.933 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.933 12.522 9.247 11.736 10.321L16.243 14.828ZM6.5 2C4.015 2 2 4.015 2 6.5C2 8.985 4.015 11 6.5 11C8.985 11 11 8.985 11 6.5C11 4.015 8.985 2 6.5 2Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="sa-toolbar__item dropdown">
                            <button className="sa-toolbar__button" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" data-bs-reference="parent" data-bs-offset="0,1" aria-expanded="false">
                                <img src="vendor/flag-icons/24/DE.png" className="sa-language-icon" alt />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <img src="vendor/flag-icons/24/DE.png" className="sa-language-icon me-3" alt />
                                        <span className="ps-2">German</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <img src="vendor/flag-icons/24/FR.png" className="sa-language-icon me-3" alt />
                                        <span className="ps-2">French</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <img src="vendor/flag-icons/24/GB.png" className="sa-language-icon me-3" alt />
                                        <span className="ps-2">English</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <img src="vendor/flag-icons/24/RU.png" className="sa-language-icon me-3" alt />
                                        <span className="ps-2">Russian</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <img src="vendor/flag-icons/24/IT.png" className="sa-language-icon me-3" alt />
                                        <span className="ps-2">Italian</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="sa-toolbar__item dropdown">
                            <button className="sa-toolbar__button" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" data-bs-reference="parent" data-bs-offset="0,1" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8,13c0,0-5.2,0-7,0c0-1-0.1-1.9,1-1.9C2,5,4,2,6,2c0-1.1,0-2,2-2c1.9,0,2,0.9,2,2c2,0,4,3,4,9c1,0,1,1,1,2C12.7,13,8,13,8,13z M6,14h4c0,1.1,0,2-2,2C6,16,6,15.1,6,14L6,14L6,14z" />
                                </svg>
                                <span className="sa-toolbar__button-indicator">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="dropdownMenuButton2">
                                <div className="sa-notifications">
                                    <div className="sa-notifications__header">
                                        <div className="sa-notifications__header-title">Notifications</div>
                                        <a className="sa-notifications__header-action" href>Mark All as Read</a>
                                    </div>
                                    <ul className="sa-notifications__list">
                                        <li className="sa-notifications__item">
                                            <a href="#" className="sa-notifications__item-button">
                                                <div className="sa-notifications__item-icon">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--style--primary">
                                                        <div className="sa-symbol__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                                                <path d="M14.5,15h-1c-0.8,0-1.5-0.7-1.5-1.5v-8C12,4.7,12.7,4,13.5,4h1C15.3,4,16,4.7,16,5.5v8C16,14.3,15.3,15,14.5,15z M8.5,15h-1C6.7,15,6,14.3,6,13.5v-11C6,1.7,6.7,1,7.5,1h1C9.3,1,10,1.7,10,2.5v11C10,14.3,9.3,15,8.5,15z M2.5,15h-1C0.7,15,0,14.3,0,13.5v-5C0,7.7,0.7,7,1.5,7h1C3.3,7,4,7.7,4,8.5v5C4,14.3,3.3,15,2.5,15z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sa-notifications__item-body">
                                                    <div className="sa-notifications__item-title sa-notifications__item-title--nowrap">
                                                        New report has been received
                                                    </div>
                                                    <div className="sa-notifications__item-subtitle sa-notifications__item-subtitle--nowrap">24 hours ago</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="sa-notifications__item">
                                            <a href="#" className="sa-notifications__item-button">
                                                <div className="sa-notifications__item-icon">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--style--warning">
                                                        <div className="sa-symbol__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                                                <path d="M8,6C4.7,6,2,4.7,2,3s2.7-3,6-3s6,1.3,6,3S11.3,6,8,6z M2,5L2,5L2,5C2,5,2,5,2,5z M8,8c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3S2,9.7,2,8V5C2,6.7,4.7,8,8,8z M14,5L14,5C14,5,14,5,14,5L14,5z M2,10L2,10L2,10C2,10,2,10,2,10z M8,13c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3s-6-1.3-6-3v-3C2,11.7,4.7,13,8,13z M14,10L14,10C14,10,14,10,14,10L14,10z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sa-notifications__item-body">
                                                    <div className="sa-notifications__item-title sa-notifications__item-title--nowrap">
                                                        Creating a backup in the process
                                                    </div>
                                                    <div className="sa-notifications__item-subtitle sa-notifications__item-subtitle--nowrap">
                                                        Completed: 37% (23.05 MB)
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="sa-notifications__item">
                                            <a href="#" className="sa-notifications__item-button">
                                                <div className="sa-notifications__item-icon">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--style--primary">
                                                        <div className="sa-symbol__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                                                <path d="M14.2,10.3c-0.1,0.4-0.5,0.7-0.9,0.7H4.8c-0.5,0-0.9-0.3-1-0.8L2.2,4C2.1,3.4,1.6,3,1,3H0.4C0.2,3,0,2.8,0,2.6V1.4C0,1.2,0.2,1,0.4,1h1.4c1,0,1.9,0.7,2.1,1.7l1.5,6.1C5.5,8.9,5.7,9,5.8,9h6.5c0.1,0,0.2-0.1,0.3-0.2l1.1-3.4C13.8,5.2,13.7,5,13.5,5H7.4C7.2,5,7,4.8,7,4.6V3.4C7,3.2,7.2,3,7.4,3H15c0.6,0,1,0.4,1,1v1L14.2,10.3z M4.5,13C5.3,13,6,13.7,6,14.5C6,15.3,5.3,16,4.5,16S3,15.3,3,14.5C3,13.7,3.7,13,4.5,13z M11.5,13c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5S10,15.3,10,14.5C10,13.7,10.7,13,11.5,13z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sa-notifications__item-body">
                                                    <div className="sa-notifications__item-title sa-notifications__item-title--nowrap">Product added to cart</div>
                                                    <div className="sa-notifications__item-subtitle sa-notifications__item-subtitle--nowrap">
                                                        Drill Screwdriver Brandix ALX7054 200 Watts
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="sa-notifications__item">
                                            <a href="#" className="sa-notifications__item-button">
                                                <div className="sa-notifications__item-icon">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--style--info">
                                                        <div className="sa-symbol__icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                                                                <path d="M8,10c-3.3,0-6,2.7-6,6H0c0-3.2,1.9-6,4.7-7.3C3.7,7.8,3,6.5,3,5c0-2.8,2.2-5,5-5s5,2.2,5,5c0,1.5-0.7,2.8-1.7,3.7c2.8,1.3,4.7,4,4.7,7.3h-2C14,12.7,11.3,10,8,10z M8,2C6.3,2,5,3.3,5,5s1.3,3,3,3s3-1.3,3-3S9.7,2,8,2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sa-notifications__item-body">
                                                    <div className="sa-notifications__item-title sa-notifications__item-title--nowrap">Customer Ryan Ford says</div>
                                                    <div className="sa-notifications__item-subtitle sa-notifications__item-subtitle--nowrap">
                                                        What is a screen dimension of Brandix Series B monitor?
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="sa-notifications__footer"><a className="sa-notifications__footer-action" href>See all 15 notifications</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown sa-toolbar__item">
                            <button className="sa-toolbar-user" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-offset="0,1" aria-expanded="false">
                                <span className="sa-toolbar-user__avatar sa-symbol sa-symbol--shape--rounded">
                                    <img src="images/customers/customer-4-64x64.jpg" width={64} height={64} alt />
                                </span>
                                <span className="sa-toolbar-user__info">
                                    <span className="sa-toolbar-user__title">Konstantin Veselovsky</span>
                                    <span className="sa-toolbar-user__subtitle">stroyka@example.com</span>
                                </span>
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="app-inbox-list.html">Inbox</a></li>
                                <li><a className="dropdown-item" href="app-settings-toc.html">Settings</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="auth-sign-in.html">Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sa-toolbar__shadow" />
                </div>



                <div id="top" className="sa-app__body px-2 px-lg-4">
                    <div className="container pb-6">

                        <div className="py-5">
                            <div className="row g-4 align-items-center">
                                <div className="col"><h1 className="h3 m-0">Dashboard</h1></div>
                                <div className="col-auto d-flex">
                                    <select className="form-select me-3">
                                        <option selected>7 October, 2021</option>
                                    </select>
                                    <a href="#" className="btn btn-primary">Export</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 g-xl-5">
                            {CardData.map(i => <CardBox data={i} />)}


                            <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                                <div className="card flex-grow-1 saw-pulse" data-sa-container-query="{&quot;560&quot;:&quot;saw-pulse--size--lg&quot;}">
                                    <div className="sa-widget-header saw-pulse__header">
                                        <h2 className="sa-widget-header__title">Active users</h2>
                                        <div className="sa-widget-header__actions">
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-4" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                                        <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-4">
                                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                                    <li><a className="dropdown-item" href="#">Move</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saw-pulse__counter">148</div>
                                    <div className="sa-widget-table saw-pulse__table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Active pages</th>
                                                    <th className="text-end">Users</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/products/brandix-z4</a></td>
                                                    <td className="text-end">15</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/categories/drivetrain</a></td>
                                                    <td className="text-end">11</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/categories/monitors</a></td>
                                                    <td className="text-end">7</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/account/orders</a></td>
                                                    <td className="text-end">4</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/cart</a></td>
                                                    <td className="text-end">3</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/checkout</a></td>
                                                    <td className="text-end">3</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="text-reset">/pages/about-us</a></td>
                                                    <td className="text-end">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                                <div className="card flex-grow-1 saw-chart" data-sa-data="[{&quot;label&quot;:&quot;Jan&quot;,&quot;value&quot;:50},{&quot;label&quot;:&quot;Feb&quot;,&quot;value&quot;:130},{&quot;label&quot;:&quot;Mar&quot;,&quot;value&quot;:525},{&quot;label&quot;:&quot;Apr&quot;,&quot;value&quot;:285},{&quot;label&quot;:&quot;May&quot;,&quot;value&quot;:470},{&quot;label&quot;:&quot;Jun&quot;,&quot;value&quot;:130},{&quot;label&quot;:&quot;Jul&quot;,&quot;value&quot;:285},{&quot;label&quot;:&quot;Aug&quot;,&quot;value&quot;:240},{&quot;label&quot;:&quot;Sep&quot;,&quot;value&quot;:710},{&quot;label&quot;:&quot;Oct&quot;,&quot;value&quot;:470},{&quot;label&quot;:&quot;Nov&quot;,&quot;value&quot;:640},{&quot;label&quot;:&quot;Dec&quot;,&quot;value&quot;:1110}]">
                                    <div className="sa-widget-header saw-chart__header">
                                        <h2 className="sa-widget-header__title">Income statistics</h2>
                                        <div className="sa-widget-header__actions">
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-5" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                                        <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-5">
                                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                                    <li><a className="dropdown-item" href="#">Move</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <Barchart />

                                </div>
                            </div>
                            <div className="col-12 col-xxl-9 d-flex">
                                <div className="card flex-grow-1 saw-table">
                                    <div className="sa-widget-header saw-table__header">
                                        <h2 className="sa-widget-header__title">Recent orders</h2>
                                        <div className="sa-widget-header__actions">
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-6" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                                        <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-6">
                                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                                    <li><a className="dropdown-item" href="#">Move</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saw-table__body sa-widget-table text-nowrap">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Status</th>
                                                    <th>Co.</th>
                                                    <th>Customer</th>
                                                    <th>Date</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00745</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-primary">Pending</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/IT.png" className="sa-language-icon d-block" alt title="Italy" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">GB</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Giordano Bruno</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-11-02</td>
                                                    <td>$2,742.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00513</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-warning">Hold</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/DE.png" className="sa-language-icon d-block" alt title="Germany" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">HW</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Hans Weber</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-09-05</td>
                                                    <td>$204.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00507</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-primary">Pending</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/IT.png" className="sa-language-icon d-block" alt title="Italy" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">AR</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Andrea Rossi</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-08-21</td>
                                                    <td>$5,039.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00104</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-danger">Canceled</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/US.png" className="sa-language-icon d-block" alt title="USA" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">RF</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Richard Feynman</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-06-22</td>
                                                    <td>$79.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00097</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-success">Completed</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/CO.png" className="sa-language-icon d-block" alt title="Columbia" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">LG</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Leonardo Garcia</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-05-09</td>
                                                    <td>$826.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00082</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-success">Completed</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/RS.png" className="sa-language-icon d-block" alt title="Srbija" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">NT</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Nikola Tesla</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-04-27</td>
                                                    <td>$1,052.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00063</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-primary">Pending</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/FR.png" className="sa-language-icon d-block" alt title="France" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">MC</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Marie Curie</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-02-09</td>
                                                    <td>$441.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="app-order.html" className="text-reset">#00012</a></td>
                                                    <td>
                                                        <div className="d-flex fs-6"><div className="badge badge-sa-success">Completed</div></div>
                                                    </td>
                                                    <td><img src="vendor/flag-icons/24/RU.png" className="sa-language-icon d-block" alt title="Russia" /></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                                <div className="sa-symbol__text">KT</div>
                                                            </a>
                                                            <div><a href="app-customer.html" className="text-reset">Konstantin Tsiolkovsky</a></div>
                                                        </div>
                                                    </td>
                                                    <td>2020-01-01</td>
                                                    <td>$12,961.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xxl-3 d-flex">
                                <div className="card flex-grow-1 saw-chart-circle">
                                    <div className="sa-widget-header saw-chart-circle__header">
                                        <h2 className="sa-widget-header__title">Sales by traffic source</h2>
                                        <div className="sa-widget-header__actions">
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-7" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                                        <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-7">
                                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                                    <li><a className="dropdown-item" href="#">Move</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saw-chart-circle__body">
                                        <div className='saw-chart-circle__container w-25' >
                                            <Piechart />
                                        </div>
                                    </div>
                                    <div className="sa-widget-table saw-chart-circle__table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Source</th>
                                                    <th className="text-center">Orders</th>
                                                    <th className="text-end">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="saw-chart-circle__symbol" style={{ color: '#ffd333' }} />
                                                            <div className="ps-2">Yandex</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">12</td>
                                                    <td className="text-end">
                                                        <div className="sa-price">
                                                            <span className="sa-price__symbol">$</span>
                                                            <span className="sa-price__integer">2,742</span>
                                                            <span className="sa-price__decimal">.00</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="saw-chart-circle__symbol" style={{ color: '#e62e2e' }} />
                                                            <div className="ps-2">YouTube</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">51</td>
                                                    <td className="text-end">
                                                        <div className="sa-price">
                                                            <span className="sa-price__symbol">$</span>
                                                            <span className="sa-price__integer">3,272</span>
                                                            <span className="sa-price__decimal">.00</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="saw-chart-circle__symbol" style={{ color: '#3377ff' }} />
                                                            <div className="ps-2">Google</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">4</td>
                                                    <td className="text-end">
                                                        <div className="sa-price">
                                                            <span className="sa-price__symbol">$</span>
                                                            <span className="sa-price__integer">2,303</span>
                                                            <span className="sa-price__decimal">.00</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="saw-chart-circle__symbol" style={{ color: '#29cccc' }} />
                                                            <div className="ps-2">Facebook</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">10</td>
                                                    <td className="text-end">
                                                        <div className="sa-price">
                                                            <span className="sa-price__symbol">$</span>
                                                            <span className="sa-price__integer">1,434</span>
                                                            <span className="sa-price__decimal">.00</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="saw-chart-circle__symbol" style={{ color: '#5dc728' }} />
                                                            <div className="ps-2">Instagram</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">1</td>
                                                    <td className="text-end">
                                                        <div className="sa-price">
                                                            <span className="sa-price__symbol">$</span>
                                                            <span className="sa-price__integer">799</span>
                                                            <span className="sa-price__decimal">.00</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex">
                                <div className="card flex-grow-1">
                                    <div className="card-body">
                                        <div className="sa-widget-header mb-4">
                                            <h2 className="sa-widget-header__title">Recent activity</h2>
                                            <div className="sa-widget-header__actions">
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-8" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                                            <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                                        </svg>
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-8">
                                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                                        <li><a className="dropdown-item" href="#">Move</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sa-timeline mb-n2 pt-2">
                                            <ul className="sa-timeline__list">
                                                <li className="sa-timeline__item">
                                                    <div className="sa-timeline__item-title">Yesterday</div>
                                                    <div className="sa-timeline__item-content">
                                                        Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus
                                                        commodo scelerisque lacus, at porttitor dui iaculis id.
                                                        <a href="#">Curabitur imperdiet ultrices fermentum.</a>
                                                    </div>
                                                </li>
                                                <li className="sa-timeline__item">
                                                    <div className="sa-timeline__item-title">5 days ago</div>
                                                    <div className="sa-timeline__item-content">
                                                        Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.
                                                        <a href="#">Curabitur imperdiet ultrices fermentum.</a>
                                                    </div>
                                                </li>
                                                <li className="sa-timeline__item">
                                                    <div className="sa-timeline__item-title">March 27</div>
                                                    <div className="sa-timeline__item-content">
                                                        Donec tempor sapien et fringilla facilisis. Nam maximus consectetur diam.
                                                    </div>
                                                </li>
                                                <li className="sa-timeline__item">
                                                    <div className="sa-timeline__item-title">November 30</div>
                                                    <div className="sa-timeline__item-content">
                                                        Many philosophical debates that began in ancient times are still debated today. In one general sense,
                                                        philosophy is associated with wisdom, intellectual culture and a search for knowledge.
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex">
                                <div className="card flex-grow-1">
                                    <div className="card-body">
                                        <div className="sa-widget-header">
                                            <h2 className="sa-widget-header__title">Recent reviews</h2>
                                            <div className="sa-widget-header__actions">
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-9" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                                            <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                                        </svg>
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-9">
                                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                                        <li><a className="dropdown-item" href="#">Move</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item py-2">
                                            <div className="d-flex align-items-center py-3">
                                                <a href="app-product.html" className="me-4">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                        <img src="images/products/product-1-40x40.jpg" width={40} height={40} alt />
                                                    </div>
                                                </a>
                                                <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                    <div className="col">
                                                        <a href="app-product.html" className="text-reset fs-exact-14">Wiper Blades Brandix WL2</a>
                                                        <div className="text-muted fs-exact-13">
                                                            Reviewed by
                                                            <a href="app-customer.html" className="text-reset">Ryan Ford</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="sa-rating ms-sm-3 my-2 my-sm-0" style={{ saRatingvalue: '0.6' }}>
                                                            <div className="sa-rating__body" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-2">
                                            <div className="d-flex align-items-center py-3">
                                                <a href="app-product.html" className="me-4">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                        <img src="images/products/product-7-40x40.jpg" width={40} height={40} alt />
                                                    </div>
                                                </a>
                                                <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                    <div className="col">
                                                        <a href="app-product.html" className="text-reset fs-exact-14">
                                                            Electric Planer Brandix KL370090G 300 Watts
                                                        </a>
                                                        <div className="text-muted fs-exact-13">
                                                            Reviewed by
                                                            <a href="app-customer.html" className="text-reset">Adam Taylor</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="sa-rating ms-sm-3 my-2 my-sm-0" style={{ saRatingvalue: '0.8' }}>
                                                            <div className="sa-rating__body" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-2">
                                            <div className="d-flex align-items-center py-3">
                                                <a href="app-product.html" className="me-4">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                        <img src="images/products/product-10-40x40.jpg" width={40} height={40} alt />
                                                    </div>
                                                </a>
                                                <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                    <div className="col">
                                                        <a href="app-product.html" className="text-reset fs-exact-14">Water Tap</a>
                                                        <div className="text-muted fs-exact-13">
                                                            Reviewed by
                                                            <a href="app-customer.html" className="text-reset">Jessica Moore</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="sa-rating ms-sm-3 my-2 my-sm-0" style={{ saRatingvalue: '0.4' }}>
                                                            <div className="sa-rating__body" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-2">
                                            <div className="d-flex align-items-center py-3">
                                                <a href="app-product.html" className="me-4">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                        <img src="images/products/product-5-40x40.jpg" width={40} height={40} alt />
                                                    </div>
                                                </a>
                                                <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                    <div className="col">
                                                        <a href="app-product.html" className="text-reset fs-exact-14">Brandix Router Power Tool 2017ERXPK</a>
                                                        <div className="text-muted fs-exact-13">
                                                            Reviewed by
                                                            <a href="app-customer.html" className="text-reset">Helena Garcia</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="sa-rating ms-sm-3 my-2 my-sm-0" style={{ saRatingvalue: '0.6' }}>
                                                            <div className="sa-rating__body" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-2">
                                            <div className="d-flex align-items-center py-3">
                                                <a href="app-product.html" className="me-4">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                        <img src="images/products/product-2-40x40.jpg" width={40} height={40} alt />
                                                    </div>
                                                </a>
                                                <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                    <div className="col">
                                                        <a href="app-product.html" className="text-reset fs-exact-14">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                                                        <div className="text-muted fs-exact-13">
                                                            Reviewed by
                                                            <a href="app-customer.html" className="text-reset">Ryan Ford</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="sa-rating ms-sm-3 my-2 my-sm-0" style={{ saRatingvalue: 1 }}>
                                                            <div className="sa-rating__body" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-2">
                                            <div className="d-flex align-items-center py-3">
                                                <a href="app-product.html" className="me-4">
                                                    <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                        <img src="images/products/product-16-40x40.jpg" width={40} height={40} alt />
                                                    </div>
                                                </a>
                                                <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                    <div className="col">
                                                        <a href="app-product.html" className="text-reset fs-exact-14">Brandix Screwdriver SCREW150</a>
                                                        <div className="text-muted fs-exact-13">
                                                            Reviewed by
                                                            <a href="app-customer.html" className="text-reset">Charlotte Jones</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <div className="sa-rating ms-sm-3 my-2 my-sm-0" style={{ saRatingvalue: '0.8' }}>
                                                            <div className="sa-rating__body" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li >
                                    </ul >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
                <div className="sa-app__footer d-block d-md-flex">
                    <div className="m-auto" />
                    <div>
                        Powered by HTML — Design by
                        <a href="https://themeforest.net/user/kos9/portfolio">Kos</a>
                    </div>
                </div>
            </div >
            <div className="sa-app__toasts toast-container bottom-0 end-0" />
        </div >
    );
}

export default Dashboard;