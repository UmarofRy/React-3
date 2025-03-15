
import './App.css'

function App() {

  let a = prompt("Enter a number")
  const b = prompt("Ism kirit")
  const soat = new Date()
  const time = soat.getHours() + ":" + soat.getMinutes() + ":" + soat.getSeconds()



  const newLocal = Date()
  return (
    <>
      <div style={{
      border: "2px solid black",
      borderRadius: "10px",
      width: "766px",
      height: "557px",
      backgroundColor: a > 1 ? "black" : "white",
      color: a > 1 ? "white" : "black",
      padding: "20px",
      }}>
      <p>Hello my name is: {b}</p>
      <p>Current date: {new Date().toLocaleDateString()}</p>
      <p>{Math.trunc(Math.random() * 100)}</p>
      </div>
    </>
    )
}

export default App
