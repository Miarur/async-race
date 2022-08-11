import { renderGarage } from "./renderGarage";

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

  <div id='app'>
    ${renderGarage()}
  </div>
  <div class="pagination">
    <button class="pagination-prev" id="prev" type="button">Prev</button>
    <button class="pagination-next" id="next" type="button">Next</button>
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



