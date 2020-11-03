import React from 'react';
import { Col, Layout, Row } from 'antd';
import { Card } from 'antd';

import { Button } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

export default function FieldsPage() {

  



    return (

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding: "10% 10%"}} justify="space-between" >
          <Col  xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://www.moneycrashers.com/wp-content/uploads/2019/03/find-good-lawyer-1068x713.jpg" />}
              >
              <Meta title="ביטוח" style={{textAlign: "center"}} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://www.moneycrashers.com/wp-content/uploads/2019/03/find-good-lawyer-1068x713.jpg" />}
            >
            <Meta title="פנסיה" description="www.instagram.com" />
            </Card>
          </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                <Card
    hoverable

    cover={<img alt="example" src="https://www.moneycrashers.com/wp-content/uploads/2019/03/find-good-lawyer-1068x713.jpg" />}
  >
    <Meta title="נזיקין" description="www.instagram.com" />
  </Card>
                </Col>
            </Row>
 
    )
}