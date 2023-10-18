import Education from "../EducationPage/Education";
import NameText from "../NameText";
import Navbar from "../Navbar";
import ProgrammingLang from "../ProgrammingLang/ProgrammingLang";
import Skill from "../Skill/SkillComponent";
import CertificatePage from "../Cert/CertificatePage";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 h-screen relative">
        <div className="absolute top-0 left-0 right-0">
        <Navbar />
        </div>
        <NameText />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <ProgrammingLang />
      </div>
      <div>
        <Skill />
      </div>

      <div>
      <CertificatePage />
      </div>

      <div>
        <Footer />
      </div>

    </div>  
  );
};

export default Landing;
