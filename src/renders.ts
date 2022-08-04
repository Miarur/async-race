export const renderMain = async () => {
  const html = `
  <div class="menu">
    <button class="garage">To garage</button>
    <button class="winners">To winners</button>
  </div>
  <div id="garage">
    <div>
      <form class="form" id="create">
        <input class="input" id="input-create-name" name="name" type="text">
        <input class="color" id="input-create-color" name="color" type="color" value="#ffffff">
        <button class="button" type="submit">Create car</button>
      </form>
      <form class="form" id="update">
        <input class="input" id="input-update-name" name="name" type="text" disabled>
        <input class="color" id="input-update-color" name="color" type="color" value="#ffffff" disabled>
        <button class="button" id="update-submit" type="submit">Update car</button>
      </form>
    </div>
    <div class="race-controls">
      <button class="button" id="race">Race</button>
      <button class="button" id="reset">Reset</button>
      <button class="button" id="generate">Generate cars</button>
    </div>
  </div>
  `;
  const root = document.createElement('div');
  root.classList.add('wrapper')
  root.innerHTML = html; 
  document.body.appendChild(root);
};
