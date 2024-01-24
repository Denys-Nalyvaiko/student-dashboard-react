import { NavLink } from 'react-router-dom';
import { HeaderContainer, NavigationContainer, Logo } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>SD</Logo>
      <NavigationContainer>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/assignments">ASSIGNMENTS</NavLink>
        <NavLink to="/profile">PROFILE</NavLink>
      </NavigationContainer>
      <p>LOGOUT</p>
    </HeaderContainer>
  );
};

export default Header;
