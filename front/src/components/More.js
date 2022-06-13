import React, { Component } from "react"; // Importamos react y component para la clase 
import {Link} from 'react-router-dom'; // Importamos Link para las rutas

// Definimos la clase y la exportamos 

export default class More extends Component {

    render() {

        // Lo que devuelve

        return(
            <div>
                <div id="container-more">
                    <div id="more">
                        <div id="more-1">
                            <h2>Products for the face</h2>
                            <h3>CLEANSER</h3>
                            <p>Delicate as a fragrance and with a light texture. Based on thermal water and hyaluronic acid, it is ideal for a delicate cleansing action on the skin of the face. Recommended use: in the morning and in the evening, apply with light circular movements, taking care to massage the entire face. Rinse thoroughly with water or a special sponge.</p>
                            <h3>MOISTURIZING CREAM</h3>
                            <p>From the combination of thermal water from the springs of the island of Ischia and hyaluronic acid, our moisturizing emulsion for face and décolleté is born. It's light texture and the delicate fragrance given by the mix of argan oil and shea butter, make it perfect for younger skin also as a base for make-up. Recommended use: in the evening after demaquillage and in the morning after gently cleansing the face.</p>
                            <h3>TONIC</h3>
                            <p>Dense and consistent, almost a serum. Rich in revitalizing substances, such as enhanced hyaluronic acid molecules and the thermal water of the island of Ischia, it constitutes a fundamental step in cleansing the face. Able to restore the hydrolipidic film altered by cleansing, hydrates and illuminates the skin, restabilizing the physiological pH. Recommended use: after cleansing, carefully dry your face. With the help of a cotton swab, apply the lotion all over the face, insisting on the contours of the eyes and lips, tapping lightly to facilitate the absorption of the active ingredients.</p>
                        </div>
                        <div id="more-2">
                        <h3>ANTI-AGING CREAM</h3>
                            <p>Unmistakable fragrance and micro-particles of hyaluronic acid this "emulsion" enriched with thermal water, acts by plumping the skin from the inside. Suitable for more mature or very dehydrated skins, it has a deep restructuring action, restoring brightness and softness to the most damaged skin, stimulating cell turnover.Recommended use: in the evening after a thorough demaquillage and in the morning, after a delicate cleansing of the skin.</p>
                            <h3>MOISTURIZING MASK</h3>
                            <p>To complete our moisturizing treatment there is our face mask. A concentrate of moisturizing, emollient and protective principles to immediately restore softness and brightness to the skin. Based on argan oil and shea butter, it is suitable for all skin types. Recommended use: 1-2 times a week, after thoroughly cleansing the face with cleansing milk and tonic. Complete the treatment with a touch of moisturizer.</p>
                            <h3>ANTIAGE MASK</h3>
                            <p>The final touch of our anti-aging home treatment. Rich in nourishing and revitalizing active ingredients such as shea butter and hyaluronic acid with the addition of thermal water. This mask is ideal for restoring the skin's hydrolipidic film and immediately giving the most mature and stressed skins brightness and softness, together with an immediate anti-wrinkle action. Recommended use: once a week, after a thorough cleansing of the facial skin. Complete the treatment with a light touch of anti-aging cream.</p>
                            <h3>THERMAL MUD MASK</h3>
                            <p>Based on thermal mud from the island of Ischia, it carries out a purifying, sebum-normalizing and anti-inflammatory action, facilitating the narrowing of dilated pores. Suitable for combination and oily skin, it mattifies oily areas and soothes inflammation from acne. Recommended use: 1-2 times a week, preferably before going to bed, after a thorough cleansing of the face.</p>
                        </div>
                        <div id="more-3">
                            <h2>Products for the body</h2>
                            <h3>SWEET ALMOND CREAM</h3>
                            <p>With a high percentage of sweet almond oil, our body cream, with a light texture and a light floral fragrance, has a nourishing and velvety action for all skin types. Recommended use: apply several times a day, on slightly damp skin, taking care to insist more on the driest areas.</p>
                            <h3>ANTI-CELLULITE MUD</h3>
                            <p>Cold thermal mud with draining and anti-cellulite action. Rich in active ingredients such as caffeine, it acts on the decrease of water retention and through the stimulation of blood and lymphatic circulation, it gives relief to tired and heavy legs. Recommended use: 3 times a week, taking care to thoroughly cleanse the area to be treated. Apply the product, leaving it to act for about 20 minutes, isolating the area with an occlusive film. Rinse carefully with fresh water.</p>
                            <br></br>
                            <Link to='/shop'><button>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}