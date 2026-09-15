export default function About() {
  return (
    <div className='page-shell min-h-screen px-5 py-16 sm:px-8 lg:py-24'>
      <div className='mx-auto max-w-3xl'>
        <div>
          <p className='eyebrow mb-4'>A note from the editor</p>
          <h1 className='font-display max-w-2xl text-5xl font-semibold leading-tight text-[#17211b] dark:text-[#f4f0e8] sm:text-6xl'>
            About Mayank's Blogify
          </h1>
          <div className='mt-10 flex max-w-2xl flex-col gap-6 text-base leading-8 text-[#68736c] dark:text-[#a7b0a7] sm:text-lg'>
            <p className='border-l-2 border-[#dc6047] pl-5 text-xl leading-8 text-[#17211b] dark:text-[#f4f0e8]'>
              Welcome to Mayank's Blogify! This blog is a personal project for
              sharing thoughts and ideas about technology, coding, and
              everything in between.
            </p>

            <p>
              On this blog, you'll find various articles on topics
              such as web development, software engineering, and programming
              languages. Mayank is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
