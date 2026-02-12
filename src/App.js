// // import logo from './logo.svg';
// import './App.css';
// // import RecordedLecture from './components/js/RecordedLecture';
// import RecordedLectureHome from './components/js/RecordedLectureHome';
// function App() {
//   return (
//     <div className="App">
      
//       <RecordedLectureHome/>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecordedLectureHome from "./components/js/RecordedLectureHome";
import RecordedLecture from "./components/js/RecordedLecture"; // playlist/watch page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecordedLectureHome />} />
        <Route path="/lecture/:id" element={<RecordedLecture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
