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

const Items: React.FC = () => {
	return (
		<section className="items-section">
			<SectionTitle 
				title='Items'
				align={Align.CENTER}
			/>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={29.5}
				slidesPerView={3}
				navigation
	      pagination={{ clickable: true }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<Item 
						image={'/assets/images/item_img.png'}
						title={'ゆったりしたセーター'}
						price={10000}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Item 
						image={'/assets/images/item_img.png'}
						title={'ゆったりしたセーター'}
						price={10000}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Item 
						image={'/assets/images/item_img.png'}
						title={'ゆったりしたセーター'}
						price={10000}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Item 
						image={'/assets/images/item_img.png'}
						title={'ゆったりしたセーター'}
						price={10000}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Item 
						image={'/assets/images/item_img.png'}
						title={'ゆったりしたセーター'}
						price={10000}
					/>
				</SwiperSlide>
			</Swiper>
			<LinkButton
				title='View more→'
				link='/'
				align={Align.CENTER}
			/>
		</section>
	)
};

export default Items;