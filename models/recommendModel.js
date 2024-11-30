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
            description: 'Công thức:Chuẩn bị các nguyên liệu như cơm sushi, hải sản tươi, rau sống, rong biển, và gia vị như giấm gạo, đường, và muối.Cuốn cơm sushi thành hình trụ nhỏ, đặt một miếng hải sản lên trên, thêm rong biển và rau sống, cuốn lại và cắt thành từng miếng nhỏ.Dùng sốt soya và wasabi kèm theo khi ăn.Giới thiệu:Sushi là một trong những món ăn phổ biến và đặc trưng của ẩm thực Nhật Bản. Được làm từ cơm sushi được pha với giấm gạo, sushi thường được kết hợp với các loại hải sản như cá hồi, tôm, hoặc cá ngừ và được thưởng thức kèm với sốt soya và wasabi.Enjoy these flavors any time of day.',
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
            description: 'Công thức:Chuẩn bị bột làm bánh pizza, sốt cà chua, phô mai mozzarella, lá cọ rau basil, và dầu olive.Làm nhuyễn bột và nước cho đến khi mềm và dẻo, sau đó trải bột ra thành hình tròn.Thêm sốt cà chua, phô mai, và rau basil lên trên bột pizza và nướng trong lò nhiệt độ cao cho đến khi phô mai tan chảy và bề mặt pizza vàng ươm.Giới thiệu:Pizza Margherita là một trong những loại pizza cổ điển nhất của Ý. Nó được làm từ bột pizza đặc trưng, sốt cà chua, phô mai mozzarella và rau basil, tạo nên một hương vị đơn giản nhưng đậm đà.Bitter oranges are often used in Caribbean ',
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
            description: 'Công thức:Nấu nước dùng từ xương gà hoặc xương bò, thêm gia vị như hành, gừng, và đinh hương.Chuẩn bị thêm các nguyên liệu như bún phở, thịt bò hoặc gà, rau sống, và gia vị như hành phi, tiêu, và lá ngò.Sắp xếp thịt và rau lên trên bún phở, sau đó đổ nước dùng nóng vào.Giới thiệu:Phở là một món súp truyền thống của Việt Nam, nổi tiếng với hương vị đậm đà và hấp dẫn. Nước dùng thơm ngon, thịt thơm và mềm, cùng với bún mềm và rau sống tươi, tạo nên một trải nghiệm ẩm thực đặc biệt.Commonly used in soups, eaten boiled.',
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
            description: 'Công thức:Nấu nước dùng từ củ hành, tỏi, cà chua, và gia vị như tiêu và hồi.Thêm gạo và các loại thịt như gà, tôm, và mực.Nấu cho đến khi nước dùng hấp thụ hết và gạo chín.Giới thiệu:Paella là một món ăn nổi tiếng của Tây Ban Nha, với hương vị đặc trưng của gạo và các loại thịt và hải sản. Nó thường được nấu trong các dịp lễ và làm từng bữa tiệc trở nên đặc biệt.Amazing food to eat with.',
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


