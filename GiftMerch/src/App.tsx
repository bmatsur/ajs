// import FAQ from "./components/information/Info"
import { ThemeContextProvider } from "./components/context/ThemeContext"
import Box from "./components/context/Box"


function App() {

  return (
    <div >
      <div >
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
    </div>

    

    )
}

export default App
