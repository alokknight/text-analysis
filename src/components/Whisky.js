import React from 'react';
import Sponsers from './Sponsers';
import Inputform from './Inputform';
import Indexwhisky from './Indexwhisky';
import Gallary from './Gallary.js'

class Whisky extends React.Component {
    render (){
        return(
            <div>
                <Indexwhisky/>
                <Inputform/>
                <Sponsers/>
                <Gallary/>
            </div>
        )
    }
}

export default Whisky;