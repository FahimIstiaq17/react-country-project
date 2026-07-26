import { Suspense } from 'react'
import './App.css'
import Country from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<p>Waiting for data...</p>}>
       <Country countriesPromise = {countriesPromise}> </Country>
      </Suspense>
    </>
  )
}

export default App
