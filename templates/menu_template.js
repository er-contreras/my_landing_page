const menu_template = document.createElement("template");
menu_template.innerHTML = /* InnerHTML */`
  <div class="popup-menu">
    <div class="top-popup-menu">
      <h2>Menu</h2>
      <h3 onClick="closePopup()">X</h3>
    </div>
    <div class="popup-menu-options">
      <ul>
        <a href="index.html"><li>Inicio</li></a>
        <a href="#"><li>Productos</li></a>
        <a href="prices.html"><li>Precios</li></a>
        <a href="about.html"><li>Sobre Mi</li></a>
        <a href="#"><li>Blog</li></a>
        <a href="contact.html"><li style="color: #c5c10f";>Contacto</li></a>
        <a href="https://calendly.com/er-contreras"><li style="color: #00e5ff";>Consulta Gratuita</li></a>
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
