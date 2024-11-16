import { useState } from 'react'

function App() {
  const [ setColor] = useState('#FFFFFF')

  return (
   <div>
    <h2>Color Picker</h2>

    <button onClick={()=> setColor('#FFFFFF') }>Red</button>
    <button style={()=> onClick= setColor('#A52A2A')}> Blue</button>
    
   </div>
  )
}

export default App
