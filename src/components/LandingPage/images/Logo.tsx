import { Box, Center, Flex, Heading } from '@chakra-ui/react'


import Logo from './images/logo.png'

export default function logo() {
  return (
    <Box pt={234}>
      <Center px={[8, 0]}>
        <Flex direction="column" align="center">
          <img src={logo.src} style={{ marginTop: 58 }} />
        </Flex>
      </Center>
    </Box>
  )
}
