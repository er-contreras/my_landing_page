const about_template = document.createElement("template");

about_template.innerHTML = `
  <div>
    <h2>Acerca de Mi</h2>
  </div>
`;

class AboutWrapper extends HTMLElement {
  connectCallback() {
    const html = about_template.content.cloneNode(true);
    this.append(html);
  }
}

customElements.define("about-wrapper", AboutWrapper);
