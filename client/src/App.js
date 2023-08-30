import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Navbr";
import { ThemeProvider } from "styled-components";
import {
  Departments,
  DegreePro,
  Degrees,
  DateSheet,
  ExamResults,
  Faculty,
  TimeTable,
  FeeStructure,
  AdmissionCriteria,
  AdmissionProcess,
  StudentLife,
  CurrentEnrollment,
  LatestNews,
  LatestEvents,
  AboutUs,
  ContactUs,
  InstituteFacilities,
  NonTeachingStaff,
  VacancyPositions,
  Downloads,
  Gallery,
  LoginPage,
  Morals
} from "./components";
import ErrorPage from "./components/ErrorPage";
import Department from "./components/Department/Department";
import NewDetail from './components/NewsDetail';
import EventDetail from './components/EventsDetail'
import DegreeProgramIndividual from './components/DegreeProgramIndividual/DegreeProgramIndividual'

import Footer from "./container/Footer";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  }

  return (
    <>
     <ThemeProvider theme={theme}>
      <Router>
        <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* -------------Accademic Routes----------- */}
          <Route path="/departments" element={<Departments />} />
          <Route path="/degreePrograms" element={<DegreePro />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/dateSheets" element={<DateSheet />} />
          <Route path="/examResults" element={<ExamResults />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/timeTable" element={<TimeTable />} />

          <Route path="/department/:id" element={<Department />} />

          <Route path="/degreeProgam/:id" element={<DegreeProgramIndividual />} />

          {/* -------------ADMISSIONS Routes----------- */}

          <Route path="/feeStructure" element={<FeeStructure />} />
          <Route path="/admissionCriteria" element={<AdmissionCriteria />} />
          <Route path="/admissionProcess" element={<AdmissionProcess />} />
          <Route path="/studentLife" element={<StudentLife />} />
          <Route path="/currentEnrollment" element={<CurrentEnrollment />} />

          {/* -------------NEWS & EVENTS Routes----------- */}

          <Route path="/latestNews" element={<LatestNews />} />
          <Route path="/latestEvents" element={<LatestEvents />} />
          <Route path="/eventDetail/:id" element={<EventDetail />} />
          <Route path="/newDetail/:id" element={<NewDetail />} />

          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* -------------ABOUT Routes----------- */}

          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/morals"element={<Morals />}/>
          <Route path="/instituteFacilities"element={<InstituteFacilities />}/>
          <Route path="/nonTeachingStaff" element={<NonTeachingStaff />} />
          <Route path="/vacancyPositions" element={<VacancyPositions />} />

          <Route path="*" element={<ErrorPage />} />
   {/* -----------------------Login-------------------- */}
        <Route path="/login" element={<LoginPage/>}/> 
        </Routes>
        <Footer />      
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
