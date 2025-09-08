import Navbar from "./componente/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="md:p-10 px-3 py-5 w-full h-screen overflow-x-auto items-center justify-center scrollbar-hide">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App