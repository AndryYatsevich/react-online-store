import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import banner from '../../img/0Jrvgf38V8.jpg';
import Product from '../../components/product';

class Home extends React.Component {


    render() {
        return (
            <Grid fluid className={'home-page'}>
                <Row>
                    <Col xs={12}><img src={banner} alt={'logo'} className={'home-page-banner'}/></Col>
                </Row>
                <Row>
                    <Col xs={12}>

                            <Product/>
                    </Col>
                </Row>

            </Grid>


        );
    }
}

export default Home;