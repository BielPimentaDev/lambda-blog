import Image from 'next/image';
import React from 'react';
import LogoImg from '/public/logo.png';

export default function Logo() {
	return (
		<a className='flex items-center'>
			<Image src={LogoImg} alt='' width={25} />
			<span className='self-center text-xl  ml-2 font-semibold whitespace-nowrap '>
				Lambda Blog
			</span>
		</a>
	);
}
