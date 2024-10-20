const header_template = document.createElement("template");
header_template.innerHTML = /* html */`
  <header class="header_header">
    <div class="header_left">
      <a href="index.html"><span style="font-weight: bolder; color: #white;">ERICK<br>CONTRERAS</span></a>

      <div>
        <nav>
          <div>
            <ul class="navigation-menu">
              <a href="index.html">
                <li>Inicio</li>
              </a>
              <li>Productos</li>
              <li>Precios</li>
              <a href="about.html"><li>Sobre Mi</li></a>
              <li>Blog</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
 
    <div class="header_main">
      <a href="contact.html"><span>Contacto</span></a>
      <a href="https://calendly.com/er-contreras" target="_blank">
        <span style="display: flex; gap: 1rem;">
          <img style="width: 2rem;" src="./assets/dial-telephone-50.png">
          RESERVA UNA CONSULTA GRATUITA
        </span>
      </a>
    </div>
  </header>

  <!-- Hamburger button -->
  <header class="hidden_header">
    <div class="hidden_header_left">
      <a href="index.html"><span style="font-weight: bolder; color: #white;">ERICK<br>CONTRERAS</span></a>
    </div>
  
    <div onClick="openPopup()" class="header_button">
      <div class="lines"></div>
      <div class="lines"></div>
    </div>
  </header>`;

// Logica JavaScript del componente
class HeaderWrapper extends HTMLElement {
  connectedCallback() {
    const html = header_template.content.cloneNode(true);
    this.append(html);
  }
}

customElements.define("header-wrapper", HeaderWrapper);
