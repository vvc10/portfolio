import React from 'react'
import './css/styles.css'
const Services = () => {
    return (
        <div>
            <section class="section category hidden">
                <h2 class="section__title">Services <br/> </h2>
                <div class="category__container  grid">
                    <div class="category__data">
                        <img src="assets/img/web-development.png" alt="" class="category__img" />
                        <h3 class="category__title">Front-end development</h3>
                        <p class="category__description">I love to win my client's mind by providing them beautiful and
                            responsive static websites of any categories using HTML, CSS, JS, etc. as per the client's
                            requirements at an affordable price.</p>
                    </div>

                    <div class="category__data">
                        <img src="assets/img/vector.png" alt="" class="category__img" />
                        <h3 class="category__title">Graphic designing</h3>
                        <p class="category__description">I provide beautiful & awesome designs.</p>
                    </div>

                    <div class="category__data">
                        <img src="assets/img/software-development.png" alt="" class="category__img" />
                        <h3 class="category__title">UxUi designing</h3>
                        <p class="category__description">I provide user-friendly app/web. templates with all basic
                            function
                            you need. All light & advanced level app-web design templates are provided.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
