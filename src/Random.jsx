function Rendom () {
  let number = Math.random() * 10;
  return <h2 style={{backgroundColor: "blue"}}>Random number is :{Math.round(number)}</h2>
}

export default Rendom;