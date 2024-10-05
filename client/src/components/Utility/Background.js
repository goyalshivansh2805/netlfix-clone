import React from 'react'

function Background({classes}) {
  return (

    <div className="min-h-[100vh] min-w-[100vw] bg-no-repeat bg-cover bg-center fixed z-[-1] "
        style={{ backgroundImage: `url(/Images/Background.png)`}}
    >
      <div className={classes}>
      </div>
    </div>
  )
}

export default Background
