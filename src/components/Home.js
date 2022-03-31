import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sponsers from './Sponsers';
import Inputform from './Inputform';
import Button from './Button';
import Indexwhisky from './Indexwhisky';
import Gallary from './Gallary.js'

class Home extends React.Component {
    render (){
        return(
            <div>
                <Navbar title="Whishky " aboutText="Quality predicition"/>
                <Indexwhisky/>
                <Inputform/>
                <Sponsers/>
                <Gallary/>
                <Footer/>
            </div>
        )
    }
}

export default Home;