import {
  Box, HStack, VStack, Image,
  Input, InputGroup, InputRightAddon,
  Center, Text, Code
} from '@chakra-ui/react';
import { Search } from './assets/Search';
import { About } from './components/About';
import { Carousel } from './components/Carousel';
import { Headernav } from './components/Headernav';
import { Headerofert } from './components/Headerofert';
import { Items } from './components/Items';
import { Mediasocial } from './components/Mediasocial';

export interface Aofertprops {
  imageUrl: string,
  title?: string,
  description: string,
  id: number
}

export default function App() {

  return (
    <div className="App">
      <VStack>
        <Center bg='#fff159' w='full'>
          <HStack w='full' alignItems='center' justifyContent='space-around' >
            <Image src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__small.png' alt='Dan Abramov'
            />
            <Box>
              <InputGroup w='37rem' p='10px'>
                <Input variant='filled' p='5.75mm' placeholder='Buscar produtos, mercados e muito mais' fontFamily='Heebo' fontWeight={400} />
                <InputRightAddon children={<Search />} p='6mm' />
              </InputGroup>
            </Box>
            <Image src='https://http2.mlstatic.com/D_NQ_804993-MLA50802408988_072022-OO.webp' alt='Dan Abramov'
              w='20rem' />
          </HStack>
        </Center>
      </VStack>
      <Headernav />
      <Carousel />
      <Headerofert />
      <Center flexDirection='column' m={20} fontFamily='Heebo' fontWeight={400}>
        <Text>
          OPÇÕES ESPECIAIS PRA PRESENTEAR SEU PAI ❤️
        </Text>
        <HStack w='full' alignItems='center' justifyContent='center'>
          <Image src='https://http2.mlstatic.com/D_NQ_NP_714501-MLA50930072608_072022-OO.webp'
            alt='img' w='35rem' _hover={{ boxShadow: '2xl', }} />
          <Image src='https://http2.mlstatic.com/D_NQ_NP_654317-MLA50930072621_072022-OO.webp'
            alt='img' w='35rem' _hover={{ boxShadow: '2xl', }} />
        </HStack>
        <Image src='https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1588268985432-header_desktop.jpg'
          alt='img' w='95%' borderRadius='5px' mt={10} _hover={{ boxShadow: '2xl', }} />
      </Center>
      
      <Center>
        <Box flexDirection='column' mx='7.5rem' mt='3rem'>
          <HStack>
            <Items />
          </HStack>
        </Box>
      </Center>

      <Center flexDirection='column' mx={20} >
        <Text fontFamily='Heebo' fontWeight={400}>
          BENEFÍCIOS NIVEL 6 ❤️
        </Text>
        <Image src='https://http2.mlstatic.com/D_NQ_NP_755101-MLA50906656973_072022-OO.webp'
          alt='img' w='95%' borderRadius='5px' mt='2rem' _hover={{ boxShadow: '2xl', }} />
      </Center>

      <>
        <Box flexDirection='column' mx='7.5rem' mt='3rem'>
          <Box >
            <Text fontFamily='Heebo' fontWeight={400}>PRESENTES QUE SEU PAI VAI ADORAR!</Text>
          </Box>
          <HStack>
            <Items />
          </HStack>
        </Box>
      </>

      <>
        <Box flexDirection='column' mx='7.5rem' mt='3rem'>
          <Box >
            <Text fontFamily='Heebo' fontWeight={400}>PRA COMPRAR AGORA! 🎁</Text>
          </Box>
          <HStack>
            <Items />
          </HStack>
        </Box>
      </>
      <About />
      <Mediasocial />

      <Center m={4}>
        <Code children='</davihr> by STARMAX ❤️' fontFamily='Heebo' fontWeight={400} />
      </Center>
    </div >
  );
}
