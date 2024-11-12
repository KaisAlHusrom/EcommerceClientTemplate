import LandpageCarousel from '@/components/landpageCarousel/landpageCarouse';
import CategoryCard from './categoryCard';
import ICategory from '@/interfaces/ICategory';

const categories: ICategory[] = [
    {
        id: 1,
        name: 'Electronics',
        description: 'Devices and gadgets for home and personal use',
        icon: 'computer',
        image: 'https://picsum.photos/200/200?random=6',
        children: [
            {
                id: 2,
                name: 'Smartphones',
                description: 'Mobile devices for communication and computing',
                icon: 'smartphone',
                image: 'smartphones.jpg',
            },
            {
                id: 3,
                name: 'Laptops',
                description: 'Portable computers for work and entertainment',
                icon: 'laptop',
                image: 'laptops.jpg',
            },
        ],
    },
    {
        id: 4,
        name: 'Clothing',
        description: 'Apparel for all ages and occasions',
        icon: 'shirt',
        image: 'https://picsum.photos/200/200?random=5',
        children: [
            {
                id: 5,
                name: "Men's Wear",
                description: 'Clothing items for men',
                icon: 'man',
                image: 'mens_wear.jpg',
            },
            {
                id: 6,
                name: "Women's Wear",
                description: 'Clothing items for women',
                icon: 'woman',
                image: 'womens_wear.jpg',
            },
        ],
    },
    {
        id: 7,
        name: 'Books',
        description: 'Literary works across various genres',
        icon: 'book',
        image: 'https://picsum.photos/200/200?random=4',
    },
    {
        id: 8,
        name: 'Home & Garden',
        description: 'Products for home improvement and gardening',
        icon: 'home',
        image: 'https://picsum.photos/200/200?random=3',
    },
    {
        id: 9,
        name: 'Sports & Outdoors',
        description: 'Equipment and gear for sports and outdoor activities',
        icon: 'directions_run',
        image: 'https://picsum.photos/200/200?random=2',
    },
    {
        id: 10,
        name: 'Beauty & Personal Care',
        description: 'Products for personal grooming and beauty',
        icon: 'face',
        image: 'https://picsum.photos/200/200?random=1',
    },
    {
        id: 11,
        name: 'Beauty & Personal Care',
        description: 'Products for personal grooming and beauty',
        icon: 'face',
        image: 'https://picsum.photos/200/200?random=11',
    },
    {
        id: 12,
        name: 'Beauty & Personal Care',
        description: 'Products for personal grooming and beauty',
        icon: 'face',
        image: 'https://picsum.photos/200/200?random=12',
    },
];

const CategoriesSection = () => {
    return (
        <LandpageCarousel
            data={categories}
            title='Populer Categories'
            autoplaying
            itemComponent={CategoryCard}
            itemClassname='basis-auto xs:basis-1/2 sm:basis-1/4 lg:basis-1/6'
            container={false}
            containerClassname='w-full py-24'
        />
    );
};

export default CategoriesSection;
