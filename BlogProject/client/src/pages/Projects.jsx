import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='page-shell min-h-screen px-5 py-16 sm:px-8 lg:py-24'>
      <div className='mx-auto flex max-w-4xl flex-col items-center gap-6 text-center'>
      <p className='eyebrow'>A hands-on corner</p>
      <h1 className='font-display text-5xl font-semibold text-[#17211b] dark:text-[#f4f0e8] sm:text-6xl'>Projects</h1>
      <p className='max-w-xl text-base leading-7 text-[#68736c] dark:text-[#a7b0a7]'>
        Build fun and engaging projects while learning HTML, CSS, and
        JavaScript!
      </p>
      <div className='mt-6 w-full text-left'><CallToAction /></div>
      </div>
    </div>
  );
}
