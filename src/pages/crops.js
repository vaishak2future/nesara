import React from "react"
import Layout from "../components/layout"
import logo from "../../static/survey.jpg"
import CourseCard from "../components/courseCard"
import soil from "../../static/soil.jpg"
import water from "../../static/water.jpeg"
import tomato from "../../static/tomato.png"
import def from "../../static/nutrition/leaf.jpg"
import { css } from "@emotion/core"
import 'bootstrap/dist/css/bootstrap.min.css'
import hydroponics from "../../static/hydroponics.jpg"
import genericPlant from "../../static/genericPlant.jpg"
import { Link } from "gatsby"

export default () => <Layout>
    <head>
        Crops
    </head>

    <body>
        <div>
            <h1 css={css`
            text-align: center;
            `}>Crops</h1>
        </div>
            <div>
                <div>
                <Link to={"../tomato"}>Tomatoes</Link>
                </div>
                <div>
                <Link to={"../rice"}> Rice</Link>
                </div>
            </div>
            
         
    </body>
    
    


</Layout>
