// init.js
db = connect("mongodb://localhost:27017/sales_db");

// Create collections with the required schema
db.createCollection("customer_details");
db.createCollection("interactions");
db.createCollection("product_table");

// Optionally, you can insert some initial data into the collections
db.customer_details.insertMany([
    {
        customer_id: "1",
        age: 30,
        gender: "Male",
        item_purchased: "Laptop",
        category: "Electronics",
        purchase_amount_usd: 1200.00,
        location: "New York",
        size: "N/A",
        color: "Black",
        season: "Summer",
        review_rating: 4.5,
        subscription_status: "Active",
        shipping_type: "Standard",
        discount_applied: "Yes",
        promo_code_used: "SUMMER21",
        previous_purchases: 5,
        payment_method: "Credit Card",
        frequency_of_purchases: "Monthly"
    },
    {
        customer_id: "2",
        age: 28,
        gender: "Female",
        item_purchased: "Dress",
        category: "Apparel",
        purchase_amount_usd: 80.00,
        location: "Los Angeles",
        size: "M",
        color: "Red",
        season: "Spring",
        review_rating: 4.0,
        subscription_status: "Inactive",
        shipping_type: "Express",
        discount_applied: "No",
        promo_code_used: "N/A",
        previous_purchases: 2,
        payment_method: "PayPal",
        frequency_of_purchases: "Quarterly"
    }
]);

db.interactions.insertMany([
    {
        user_id: "1",
        product_id: "LAP123",
        interaction_type: "view",
        time_stamp: "2024-06-10T14:00:00Z"
    },
    {
        user_id: "2",
        product_id: "DRE456",
        interaction_type: "purchase",
        time_stamp: "2024-06-11T16:30:00Z"
    }
]);

db.product_table.insertMany([
    {
        uniqe_id: "LAP123",
        product_name: "Laptop",
        brand_name: "TechBrand",
        asin: "B08XYZ123",
        category: "Electronics",
        upc_ean_code: "123456789012",
        list_price: "1500.00",
        selling_price: "1200.00",
        quantity: "50",
        model_number: "TB-123",
        about_product: "A high-performance laptop.",
        product_specification: "16GB RAM, 512GB SSD",
        technical_details: "Intel i7 Processor",
        shipping_weight: "5 lbs",
        product_dimensions: "15 x 10 x 1 inches",
        image: "http://example.com/laptop.jpg",
        variants: "Color: Black, Silver",
        sku: "LAP123-456",
        product_url: "http://example.com/laptop",
        stock: "Available",
        product_details: "Detailed description of the product.",
        dimensions: "15 x 10 x 1 inches",
        color: "Black",
        ingredients: "N/A",
        direction_to_use: "N/A",
        is_amazon_seller: "Yes",
        size_quantity_variant: "N/A",
        product_description: "This is a high-performance laptop suitable for all purposes."
    },
    {
        uniqe_id: "DRE456",
        product_name: "Dress",
        brand_name: "FashionBrand",
        asin: "B08ABC456",
        category: "Apparel",
        upc_ean_code: "987654321098",
        list_price: "100.00",
        selling_price: "80.00",
        quantity: "100",
        model_number: "FB-456",
        about_product: "A stylish summer dress.",
        product_specification: "Cotton, Medium Size",
        technical_details: "Machine washable",
        shipping_weight: "1 lb",
        product_dimensions: "N/A",
        image: "http://example.com/dress.jpg",
        variants: "Size: S, M, L; Color: Red, Blue",
        sku: "DRE456-789",
        product_url: "http://example.com/dress",
        stock: "Available",
        product_details: "Detailed description of the dress.",
        dimensions: "N/A",
        color: "Red",
        ingredients: "N/A",
        direction_to_use: "Machine wash cold",
        is_amazon_seller: "No",
        size_quantity_variant: "Size: M",
        product_description: "This is a stylish and comfortable summer dress."
    }
]);
