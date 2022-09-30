import React, { useState } from 'react';

const Flipcard = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
      };

    return(
    <div class="flipcard" onClick={handleToggle}>
    <div class={isFlipped ? "card__inner is-flipped":"card__inner"}>
        <div class="card__face card__face--front">
            <h2>Card Front</h2>
        </div>
        <div class="card__face card__face--back">
                <div class="card__body">
                    <h3>JavaScript Wizard</h3>
                    <p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p>
                </div>
        </div>
    </div>
</div>)
}
export default Flipcard;