import React from 'react'
import './App.css'

// import "./styles.css";
import Wrapper from './components/Wrapper' // нужно создать
import Circle from './components/Circle' // нужно создать

export default function App() {
  return (
    <div className="bg">
      <Wrapper>
        {[1, 2, 3, 4, 5].map((num) => {
          return <Circle key={num} color={num} />;
        })}
      </Wrapper>
    </div>
  );
}

