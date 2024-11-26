// const productData = require('../models/productModel');
// const productSchema = require('../models/productModel');
const Product = require('../models/productModel');

// const getPopularProducts = async () => {
//     try {
//         // Fetch all recommended products from the database
//         const data = await productSchema.find({});
//         return data;
//     } catch (error) {
//         throw new Error('Error fetching recommendations: ' + error.message);
//     }
// };


// // Service để lấy danh sách sản phẩm phổ biến
// const getTestPopularProducts = () => {
//     return productData;
// };

//   //test api
//   module.exports = {
//     getTestPopularProducts,
//     getPopularProducts,
// };


//api
class ProductService {
  // Tạo sản phẩm mới
  async createProduct(data) {
    const product = new Product(data); // Sử dụng biến khác để tránh trùng tên
    return await product.save(); // Lưu sản phẩm vào cơ sở dữ liệu
  }

  // Lấy danh sách tất cả sản phẩm
  async getAllProducts() {
    return await Product.find(); // Truy vấn tất cả sản phẩm
  }

  // Lấy thông tin sản phẩm theo ID
  async getProductById(id) {
    return await Product.findById(id); // Tìm sản phẩm theo ID
  }

  // Cập nhật thông tin sản phẩm
  async updateProduct(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true }); // Cập nhật và trả về sản phẩm mới
  }

  // Xóa sản phẩm theo ID
  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id); // Xóa sản phẩm
  }
}

// Xuất đối tượng ProductService
module.exports = new ProductService();
