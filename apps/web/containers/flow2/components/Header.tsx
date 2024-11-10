import React from 'react';
import Link from 'next/link';
import {Text} from "@chakra-ui/react";


const Header: React.FC = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 50,
        right: 0,
        backgroundColor: 'transparent',
        textAlign: 'start',
        padding: '40px',
        zIndex: 1000, // Ensures the header stays on top of other content
      }}
    >
      <h1 style={{ color: 'black' }}>
        <Link href="/" passHref>
              <Text fontSize="4xl" fontWeight="bold" color="black">
                MAGPPIE
              </Text>
          </Link>
        </h1>
    </header>
  );
};

export default Header;
