class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
            <div class="logo">
                <img src="images/logo.png" alt="IoTBay Logo"/>
                <span>IoTBay</span>
            </div>
            <ul class="nav-items">
                <li><a href="index.jsp">Home</a></li>
                <li><a href="register.jsp">Register</a></li>
                <li><a href="about.jsp">About</a></li>
                <li><a href="contact.jsp">Contact</a></li>
                <li><img src="images/search-icon.png" alt="Search"/></a></li>
            </ul>
        </div>
        <div id="iot-image"></div>`;
    }
}

customElements.define("pref-header", Header);