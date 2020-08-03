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
import riceCoverPic from "../../static/riceCoverPic.jpg"


export default () => 

    <Layout>
        <head>
            <title>Rice</title>
        </head>

        <body>
       
        <h1>Rice</h1>
           
        <img src = {riceCoverPic}/>
            <p>Rice, family name Oryza, is a globally consumed grain, largely consisting of carbohydrates, rice is essential to many cuisines around the world. As a grain, it is inexpensive, widely available, easy to cook, good-tasting, and substantial, making it the perfect food for many people. </p>
    <div style={{
        backgroundColor: 'beige',
        width: '40%',
        paddingLeft: '2%',
        paddingTop: '1%',
        paddingBottom: '1%'
    }}>
        <div><a href="#anchorVarieties">Varieties</a></div>
        <div><a href="#anchorEconomics">Economics</a></div>
        <div><a href="#anchorOptimalConditions">Optimal Conditions</a></div>
        <div><a href="#anchorPlanting">Planting</a></div>
        <div><a href="#anchorHarvest">Harvest</a></div>
        <div><a href="#anchorFertilizationSoilCare">Fertilization and Soil Care</a></div>
        <div><a href="#anchorOtherInfo">Other Info</a></div>
    </div>
            <h2 id="anchorVarieties"></h2>
            <h4>Varieties</h4>
                <p>
                  There are numerous rice varieties, most of which are relatively similar in taste and nutrition. They are often classified into groups based on their length. <sup>1</sup>They are divided into: <strong>Short-grain, Medium-grain, and Long-grain.</strong>  
                  <ul>
                      <li>Long grain varieties include: Basmati rice, Jasmine rice, etc.</li>
                      <li>Medium grain varieties include: Arborio rice, Calrose rice, etc.</li>
                      <li>Short grain varieties include: Sushi rice, bomba rice, etc.</li>
                  </ul>
                </p>
            <h2 id="anchorEconomics"></h2>
            <h4>Economics</h4>
                <p>Rice is primarily produced in Southern and Central Asia, where it is also primarily consumed. The top five largest producers of rice are China, India, Indonesia, Bangladesh, and Vietnam, from most tons of rice produced to least. These nations produce a combined yield of over 500 million tons of rice annually. Worldwide, rice is the third most consumed grain, just behind corn and wheat.</p>
                <h2 id="anchorOptimalConditions"></h2>
            <h4>Optimal Conditions</h4>
                <p>The rice plant is highly dependent on water, and is usually grown in fields flooded with water to ensure that water is constantly available to the plant. Generally, these plants thrive in warm environments with plenty of sunlight, with the temperature reaching at least <sup>2</sup>70 degrees Fahrenheit or about 21 degrees Celsius. The soil should be slightly acidic, and preferably be able to retain water, like clay. Your region is especially important, because the rice plant needs heat for a sustained period of time, lasting up to six months.</p>
                <h2 id="anchorPlanting"></h2>
            <h4>Planting</h4>
                <p>Growing and planting rice may seem intimidating at first, however it is relatively simple. First, obtain rice seeds. Rice from the grocery store will not work, as most varieties sold in stores are heavily processed. To begin planting, soak seeds in water for a day to break the seeds’ dormant state. Then, either choose to plant directly into the ground or consider growing seedlings to later transplant. Transplantation is more labor intensive, however, it yields crops with a lesser need for weed control, and is a popular method of rice cultivation in Asian countries. To prepare the ground for plantation, clear out all weeds by plucking them from the root, and till the soil, ensuring that the soil is somewhat consistant and mixed evenly. Planting in a bucket, pot, or other small container may be the better choice for individuals seeking to try out growing rice for the first time. This allows you to have a higher degree of control in the amount of water the plants receive. If you intend to plant rice on a large scale, ensure that you have created a field with rows to grow rice, and sunken rows to accommodate water to flood the field. These divots should span the entire row of crops, and hold between 2 and 9 inches of water, depending on the size, variety, and location of the plants. After 2-3 weeks, fertilize the rice crops, and they will continue to grow. They take 3-6 months to reach maturity, depending on weather and variety of rice.</p>
                <h2 id="anchorHarvest"></h2>
            <h4>Harvest</h4>
                <p>The harvest process for the rice plant is time consuming and labor intensive. <sup>3</sup>First, the field must be drained of the floods, and allowed to dry somewhat. Then, the plants are to be cut by hand or machine, and allowed to dry. Following the drying of the plants, the rice is repeatedly slammed upon a surface, freeing whole grains from the plant, and allowing them to seep through perforations. Then, the unprocessed grains are once again dried, and can be roasted. Following this process, the grains are milled down to remove the hull, and depending on the type of rice desired, some grains are processed down until the bran and germ is removed, creating white rice. </p>
            <h2 id="anchorFertilizationSoilCare"></h2>
            <h4>Fertilization and Soil Care</h4>
                <p>In maintaining soil and ensuring that crops receive the correct nutrients, fertilization is essential. The rice crop has been shown to benefit from the use of nitrogen and phosphorus fertilizer. Nitrogen is the nutrient that is required by the crop in the highest amounts.</p>
                <h2 id="anchorOtherInfo"></h2>
            <h4>Other info</h4>
                <h6>Brown Rice vs White Rice</h6>
                    <p>Brown rice and white rice are the same product, just processed to different stages. Brown rice is the less refined of the two, having been milled to remove the outer layer of each grain of rice. The bran and germ is milled off of each grain of brown rice, and produces white rice.</p>
                <h6>Cooking</h6>
                    <p>To cook rice, first, you should wash off your rice by rinsing it or leaving it in water to clear off extra debris and starch. Then, put rice and water into a pan in a one to two ratio (one part rice, two parts water). Cook for 15-20 minutes over a stove, and stir occasionally to prevent burning. After stirring, cover the rice until it is finished cooking, and leave a lid on the pan so that the residual heat from the steam can finish cooking the rice. The cooked product should not be watery, but rather moist and soft. If the rice is being used in a savory dish, consider adding salt to the rice as it cooks. This adds flavor and speeds up the cooking process.</p>
                <h6>Nutrition: (cooked long brown rice)</h6>
                    <strong>Per 100 grams</strong>, rice has:
                    <div>
                        <p></p>
                        <p>111 calories</p>
                        <p>0.9 g fat</p>
                        <p>0 mg cholesterol</p>
                        <p>5 mg sodium</p>
                        <p>43 mg potassium</p>
                        <p>23 g carbohydrates</p>
                        <p>2.6 g proteins</p>
                    </div>
                <h6>Storage</h6>
                    <p>To store rice, the rice can be left unmilled and left in a dry vessel, protected from the elements. Rice can also be frozen or vacuum-sealed.</p>
            <h5>Sources:</h5>
            <div style={{
                backgroundImage: 'linear-gradient(yellowgreen, lime)',/*'linear-gradient(yellowgreen, , lime)',*/
                width: '100%',
                paddingLeft: '4%',
                paddingRight: '1%',
                paddingTop: '3%',
                paddingBottom: '3%',
                borderTopLeftRadius: '20%',                                
            }}>
                <br></br>
                <sup>1</sup>
                    <a href="https://www.wikihow.com/Grow-Rice#:~:text=To%20grow%20rice%2C%20start%20by,to%20create%20ideal%20growing%20conditions.">https://www.wikihow.com/Grow-Rice#:~:text=To%20grow%20rice%2C%20start%20by,to%20create%20ideal%20growing%20conditions.</a>
                <br></br>
                <sup>2</sup>
                    <a href="https://www.gardeningknowhow.com/edible/grains/rice/how-to-grow-rice.htm">https://www.gardeningknowhow.com/edible/grains/rice/how-to-grow-rice.htm</a>
                <br></br>
                <sup>3</sup>
                    <a href="https://www.huffpost.com/entry/rice-harvesting_n_6021266?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIzjTUboTuMG6J9KWE96Wb3Oqt8V8GynYJJz3DUr51a9Us6Ym8dLL8mva7hFzjlehAUROulKomm_ltsalrd-AhnuT6wsyYWskeewF9XdknZqxCX1PtoxQAjV089q_lMRWZRbNismIQvYgkE3fLb8r2_jrfl-aDGwwLtX3nx0ccOS#:~:text=To%20harvest%20rice%2C%20farmers%20drain%2C%20cut%20and%20dry.&text=The%20first%20step%20of%20harvesting,for%20two%20or%20three%20days.&text=Rice%20can%20be%20cut%20by%20hand%20or%20machine.">https://www.huffpost.com/entry/rice-harvesting_n_6021266?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIzjTUboTuMG6J9KWE96Wb3Oqt8V8GynYJJz3DUr51a9Us6Ym8dLL8mva7hFzjlehAUROulKomm_ltsalrd-AhnuT6wsyYWskeewF9XdknZqxCX1PtoxQAjV089q_lMRWZRbNismIQvYgkE3fLb8r2_jrfl-aDGwwLtX3nx0ccOS#:~:text=To%20harvest%20rice%2C%20farmers%20drain%2C%20cut%20and%20dry.&text=The%20first%20step%20of%20harvesting,for%20two%20or%20three%20days.&text=Rice%20can%20be%20cut%20by%20hand%20or%20machine.</a>
                <br></br>


            </div>    
        </body>



    </Layout>
