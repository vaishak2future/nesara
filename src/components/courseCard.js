import React from "react"
import { css } from "@emotion/core"
import { Card,Button } from 'react-bootstrap'

export default function courseCard(props){
return (<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={props.img} />
<Card.Body css={css`
          text-align: center;
          `}>
  <Card.Title><h3>{props.title}</h3></Card.Title>
  <Card.Text>
{props.text}
  </Card.Text>
  <Button variant="primary">Read Now</Button>
</Card.Body>
</Card>)
}