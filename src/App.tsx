import { useState } from 'react';
import LandingPage from './components/LandingPage';
import UploadPage from './components/UploadPage';
import ResultsDashboard from './components/ResultsDashboard';

type Page = 'landing' | 'upload' | 'results';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleUploadComplete = () => {
    setCurrentPage('results');
  };

  return (
    <>
      {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'upload' && (
        <UploadPage onNavigate={handleNavigate} onUploadComplete={handleUploadComplete} />
      )}
      {currentPage === 'results' && <ResultsDashboard onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
