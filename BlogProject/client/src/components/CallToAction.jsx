import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] border border-[#b9cdb6] bg-[#fffdf9] p-6 shadow-[var(--shadow-soft)] dark:border-[#4c6654] dark:bg-[#202d25] sm:flex-row sm:p-10'>
      <div className='flex-1 text-center sm:text-left'>
        <p className='eyebrow mb-3'>Build by doing</p>
        <h2 className='font-display text-3xl font-semibold leading-tight text-[#17211b] dark:text-[#f4f0e8] sm:text-4xl'>
          Want to sharpen your frontend instincts?
        </h2>
        <p className='my-4 max-w-lg text-sm leading-6 text-[#68736c] dark:text-[#a7b0a7]'>
          Explore a collection of small, satisfying projects that turn theory into confident product thinking.
        </p>
        <Link to='/projects'>
          <Button className='mt-2 border-0 bg-[#dc6047] text-white hover:bg-[#b84b37]'>
            View Projects
          </Button>
        </Link>
      </div>

      <div className='hidden w-[42%] overflow-hidden rounded-2xl border border-[#dfe9dc] bg-[#f3f7f0] p-3 sm:block dark:border-[#3d4f43] dark:bg-[#18261f]'>
        <div className='rounded-2xl bg-[#17211b] p-4 text-left text-white dark:bg-[#111c18]'>
          <div className='mb-4 flex items-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-[#f08064]' />
            <span className='h-3 w-3 rounded-full bg-[#dbe7d8]' />
            <span className='h-3 w-3 rounded-full bg-[#f4f0e8]' />
          </div>
          <div className='space-y-3'>
            <div className='h-2.5 w-2/3 rounded-full bg-[#f08064]/90' />
            <div className='h-2.5 w-full rounded-full bg-white/20' />
            <div className='h-2.5 w-5/6 rounded-full bg-white/15' />
            <div className='h-20 rounded-xl bg-gradient-to-br from-[#f08064]/40 via-[#f4f0e8]/10 to-[#dbe7d8]/10 p-4'>
              <div className='flex h-full items-end justify-between'>
                <div>
                  <p className='text-xs uppercase tracking-[0.18em] text-[#f4f0e8]/70'>UI idea</p>
                  <p className='mt-2 text-lg font-semibold'>Minimal motion</p>
                </div>
                <div className='rounded-full border border-white/20 px-2 py-1 text-xs text-white'>+12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}