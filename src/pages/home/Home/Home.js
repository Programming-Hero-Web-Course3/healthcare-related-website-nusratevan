import React from 'react';
import Card from '../Card/Card';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Professional from '../Professional/Professional';
import Others from '../Others/Others';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Services></Services>
            <Professional></Professional>
            <Others></Others>

        </div>
    );
};

export default Home;