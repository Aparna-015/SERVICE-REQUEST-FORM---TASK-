import "./App.css";
import ChildDetails from "./Components/ChildeDetails/ChildDetails";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/ServiceNeeds/Service";

function App() {
  return (
    <div className="App bg-slate-200 h-screen flex items-center justify-center">
      <div className="w-5/12  bg-white h-[600px] rounded-lg ">
        <div className="w-full bg-blue-600 h-20 rounded">
          <h1 className="text-white text-left font-bold p-4 text-2xl ">
            Service request form
          </h1>
        </div>

        <ChildDetails />
        <Contact/>
        <Service/>
      </div>
    </div>
  );
}

export default App;
