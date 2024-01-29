import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import Carousel from "nuka-carousel";
import { useState } from "react";
// import LinesEllipsis from "react-lines-ellipsis";

type CardProps = {
	category?: {
		creationAt?: Date;
		id?: number;
		image?: string;
		name?: string;
		updatedAt?: string;
	};
	id: number;
	images: any[];
	price: number;
	title: string;
	desription?: string;
};

function Card({ category, title, desription, images, price }: CardProps) {
	let [amount, setAmount] = useState<number>(1);

	let [modalState, setModal] = useState<boolean>(false);
	return (
		<div className="card">
			<div className="img_cont">
				<Carousel
					wrapAround={true}
					renderCenterLeftControls={({ previousSlide }) => {
						return (
							<div onClick={previousSlide} className="btn">
								<IconArrowLeft />
							</div>
						);
					}}
					renderCenterRightControls={({ nextSlide }) => {
						return (
							<div onClick={nextSlide} className="btn">
								<IconArrowRight />
							</div>
						);
					}}
				>
					{images.map((imag) => {
						return <img loading="lazy" src={imag} key={imag} alt="" />;
					})}
				</Carousel>
			</div>

			<div className="card_title">{title}</div>

			<div className="description">{desription}</div>

			<div className="category">{category?.name}</div>

			<div id="ttt" className="card_info">
				<div className="price">
					$<span>{price}</span>
				</div>

				<button
					className="to_cart"
					onClick={() => {
						setModal(true);
					}}
				>
					Add to cart
				</button>
			</div>
			<div className={`cart_dialog ${modalState == false ? "inactive" : ""}`}>
				<div className="content">
					<div className="amount">Amount to add</div>
					<div className="range ">
						<button
							onClick={() => {
								if (amount > 1) {
									setAmount(--amount);
								}
							}}
						>
							-
						</button>
						{amount}
						<button
							onClick={() => {
								setAmount(++amount);
							}}
						>
							+
						</button>
					</div>
					<button className="head">Add to cart</button>
					<span
						className="close"
						onClick={() => {
							setModal(false);
						}}
					>
						<IconX />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
