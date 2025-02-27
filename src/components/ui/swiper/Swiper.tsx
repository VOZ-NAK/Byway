import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { ISwiper } from './swiper.interface'
import styles from './swiper.module.scss'

const Swiper = <T,>({ items, renderItem }: ISwiper<T>): React.ReactNode => {
	return (
		<SwiperLib
			className={styles.swiper}
			slidesPerView={4}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				630: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				930: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1240: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				1288: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			}}
		>
			{items.map((item, index) => (
				<SwiperSlide className={styles.swiperSlide} key={index}>
					{renderItem(item)}
				</SwiperSlide>
			))}
		</SwiperLib>
	)
}

export default Swiper

// Swiper component for displaying a list of items in a carousel format.
//
// Props:
// - items: an array of items to be displayed in the swiper
// - renderItem: a function that takes an item and returns a React node for rendering
//
// Example usage:
// <Swiper
//   items={courses}
//   renderItem={(course) => (
//     <div>
//       <img src={course.cover} alt={course.courseName} />
//       <h3>{course.courseName}</h3>
//       <p>{course.author}</p>
//       <p>${course.price}</p>
//     </div>
//   )}
// />
