import { Box, Text, Image } from "@chakra-ui/react";

export function Items() {
    return (
        <Box h={400} w={240} _hover={{ boxShadow: '2xl', }}>
            <Box >
                <Image src='https://http2.mlstatic.com/D_Q_NP_640758-MLA47782243628_102021-P.webp' />
            </Box>
            <Box marginLeft='12px'>

                <Text>
                    R$ 3.200
                </Text>
                <Text color='green'>
                    Frete Gratis
                </Text>
                <Text>
                    Apple iphone 11 (64 GB)
                </Text>
            </Box>
        </Box>
    );
}