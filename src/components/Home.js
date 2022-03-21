import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sponsers from './Sponsers';
import Inputform from './Inputform';

class Home extends React.Component {
    render (){
        return(
            <div>
                <Navbar title="Whishky " aboutText="Quality predicition"/>
                <Inputform/>
                <Sponsers/>
                <Footer/>
            </div>
        )
    }
}

export default Home;