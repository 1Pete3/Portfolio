import TopNav from '../Navbar/navbar';
import './resume.css';
const Resume = () => {
  return (
    <div className='bg-third'>
      <TopNav />
      <div className="resumeContainer">
        <iframe
          className="resume"
          src="https://drive.google.com/file/d/1vIGblRU8EyhU7UGNhOs4O5JrvIN6I9rp/preview"
          allow="autoplay"
          title="Peter Skowronek Resume"
        ></iframe>
      </div>
    </div>
  );
};
export default Resume;
