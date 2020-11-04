import React from 'react';
import FieldsList from '../fields-list';
import { Typography } from 'antd';
const { Title } = Typography;



const fields = [
  {field: "חברת ביטוח לא משלמת"},
  {field: "נזק גוף"},
  {field: "נזק רכוש"}
]

export default function FieldsPage() {

  



    return (
      <React.Fragment>
        <Title style={{textAlign: "center", fontWeight: 100, fontSize: "4rem"}}>איך נוכל לעזור?</Title>
        <FieldsList fields={fields}/>        
        </React.Fragment>

      
 
    )
}