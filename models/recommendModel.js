const mongoose = require('mongoose');

const recommendSchema = new mongoose.Schema({
    total_size: { type: Number, required: true },
    type_id: { type: Number, required: true },
    offset: { type: Number, required: true },
    products: [
        {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            description: { type: String, required: true },
            price: { type: Number, required: true },
            stars: { type: Number, required: true },
            img: { type: String, required: true },
            location: { type: String, required: true },
            created_at: { type: Date, required: true },
            updated_at: { type: Date, required: true },
            type_id: { type: Number, required: true },
        },
    ],
});

module.exports = mongoose.model('Recommend', recommendSchema);

const seedData = {
    total_size: 5,
    type_id: 3,
    offset: 0,
    products: [
        {
            id: 1,
            name: 'Sushi',
            description: 'Công thức: Chuẩn bị các nguyên liệu như cơm sushi, rong biển, và cá hồi.',
            price: 34,
            stars: 4,
            img: '1732541540958.png',
            location: 'Japan',
            created_at: '2021-11-17 10:16:31',
            updated_at: '2024-06-03 14:09:13',
            type_id: 3,
        },
        {
            id: 2,
            name: 'Pizza Margherita',
            description: 'Công thức: Đế bánh mỏng, sốt cà chua, phô mai mozzarella, và lá basil tươi.',
            price: 20,
            stars: 5,
            img: '1732584531787.png',
            location: 'Italy',
            created_at: '2021-11-18 09:45:20',
            updated_at: '2024-06-04 11:23:45',
            type_id: 3,
        },
        {
            id: 3,
            name: 'Pho Bo',
            description: 'Công thức: Phở bò truyền thống với nước dùng thơm ngon và thịt bò mềm.',
            price: 15,
            stars: 5,
            img: '1732584543307.png',
            location: 'Vietnam',
            created_at: '2021-11-19 08:30:15',
            updated_at: '2024-06-05 13:12:30',
            type_id: 3,
        },
        {
            id: 4,
            name: 'Tacos',
            description: 'Công thức: Bánh taco giòn, thịt bò, rau sống và nước sốt guacamole.',
            price: 12,
            stars: 4,
            img: '1732584549789.png',
            location: 'Mexico',
            created_at: '2021-11-20 12:00:00',
            updated_at: '2024-06-06 10:45:00',
            type_id: 3,
        },
        {
            id: 5,
            name: 'Croissant',
            description: 'Công thức: Bánh croissant bơ thơm ngon với lớp vỏ giòn tan.',
            price: 5,
            stars: 5,
            img: '1732584562093.png',
            location: 'France',
            created_at: '2021-11-21 15:20:10',
            updated_at: '2024-06-07 09:00:00',
            type_id: 3,
        },
    ],
};



module.exports = seedData;


