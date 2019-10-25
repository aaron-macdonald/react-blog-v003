import React from 'react'

import DevAcademySection from './DevAcademySection.jsx'

function DevAcademy (props) {
  const {devAcademy} = props
  
  return (
    devAcademy.map(devAcademySection => {
      return (
        <div key={devAcademySection.id}>
          <DevAcademySection devAcademySection={devAcademySection} />
        </div>
      )
    })
  )
}

export default DevAcademy