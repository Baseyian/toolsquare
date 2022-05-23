import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const CardBox = ({ data }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <>

            <div className="col-12 col-md-4 d-flex my-4" >
                <Card className="card saw-indicator flex-grow-1">
                    <CardBody className='p-0'>
                        <div className="sa-widget-header saw-indicator__header">
                            <h2 className="sa-widget-header__title">{data.tittle}</h2>
                            <div className="sa-widget-header__actions">

                                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'left'}>
                                    <DropdownToggle className="btn btn-sm btn-sa-muted d-block">

                                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                                            <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z" />
                                        </svg>
                                    </DropdownToggle>
                                    <DropdownMenu className='dropdown-menu dropdown-menu-end'>

                                        <DropdownItem>Settings</DropdownItem>
                                        <DropdownItem text>Move</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Remove</DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>

                            </div>
                        </div>


                        <div className="saw-indicator__body">
                            <div className="saw-indicator__value">${data.price}</div>
                            {data.changes.status === "up" ?
                                <div className="saw-indicator__delta saw-indicator__delta--rise">
                                    <div className="saw-indicator__delta-direction">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="currentColor">
                                            <path d="M9,0L8,6.1L2.8,1L9,0z" />
                                            <circle cx={1} cy={8} r={1} />
                                            <rect x={0} y="4.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.864 4.0858)" width="7.1" height={2} />
                                        </svg>
                                    </div>
                                    <div className="saw-indicator__delta-value">{data.changes.percent}%</div>
                                </div>
                                :
                                <div class="saw-indicator__delta saw-indicator__delta--fall">
                                    <div class="saw-indicator__delta-direction">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
                                            <path d="M2.8,8L8,2.9L9,9L2.8,8z"></path>
                                            <circle cx="1" cy="1" r="1"></circle>
                                            <rect x="0" y="2.5" transform="matrix(0.7071 0.7071 -0.7071 0.7071 3.5 -1.4497)" width="7.1" height="2"></rect>
                                        </svg>
                                    </div>
                                    <div class="saw-indicator__delta-value">{data.changes.percent}%</div>
                                </div>}

                            <div className="saw-indicator__caption">{data.date}</div>
                        </div>
                    </CardBody>
                </Card>
            </div>

        </>

    );
}

export default CardBox;