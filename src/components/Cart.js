import React from 'react';
import thumbnail from '../images/image-product-1-thumbnail.jpg';
import iconDelete from '../images/icon-delete.svg';

export default function Cart({ numberOfItems, pricePerItem, setAmount }) {
	const text = 'Autumn Limited Edition Sneakers';
	if (numberOfItems === 0)
		return (
			<article className='bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 z-[1000] lg:w-96 lg:left-auto lg:top-20'>
				<h2 className='border-b border-slate-400 font-bold pb-2 mb-8'>Cart</h2>
				<p className='text-slate-600 text-sm'>Your cart is empty</p>
			</article>
		);
	return (
		<article className='bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 z-[1000] lg:w-96 lg:left-auto lg:top-20'>
			<h2 className='border-b border-slate-400 font-bold pb-2 mb-8'>Cart</h2>
			<div className='flex items-center justify-between '>
				<img
					src={thumbnail}
					alt=''
					className='rounded-lg w-14'
				/>
				<ul>
					<li className='text-slate-600 text-sm'>{`${text.substring(
						0,
						23,
					)}...`}</li>
					<li className='text-slate-600 text-sm'>
						{numberOfItems > 1
							? `${numberOfItems} items`
							: `${numberOfItems} item`}{' '}
						<span className='font-bold text-slate-900'>
							{numberOfItems > 1
								? `$${numberOfItems * pricePerItem}.00`
								: `$${numberOfItems * pricePerItem}.00`}
						</span>
					</li>
				</ul>
				<button
					className='cursor-pointer'
					onClick={() => setAmount(numberOfItems - 1)}
				>
					<img
						src={iconDelete}
						alt=''
					/>
				</button>
			</div>
			<button className='bg-orange-500 text-white font-blod rounded-lg mt-5  py-2 px-4 w-full  hover:bg-orange-600 transition-all duration-200'>
				Checkout
			</button>
		</article>
	);
}

