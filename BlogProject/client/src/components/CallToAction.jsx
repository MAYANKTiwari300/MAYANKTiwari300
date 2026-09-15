import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-[#b9cdb6] bg-[#fffdf9] p-6 text-center dark:border-[#4c6654] dark:bg-[#202d25] sm:flex-row sm:p-10 sm:text-left">
      <div className="flex-1">
        <p className="eyebrow mb-3">Build by doing</p>
        <h2 className="font-display text-3xl font-semibold leading-tight text-[#17211b] dark:text-[#f4f0e8] sm:text-4xl">Want to learn more about JavaScript?</h2>
        <p className="my-3 max-w-lg text-sm leading-6 text-[#68736c] dark:text-[#a7b0a7]">
          Explore a collection of small, satisfying projects to sharpen your frontend instincts.
        </p>
        <Button className="mt-3 border-0 bg-[#dc6047] text-white hover:bg-[#b84b37]">
          <a href="/projects">
            View Projects
          </a>
        </Button>
      </div>
      <div className="hidden w-2/5 overflow-hidden rounded-xl sm:block">
        <img className="aspect-[4/3] w-full object-cover" src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" alt="Abstract JavaScript code on a screen" />
      </div>
    </div>
  );
}