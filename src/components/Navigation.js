import NavItem from "./nav-item/Nav-item";

function Navigation() {
  return (
    <nav className="nav">
      <NavItem name='Меню' data='menu' />
      <NavItem name='О нас' data='about' />
      <NavItem name='Галерея' data='gallery' />
      <NavItem name='Контакты' data='contacts' />
      <NavItem name='Акции' data='stock' />
    </nav>
  )
}

export default Navigation;