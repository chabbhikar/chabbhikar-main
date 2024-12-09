"use client";

import * as React from "react";
import { IconButton, useColorMode, useColorModeValue, IconButtonProps } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

// Icon component that changes based on the color mode
export function ColorModeIcon() {
  const colorMode = useColorModeValue("light", "dark");
  return colorMode === "light" ? <LuSun /> : <LuMoon />;
}

// Button to toggle color mode
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<HTMLButtonElement, ColorModeButtonProps>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode();

    return (
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        icon={<ColorModeIcon />}
        ref={ref}
        {...props}
        _icon={{
          w: 5,
          h: 5,
        }}
      />
    );
  }
);
