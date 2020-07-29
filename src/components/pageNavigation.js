import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { Card,Button } from 'react-bootstrap'


export default function pageNavigation(props)
{
    return (  <Card css= {css`
     
    background-Color: 'beige';
    width: '40%';
    padding-Left: '2%';
    padding-Bottom: '1%';
    padding-Top: '1%'`}>


<Card.Title><h3>{props.title}</h3></Card.Title>

</Card>)}
