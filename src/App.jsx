
import { createContext } from 'react'
import './App.css'
import Form from './components/Form/Form'
import StatefulForm from './components/Form/StatefulForm/StatefulForm'
import Grandpa from './components/Grandpa'
import HookedForm from './components/HookedForm/HookedForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
 export const AssetContext = createContext('gold')
function App() {

  // const handleSignUpSubmit = (data) => {
  //   console.log(data)

  // };
  // const handleUpdateSubmit = (e) => {
  //   e.preventDefault();
  // };

 
  return (
    <>
     
      <h1>Vite + React</h1>
    {/* <Form></Form> */}
    {/* <StatefulForm></StatefulForm> */}
    {/* <RefForm></RefForm> */}
    {/* <HookedForm></HookedForm>
       */}

    {/* <ReusableForm title={'sign up'} submitButton={'sign up'} handleSubmit={handleSignUpSubmit}><div></div></ReusableForm> */}
  {/* <ReusableForm title={'update profile'} submitButton={'update'} handleSubmit={handleUpdateSubmit}></ReusableForm> */}
       <AssetContext.Provider value='lol'><Grandpa></Grandpa></AssetContext.Provider>
       
    </>
  )
}

export default App
