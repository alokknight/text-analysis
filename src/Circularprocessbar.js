import React from 'react'

export default function Circularprocessbar() {
  return (
    <div>
      <div class="skills">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-heading text-center">
                        <h2>Our Skills</h2>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <div class="box">
                        <div class="circlechart" data-percentage="-49">html</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="circlechart" data-percentage="89">css</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="circlechart" data-percentage="29">java</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="circlechart" data-percentage="75">seo</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="circlechart" data-percentage="25">marketing</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="circlechart" data-percentage="85">Graphics</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
