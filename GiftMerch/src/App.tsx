import FAQ from "./components/accordion/Info"
// import Accordion from "./components/accordion/Accordion"


function App() {

  return (
    <div >
      <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Часто задаваемые вопросы</h1>
        <FAQ />
      </div>
    </div>

    

    )
}

export default App
