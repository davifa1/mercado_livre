import { Box, HStack, VStack, Image, Input, InputGroup, InputRightAddon, Center, Text, Avatar, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Carousel } from './components/Carousel';
import { Headernav } from './components/Headernav';
import { Headerofert } from './components/Headerofert';

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
                <Input variant='filled' p='5.75mm' placeholder='Buscar produtos, mercados e muito mais'/>
                <InputRightAddon children='Icons' p='6mm'/>
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
    </div>
  );
}
