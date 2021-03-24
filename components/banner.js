import { Flex, Container, Heading, Badge, Text } from 'theme-ui'
import BGImg from './bg-img'
import Slide from './slide-up'

const Banner = ({ children }) => (
  <Flex
    as="header"
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
      minHeight: '100vh',
      maxHeight: '768px',
      overflowY: 'visible',
      py: [5, 6],
      mb: 0
    }}
  >
   
    <Container
      variant="copyPlus"
      sx={{
        px: 3,
        textAlign: 'center',
        textShadow:
          '0 1px 2px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.25)',
        ul: {
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 0,
          m: 0
        },
        li: {
          mr: [3, 4]
        },
        a: {
          display: 'inline-block',
          color: 'white',
          transition: 'transform .125s ease-in-out',
          transform: 'none',
          ':hover': {
            transform: 'scale(1.125) rotate(-4deg)'
          }
        }
      }}
    >
      <Slide>
        <Heading
          as="h1"
          sx={{
            fontFamily: 'display',
            fontSize: [6, 7],
            mt: 6,
            mb: 3
          }}
        >
          Hi, I'm
          <br />
          Gabriella Miesner.
        </Heading>
        <Badge
          variant="pill"
          sx={{
            bg: '#ffffff00',
            transform: 'rotate(-4deg)',
            fontSize: [10, 9],
            transition: 'all .125s ease-in-out',
            textShadow: 'none',
            ':hover': {
              bg: '#ffffff00',
              transform: 'scale(1.25) rotate(-356deg)'
            }
          }}
        >
        👩‍💻
        </Badge>
        <Text
          as="p"
          variant="headline"
          sx={{
            mt: [3, 4, 5],
            mb: [2, 3],
            lineHeight: 'body',
            fontSize: [3, 4],
            fontWeight: 'normal',
            a: { fontWeight: 'bold' }
          }}
        >
          A developer at the intersection of tech and social good.
          <br />Mizzou&nbsp;’24, studying Information Technology.
        </Text>
        {children}
      </Slide>
    </Container>
  </Flex>
)

export default Banner
