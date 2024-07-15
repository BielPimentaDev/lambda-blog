import Image from 'next/image';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroImage from '/public/logo.png';
import Article from './components/Article';

export default function Home() {
	return (
		<main className='max-w-screen-xl mx-auto px-6 bg-white '>
			<section className='bg-white dark:bg-gray-900'>
				<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
					<div className='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
							Find out whats happening!
						</h1>
						<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Recusandae esse eaque ex explicabo minima adipisci nisi laborum
							adipisci
						</p>
						<div className='flex text-sm'>
							<a
								href='#'
								className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'>
								Get started
								<svg
									className='w-5 h-5 ml-2 -mr-1'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clip-rule='evenodd'></path>
								</svg>
							</a>
							<a
								href='#'
								className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
								Speak to Sales
							</a>
						</div>
					</div>
					<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
						<Image src={HeroImage} alt='mockup' className='w-[350px]' />
					</div>
				</div>
			</section>

			<section className='bg-white dark:bg-gray-900'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'>
							Check our posts
						</h2>
						<p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
							architecto laudantium natus aspernatur cum a corrupti ipsum assu
						</p>
						<a
							href='#'
							className='text-white p-3 text-base bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
							Free trial for 30 days
						</a>
					</div>
				</div>
			</section>
			<section className='bg-white dark:bg-gray-900'>
				<div className='flex justify-between items-center pr-6'>
					<h3 className='mb-4 text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
						Our Latest Posts
					</h3>
					<p className='text-gray-500'>View all</p>
				</div>
				<div className='grid lg:grid-cols-4 gap-x-2 gap-y-8'>
					<Article />
					<Article />
					<Article />
					<Article />
					<Article />
				</div>
			</section>
		</main>
	);
}
