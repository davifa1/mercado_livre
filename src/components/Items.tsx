import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Aofertprops } from "../App";

export function Items() {
    const [data, setData] = useState<Aofertprops[]>([
        {
            id: 4564,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_730284-MLA46114648018_052021-P.webp',
            description: 'Descontos de até',
            title: 'Iphone',
        },
        {
            id: 29043,
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_882123-MLB49470400381_032022-W.webp',
            title: 'Mec book',
            description: 'test'
        },
        {
            id: 29043,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_863635-MLA47782243646_102021-P.webp',
            title: 'Iphone',
            description: 'test'
        },
        {
            id: 29043,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_669080-MLA47781235818_102021-P.webp',
            title: 'Iphone',
            description: 'test'
        },
        {
            id: 29043,
            imageUrl: 'https://http2.mlstatic.com/D_Q_NP_898473-MLA46082237674_052021-P.webp',
            title: 'Iphone',
            description: 'test'
        },
    ]);
    return (
        <>
        {data?.map(info => {
            return (
        <Box h={400} w={240} _hover={{ boxShadow: '2xl', }}>
                
                <Box>
                <Image src={info.imageUrl} />
            </Box>
            <Box marginLeft='12px'>
    
                <Text fontFamily='Heebo' fontWeight={400}>
                    R$ 3.200
                </Text>
                <Text color='green' fontFamily='Heebo' fontWeight={500}>
                    Frete Gratis
                </Text>
                <Text fontFamily='Heebo' fontWeight={400}>
                    {info.title}
                </Text>
            </Box>
            </Box>
            );
        })}
        </>

        
    );
}