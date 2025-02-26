import { useState } from 'react';
import { data } from './data';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import minus from './images/icon-minus.svg';
import plus from './images/icon-plus.svg';
import Header from './components/Header';
import Lightbox from './components/Lightbox.js';

function App() {
	const [products] = useState(data);
	const [value, setValue] = useState(0);
	const [amount, setAmount] = useState(0);
	const [slideIndex, setSlideIndex] = useState(1);
	const [showLightbox, setShowLightbox] = useState(false);
	const { mainImage } = products[value];
	const nexSlide = () => {
		if (slideIndex !== products.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === products.length) {
			setSlideIndex(1);
		}
	};
	const previousSilde = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(products.length);
		}
	};
	const handleMinus = () => {
		setAmount(amount - 1);
		if (amount <= 0) setAmount(0);
	};
	const pricePerItem = 125;
	return (
		<>
			<Header
				numberOfItems={amount}
				pricePerItem={pricePerItem}
				setAmount={setAmount}
			/>
			{showLightbox && (
				<Lightbox
					products={products}
					slideIndex={slideIndex}
					nexSlide={nexSlide}
					previousSilde={previousSilde}
					setShowLightbox={setShowLightbox}
				/>
			)}
			<section className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20'>
				<article>
					<div className='lg:hidden'>
						{products.map((item, index) => (
							<div
								key={item}
								className={slideIndex === index + 1 ? 'relative' : 'hidden'}
							>
								<img
									src={item.mainImage}
									alt=''
									className='w-full lg:rounded-2xl cursor-pointer  '
									onClick={() => setShowLightbox(true)}
								/>
								<ul className='lg:hidden'>
									<li>
										<button
											onClick={previousSilde}
											className=' rounded-full bg-white p-5 shadow absolute left-4 top-1/2 -translate-y-1/2'
										>
											<FaChevronLeft />
										</button>
									</li>
									<li>
										<button
											onClick={nexSlide}
											className=' rounded-full bg-white p-5 shadow absolute right-4 top-1/2 -translate-y-1/2'
										>
											<FaChevronRight />
										</button>
									</li>
								</ul>
							</div>
						))}
					</div>

					<div className='hidden lg:block'>
						<img
							src={mainImage}
							alt=''
							className='w-full lg:rounded-2xl cursor-pointer  '
							onClick={() => setShowLightbox(true)}
						/>
					</div>

					<ul className='hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5'>
						{products.map((item, index) => (
							<li
								key={item.id}
								onClick={() => setValue(index)}
								className={`${
									index === value && 'border-2 border-orange-400 opacity-80'
								} border-2  rounded-2xl overflow-hidden cursor-pointer`}
							>
								<img
									src={item.thumbnail}
									alt=''
									className='w-20'
								/>
							</li>
						))}
					</ul>
				</article>
				<article className='px-8 pb-10'>
					<h2 className='bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10'>
						Snaker Company
					</h2>
					<h1 className='text-slate-900 mb-10 font-bold texte-3xl lg:text-4xl'>
						Fall Limited Edition Sneakers
					</h1>
					<p className='text-slate-600 mb-1o leading-relaxed'>
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
					<div className='flex flex-wrap item-center justify-between lg:flex-col lg:items-start lg:gap-2'>
						<ul className='flex items-center gap-5'>
							<li className='text-slate-900 font-bold text-2xl'>
								{`$${pricePerItem}.00`}
							</li>
							<li className='bg-black  py-1 px-2 text-white tracking-wide text-sm font-bold inline-block rounded shadow'>
								50%
							</li>
							<p className='text-slate-600 text-sm'>
								<s>{`$${pricePerItem * 2}.00`}</s>
							</p>
						</ul>
					</div>
					<div className='mt-10 lg:flex items-center justify-between gap-2'>
						<ul className='flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1'>
							<li
								onClick={handleMinus}
								className='cursor-pointer'
							>
								<img
									src={minus}
									alt=''
								/>
							</li>
							<li>{amount} </li>
							<li
								onClick={() => setAmount(amount + 1)}
								className='cursor-pointer'
							>
								<img
									src={plus}
									alt=''
								/>{' '}
							</li>
						</ul>
						<div className='lg:flex-1'>
							<button className='flex items-center justify-center gap-4 bg-orange-500 text-white font-blod rounded-lg mt-5  py-2 px-4 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200'>
								<AiOutlineShoppingCart /> Add to cart
							</button>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}

export default App;