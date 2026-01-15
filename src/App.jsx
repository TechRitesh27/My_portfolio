import Portfolio from "./portfolio/Portfolio.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return(
    <>
      <Portfolio />
      <Analytics />
    </>
  )
}

export default App; 