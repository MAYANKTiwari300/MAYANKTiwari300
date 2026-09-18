import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const featureHighlights = [
  'Frontend systems',
  'Product thinking',
  'JavaScript craft',
  'Design patterns',
];

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts || []);
    };
    fetchPosts();
  }, []);

  const featuredPosts = posts.slice(0, 3);

  return (
    <div className='page-shell'>
      <section className='relative overflow-hidden'>
        <div className='absolute inset-x-0 top-[-120px] h-[480px] bg-[radial-gradient(circle_at_top_left,_rgba(220,96,71,0.14),_transparent_50%)]' />
        <div className='relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-20'>
          <div>
            <p className='eyebrow mb-5'>Ideas for the modern web</p>
            <h1 className='font-display max-w-3xl text-5xl leading-[0.98] tracking-tight text-[#17211b] dark:text-[#f4f0e8] sm:text-6xl lg:text-8xl'>
              Make the web feel a little more human.
            </h1>
            <p className='mt-6 max-w-xl text-base leading-7 text-[#68736c] dark:text-[#a7b0a7] sm:text-lg'>
              Notes on web development, software engineering, and the small details that make digital experiences worth returning to.
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <Link to='/search' className='primary-btn px-5 py-3 text-sm sm:px-6'>
                Explore posts
              </Link>
              <Link to='/about' className='secondary-btn px-5 py-3 text-sm sm:px-6'>
                About the blog
              </Link>
            </div>

            <div className='mt-8 flex flex-wrap gap-2'>
              {featureHighlights.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-[#dedfd6] bg-[#fffdf9]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#17211b] dark:border-[#3c4a40] dark:bg-[#202d25]/80 dark:text-[#f4f0e8]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='overflow-hidden rounded-[28px] border border-[#dedfd6] bg-[#fffdf9]/90 p-5 shadow-[var(--shadow-soft)] backdrop-blur dark:border-[#3c4a40] dark:bg-[#202d25]/90'>
              <div className='mb-5 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='h-3 w-3 rounded-full bg-[#dc6047]' />
                  <span className='h-3 w-3 rounded-full bg-[#dbe7d8]' />
                  <span className='h-3 w-3 rounded-full bg-[#f4f0e8]' />
                </div>
                <span className='rounded-full bg-[#dbe7d8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17211b] dark:bg-[#304438] dark:text-[#f4f0e8]'>
                  Live journal
                </span>
              </div>

              <div className='space-y-3'>
                {featuredPosts.length > 0 ? (
                  featuredPosts.map((post) => (
                    <Link
                      key={post._id}
                      to={`/post/${post.slug}`}
                      className='group block rounded-2xl border border-[#ebe5dc] bg-[#f8f5ef] p-4 transition-colors hover:border-[#dc6047] dark:border-[#32453b] dark:bg-[#18261f]'
                    >
                      <div className='mb-2 flex items-center justify-between gap-3'>
                        <span className='eyebrow !text-[10px]'> {post.category || 'Notes'} </span>
                        <span className='text-[11px] font-medium text-[#68736c] dark:text-[#a7b0a7]'>Read now</span>
                      </div>
                      <p className='line-clamp-2 font-display text-xl font-semibold leading-snug text-[#17211b] dark:text-[#f4f0e8]'>{post.title}</p>
                    </Link>
                  ))
                ) : (
                  Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className='rounded-2xl border border-[#ebe5dc] bg-[#f8f5ef] p-4 dark:border-[#32453b] dark:bg-[#18261f]'
                    >
                      <div className='mb-3 h-2.5 w-16 rounded-full bg-[#dc6047]/20' />
                      <div className='h-4 w-full rounded-full bg-[#d9d5cb] dark:bg-[#374d44]' />
                      <div className='mt-2 h-4 w-5/6 rounded-full bg-[#e2ddd4] dark:bg-[#2f423c]' />
                    </div>
                  ))
                )}
              </div>

              <div className='mt-6 grid grid-cols-3 gap-3'>
                <div className='rounded-2xl bg-[#dbe7d8] p-3 text-center dark:bg-[#304438]'>
                  <p className='text-2xl font-bold text-[#17211b] dark:text-[#f4f0e8]'>12+</p>
                  <p className='mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#68736c] dark:text-[#a7b0a7]'>Essays</p>
                </div>
                <div className='rounded-2xl bg-[#f0ede5] p-3 text-center dark:bg-[#27372f]'>
                  <p className='text-2xl font-bold text-[#17211b] dark:text-[#f4f0e8]'>48h</p>
                  <p className='mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#68736c] dark:text-[#a7b0a7]'>Writing</p>
                </div>
                <div className='rounded-2xl bg-[#fbe7df] p-3 text-center dark:bg-[#3b2d2c]'>
                  <p className='text-2xl font-bold text-[#17211b] dark:text-[#f4f0e8]'>4.9</p>
                  <p className='mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#68736c] dark:text-[#a7b0a7]'>Reader rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-[#dbe7d8] px-5 py-8 dark:bg-[#304438] sm:px-8'>
        <CallToAction />
      </div>

      <div className='mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24'>
        <div className='mb-8 grid gap-4 md:grid-cols-3'>
          {[
            { title: 'Sharper product thinking', text: 'Practical ideas for building digital experiences people actually enjoy.' },
            { title: 'Clear coding notes', text: 'JavaScript patterns and frontend decisions explained without the fluff.' },
            { title: 'A calmer reading flow', text: 'Designed to be readable, focused, and easy to revisit later.' },
          ].map((item) => (
            <div key={item.title} className='rounded-2xl border border-[#dedfd6] bg-[#fffdf9] p-5 shadow-[var(--shadow-soft)] dark:border-[#3c4a40] dark:bg-[#202d25]'>
              <p className='eyebrow mb-3'>Why readers stay</p>
              <h3 className='font-display text-2xl font-semibold text-[#17211b] dark:text-[#f4f0e8]'>{item.title}</h3>
              <p className='mt-3 text-sm leading-6 text-[#68736c] dark:text-[#a7b0a7]'>{item.text}</p>
            </div>
          ))}
        </div>

        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div className='flex items-end justify-between gap-4 border-b border-[#dedfd6] pb-5 dark:border-[#3c4a40]'>
              <div>
                <p className='eyebrow mb-2'>From the journal</p>
                <h2 className='font-display text-3xl font-semibold text-[#17211b] dark:text-[#f4f0e8] sm:text-4xl'>Recent posts</h2>
              </div>
              <Link to='/search' className='hidden text-sm font-bold text-[#dc6047] hover:text-[#b84b37] sm:block'>
                View archive -&gt;
              </Link>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            <Link to='/search' className='text-center text-sm font-bold text-[#dc6047] hover:text-[#b84b37] sm:hidden'>
              View archive -&gt;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
