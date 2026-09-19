import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function FooterComp() {
  return (
    <Footer container className='border-0 border-t border-[#dedfd6] bg-[#f0ede5] px-4 py-10 dark:border-[#3c4a40] dark:bg-[#202d25] sm:px-6'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='grid w-full gap-8 sm:grid-cols-[1.3fr_1fr_1fr] sm:items-start'>
          <div>
            <Link to='/' className='whitespace-nowrap text-xl font-semibold tracking-tight text-[#17211b] transition-colors hover:text-[#dc6047] dark:text-[#f4f0e8]'>
              <span className='mr-2 rounded-md bg-[#dc6047] px-2 py-1 text-white'>Mayank's</span>
              Blogify
            </Link>
            <p className='mt-4 max-w-sm text-sm leading-6 text-[#68736c] dark:text-[#a7b0a7]'>
              A thoughtful space for practical ideas on building for the web.
            </p>
          </div>

          <div>
            <Footer.Title className='!mb-3 text-[#17211b] dark:text-[#f4f0e8]' title='Explore' />
            <Footer.LinkGroup col>
              <Footer.Link href='/about' className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]'>
                About the blog
              </Footer.Link>
              <Footer.Link href='/projects' className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]'>
                Projects
              </Footer.Link>
              <Footer.Link href='/search' className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]'>
                Journal archive
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title className='!mb-3 text-[#17211b] dark:text-[#f4f0e8]' title='Legal' />
            <Footer.LinkGroup col>
              <Footer.Link href='#' className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]'>Privacy Policy</Footer.Link>
              <Footer.Link href='#' className='text-[#68736c] hover:text-[#dc6047] dark:text-[#a7b0a7]'>Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by="Mayank's Blogify" year={new Date().getFullYear()} />
        </div>
      </div>
    </Footer>
  );
}
