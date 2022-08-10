import { getCars, CarObject } from './api/api'
import { store } from './store';


const randomColor = () => {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


export const renderCarImage = (color : string) => `
  <?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Capa_1" fill="${color}" xmlns="http://www.w3.org/2000/svg" width="180px" height="80px"  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-190 100 700 250" style="enable-background:new 0 0 499.999 499.999;" xml:space="preserve">
    <g>
      <path id="path3796_1_" d="M282.253,146.255c-0.832,1.213-1.739,1.719-2.812,2.094
      c-3.491,1.218-6.694,1.779-10.781,2.281c-6.247,0.768-12.975,2.037-19.125,3.375c-7.867,1.711-15.588,4.027-23.25,6.5
      c-6.941,2.24-13.797,4.76-20.531,7.562c-6.406,2.666-12.693,5.662-18.875,8.812c-5.266,2.683-10.428,5.56-15.5,8.594
      c-5.206,3.113-10.319,6.4-15.312,9.844c-5.717,3.943-11.243,8.113-16.75,12.344c-3.193,2.453-6.413,4.905-9.438,7.562
      c-2.041,1.794-1.845,2.079-4.5,3.875c-2.035,1.376-4.521,1.18-6.812,0.094c-2.292-1.086-6.094-3.344-6.094-3.344
      s4.564-3.412,8.156-5.906c-0.066,0.01-0.158,0.054-0.219,0.062c-2.283,0.315-5.221-0.536-7.5-0.875
      c-1.384-0.206-2.822-0.265-4.219-0.188c-3.039,0.169-6.015,0.877-9,1.469c-14.71,2.918-29.413,6.06-43.812,10.25
      c-10.374,3.019-20.642,6.482-30.594,10.688c-3.31,1.399-6.664,2.809-9.625,4.844c-2.73,1.877-5.281,4.094-7.344,6.688
      c-1.947,2.448-3.291,5.358-4.625,8.188c-1.244,2.641-2.548,5.295-3.125,8.156c-0.898,4.454-0.465,9.082-0.438,13.625
      c0.03,4.895,0.176,9.816,0.656,14.688c0.492,4.995,1.219,9.329,1.438,14.344c0.046,1.049,0.028,2.762-0.406,3.719
      c-0.327,0.72-0.396,0.869-0.625,1.625c-0.206,0.682,0.126,1.439,0.406,2.094c0.671,1.568,1.731,2.982,2.938,4.188
      c0.603,0.603,1.474,0.883,2.094,1.469c0.903,0.855,1.428,2.063,2.312,2.938c1.878,1.856,3.938,3.595,6.281,4.812
      c3.314,1.721,7.045,2.554,10.688,3.375c3.923,0.884,7.961,1.326,11.969,1.656c2.786,0.23,5.152,0.529,8.375,0.219
      c2.305-0.043,1.939-0.023,4.031-0.062c-1.708-4.896-2.656-10.177-2.656-15.656c0-26.206,21.262-47.438,47.469-47.438
      c26.206,0,47.438,21.231,47.438,47.438c0,4.827-0.723,9.487-2.062,13.875c1.499-0.026,1.209-0.004,2.812-0.031
      c104.131-1.268,157.897-3.013,236.844-4.188c1.387-0.021,2.726-0.066,4.094-0.094c-0.811-3.476-1.25-7.09-1.25-10.812
      c0-26.206,21.231-47.438,47.438-47.438s47.469,21.231,47.469,47.438c0,1.638-0.088,3.249-0.25,4.844
      c1.43-0.246,2.809-0.685,4.125-1.281c2.753-1.248,5.225-3.115,7.562-5.031c2.521-2.067,4.804-4.414,6.906-6.906
      c1.325-1.57,3.019-3.05,3.562-5.031c0.686-2.501-0.491-1.931-0.625-7.781c-0.212-9.222,0.009-18.454-0.625-27.656
      c-0.251-3.648-0.324-7.802-1.25-10.906c-0.325-1.09-1.367-2.156-2.094-3.031c-0.669-0.806-1.984-0.958-2.094-2
      c-0.419-3.963-0.463-8.103-0.656-12.156c-0.124-2.615,0.025-5.238-0.188-7.844c-0.026,0.175-0.072,0.36-0.125,0.531
      c-0.265,0.854-1.238,1.303-1.656,2.094c-0.444,0.84-0.685,1.782-0.844,2.719c-0.31,1.827-0.301,3.712-0.219,5.562
      c0.086,1.935,0.6,3.819,0.75,5.75c0.095,1.219,0.591,2.57,0.094,3.688c-0.373,0.838-1.246,1.431-2.094,1.781
      c-1.652,0.682-3.571,0.629-5.344,0.406c-1.83-0.229-3.667-0.833-5.25-1.781c-3.117-1.867-5.415-4.854-7.969-7.438
      c-4.189-4.238-8.435-8.468-12.031-13.219c-0.919-1.213-2.146-2.376-2.406-3.875c-0.226-1.303,0.048-2.796,0.812-3.875
      c1.47-2.072,4.209-2.871,6.5-3.969c2.71-1.299,5.567-2.406,8.5-3.062c2.123-0.475,4.324-0.61,6.5-0.625
      c2.103-0.014,4.259-0.045,6.281,0.531c1.848,0.526,3.764,1.268,5.125,2.625c0.181,0.18,0.352,0.387,0.5,0.594
      c-1.344-3.192-3.358-6.003-5.344-8.844c-0.384-0.141-4.759-1.764-7.188-2.344c-1.754-0.419-5.031-0.406-5.031-0.406
      s-4.24-6.146-6.594-9.031c-2.861-3.507-5.884-6.873-9.125-10.031c-3.531-3.44-7.274-6.7-11.219-9.656
      c-3.9-2.923-12.25-7.969-12.25-7.969l6.875-3.406c-1.023-1.131,0.384-4.064-0.688-5.375c-0.813-0.995-2.172-0.995-3.875-1.031
      c-4.61-0.099-8.93-0.348-13.531-0.656c-5.897-0.395-11.735-1.322-17.594-2.094c-5.809-0.766-11.582-1.892-17.406-2.531
      c-12.048-1.322-24.144-2.137-36.25-2.719c-13.261-0.637-26.574-0.424-39.844-0.844c-4.962-0.157-9.917-0.365-14.875-0.625
      C291.037,146.869,286.661,146.151,282.253,146.255L282.253,146.255z M316.816,158.099c0,0,9.711,0.014,14.562,0.219
      c6.997,0.295,13.993,0.849,20.969,1.469c7.139,0.635,14.279,1.304,21.375,2.312c5.163,0.734,10.536,1.65,15.406,2.719
      c1.167,0.256,2.799,0.994,2.844,2.188c0.275,7.346,0.32,14.338,0.406,21.5c0.092,7.649,0.094,22.938,0.094,22.938
      s-25.917,0.207-38.875,0.438c-14.079,0.251-42.219,1.031-42.219,1.031L316.816,158.099L316.816,158.099z M293.972,158.224
      c0,0-3.334,18.496-5.438,27.656c-2.215,9.645-7.562,28.719-7.562,28.719s-15.506,0.663-23.25,1.25
      c-14.349,1.087-28.671,2.562-42.969,4.188c-5.39,0.613-15.312,1.375-15.312,1.375s0.05-3.932-0.5-5.781
      c-0.553-1.857-2.719-5.125-2.719-5.125l8.25-33.219c0,0,9.283-4.035,14.062-5.656c7.416-2.515,15.006-4.471,22.625-6.281
      c7.691-1.828,15.463-3.453,23.281-4.625c6.112-0.916,12.277-1.386,18.438-1.875C286.575,158.555,293.972,158.224,293.972,158.224z
       M404.534,168.787c0,0,6.792,1.645,10.062,2.844c4.579,1.678,9.104,3.599,13.312,6.062c5.264,3.082,10.196,6.79,14.781,10.812
      c3.12,2.737,6.392,5.481,8.594,9c1.947,3.112,0.951,2.972-1.906,4.312c-5.946,2.791-12.568,3.867-18.969,5.344
      c-6.122,1.413-18.531,3.344-18.531,3.344L404.534,168.787L404.534,168.787z M199.659,179.38
      c-2.221,9.086-5.416,18.888-7.656,27.969c0,0-3.456-0.795-5.125-0.625c-1.433,0.146-4.058,1.004-5.969,2
      c-1.667,0.869-3.672,2.151-5.125,3.344c-1.566,1.286-3.363,3.579-4.094,5.469c-1.062,2.743,0,7.938,0,7.938
      s-4.15,0.376-6.812,0.656c-2.648,0.279-7.969,0.625-7.969,0.625s2.584-10.739,4.406-15.938c1.232-3.515,4.406-10.281,4.406-10.281
      s3.894-3.794,6.062-5.438c4.156-3.148,8.681-5.809,13.219-8.375C189.762,184.033,199.659,179.38,199.659,179.38L199.659,179.38z
       M64.284,229.443c0.742-0.019,1.462,0.066,2.094,0.438c0.62,0.365,1.088,1.189,1.031,1.906c-0.099,1.24-1.438,2.053-2.312,2.938
      c-2.9,2.933-6.396,5.185-9.625,7.75c-4.519,3.59-8.847,7.449-13.625,10.688c-2.073,1.405-4.169,2.835-6.5,3.75
      c-2.067,0.811-4.303,1.148-6.5,1.469c-4.088,0.596-8.213,0.9-12.344,0.844c-1.474-0.02-3.165,0.388-4.406-0.406
      c-0.818-0.523-0.851-1.783-1.469-2.531c-0.945-1.146-2.175-2.063-3.375-2.938c-0.658-0.48-1.953-0.448-2.094-1.25
      c-0.42-2.397,2.955-3.886,4.625-5.656c1.561-1.654,2.911-3.769,5.031-4.594c0.977-0.38,2.105,0.241,3.125,0
      c2.585-0.61,4.682-2.522,7.125-3.562c3.07-1.307,6.269-2.33,9.437-3.375c3.19-1.052,6.386-2.171,9.656-2.938
      c2.896-0.679,5.829-1.1,8.781-1.469c2.504-0.312,5.041-0.52,7.563-0.625C61.725,229.83,63.048,229.475,64.284,229.443
      L64.284,229.443z M430.409,269.505c-22.917,0-41.5,18.583-41.5,41.5s18.583,41.5,41.5,41.5s41.5-18.583,41.5-41.5
      S453.327,269.505,430.409,269.505z M95.097,270.755c-22.917,0-41.5,18.583-41.5,41.5s18.583,41.5,41.5,41.5
      s41.469-18.583,41.469-41.5S118.014,270.755,95.097,270.755z M430.409,280.818c16.668,0,30.188,13.519,30.188,30.188
      c0,16.668-13.519,30.188-30.188,30.188c-16.668,0-30.156-13.52-30.156-30.188C400.253,294.337,413.741,280.818,430.409,280.818z
       M95.097,282.068c16.668,0,30.156,13.519,30.156,30.188c0,16.668-13.488,30.188-30.156,30.188s-30.188-13.52-30.188-30.188
      C64.909,295.587,78.429,282.068,95.097,282.068z" />
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
`;

export const renderFlag = () => `
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" fill="#FF0000" width="100px" height="80px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -100 800 350" style="enable-background:new 0 0 447.514 447.514;" xml:space="preserve">
	<path d="M389.183,10.118c-3.536-2.215-7.963-2.455-11.718-0.634l-50.653,24.559c-35.906,17.409-77.917,16.884-113.377-1.418
	c-38.094-19.662-83.542-18.72-120.789,2.487V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v407.514c0,11.046,8.954,20,20,20
	s20-8.954,20-20V220.861c37.246-21.207,82.694-22.148,120.789-2.487c35.46,18.302,77.47,18.827,113.377,1.418l56.059-27.18
	c7.336-3.557,11.995-10.993,11.995-19.146V20.385C394.866,16.212,392.719,12.333,389.183,10.118z"></path>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
</svg>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
</svg>
`;

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


export const renderGarage = () => `
  <div class='garage__body'>
    <h1>Garage ( ${store.carsCount} )</h1>
    <h2>Page #${store.carsPage}</h2>
    <ul class="garage__list">
      <li>${store.cars.map(item => {
        return renderCar(item)
      }).join('')}</li>
    </ul>
  </div>
`;



export const renderMain = async () => {
  const html = `
  <div class="menu">
    <button class="garage" type="button">To garage</button>
    <button class="winners" type="button">To winners</button>
  </div>
  <div id="garage">
    <div class="form__wrapper">
      <form class="form" id="create">
        <input class="input" id="input-create-name" name="name" type="text">
        <input class="color" id="input-create-color" name="color" type="color" value="#ffffff">
        <button class="button create-car" type="submit">Create car</button>
      </form>
      <form class="form" id="update">
        <input class="input" id="input-update-name" name="name" type="text" disabled>
        <input class="color" id="input-update-color" name="color" type="color" value="#ffffff" disabled>
        <button class="button update-car" id="update-submit" type="submit">Update car</button>
      </form>
    </div>
    <div class="race-controls">
      <button class="button" id="race">Race</button>
      <button class="button" id="reset">Reset</button>
      <button class="button" id="generate">Generate cars</button>
    </div>
  </div>

  <div id='#app'>
    ${renderGarage()}
  </div>
  `;
  const root = document.createElement("div");
  root.classList.add('main')
  root.innerHTML = html;
  document.body.appendChild(root);
};


export const renderTable = () => `
  <table>
  <caption class="winners">Winners (1)</caption>
  <caption class="winners">Page (1)</caption>
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Car</th>
      <th scope="col">Name</th>
      <th scope="col">Wine</th>
      <th scope="col">Best time(seconds)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="number">1</td>
      <td data-label="car-obj">Image</td>
      <td data-label="amount">Tesla</td>
      <td data-label="wine-count">1</td>
      <td data-label="wine-count">10</td>
    </tr>
  </tbody>
  </table>
`; 

export const renderWinners = () => {
  const html = `
  ${renderTable()}
  `;

  const root = document.createElement("div");
  root.classList.add("wrapper");
  root.innerHTML = html;
  document.body.appendChild(root);
}



