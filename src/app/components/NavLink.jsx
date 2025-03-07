import Link from "next/link"

const NavLink = ({href, title}) => {
  return (
    <Link 
      href={href} 
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 hover:text-white hover:border-b-primary-500 hover:border-b-2'
      >
    {title}
    </Link>
  )
};

export default NavLink;