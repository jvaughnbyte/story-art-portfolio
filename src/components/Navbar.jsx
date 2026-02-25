import { NavLink  } from 'react-router-dom'

export default function Navbar () {
    const links = [
  { to: '/',            label: 'Home' },
  { to: '/story',       label: 'Storyboards' },
  { to: '/about',       label: 'About' },
  { to: '/contact',     label: 'Contact' }
]
    return (
        <header className='navbar'>
                {links.map(link => (
                  <NavLink key={link.to} to={link.to}>
                    {link.label}
                  </NavLink>
                ))}
        </header>
    )
}