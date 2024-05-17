import logo from "./logo.svg";
import "./App.css";
import PropsData from "./components/propsData";
import { USER_DATA } from "./components/data";

function App() {
  return (
    <div className="App">
      <PropsData heading={"Learning Props in react"} title="Props Data pass" description="UI" />
      <PropsData title="Add Data pass" description="Add other description" />   

      {/* we can use object data by props method */}
      <PropsData title={USER_DATA[0].name}  description={USER_DATA[0].address}/>
      <PropsData title={USER_DATA[1].name}  description={USER_DATA[1].address}/>
      
    </div>
  );
}

export default App;
