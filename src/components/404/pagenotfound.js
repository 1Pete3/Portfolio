import TopNav from '../Navbar/navbar';
import './styles.css'
const PageNotFound = () => (
  <div>
    <TopNav />
    <div className='text-red bg-dark textContainer'>
      <h1 className='text-center'>Page Not Found</h1>
    </div>
  </div>
);

export default PageNotFound;
