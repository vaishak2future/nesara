import React from "react"
import Layout from "../components/layout"
import logo from "../../static/survey.jpg"
import CourseCard from "../components/courseCard"
import soil from "../../static/soil.jpg"
import water from "../../static/water.jpeg"
import tomato from "../../static/tomato.png"
import def from "../../static/nutrition/leaf.jpg"
import { css } from "@emotion/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import tomatoPageCover from "../../static/tomatoPageCover.jpg"

export default () => 

    <Layout>
        <head>
            <title>
                The Tomato Plant
            </title>
        
        </head>
        <body>
        <h1>Tomato</h1>
        <img src = {tomatoPageCover}/>

            <div>
            <p>The tomato plant is an easy to grow and relatively forgiving plant. They are best grown in warm, sunny conditions, and have little tolerance for frost. <b>Here are some tips to help you start growing your own tomato plants</b></p>
            </div>

    <div style={{
        backgroundColor: 'beige',
        width: '40%',
        paddingLeft: '2%',
        paddingBottom: '1%',
        paddingTop: '1%'
    }}>
      
    
      <div><a href="#anchorVarieties">Varieties</a></div>
      <div><a href="#anchorPlanting">Planting</a></div>
      <div><a href="#anchorCareAndMaintenance">Care and Maintenance</a></div>
      <div><a href="#anchorOtherInfo">Other Information</a></div>

    </div>
            <h2 id="anchorVarieties"></h2>
            <h4>Varieties</h4>
            <h6>Bush (determinate) vs Vine (indeterminate)</h6>
            <p><sup>1</sup>There are two main types of tomato plant: <strong>Bush Tomatoes</strong> (a.k.a. determinate) and <strong>Vining Tomatoes</strong> (a.k.a. indeterminate). Bush tomatoes are the more simple to grow out of the two varieties, and require less maintenance. They generally grow anywhere from 2 feet to 5 feet, based on the variety. They can be grown easily in garden beds and do not require the use of stakes and support systems. They remain in-season for a shorter period than vining varieties and yield most of their tomatoes around the same time as opposed to a staggered fashion. Vining tomato plants require more maintenance than bush tomatoes, however they are also said to yield a more desirable, flavorful product. If they are provided with the correct supports and nutrition, vining tomato varieties generally grow to around 5-6 feet, but have been known to exceed that height. Their yield is gradual, and provides tomatoes at a relatively constant rate throughout the season. </p>  
            <p></p>
            <h2 id="anchorPlanting"></h2>
            <h4>Planting</h4>
            <h6>When To Plant:</h6>
            <p>Tomatoes grow best in warm weather, and weather is largely dependent on geographic location, so different regions have different planting windows, usually lasting multiple weeks. To decide when to plant in your region, research local weather ahead of time to determine the date of the last frost, and consider planting seeds indoors, 6-8 weeks before the last frost date. This will allow you to get a head-start on the growth of your plant. Optimal temperature for fruit production is between 65 and 85 degrees Fahrenheit, or between 15 and 30 degrees Celsius. </p> 
            <h6>How To Plant Seeds:</h6>
            <p>To plant tomato seeds, you will need a few items: potting soil, tomato seeds, seed-starting trays/other vessels with drain holes, a light source, and perhaps most importantly, water! If you are planting indoors and intend on transplanting seedlings, make sure you position the pots next to a window that receives light for several hours a day or a light fixture. To begin planting, make sure you make the potting soil moist and distribute it through the pots, making sure not to pack the soil, leaving around a half inch from the top of the pot. Then, place 2-3 seeds in every pot or vessel, and cover with a thin layer of soil. Following this step, water the soil until the upper layer of soil is thoroughly moistened. Water frequently, and check growth daily for germination. Once the plant has germinated and began to develop, continue to water it on a regular basis, and ensure that it receives plenty of light in a relatively warm place. Following germination, once leaves start to develop, begin to fertilize the seedling with a water-soluble fertilizer to provide nutrients to the plant. Rotate the plants every now and then to ensure an even distribution of light. Check the weather to determine if the last frost of the season has passed, and prepare to transplant the tomato to the ground. </p>
            <h6>Transplantation</h6>
            <p>In order to transplant the tomato seedlings to the ground, ensure that:
                <ul><li>The plants in each cell have been thinned (to ensure that each pot yields a healthy plant)</li>
                    <li>There is a suitable location in the soil that receives six to eight hours of light per day</li>
                    <li>There is enough space to plant the seedlings (plants need to be planted 1 to 3 feet apart)</li>
                    <li>The planting space is safe from potential animals</li>
                    <li>Each plant is inserted three to four inches into the soil</li>
                    <li>The soil does not consist of heavy clay (unsuitable for tomatoes)</li>
                    </ul>
                    <div>Before planting, create stakes or purchase a tomato plant support, like a cage or a stake, and plant the seedling along the support, so it can be tied down after some growth.</div></p>
            <h2 id="anchorCareAndMaintenance"></h2>
            <h4>Care and Maintenance</h4>
            <h6>Watering:</h6>
                <p>Water regularly, every three to four days once mature, more if the weather is dry or hot. In the watering of tomatoes, <sup>2</sup>it is recommended to water the roots directly instead of the plant. Watering is crucial, so do not rush. Ensure that the watering is slow and reaches deeply, preferably through a method of drip irrigation. The application of mulch to the top level of soil may help preserve water and slow the evaporation process, which benefits the plant.  </p>
            <h6>Soil Care and Fertilization:</h6>
                <p>To ensure the well-being of the plant, soil care is quite important. Make sure that the soil you plant in has good drainage, and is rich. If it consists of clay, consider mixing it with organic items like peat moss to improve texture and richness. Consider buying a soil test kit to determine the pH and nutrient levels of your soil. By doing so, you can choose a more specific fertilizer to meet the needs of your tomato garden. These fertilizers usually contain phosphorus, potassium, and nitrogen, as well as magnesium, calcium, zinc, and boron. These macro- and micronutrients are present in different ratios in varying fertilizers meant for different types of soils and gardens.</p>
                <div>
                   <h6><sup>3</sup>Purpose of Each Major Nutrient:</h6>
                    <ul>
                        <li><strong>Nitrogen:</strong> To help leaves and foliage flourish (too much can create a lack of fruit)</li>
                        <li><strong>Phosphorus:</strong>To encourage growth, phosphorus helps make other nutrients usable by the plant</li>
                        <li><strong>Potassium:</strong>Essential to the production of fruit and flowers, lycopene (pigmentation, sugar transport, )</li>
                    </ul>
                        <p>Make sure that when fertilizing, all raw fertilizer is mixed and dispersed evenly throughout the soil and not in direct contact with the root in concentrated amounts to prevent harm from the </p>
                </div>
            <h6>Support Systems:</h6>
                <p>When growing many varieties of tomatoes, support structures such as stakes and cages are essential to the growth of the plant and to the stability of the plant. Stakes can be inserted either prior to the plantation or afterwards, and can be tied to the plant's stem and branches as it begins to grow taller. Similarly, cages also support the plant's stem and branches, but do not need to be tied.</p>                <h2 id="anchorVarieties"></h2>
            <h2 id="anchorOtherInfo"></h2>
            <h4>Other Important Info</h4>
            <h6>Nutritional Info</h6>
            <p>Here is the nutritional information for tomatoes (per 100g)
                <ul><li>Calories - 18</li>
                    <li>Cholestrol - 0mg</li>
                    <li>Sodium - 5mg</li>
                    <li>Potassium - 237mg</li>
                    <li>Total Carbohydrates - 3.9g</li>
                    <li>Protein - 0.9g</li>
                    </ul>
            </p>
            <div style={{
                backgroundImage: 'linear-gradient(yellowgreen, lime)',
                width: '100%',
                paddingLeft: '4%',
                paddingRight: '1%',
                paddingTop: '2%',
                paddingBottom: '3%',
                borderTopLeftRadius: '25%',                                
            }}>
                <br></br>
                <sup>1</sup>
                    <a href="https://www.thespruce.com/indeterminate-tomato-variety-1403423">https://www.thespruce.com/indeterminate-tomato-variety-1403423</a>
                <br></br>
                <sup>2</sup>
                    <a href="https://garden.org/learn/articles/view/368/">https://garden.org/learn/articles/view/368/</a>
                <br></br>
                <sup>3</sup>
                    <a href="https://dengarden.com/gardening/best-fertilizer-for-tomato-plants-and-all-about-fertilizing-tomatoes">https://dengarden.com/gardening/best-fertilizer-for-tomato-plants-and-all-about-fertilizing-tomatoes</a>
                <br></br>

                     
            </div>

        </body>
        
    </Layout>