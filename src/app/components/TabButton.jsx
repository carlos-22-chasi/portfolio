import React from 'react'
import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem"},
}

const TabButton = ( {active, selectTab, children}) => {
  // if the button is active then text highlited, else grey out 
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE] hover:border-b-2 hover:border-b-blue-600 mt-2'
  return (
    <button onClick={selectTab}>
      <p className={`mr-5 font-semibold hover:text-white ${buttonClasses}`}>
        {children} {/*name of the tab */}
      </p>
      {/* underlined portion animation */}
      <motion.div
        variants={variants}
        animate={active ? "active" : "default"}
        transition={{ duration: 0.5 }}
        className="h-1 bg-primary-500 mt-1 mr-3"
      >
      </motion.div>
    </button>
  )
}

export default TabButton