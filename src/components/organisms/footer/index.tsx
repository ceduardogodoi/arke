import './styles.css';

export function Footer() {
  const copyright = `${String.fromCharCode(169)} ${new Date().getFullYear()} - Carlos Eduardo Alves de Godoi`;

  return (
    <footer className="page-footer">
      <nav>
        <ul>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>

      <p>{copyright}</p>
    </footer>
  );
}
