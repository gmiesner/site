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
    <BGImg
      src="https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2F_DSC1474.jpeg?v=1582521162110"
      width={1520}
      height={1016}
      alt="Close-up of Lachlan's face with lipstick on & satin red gloved hands covering the eyes"
    />
    <Container
      variant="copyPlus"
      sx={{
        px: 3,
        textAlign: 'center',
        textShadow:
          '#B9328D',
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
            mt: 0,
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
            bg: 'primary',
            transform: 'rotate(-4deg)',
            fontSize: [3, 4],
            px: 3,
            transition: 'all .125s ease-in-out',
            textShadow: 'none',
            ':hover': {
              bg: '#328DB9',
              transform: 'scale(1.25) rotate(-356deg)'
            }
          }}
        >
          she/they
        </Badge>
        <Text
          as="p"
          variant="headline"
          sx={{
            mt: [3, 4, 5],
            mb: [4, 5],
            lineHeight: 'body',
            fontSize: [3, 4],
            fontWeight: 'normal',
            a: { fontWeight: 'bold' }
          }}
        >
          A developer at the intersection of tech and social good.
          <br />Mizzou&nbsp;’24 (??), studying Information Technology.
        </Text>
        {children}
      </Slide>
    </Container>
  </Flex>
)

export default Banner
