import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='site-header border-b border-[#dedfd6] bg-[#fffdf9]/95 px-4 py-4 backdrop-blur dark:border-[#3c4a40] dark:bg-[#202d25]/95 sm:px-6'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-base font-semibold tracking-tight text-[#17211b] dark:text-[#f4f0e8] sm:text-xl'
      >
        <span className='mr-1 rounded-md bg-[#dc6047] px-2 py-1 text-white'>
          Mayank's
        </span>
        Blogify
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline [&_input]:border-[#dedfd6] [&_input]:bg-[#f8f5ef] [&_input]:text-[#17211b] [&_input]:placeholder:text-[#68736c] dark:[&_input]:border-[#3c4a40] dark:[&_input]:bg-[#17211b] dark:[&_input]:text-[#f4f0e8]'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button
        className='h-10 w-10 border-[#dedfd6] bg-transparent text-[#17211b] hover:bg-[#dbe7d8] lg:hidden dark:border-[#3c4a40] dark:text-[#f4f0e8] dark:hover:bg-[#304438]'
        color='gray'
        pill
        aria-label='Open search'
        onClick={() => navigate('/search')}
      >
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='hidden h-10 w-10 border-[#dedfd6] bg-transparent text-[#17211b] hover:bg-[#dbe7d8] sm:inline dark:border-[#3c4a40] dark:text-[#f4f0e8] dark:hover:bg-[#304438]'
          color='gray'
          pill
          aria-label='Toggle theme'
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button className='border-0 bg-[#dc6047] text-white hover:bg-[#b84b37]' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]' active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]' active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]' active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
