import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <div className="logo">
          <Link href='/'>
            My Repos
          </Link>
        </div>
        <div className="links">
          <Link href='/about'>About
          </Link>
          <Link href='/about/team'>Team
          </Link>
          <Link href='/code/repos'>Code
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;