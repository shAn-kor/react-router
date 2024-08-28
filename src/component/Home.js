import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h3>홈페이지</h3>
      <Link to='/user'>User Page</Link>
      <hr/>
      <Link to='/info'>Info Page</Link>
    </div>
  );
}

export default Home;