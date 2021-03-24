import React from 'react'
import { Avatar as Base } from 'theme-ui'

const Avatar = ({ size = 48, ...props }) => (
  <Base
    {...props}
    size={size}
    src="https://github.com/gmiesner.png"
    alt="Gabriella's avatar"
    mr={3}
  />
)

export default Avatar
