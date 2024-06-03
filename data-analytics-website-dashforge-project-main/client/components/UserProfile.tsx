'use client'

import {
    Github,
    LifeBuoy,
    LogOut,
    Settings,
    User,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import UserAvatar from "./UserAvatar"
import { useState } from "react"
import EditProfile from "./EditProfile"

const UserProfile = () => {

    const [profile, setProfile] = useState(false)

    const toggleProfile = () => {
      setProfile(!profile)
      console.log('Profile toggle');
    }

    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center p-1 px-2 border border-background cursor-pointer rounded-lg hover:border-secondary"> 
                <UserAvatar/>
                <Button variant="ghost" className="hover:bg-transparent duration-75">@username</Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={toggleProfile}>
                <User className="mr-2 h-4 w-4" />
                <span>profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <a href="/">
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
        <EditProfile isOpen={profile} setIsOpen={setProfile}/>
      </>
      )
}

export default UserProfile