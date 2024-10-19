const menu_template = document.createElement("template");

menu_template.innerHTML = /* InnerHTML */`
  <div class="popup-menu">
    <div class="top-popup-menu">
      <h2>Menu</h2>
      <h3 onClick="closePopup()">X</h3>
    </div>

    <div class="popup-menu-options">
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Precios</li>
        <li>Sobre Mi</li>
        <li>Blog</li>
        <li>Contacto</li>
        <li>Consulta Gratuita</li>
      </ul>
    </div>
  </div>
`;

// Logica JavaScript del componente
class MenuWrapper extends HTMLElement {
  connectedCallback() {
    const html = menu_template.content.cloneNode(true);
    this.append(html);
  }
}

customElements.define("menu-wrapper", MenuWrapper);
