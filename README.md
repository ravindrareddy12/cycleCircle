# cycleCircle
# Clone the repository:
  git clone https://github.com/ravindrareddy12/cycleCircle
 # cd cycleCircle
    npm install
# Run the application:
     npm run dev
# Running Host
    http://localhost:3000
# The backend application exposes the following endpoints:
          POST /products: Add a new product to the catalog.
# Postman Tetsed image Adding product             ![image](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/6414a2bc-c9f3-4210-b240-af6573b7e33a)

          POST /warehouses: Add a new warehouse.
# Postman Tetsed image Adding warehouse      ![image](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/15aa2222-7878-44aa-b81a-5412cb17d295)

          POST /stock: Add stock to a warehouse.
 # Postman Tetsed image Adding stock       ![Screenshot 2023-07-07 200714](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/8ec56361-adc8-48e3-9e80-4a624b5bc8d0)

          POST /states: Add a new state.
# Postman Tetsed image Adding new state         ![Screenshot 2023-07-07 200857](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/f73f79f1-2374-4c6d-86c1-f5b9ba9d4e7d)

          GET /states: Retrieve a list of states and their warehouse information.
# Postman Tetsed image info about sates        ![Screenshot 2023-07-07 201002](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/7f2a88d8-3c41-4aea-a915-00fef6ec7079)

          
          
          GET /products: Retrieve a list of all products in the catalog.
# Postman Tetsed image info about products ![Screenshot 2023-07-07 201048](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/ec6e1276-5ac2-4054-ba3f-41376012f698)

          GET /warehouses: Retrieve a list of all warehouses.
 # Postman Tetsed image info about warehouses      ![Screenshot 2023-07-07 201125](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/775b091d-a302-4006-9fab-28c5bf632648)
            
          GET /warehouses/:warehouseId: Retrieve information about a specific warehouse.

  # Postman Tetsed image warehousesById        ![Screenshot 2023-07-07 201802](https://github.com/ravindrareddy12/cycleCircle/assets/60658927/3edefbbc-a9c4-4d57-b33c-aef8d3fd574a)

          POST /orders: Process an order.
          Refer to the source code or inline comments for detailed request and response structures for each endpoint.
            
