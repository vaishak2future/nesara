import React from "react"
import Layout from "../../../components/layout"
import { Link } from "gatsby"
export default () => <Layout>
    <Link to={"../soil"}><h2>Soil</h2></Link>
    <p><em>Anion Exchange Capacity (AEC)</em></p>
<p>It is the opposite of CEC, consisting of positively charged sites that can hold and release anions.
    Clays, organic matter and hydroxides provide for AEC. AEC is much smaller and less important
    compared to CEC. There is a fair degree of order in which anions are held on to +ve sites, 
    e.g. H2PO4- > SO4 - > NO3- > Cl-. While Phosphate is held most tightly, Nitrates and Chlorides are held weakly.
</p>
</Layout>