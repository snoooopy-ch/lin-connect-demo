import SectionTitle from "../../atoms/section-title";
import LinkButton from "../../molecules/linkbutton"
import Item from '../../molecules/item';
import { Align } from "../../../models"
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.scss";
import 'swiper/css';

const Items: React.FC = () => {
	return (
		<section className="items">
			<SectionTitle 
				title='Items'
			/>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
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