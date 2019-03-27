// Img.js (a gatsby-image wrapper)

// const Img = props => {
//   // Construct font-family declaration for object-fit-images
//   const objFit = props.objFit ? props.objFit : `cover`
//   const objPosition = props.objPosition ? props.objPosition : `50% 50%`
//   const fontFamily = `"object-fit: ${objFit}; object-position: ${objPosition}"`

//   const imgStyle = {
//     objectFit: objFit,
//     objectPosition: objPosition,
//     fontFamily: fontFamily
//   }

//   return (
//     <Image
//       sizes={props.sizes}
//       alt={props.alt}
//       className={props.className}
//       style={props.style}
//       outerWrapperClassName={props.outerWrapperClassName}
//       imgStyle={{ ...imgStyle }}
//       position={props.position || `relative`}
//       backgroundColor={props.backgroundColor || `transparent`}
//       Tag={props.Tag || `div`}
//     />
//   )
// }

const Img = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
  <Image
    {...props}
    imgStyle={{
      ...props.imgStyle,
      objectFit: objFit,
      objectPosition: objPosition,
      fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
    }}
  />
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Image from 'gatsby-image'

export default Img