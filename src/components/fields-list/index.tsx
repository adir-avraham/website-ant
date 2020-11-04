import React from 'react';
import { Col, Layout, Row } from 'antd';
import { Card } from 'antd';

import { Button } from 'antd';
import Field from '../field';

const { Content } = Layout;
const { Meta } = Card;

export default function FieldsList(props: any) {

    const { fields } = props;

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding: "10% 10%"}} justify="space-between" >
          {fields.map(((field: any) => <Field {...field}/> ))}
            </Row>
 
    )
}