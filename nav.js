function renderNav(active) {
  const pages = [
    {href:'index.html',label:'Home'},
    {href:'about.html',label:'About'},
    {href:'services.html',label:'Services'},
    {href:'case-studies.html',label:'Case Studies'},
    {href:'why-us.html',label:'Why Us'},
    {href:'csi.html',label:'CSI'},
    {href:'contact.html',label:'Contact'},
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${active===p.href?'active':''}">${p.label}</a></li>`
  ).join('');
  return `<nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo"><img src="logo.png" alt="HelloTommorow"></a>
      <ul class="nav-links">${links}<li><a href="contact.html" class="nav-cta">Get a Quote</a></li></ul>
    </div>
  </nav>`;
}
 
function renderFooter() {
  return `<footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <a href="index.html"><img src="logo.png" alt="HelloTommorow" class="footer-logo" style="height:34px;margin-bottom:1rem;display:block;"></a>
          <p class="footer-tagline">Energy Efficiency &bull; Water Management &bull; Sustainability<br>Cape Town, South Africa</p>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="about.html">About Us</a>
          <a href="why-us.html">Why Choose Us</a>
          <a href="case-studies.html">Case Studies</a>
          <a href="csi.html">CSI Programme</a>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <a href="services.html">Water Saving Devices</a>
          <a href="services.html">Energy Management</a>
          <a href="services.html">Audits</a>
          <a href="services.html">Sustainability Advisory</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@hellotommorow.com">hello@hellotommorow.com</a>
          <a href="contact.html">Send a Message</a>
          <a href="contact.html">Get a Quote</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">&copy; 2025 HelloTommorow (Pty) Ltd &mdash; Cape Town, South Africa</div>
        <div class="footer-copy">Website by HelloTommorow</div>
      </div>
    </div>
  </footer>`;
}
 
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav-placeholder');
  if (nav) nav.outerHTML = renderNav(window.ACTIVE_PAGE || '');
  const ft = document.getElementById('footer-placeholder');
  if (ft) ft.outerHTML = renderFooter();
});
