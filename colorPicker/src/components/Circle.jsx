import '../App.css'

const Circle = ({ num, color, onCircleClick }) => {
  
  const handleClick = () => {
    onCircleClick(color[num - 1])
  }

  return (
  <>
    <div 
      className={`circle ${color[num - 1]}`} 
      onClick={ handleClick }
    >
        { num }

    </div>
  </>
  )
}

export default Circle