// import './Nav-item.css';

function NavItem(props) {
  const { name, data } = props;

  return (
    <a className="nav__item" href="#" data-to={data}>{name}</a>
  )
}

export default NavItem;