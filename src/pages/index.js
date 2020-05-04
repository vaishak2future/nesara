import React from "react"
import Layout from "../components/layout"
import logo from "../../public/static/survey.jpg"
import CourseCard from "../components/courseCard"
import soil from "../../public/static/soil.jpg"
import water from "../../public/static/water.jpeg"
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

            <div css={css`
            text-align: center;
            `}>

            <h3>Courses</h3>
            <CourseCard 
              title = "Water"
              text="Medium for nutrition"
              img = {water}
            />
            <br></br>
             <CourseCard 
              title = "Soil"
              text="From whence all life springs from!"
              img = {soil}
            />
            </div>
    </Layout>