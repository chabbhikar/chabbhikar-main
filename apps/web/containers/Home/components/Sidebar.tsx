"use client"

import { Drawer, DrawerBody, DrawerContent, useDisclosure, Button, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { SignInForm } from "../../../sign-in/sign-in";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [toggle, setToggle] = useState({ main: true, login: false });

    const renderMain = (
        <VStack className={styles.sidebarContainer}>
            <Heading as="h2" className={styles.title}>MENU</Heading>
            <Box className={styles.mainContent}>
                <NavLink className={styles.menuItem} to='/quote'>GET A QUOTE IN 30 MINUTES</NavLink>
                <Button variant="solid" className={styles.menuItem}>CONTACT US NOW</Button>
            </Box>
            <Text className={styles.loginLink} onClick={() => setToggle((prev) => ({ ...prev, login: true }))}>
                MEMBERS LOGIN
            </Text>
        </VStack>
    );

    return (
        <>
            {!toggle.main && (
                <Box className={styles.menuButton} onClick={() => setToggle((prev) => ({ ...prev, main: true }))}>
                    <Icon icon='material-symbols:menu' width={40} />
                </Box>
            )}

            <Drawer isOpen={toggle.main} onClose={onClose} placement="right">
                <DrawerOverlay />
                <DrawerContent className={styles.sidebarContainer}>
                    <DrawerBody>
                        {toggle.login ? (
                            <Box display="grid" gridTemplateColumns="1fr 1fr">
                                <Box bg="white" color="black" w="20rem" p={3} display="flex" flexDirection="column" justifyContent="center">
                                    {/* <SignInForm /> */}
                                    <h1>Hello</h1>
                                </Box>
                                {renderMain}
                            </Box>
                        ) : (
                            renderMain
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
