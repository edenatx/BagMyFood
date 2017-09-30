import * as React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './BigAds.css';

const placeholder = 'http://lorempixel.com/200/200/food/';

interface BigAdsProps {
}

export default class BigAds extends React.Component<BigAdsProps, {}> {
    constructor(props: BigAdsProps) {
       super(props); 
    }

    render() {
        return (
        <div className="bigads-container">
            <Grid>
                <Row>
                    <Col className={'ad'} xs={6} md={4}>
                        <Image src={placeholder} rounded={true} />
                    </Col>
                    <Col className={'ad'} xs={6} md={4}>
                        <Image src={placeholder} circle={true} />
                    </Col>
                    <Col className={'ad'} xs={6} md={4}>
                        <Image src={placeholder} thumbnail={true} />
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}
