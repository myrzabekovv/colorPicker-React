import './App.css'
import Wrapper from './components/Wrapper'
import Circle from './components/Circle'
import { useState } from 'react'

 function App() {
  const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
  const [bgColor, setBgColor] = useState(colors[0])

  const handleCircleClick = (color) => {
    setBgColor(color)
  }

      return (
          <Wrapper color={bgColor}>
            {[1, 2, 3, 4, 5].map((num) => {
              return (
                <Circle 
                key={num} 
                num={num} 
                color={colors}
                onCircleClick={handleCircleClick}
                />
              );
            })}
          </Wrapper>
      );
    }

export default App
