import { Box, Center, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box  bg={'gray.900'}>
      <Center color={'white'} p={5}>
        Implemented by
        <Link pl={1} color={'green.400'} href="#">
          Youcef Bekhouche
        </Link>
      </Center>
    </Box>
  );
}
