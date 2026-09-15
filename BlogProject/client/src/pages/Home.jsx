import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='page-shell'>
      <section className='mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-24 lg:pt-24'>
        <div>
          <p className='eyebrow mb-5'>Ideas for the modern web</p>
          <h1 className='font-display max-w-3xl text-5xl leading-[0.98] tracking-tight text-[#17211b] dark:text-[#f4f0e8] sm:text-6xl lg:text-8xl'>
            Make the web feel a little more human.
          </h1>
        </div>
        <div className='max-w-md pb-1 lg:pb-3'>
          <p className='text-base leading-7 text-[#68736c] dark:text-[#a7b0a7] sm:text-lg'>
            Notes on web development, software engineering, and the small details that make digital experiences worth returning to.
          </p>
          <Link
            to='/search'
            className='mt-7 inline-flex items-center gap-2 border-b-2 border-[#dc6047] pb-2 text-sm font-bold text-[#17211b] transition-colors hover:text-[#dc6047] dark:text-[#f4f0e8]'
          >
            Explore all posts <span aria-hidden='true'>-&gt;</span>
          </Link>
        </div>
      </section>

      <div className='bg-[#dbe7d8] px-5 py-8 dark:bg-[#304438] sm:px-8'>
        <CallToAction />
      </div>

      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:py-24'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div className='flex items-end justify-between gap-4 border-b border-[#dedfd6] pb-5 dark:border-[#3c4a40]'>
              <div>
                <p className='eyebrow mb-2'>From the journal</p>
                <h2 className='font-display text-3xl font-semibold text-[#17211b] dark:text-[#f4f0e8] sm:text-4xl'>Recent posts</h2>
              </div>
              <Link to='/search' className='hidden text-sm font-bold text-[#dc6047] hover:text-[#b84b37] sm:block'>View archive -&gt;</Link>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to='/search'
              className='text-center text-sm font-bold text-[#dc6047] hover:text-[#b84b37] sm:hidden'
            >
              View archive -&gt;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
