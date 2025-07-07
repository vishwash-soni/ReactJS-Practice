import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    age : 22,
    city : "Delhi",
    country : "India"
  }

  let myArray = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className='flex justify-center mb-4'>These are Cards</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <Card userName = {"vishwash"} newObj = {myObj} newArr = {myArray}/>
        <Card userName = {"priyal"} newObj = {myObj} newArr = {myArray}/>
        <Card userName = {"ayush"} newObj = {myObj} newArr = {myArray}/>
      </div>
    </>
  )
}

export default App
