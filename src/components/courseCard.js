import React from "react"
import { css } from "@emotion/core"
import { Card,Button } from 'react-bootstrap'
import { Link } from "gatsby"

export default function courseCard(props){
return (<Card css={css`margin: auto; width: 75% `}>
<Card.Img variant="top" src={props.img} />
<Card.Body css={css`
          text-align: center;
          `}>
  <Card.Title><h3>{props.title}</h3></Card.Title>
  <Card.Text>
{props.text}
  </Card.Text>
  <Link to={props.link}>
  <Button variant="primary">Read Now</Button>
  </Link>
</Card.Body>
</Card>)
}