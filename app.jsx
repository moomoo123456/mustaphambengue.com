import React from "react";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { rgba } from 'polished'

const ParallaxComponent = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.5}>
        Content for first parallax layer
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        Content for second parallax layer
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5}>
        Content for third parallax layer
      </ParallaxLayer>
    </Parallax>
  )
}