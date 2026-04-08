function renderNav(active) {
  const pages = [
    {href:'index.html', label:'Home'},
    {href:'about.html', label:'About'},
    {href:'services.html', label:'Services'},
    {href:'case-studies.html', label:'Case Studies'},
    {href:'why-us.html', label:'Why Us'},
    {href:'csi.html', label:'CSI'},
    {href:'contact.html', label:'Contact'},
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${active===p.href?'active':''}">${p.label}</a></li>`
  ).join('');
  return `<nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Hello<span>Tommorow</span></a>
      <ul class="nav-links">
        ${links}
        <li><a href="contact.html" class="nav-cta">Get a Quote</a></li>
      </ul>
    </div>
  </nav>`;
}
 
function renderFooter() {
  return `<footer>
    <div class="footer-inner">
      <div class="footer-logo">Hello<span>Tommorow</span></div>
      <div class="footer-tagline">Energy Efficiency &bull; Water Management &bull; Sustainability</div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="case-studies.html">Case Studies</a>
        <a href="why-us.html">Why Us</a>
        <a href="csi.html">CSI</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-copy">
        &copy; 2025 HelloTommorow (Pty) Ltd &mdash; Cape Town, South Africa<br>
        <span style="color:rgba(253,250,245,0.3);font-size:0.75rem;">Website by HelloTommorow</span>
      </div>
    </div>
  </footer>`;
}
 
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-placeholder').outerHTML = renderNav(window.ACTIVE_PAGE || '');
  document.getElementById('footer-placeholder').outerHTML = renderFooter();
});
