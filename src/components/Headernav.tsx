import { Box, VStack, HStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import {Map} from '../assets/map.js';


export function Headernav() {
  return (
    <HStack bg='#fff159' flexDirection='row' w='full' mt={-3} alignItems='center' justifyContent='space-between' px={10}>
        <HStack>

        <Button bg='transparent' fontSize={13}  _hover={{bg: 'transparent'}} m={3}>
            <Map />
                <VStack>
                  <Text fontSize='.7rem' fontWeight='300' color='black' h='10px'>Enviar Para</Text>
                  <Text fontSize='.8rem' fontWeight='500' color='black'>1599720</Text>
                </VStack>
        </Button>
        <Box>
            <Button bg='transparent' fontSize={13} _hover={{bg: 'transparent'}}>Categorias</Button>
            <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}} m={3}>Historico</Button>
            <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}} m={3}>Ofertas do Dia</Button>
            <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}} m={3}>Moda</Button>
            <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}} m={3}>Vender</Button>
            <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}} m={3}>Contato</Button>
        </Box>
        </HStack>
            <Box>
                <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}}>Crie sua conta</Button>
                <Button ml={2} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}}>Entre</Button>
                <Button ml={2} mr={3} bg='transparent' fontSize={13} _hover={{bg: 'transparent'}}>Icon</Button>                
            </Box>
    </HStack>
  );
}