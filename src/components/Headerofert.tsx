import { Text, Button, Image, Center, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Aofertprops } from "../App";


export function Headerofert() {
    const [data, setData] = useState<Aofertprops[]>([
        {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_686180-MLA50928454519_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_812945-MLA50928454565_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_656492-MLA50928517208_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_765760-MLA50928453630_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_847251-MLA50928454663_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_891032-MLA50929194100_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_928708-MLA50929134548_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          },
          {
            id: 456,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_659942-MLA50930072378_072022-G.webp',
            description: 'Descontos de até',
            title: '70% Off',
          }
    ]);
  return (
    <Center flexDirection='column'>
            <Text m={10}>
            NO DIA DOS PAIS DO MERCADO LIVRE VOCÊ APROVEITA MUITO! 💛
            </Text>
            <HStack>
                {data?.map(ofer => {
          return (<>
      
              <VStack alignItems='center' justifyContent='space-between' >
                <Button w='full'  bg='transparent' m={3} borderRadius='100%' _hover={{bg: 'none'}}>
                    <Image src={ofer.imageUrl} w='5rem' />
                </Button>
                <Text textAlign='center' fontSize='0.8rem' > {ofer.description} {'\n'} 
                 <Text>{ofer.title}</Text>
                </Text>
              </VStack>
            </>
          );
        })}
      </HStack>
  </Center>
  );
}