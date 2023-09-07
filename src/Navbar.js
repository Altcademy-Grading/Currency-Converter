export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Home
      </a>
      <ul>
        <CustomLink href="/converter">Converter</CustomLink>
        <CustomLink href="/list">List</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
