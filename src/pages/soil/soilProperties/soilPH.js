import React from "react"
import Layout from "../../../components/layout"
import { Link } from "gatsby"
export default () => <Layout>
    <Link to={"../soil"}><h2>Soil</h2></Link>
    <p><em>Soil pH</em></p>
<p>
    Soil pH is a very important character that indicates whether the soil is acidic, alkaline or neutral. It is the negative logarithm of the hydrogen ion (H+) 
    activity and is measured on a 0-14 unit less scale. Soil pH influences the availability, retention and release of nutrients. The ideal pH for one nutrient need not be 
    ideal for another, making it impossible to attain maximum availability of all nutrients at a given pH. Most acceptable range of pH is between 5.5 and 7.5.
    Nitrogen, Potassium and Sulphur are relatively less affected by pH. Phosphorus is directly affected. H2PO4 reacts with Calcium and Magnesium ion in alkaline 
    soils and with Aluminium and Iron in acidic soils to form less soluble compounds. Most micronutrients, except Molybdenum, are less available at pH above 7.5.
    The low availability of a nutrient should be compensated by increasing its supply through manures and fertilizers.
    Liming of acid soils and treating alkali soils with Gypsum/ Pyrites is recommended to attain desirable pH range.
    Continuous use of acid forming fertilizers can cause deficiency of Calcium and Magnesium and also toxicity of Iron and Manganese.
</p>
</Layout>