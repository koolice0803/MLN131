import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AIHistoricalAssistant from "./components/AIHistoricalAssistant";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AnalysisPage from "./pages/AnalysisPage";
import ConclusionPage from "./pages/ConclusionPage";
import DocumentsPage from "./pages/DocumentsPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import AIUsagePage from "./pages/AIUsage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/timeline" element={<TimelinePage />} /> */}
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/conclusion" element={<ConclusionPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/aiusage" element={<AIUsagePage />} />
          </Routes>
        </AnimatePresence>
      </div>

      {/* AI Historical Assistant - Available on all pages */}
      <AIHistoricalAssistant />
    </Router>
  );
}

export default App;
