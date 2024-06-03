import Link from "next/link";
import { IconType } from "react-icons";

const SideNav = ({ placeholder, Icon, onClick, isSelected, href } : {placeholder: string, Icon: IconType, onClick: any, isSelected : boolean, href : string}) => {
    return (
      <Link
          href={href}
          className={`text-muted-foreground p-2 mb-4 flex items-center rounded-lg cursor-pointer duration-75 ${
            isSelected ? 'bg-primary text-white' : 'hover:text-white hover:bg-primary'
          }`}
          onClick={onClick} 
        >
          {Icon && <Icon className='mr-2' size={20} />}
          <h1 className='font-medium'>{placeholder}</h1>
      </Link>
    );
  };
  
  export default SideNav;
  