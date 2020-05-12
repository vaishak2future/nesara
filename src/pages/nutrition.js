import React from "react"
import Layout from "../components/layout"
import tomato from "../../static/tomato.png"
import chart from "../../static/nutrition/symptom_chart.jpg"
import leaf from "../../static/nutrition/leaf.jpg"

export default () => <Layout>
    <h2>Plant Nutrition and Deficiencies</h2>
    <p>Just like us, plants require proper nutrition to function optimally.
       While plants require many nutrients, the following represents a list of
       nutrients that need to be given to them and are classified based on the amount
       required. </p>
    
    <h4>Major Nutrients</h4>
    <p>These nutrients are required in relatively large amounts</p>
    <p>Nitrogen - N</p>
    <p>Phosphorous - P</p>
    <p>Potassium - K</p>

    <h4>Secondary Nutrients</h4>
    <p>These nutrients are required in medium amounts</p>
    <p>Calcium - Ca</p>
    <p>Magnesium - Mg</p>
    <p>Sulphur - S</p>

    <h4>Micronutrients</h4>
    <p>These nutrients are required in very small amounts</p>
    <p>Manganese - Mn</p>
    <p>Molybdenum - Mo</p>
    <p>Copper - Cu</p>
    <p>Boron - B</p>
    <p>Zinc - Zn</p>
    <p>Iron - Fe</p>
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

    <h4>Nitrogen</h4>
    <p>Nitrogen is the first and very important fertilizer
element for plants and has the quickest and
most pronounced effect on plant development.
It forms a constituent of every living cell in the
plants. It is an essential constituent of protein
and chlorophyll and is involved in photosynthesis,
respiration and protein synthesis.</p>
    </Layout>