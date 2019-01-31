import React from 'react';
import { connect } from 'react-redux';
import {
    Navbar,
    NavbarBrand,
    Badge
} from 'reactstrap';

const NavBar = ({counters}) => {
   
        return(
            <div style={{direction : 'rtl'}}>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">سبد خرید</NavbarBrand>
                    <Badge color="info" pill className="m-2">
                        {counters.filter(c => c.value > 0).length}
                    </Badge>
                </Navbar>
            </div>
        );

}

export default connect (state => {
    return{
      counters : state
    }
  }) (NavBar);