import {
  BaseStyles,
  Box,
  Container,
  IconButton,
  NavLink,
  useColorMode
} from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

export const ColorButton = ({ sx, ...props }) => {
  const [mode, setMode] = useColorMode()
  return (
  )
}

export const Header = () => (
  <Container
    as="nav"
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: [3, 4],
      'a + a': { mx: [3, 4] }
    }}
  >
    <NavLink href="/blog" target="_blank">
      Blog
    </NavLink>
    <Link href="/resume" passHref>
      <NavLink>Résumé</NavLink>
    </Link>
    <Box sx={{ mx: 'auto' }} />
    <ColorButton
      onClick={e => {
        const next = mode === 'dark' ? 'light' : 'dark'
        setMode(next)
      }}
    />
  </Container>
)

export const Footer = () => (
  <Container
    as="footer"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: [3, 4, 5],
      a: { color: 'primary', mx: 2 }
    }}
  >
    <Avatar size={48} sx={{ height: 48, mr: 3 }} />
    <NavLink href="https://github.com/gmiesner" title="GitHub" target="_blank">
      <Icon glyph="github" size={36} />
    </NavLink>
    <NavLink href="mailto:gtmr7z@umsystem.edu" title="Email">
      <Icon glyph="email" size={36} />
    </NavLink>
  </Container>
)

const colors = {
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda'
}

export const Rainbow = () => (
  <Box
    sx={{
      width: '100%',
      height: '4rem',
      display: 'block',
      backgroundImage: `linear-gradient(${colors.red} 0%, ${colors.red} 16.6666%, ${colors.orange} 16.6666%, ${colors.orange} 33.333%, ${colors.yellow} 33.333%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 66.6666%, ${colors.blue} 66.6666%, ${colors.blue} 83.3333%, #8067C3 83.3333%, #8067C3 100%)`
    }}
  />
)

const Layout = props => (
  <>
    <Header />
    <Container as={BaseStyles} variant="copy">
      {props.children}
    </Container>
    <Footer />
    <Rainbow />
  </>
)

export default Layout
