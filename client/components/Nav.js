import Link from 'next/link';

const Nav = () => {
  return (
    <nav  className="nav bg-dark d-flex justify-content-between">

        <Link  href="/" className="nav-link active text-light" aria-current="page">  Home 
         
        </Link>
      
      <Link  href="/login" className="nav-link text-light" aria-current="page"  > 
         Login
        </Link>
 
     
      <Link  href="/registration" className="nav-link text-light" aria-current="page" >
         Registraion
   
        </Link>
   
    </nav>
  );
};

export default Nav;
