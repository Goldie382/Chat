import React from 'react'
import Form from './components/form'
import Body from './components/Body'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <Router>
            <Routes>
                { <Route path="/" element={<Form />} /> }
                <Route path="/Body" element={<Body />} />
            </Routes>
        </Router> */}

        <Form/>
    


    </>
  )
}

export default App;
