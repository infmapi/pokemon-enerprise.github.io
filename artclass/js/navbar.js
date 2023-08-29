var ionscript = document.createElement("script")
ionscript.type = "module"
ionscript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
document.body.appendChild(ionscript)

var ionscript2 = document.createElement("script")
ionscript2.nomodule = "true"
ionscript2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
document.body.appendChild(ionscript2)

var navbar = `
<link href="https://unpkg.com/movement.css/movement.css" rel="stylesheet" />
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<link rel="stylesheet" href="/styles/hover.css" />

<style>
</style>

<nav>
  <div class="container">
    <img src="/icon.png" alt="Logo" />
    <ul>
      <li data-m="bounce-down" class="hvr-underline-from-center"><a href=""><ion-icon class="hvr-icon" name="home"></ion-icon> Home</a></li>

    </ul>
  </div>
</nav>
`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar)
