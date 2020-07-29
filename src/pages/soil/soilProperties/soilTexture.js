import React from "react"
import Layout from "../../../components/layout"
import { Link } from "gatsby"
export default () => <Layout>
    <Link to={"../soil"}><h2>Soil</h2></Link>
    <p><em>Soil Texture</em></p>
<p><ul>

    <li>Three categories of soil particles - sand, silt and clay are established based on their particle size.</li>
    <li>Clay particles are the smallest ( &lt;0.002 mm), while sand particles are the largest (0.05- 2.00 mm).</li>
    <li>Soil texture depends on the proportion of sand, silt and clay.</li>
    <li>There are 12 classes of soil texture.</li>
    <li>If most particles are large and coarse the soil is called Sand.</li>
    <li>Silt is dominated by medium-sized particles and feels like flour.</li>
    <li>Small-sized soil particles primarily make up a Clay soil.</li>

</ul></p>
</Layout>