import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Bookmark = ({w=16, h=16}) => {
  return (
    <Svg width={w} height={h} viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12.4286 2H4.57143C3.70714 2 3 2.75 3 3.66667V17L8.5 14.5L14 17V3.66667C14 2.75 13.2929 2 12.4286 2Z" fill="black"/>
    </Svg>
  )
}

export default Bookmark