import React from "react"
import Layout from "../components/layout"
import logo from "../../public/static/survey.jpg"
import soil from "../../public/static/soil.jpg"
import water from "../../public/static/water.jpeg"
import { css } from "@emotion/core"
import { Card,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => <div>
    <script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
    <Layout>
        <div>
            <img src={logo} alt="Logo" />
            <h3 css={css`
            text-align: center;
            `}>Bringing Information to the Frontlines</h3>
            <p>Nesara is working to bring critical information to a new generation of farmers in the developing world.
               Land conservation is as important as it has ever been.
            </p>

            <h3 css={css`
            text-align: center;
            `}>Courses</h3>

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={soil} />
  <Card.Body css={css`
            text-align: center;
            `}>
    <Card.Title><h3>Soil</h3></Card.Title>
    <Card.Text>
      From whence all life springs!
    </Card.Text>
    <Button variant="primary">Read Now</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={water} />
  <Card.Body css={css`
            text-align: center;
            `}>
    <Card.Title><h3>Water</h3></Card.Title>
    <Card.Text>
      Medium for nutrients
    </Card.Text>
    <Button variant="primary">Read Now</Button>
  </Card.Body>
</Card>
        </div>
    </Layout>
    </div>
