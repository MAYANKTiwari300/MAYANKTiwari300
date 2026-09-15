import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className='group flex h-full flex-col overflow-hidden rounded-2xl border border-[#dedfd6] bg-[#fffdf9] transition-all duration-300 hover:-translate-y-1 hover:border-[#dc6047] hover:shadow-[0_18px_40px_rgba(23,33,27,0.10)] dark:border-[#3c4a40] dark:bg-[#202d25]'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt=''
          className='aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </Link>
      <div className='flex flex-1 flex-col gap-3 p-5'>
        <span className='eyebrow'>{post.category}</span>
        <p className='font-display line-clamp-2 text-2xl font-semibold leading-tight text-[#17211b] dark:text-[#f4f0e8]'>{post.title}</p>
        <Link
          to={`/post/${post.slug}`}
          className='mt-auto pt-4 text-sm font-bold text-[#dc6047] transition-colors hover:text-[#b84b37]'
        >
          Read article -&gt;
        </Link>
      </div>
    </article>
  );
}
