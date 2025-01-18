import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import menu from '../images/icon-menu.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import close from '../images/icon-close.svg';
import Cart from './Cart';

export default function Header({ numberOfItems, pricePerItem, setAmount }) {
	const [isOpen, setIsOpen] = useState(false);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const cartRef = useRef(null);

	const handleClickOutside = (event) => {
		if (cartRef.current && !cartRef.current.contains(event.target)) {
			setCartIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<header className='relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto'>
				<div className='flex items-center justify-start gap-4'>
					<ul className='flex items-center justify-center gap-4'>
						{!isOpen && (
							<li
								onClick={() => setIsOpen(true)}
								className='lg:hidden'
							>
								<img
									src={menu}
									alt=''
									className='cursor-pointer'
								/>
							</li>
						)}
						{isOpen && (
							<li
								onClick={() => setIsOpen(false)}
								className='lg:hidden close'
							>
								<img
									src={close}
									alt=''
									className='cursor-pointer w-4'
								/>
							</li>
						)}
						<li>
							<img
								src={logo}
								alt=''
							/>
						</li>
					</ul>
					<nav className={isOpen && 'open'}>
						<ul>
							<li>Collections</li>
							<li>Men</li>
							<li>Women</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
				<div>
					<ul className='relative flex items-center justify-start gap-4'>
						<li className='relative'>
							<button
								onClick={() => setCartIsOpen(!cartIsOpen)}
								className='relative'
							>
								<AiOutlineShoppingCart className='relative text-2xl text-slate-600' />
								{!numberOfItems ? null : (
									<span className='absolute bg-orange-500 text-white font-bold rounded-full w-6 h-5 flex text-xs items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
										{numberOfItems}
									</span>
								)}
							</button>
						</li>
						<li ref={cartRef}>
							{cartIsOpen && (
								<Cart
									numberOfItems={numberOfItems}
									pricePerItem={pricePerItem}
									setAmount={setAmount}
								/>
							)}
						</li>
						<li>
							<img
								src={avatar}
								className='w-12'
								alt=''
							/>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}