const Square = (props)  =>{
  return (
    <>
    <div className="Sqaure" onClick={props.onClick}>
      <h1 className="player">{props.value}</h1>
    </div>
    </>
  )
}

export default Square