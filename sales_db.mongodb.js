// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'sales_db';

// Create a new database.
use(database);

// Create the customer_details collection.
db.createCollection('customer_details', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customer_id", "age", "gender", "item_purchased", "category", "purchase_amount_usd", "location", "size", "color", "season", "review_rating", "subscription_status", "shipping_type", "discount_applied", "promo_code_used", "previous_purchases", "payment_method", "frequency_of_purchases"],
      properties: {
        customer_id: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          description: "must be an integer and is required"
        },
        gender: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        item_purchased: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        category: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        purchase_amount_usd: {
          bsonType: "double",
          description: "must be a double and is required"
        },
        location: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        size: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        color: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        season: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        review_rating: {
          bsonType: "double",
          description: "must be a double and is required"
        },
        subscription_status: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        shipping_type: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        discount_applied: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        promo_code_used: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        previous_purchases: {
          bsonType: "int",
          description: "must be an integer and is required"
        },
        payment_method: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        frequency_of_purchases: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
});

// Create the interactions collection.
db.createCollection('interactions', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "product_id", "interaction_type", "time_stamp"],
      properties: {
        user_id: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_id: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        interaction_type: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        time_stamp: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
});

// Create the product_table collection.
db.createCollection('product_table', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["uniqe_id", "product_name", "brand_name", "asin", "category", "upc_ean_code", "list_price", "selling_price", "quantity", "model_number", "about_product", "product_specification", "technical_details", "shipping_weight", "product_dimensions", "image", "variants", "sku", "product_url", "stock", "product_details", "dimensions", "color", "ingredients", "direction_to_use", "is_amazon_seller", "size_quantity_variant", "product_description"],
      properties: {
        uniqe_id: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        brand_name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        asin: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        category: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        upc_ean_code: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        list_price: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        selling_price: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        quantity: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        model_number: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        about_product: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_specification: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        technical_details: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        shipping_weight: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_dimensions: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        image: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        variants: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        sku: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_url: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        stock: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_details: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        dimensions: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        color: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        ingredients: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        direction_to_use: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        is_amazon_seller: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        size_quantity_variant: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        product_description: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
});
