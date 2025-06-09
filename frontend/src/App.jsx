import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Branch from './pages/Branch';
import Semester from './pages/Semester';
import Subject from './pages/Subject';
import AdminDashboard from './pages/AdminDashboard';
import Upload from './pages/Upload';

export default function App() {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/branch/:branchId" element={<Branch/>}/>
        <Route path="/branch/:branchId/semester/:semesterId" element={<Semester/>}/>
        <Route path="/branch/:branchId/semester/:semesterId/subject/:subjectId" element={<Subject/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </div>
  );
}
