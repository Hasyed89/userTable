import './NavBar.css'
import { Link,useParams } from 'react-router-dom';
const NavBar = () => {
  const{id} = useParams();
  return (
    <>
    <h1>Admin-Table</h1>
    <section>
      <h3>One Destination for Complete Web Development</h3>
      <nav>
        <ul className="menuItems">
          <li>
        <Link to={`/home`}>Home
          </Link> </li>
          
          <li>
          <Link to='contact'>Contacts
          </Link>
          </li>
          <li>
          <Link to='project'>Projects
          </Link>
          </li>
          
           
        </ul>
      </nav>
    </section>
    </>
    );
}
 
export default NavBar;