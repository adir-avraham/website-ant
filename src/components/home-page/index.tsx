import React from 'react';
import './style.css';
import { Col, Row, Typography } from 'antd';
import { Space } from 'antd';
const { Title } = Typography;

export default function home() {

    return (
       <div className="bg-home">
            <Row justify="center" align="middle">
                <Col>
                    <Title>משרד עורכי דין אסתי קוך</Title>
                </Col>
            </Row>
       </div> 
    )
}
