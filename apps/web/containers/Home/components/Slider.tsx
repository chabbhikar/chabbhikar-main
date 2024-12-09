"use client";

import React from "react";

import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    className: string;
    items: React.ReactElement[];

    centerMode: string | boolean;
    magnifiedIndex?: number;

    activeSlideCSS?: string;
    [x: string]: any;
  }>;

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  (
    {
      className,
      items = [],
      activeIndex = 0,
      centerMode,
      magnifiedIndex = 8,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    const isSmall = (index: number) => {
      if (props?.activeIndex + magnifiedIndex > items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(""),
              ...child.props,
            });
          }

          return React.cloneElement(child);
        })
      : items;
    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

export default Slider;
