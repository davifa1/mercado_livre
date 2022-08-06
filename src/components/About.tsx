import { Center, VStack, Image } from "@chakra-ui/react";


export function About() {
    return (
        <VStack>
            <Center flexDirection='column' mx={20} >
                <Image src='https://http2.mlstatic.com/D_NQ_NP_760173-MLA50930092163_072022-OO.webp'
                    alt='img' w='95%' borderRadius='5px' mt='2rem' />
            </Center>
        </VStack>
    );
}