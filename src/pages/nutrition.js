import React from "react"
import Layout from "../components/layout"
import tomato from "../../static/tomato.png"
import chart from "../../static/nutrition/symptom_chart.jpg"
import leaf from "../../static/nutrition/leaf.jpg"
import { Link } from "gatsby"

export default () => <Layout>
    <h2>Plant Nutrition and Deficiencies</h2>
    <p>Just like us, plants require proper nutrition to function optimally.
       While plants require many nutrients, the following represents a list of
       nutrients that need to be given to them and are classified based on the amount
       required. </p>
    
    <h4>Major Nutrients</h4>
    <p>These nutrients are required in relatively large amounts</p>
    <p><Link to={"/nutrition/nitrogen"}>Nitrogen - N</Link></p>
    <p><Link to={"/nutrition/phosphorus"}>Phosphorus - P</Link></p>
    <p><Link to={"/nutrition/potassium"}>Potassium - K</Link></p>

    <h4>Secondary Nutrients</h4>
    <p>These nutrients are required in medium amounts</p>
    <p><Link to={"/nutrition/calcium"}>Calcium - Ca</Link></p>
    <p><Link to={"/nutrition/magnesium"}>Magnesium - Mg</Link></p>
    <p><Link to={"/nutrition/sulphur"}>Sulphur - S</Link></p>

    <h4>Micronutrients</h4>
    <p>These nutrients are required in very small amounts</p>
    <p><Link to={"/nutrition/manganese"}>Manganese - Mn</Link></p>
    <p><Link to={"/nutrition/molybdenum"}>Molybdenum - Mo</Link></p>
    <p><Link to={"/nutrition/copper"}>Copper - Cu</Link></p>
    <p><Link to={"/nutrition/boron"}>Boron - B</Link></p>
    <p><Link to={"/nutrition/zinc"}>Zinc - Zn</Link></p>
    <p><Link to={"/nutrition/iron"}>Iron - Fe</Link></p>
    <p>Chlorine - Cl</p>

    <h4>Deficiencies</h4>
    <p>Deficiency in even a single nutrient, in spite
of all other nutrients being available in abundance, leads to suboptimal growth in plants.</p>
    <img src={chart}/>
    
    <h4>Toxicity</h4>
    <p>Toxicity occurs when a nutrient is in excess
of plant’s need and affects plant growth or
quality.</p>
    <img src={leaf}/>
    </Layout>