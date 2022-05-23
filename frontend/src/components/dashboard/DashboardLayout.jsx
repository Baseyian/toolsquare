import React, { useState } from 'react';
import './../../scss/dashboard/style.scss';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Category from './Pages/Category';
import CategoryList from './Pages/CategoryList';
import Customer from './Pages/Customer';
import CustomerList from './Pages/CustomerList';
import Order from './Pages/Order';
import OrderList from './Pages/OrderList';
import Coupon from './Pages/Coupon';



const DashboardLayout = (props) => {
    return (

        <Switch>
            <Route exact path="/dashboard/product" component={Product} />
            <Route exact path="/dashboard/product-list" component={ProductList} />
            <Route exact path="/dashboard/category" component={Category} />
            <Route exact path="/dashboard/category-list" component={CategoryList} />
            <Route exact path="/dashboard/customer" component={Customer} />
            <Route exact path="/dashboard/customer-list" component={CustomerList} />
            <Route exact path="/dashboard/order" component={Order} />
            <Route exact path="/dashboard/order-list" component={OrderList} />
            <Route exact path="/dashboard/coupon" component={Coupon} />
            <Route exaxt path={props.match.path} component={Dashboard} />

            {/* <Route exact path="/shop/cart" component={PageCart} /> */}
            {/* <Route component={SitePageNotFound} /> */}
        </Switch>

    );
}
export default DashboardLayout;

