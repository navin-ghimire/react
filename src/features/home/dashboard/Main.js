import React from 'react'
import DisplaySection from './DisplaySection'
import Tech from './Tech'


const Main = () => {
  return (
    <div>
      <DisplaySection />
      <div>
        <p className='text-center py-10 font-semibold text-3xl'>Technologies I Use</p>
      </div>
      <Tech />
<div>
<p className='text-center py-20 font-semibold text-3xl'>Who am I</p>
</div>

<div className='border-'>
</div>
    </div>
  )
}

export default Main
