import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
  
import React from 'react'

const UserAvatar = () => {
    return (
        <Avatar>
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )
}

export default UserAvatar