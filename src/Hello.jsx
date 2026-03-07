function Hello() {
  let myname = "Sajid";
  let fullName = () => {
    return "sajid chughtai";
  }; 

  return (
    <h3>
      Hello world. My name is {fullName()}
    </h3>
  );
}

export default Hello;