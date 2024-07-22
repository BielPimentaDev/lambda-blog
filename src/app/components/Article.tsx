import React from 'react';
import AritlceImage from '/public/article-image.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Article() {
	return (
		<Link href='/post' className='cursor-pointer'>
			<article className='p-2 bg-white w-full flex-col flex gap-2'>
				<Image
					src={AritlceImage}
					alt=''
					className='w-full h-54 brightness-90'
				/>

				<p className='inline-flex text-sm text-gray-500 items-center text-primary-600  hover:underline'>
					20.08.22
				</p>

				<h2 className=' text-2xl font-bold tracking-tight text-gray-900 '>
					<a>How to quic deploy a static website</a>
				</h2>
				<p className=' font-light text-gray-500  w-full text-sm'>
					Progressively incentivize cooperative syste through technically sound
					functionalities. Credibly productivate seamless{' '}
				</p>
				<div className='flex justify-between items-center  text-sm text-end mt-2 '>
					<p className='text-gray-500 font-semibold'>Guilherme Pimenta</p>
					<a
						href='#'
						className='text-black font-bold inline-flex items-center text-primary-600  hover:underline'>
						Read more
						{/* <svg
						className='ml-2 w-4 h-4'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clip-rule='evenodd'></path>
							</svg> */}
					</a>
				</div>
			</article>
		</Link>
	);
}
