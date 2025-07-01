import { Link, useNavigate } from "react-router-dom";

const Header = ({user,onLogin}) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    onLogin(null);
    navigate('/');
  }
  return (
    <header>
      <nav>
        <Link className="home" to="/">HOME</Link>
        {
          user && (
            <div>              
              <span>{user.nickname} </span>
               님
              <button onClick={handleClick}>Logout</button>
            </div>
          )
        }
      </nav>
    </header>
  );
};

export default Header;