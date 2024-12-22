import {
    Box,
    Container,
    HStack,
    IconButton,
    Text,
} from "@chakra-ui/react"
import { LuArrowDown } from "react-icons/lu";
import Image from "next/image";

// =================================================================
import k1 from '../../assets/k1.jpeg'
import k2 from '../../assets/k2.jpeg'
import k3 from '../../assets/k3.jpeg'
import k4 from '../../assets/k4.jpeg'
import k5 from '../../assets/k5.jpeg'
import k6 from '../../assets/k6.jpeg'



import INIT_IMAGE from "./assets/images/kitchen1.jpeg"
import { QuotationCardItem } from "./_components"
export async function Quotation() {
    const renderBackground = <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
    // position="relative"
    // height="100%"
    // style={{ background: `url(${INIT_IMAGE})`, backgroundSize: 'cover' }}
    >
        <Image
            src={INIT_IMAGE}
            alt="Quotation"
        // layout="fill"
        // objectFit="cover"
        />
    </Box>

    const renderScrollIndicator = (<Box >
        <HStack>
            <IconButton background='transparent' border='1px solid white' rounded='full' size='sm'>
                <LuArrowDown />
            </IconButton>
            <Text fontSize='sm'>
                Scroll down to select a style
            </Text>
        </HStack>
    </Box>)
    const renderFirstSection = <Box>
        <Container position='absolute' mt={{ sm: 25, md: 55, lg: 55, }}>
            <Box color='white'>
                <Box mb={10} >
                    <Text fontSize='35px' fontWeight='bolder'>
                        MAGPPIE
                    </Text>
                    <br />
                    <Text >Get a Quote in 3 easy steps</Text>
                </Box>
                <HStack>
                    {['kitchen style', 'kitchen size', 'kitchen shape']?.map((remark, i) => {
                        return <QuotationCardItem key={i} index={i + 1} remark={remark} />
                    })}

                </HStack>
                {!renderScrollIndicator}
            </Box>
        </Container>
        {renderBackground}

    </Box>

    return (<Box>
        {renderFirstSection}

        <Box background='#484444' color='white' >
            <Container pt={10}>
                <HStack gap={4}>
                    STEP
                    <IconButton size='sm' background='white' border={'1px solid black'} color='black' rounded='full'>
                        1
                    </IconButton>
                </HStack>
                <Text textTransform='uppercase'>
                    Choose your <strong>kitchen style</strong>
                </Text>

                <Box
                    padding={4}
                    w="100%"
                    // maxW="900px"
                    columnCount={[1, 2]}
                    columnGap={5}
                >
                    {srces.map((src, i) => (
                        <Image
                            style={{
                                width: '100%',
                                display: 'inline-block',
                                // marginBottom: 2,
                                borderRadius: '1rem',
                                margin: '1rem'
                            }}
                            key={i}
                            src={src}
                            alt={`${i}`}
                        />
                    ))}
                </Box>
            </Container>
        </Box>

    </Box>);
}


const srces = [
    k1,
    k2,
    k3,
    k4,
    k5,
    k6


];
export default Quotation;
