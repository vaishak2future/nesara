import React from "react"
import Layout from "../components/layout"
import logo from "../../static/survey.jpg"
import CourseCard from "../components/courseCard"
import soil from "../../static/soil.jpg"
import water from "../../static/water.jpeg"
import tomato from "../../static/tomato.png"
import { css } from "@emotion/core"
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => 

    <Layout>
        <div>
            <img src={logo} alt="Logo" />
            <h3 css={css`
            text-align: center;
            `}>Bringing Information to the Frontlines</h3>
            <p>Nesara is working to bring critical information to a new generation of farmers in the developing world.
               Land conservation is as important as it has ever been.
            </p>
        </div>

            <h3 css={css`text-align: center;`}>Courses</h3>
            <div css={css`
            margin: auto;
            `}>
            <CourseCard 
              title = "Nutrition and Deficiencies"
              text = "Food for plants!"
              img = {tomato}
              link = "/nutrition"
            />
            </div>
            <br></br>
             <CourseCard 
              title = "Soil"
              text="From whence all life springs from!"
              img = {soil}
              link = "/soil"
            />
           
    </Layout>