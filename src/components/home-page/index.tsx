import React from 'react';
import './style.css';
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

export default function home() {


    return (


       <div className="bg-home">
            <Row justify="center" align="middle">
                <Col>
                    <Title>משרד עורכי דין אסתי קוך</Title>
                    {/* <h1>משרד עורכי דין אסתי קוך</h1> */}
                </Col>
            </Row>
       </div> 

    )
}
