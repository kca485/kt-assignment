export function MobileMenu() {
  return (
    <div id="mobile-nav">
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <span className="sr-only">Menu</span>
      </label>
      <ul id="mobile-page-menu">
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#pricing">PRICING</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#login">LOGIN</a>
        </li>
      </ul>
    </div>
  );
}
