import { CarObject } from '../../types/apiTypes';
import { renderCarImage } from './renderCarImage';
import { renderFlag } from './renderCarFlag';

export const renderCar = ({id, name, color}: CarObject) =>`
    <div class="car__wrap">
      <div class="general-buttons">
        <button class="select-button" id="select-car-${id}">Select</button>
        <button class="remove-button" id="remove-car-${id}">Remove</button>
        <span class="car-name">${name}</span>
      </div>
      <div class="road">
        <div class="launch-pad">
          <div class="control-panel">
            <button class="start-engine" id="start-engine">A</button>
            <button class="stop-engine" id="stop-engine">B</button>
          </div>
          <div class="car" id="car-${id}">
            <div class="car_image">
              ${renderCarImage(color)}
            </div>
          </div>
        </div>
        <div class="flag" id="flag-${id}">
          ${renderFlag()}
        </div>
      </div>
    </div>
`;