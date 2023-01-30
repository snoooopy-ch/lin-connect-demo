import SectionTitle from "../../atoms/section-title";
import LinkButton from "../../molecules/linkbutton"
import Item from '../../molecules/item';
import { Align } from "../../../models"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Good, { createDummyGood } from "../../../models/good";

const Items: React.FC = () => {
	const recommends = Array.from(Array(6).keys()).map(() => createDummyGood());

	return (
		<section className="items-section">
			<div className="items-section-container">
				<div className="items-section-title">
					<SectionTitle 
						title='Items'
					/>
				</div>
				
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					breakpoints={{
						414: {
							slidesPerView: 2,
							spaceBetween: 4
						},
						767: {
							slidesPerView: 3,
							spaceBetween: 29.5,
						}
					}}
					navigation
					pagination={{ 
						clickable: true
					}}
				>
					{recommends.map((recommend: Good, i: number) => {
						return (
							<SwiperSlide
								key={i}
								>
								<Item 
									image={recommend.img_url}
									title={recommend.title}
									price={recommend.price}
								/>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<div className="items-section-linkbtn">
					<LinkButton
						title='View more→'
						link='/'
					/>
				</div>
			</div>
		</section>
	)
};

export default Items;