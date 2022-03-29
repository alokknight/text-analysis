import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sponsers from './Sponsers';
import Inputform from './Inputform';
import Button from './Button';
import Indexwhisky from './Indexwhisky';
class Home extends React.Component {
    render (){
        return(
            <div>
                <Navbar title="Whishky " aboutText="Quality predicition"/>
                <Indexwhisky/>
                <Inputform/>
                <Sponsers/>
                <Footer/>
            </div>
        )
    }
}

export default Home;