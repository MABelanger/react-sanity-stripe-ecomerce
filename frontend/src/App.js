import { BrowserRouter, Route, Routes } from 'react-router-dom'

function ComponentTmp() {
  return <div className="cursive">tmp</div>
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentTmp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
