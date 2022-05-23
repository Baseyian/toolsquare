import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { icon, title, svg, items } = props;

    return (
        <div>
            <NavItem
                onClick={toggle}
                className={classNames({ "sa-nav__menu-item sa-nav__menu-item--has-icon menu-open": !collapsed })}
            >
                <NavLink className="sa-nav__link dropdown-toggle">
                    <FontAwesomeIcon icon={icon} className="sa-nav__icon" />
                    {svg}

                    <span className="sa-nav__title">{title}</span>
                </NavLink>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={classNames("items-menu", { "mb-1": !collapsed })}
            >
                {items.map((item, index) => (
                    <NavItem key={index} className=" sa-nav__menu-item sa-nav__menu-item--has-icon pl-4">
                        <NavLink className="sa-nav__link" tag={Link} to={item.target}>
                            <span className="sa-nav__title">{item.title}</span>
                        </NavLink>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
};

export default SubMenu;
