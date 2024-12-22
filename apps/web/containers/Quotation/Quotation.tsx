import {
    Box,
    Button,
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@chakra-ui/react"
import Image from "next/image";
import INIT_IMAGE from "../../assets/kitchen1.jpeg"
export function Quotation() {
    return (<div>
        <Box  >


            {/* <Image src={INIT_IMAGE} alt="" width={100} height={100} /> */}
            <Button background='green.600' size='sm' shadow='xl' rounded='2xl'>
                Submit
            </Button>
            <DrawerRoot>
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <Button variant="outline" size="sm">
                        Open Drawer
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Drawer Title</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </DrawerBody>
                    <DrawerFooter>
                        <DrawerActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerActionTrigger>
                        <Button>Save</Button>
                    </DrawerFooter>
                    <DrawerCloseTrigger />
                </DrawerContent>
            </DrawerRoot>
            <Image
                src={INIT_IMAGE}
                alt="Architecture"
                layout="fill"
                objectFit="cover"
            />
        </Box>

    </div>);
}

export default Quotation;
