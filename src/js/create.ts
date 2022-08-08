const body = <HTMLElement>document.querySelector('body');
body.innerHTML =
    `
<header class="header">
<div class="header-wrapper">
  <div class="wrapper-button-str">
    <button class="btn-str garage">to Garage</button>
    <button class="btn-str winners">to Winners</button>
  </div>

  <div class="wrapper-create-update">

    <div class="wrapper-create">
      <input type="text" class="name name-car">

      <div class="color-button">
        <div class="colot-input">
          <input type="color" class="color color-create" value="#FFFFFF">
        </div>
        <button class="btn-header create">create</button>
      </div>

    </div>


    <div class="wrapper-update">
      <input type="text" class="name update-name-car">

      <div class="color-button">
        <div class="colot-input">
          <input type="color" class="color color-update" value="#FFFFFF">
        </div>
        <button class="btn-header update">update</button>
      </div>

    </div>

  </div>

  <button class="create-csrds">Create Cars</button>
  <div class="wrapper-button-play">
    <button class="btn-str race">Race</button>
    <button class="btn-str reset">Reset</button>
  </div>
</div>
</header>

<div class="wrapper-winner">
<div class="winner-title">Winner:</div>
<div class="winner-name"></div>
<div class="winner-time"></div>
</div><main class="main" >

<div class="main-title-wrapper">
  <div class="title-str">Garage</div>
  <div class="bracket bracket-left">(</div>
  <div class="counter">0</div>
  <div class="bracket bracket-right">)</div>
</div>

<div class="main-subtitle-wrapper">
  <div class="subtitle-str">Page #</div>
  <div class="counter-str">1</div>
</div>


<div class="main-content" id='mainContainer'>

</div>

<div class="main-pagination">
  <button class="button-left">back</button>
  <button class="button-right">forward</button>
</div>

</main> ` + body.innerHTML;
