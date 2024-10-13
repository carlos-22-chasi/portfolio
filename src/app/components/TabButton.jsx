import React from 'react'

const TabButton = ( {active, selectTab, children}) => {
  // if the button is active then have it underlined and highlited, else grey out 
  const buttonClasses = active ? 'text-white border-b border-green-500' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children} {/*name of the tab */}
      </p>
    </button>
  )
}

export default TabButton