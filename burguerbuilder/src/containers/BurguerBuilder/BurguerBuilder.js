import React, { Component } from 'react';

import Aux from '../../hoc/AuxApp';
import Burguer from '../../components/Burguer/Burguer';

class BurguerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burguer />
                <div>Burguer Controls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;