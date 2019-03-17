import React from 'react'
import './recipeDetail.css'

export default  ({recipe}) => {
    let availability = recipe.availability.map(
        (avb,index) => <dd key={index}>{avb}</dd>
    ) 
    let dimensions = recipe.sizeAndWeight.dimensions.map(
        (dim,index) => <dd key={index}>{dim}</dd> 
    ) 
    return (
      <div>
          <ul className="specs">
              <li >
                  <span>Availability and Networks</span>
                  <dl>
                      <dt>Availability</dt>
                          {availability}
                  </dl>
              </li>
              <li>
                  <span>Battery</span>
                  <dl>
                      <dt>Type</dt>
                      <dd>{recipe.battery.type}</dd>
                      <dt>Talk Time</dt>
                      <dd>{recipe.battery.talkTime}</dd>
                      <dt>Standby time (max)</dt>
                      <dd>{recipe.battery.standbyTime}</dd>
                  </dl>
              </li> 
              <li>
                  <span>Storage and Memory</span>
                  <dl>
                      <dt>RAM</dt>
                      <dd>{recipe.storage.ram}</dd>
                      <dt>Internal Storage</dt>
                      <dd>{recipe.storage.flash}</dd>
                  </dl>
              </li>
              <li>
                  <span>Connectivity</span>
                  <dl>
                      <dt>Network Support</dt>
                      <dd>{recipe.connectivity.cell}</dd>
                      <dt>WiFi</dt>
                      <dd>{recipe.connectivity.wifi}</dd>
                      <dt>Bluetooth</dt>
                      <dd>{recipe.connectivity.bluetooth}</dd>
                      <dt>Infrared</dt>
                      <dd>{recipe.connectivity.infrared}</dd>
                      <dt>GPS</dt>
                      <dd>{recipe.connectivity.gps}</dd>
                  </dl>
              </li>
              <li>
                  <span>Android</span>
                  <dl>
                      <dt>OS Version</dt>
                      <dd>{recipe.android.os}</dd>
                      <dt>UI</dt>
                      <dd>{recipe.android.ui}</dd>
                  </dl>
              </li>
              <li>
                  <span>Size and Weight</span>
                  <dl>
                      <dt>Dimensions</dt>
                              {dimensions}
                      <dt>Weight</dt>
                      <dd>{recipe.sizeAndWeight.weight}</dd>
                  </dl>
              </li> 
              <li>
                  <span>Display</span>
                  <dl>
                      <dt>Screen size</dt>
                      <dd>{recipe.display.screenSize}</dd>
                      <dt>Screen resolution</dt>
                      <dd>{recipe.display.screenResolution}</dd>
                      <dt>Touch screen</dt>
                      <dd>{recipe.display.touchScreen}</dd>
                  </dl>
              </li>
              <li>
                  <span>Hardware</span>
                  <dl>
                      <dt>CPU</dt>
                      <dd>{recipe.hardware.cpu}</dd>
                      <dt>USB</dt>
                      <dd>{recipe.hardware.usb}</dd>
                      <dt>Audio / headphone jack</dt>
                      <dd>{recipe.hardware.audioJack}</dd>
                      <dt>FM Radio</dt>
                      <dd>{recipe.hardware.fmRadio}</dd>
                      <dt>Accelerometer</dt>
                      <dd>{recipe.hardware.accelerometer}</dd>
                  </dl>
              </li> 
              <li>
                  <span>Camera</span>
                  <dl>
                      <dt>Primary</dt>
                      <dd>{recipe.camera.primary}</dd>
                      <dt>Features</dt>
                      <dd>{recipe.camera.features.join(', ')}</dd>
                  </dl>
              </li>
              <li>
                  <span>Additional Features</span>
                  <dd>{recipe.additionalFeatures}</dd>
              </li>           
              </ul>            
            </div>
        )
}
