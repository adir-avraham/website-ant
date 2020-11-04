import React from 'react';
import { Col } from 'antd';
import { Card } from 'antd';

import { Button } from 'antd';


const { Meta } = Card;

export default function Field(props: any) {

  const { field } = props;

    return (
          <Col  xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://www.moneycrashers.com/wp-content/uploads/2019/03/find-good-lawyer-1068x713.jpg" />}
              >
              <Meta title={field} style={{textAlign: "center"}} />
            </Card>
          </Col> 
    )
}