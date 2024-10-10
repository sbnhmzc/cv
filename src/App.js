import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import AboutMeList from "./components/AboutMeList";
import Footer from "./components/Footer";
import { workExperience } from "./data/workExperience";
import { education } from "./data/education";
import { technologies } from "./data/skills";

function App() {
  return (
    <div className="container mx-auto font-sans py-20 text-gray-600 px-4">
      <Header></Header>
      <AboutMe></AboutMe>
      <div className="border-b-2 mb-8 border-blue-200"></div>
      <AboutMeList
        title="Work Experience"
        listData={workExperience}
      ></AboutMeList>
      <AboutMeList title="Education" listData={education}></AboutMeList>
      <AboutMeList title="Skills" listData={technologies}></AboutMeList>
      <div className="border-b-2 my-8 border-blue-200"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
