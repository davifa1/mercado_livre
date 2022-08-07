import { Center, VStack, Image, Text, HStack } from "@chakra-ui/react";


export function Mediasocial() {
    return (
        <VStack m={10}>
            <Center flexDirection='column' mx={20} >
                <Text fontFamily='Heebo' fontWeight={400}>
                    SIGA O MERCADO LIVRE E ACOMPANHE AS NOVIDADES 📱
                </Text>
            </Center>

            <HStack w='full' alignItems='center' justifyContent='center'>
                <Image src='https://http2.mlstatic.com/D_NQ_NP981673-MLA50837946545_072022-B.webp'
                    alt='img' w='7cm' borderRadius='5px' />

                <Image src='https://http2.mlstatic.com/D_NQ_NP621950-MLA50837878753_072022-B.webp'
                    alt='img' w='7cm' borderRadius='5px' />

                <Image src='https://http2.mlstatic.com/D_NQ_NP792920-MLA50837946559_072022-B.webp'
                    alt='img' w='7cm' borderRadius='5px'  />

                <Image src='https://http2.mlstatic.com/D_NQ_NP830209-MLA50837878759_072022-B.webp'
                    alt='img' w='7cm' borderRadius='5px' />
            </HStack>
        </VStack>
    );
}