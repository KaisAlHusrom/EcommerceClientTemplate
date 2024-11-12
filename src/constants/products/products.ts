import IProduct from "@/interfaces/IProduct";

const products: IProduct[] = [
    {
        id: 1,
        name: 'Product 1',
        mainImage: 'https://loremflickr.com/300/300?random=1',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        reviews: [
            {
                id: 1,
                rating: 5,
                comment: 'Product review comment',
                userId: 3,
                productId: 1,
            },
            {
                id: 1,
                rating: 5,
                comment: 'Product review comment',
                userId: 3,
                productId: 1,
            },
            {
                id: 1,
                rating: 5,
                comment: 'Product review comment',
                userId: 3,
                productId: 1,
            },
        ],
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
        images: [
            {
                id: 1,
                imageName: 'https://picsum.photos/300/300?random=100',
                caption: 'Product image description',
            },
            {
                id: 2,
                imageName: 'https://picsum.photos/300/300?random=101',
                caption: 'Product image description',
            },
            {
                id: 3,
                imageName: 'https://picsum.photos/300/300?random=102',
                caption: 'Product image description',
            },
            {
                id: 4,
                imageName: 'https://picsum.photos/300/300?random=103',
                caption: 'Product image description',
            },
            {
                id: 5,
                imageName: 'https://picsum.photos/300/300?random=105',
                caption: 'Product image description',
            },
            {
                id: 6,
                imageName: 'https://picsum.photos/300/300?random=104',
                caption: 'Product image description',
            },
            {
                id: 7,
                imageName: 'https://picsum.photos/300/300?random=107',
                caption: 'Product image description',
            },

        ]
    },
    {
        id: 2,
        name: 'Product 1',
        mainImage: 'https://loremflickr.com/300/300?random=2',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        reviews: [
            {
                id: 2,
                rating: 3,
                comment: 'Product review comment',
                userId: 3,
                productId: 1,
            },
            {
                id: 2,
                rating: 2,
                comment: 'Product review comment',
                userId: 3,
                productId: 1,
            },
            {
                id: 2,
                rating: 1,
                comment: 'Product review comment',
                userId: 3,
                productId: 1,
            },
        ],
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
    {
        id: 3,
        name: 'Product 1',
        mainImage: 'https://loremflickr.com/300/300?random=3',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
    {
        id: 4,
        name: 'Product 1',
        mainImage: 'https://loremflickr.com/300/300?random=4',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
    {
        id: 5,
        name: 'Product 1',
        mainImage: 'https://loremflickr.com/300/300?random=5',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
    {
        id: 5,
        name: 'Product 1',
        mainImage: 'https://picsum.photos/300/300?random=5',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
    {
        id: 5,
        name: 'Product 1',
        mainImage: 'https://picsum.photos/300/300?random=6',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
    {
        id: 5,
        name: 'Product 1',
        mainImage: 'https://picsum.photos/300/300?random=7',
        price: 19.99,
        shortDescription: 'Product short description',
        longDescription: 'Product long description',
        categories: [
            {
                id: 1,
                name: 'Category 1',
                description: 'Category Description',
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Category Description',
            },
        ],
        stockNumber: 10,
    },
];

export default products;