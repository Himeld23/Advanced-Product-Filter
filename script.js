let filterbtn = document.getElementById("filter-btn");
let maxprice = document.getElementById("max-price");
let productlist = document.getElementById("product-list");
let brands = document.getElementById("brand") ;


let products = [
    {brand : "Adidas" , price : "160" , img :"https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Nike" , price : "210" , img :"https://img.freepik.com/premium-vector/orange-shoe-icons-vector-illustrations_835895-8360.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Puma" , price : "90" , img :"https://img.freepik.com/free-vector/blue-tennis-shoes-sport-icon_18591-82518.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Converse" , price : "120" , img :"https://img.freepik.com/premium-vector/shoes-vans-old-skool-shoe-vector-image-illustration_776624-56.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Reebok" , price : "75" , img :"https://img.freepik.com/premium-vector/baby-shoes_135595-91003.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Khadims" , price : "34" , img :"https://img.freepik.com/premium-vector/brown-shoe-with-brown-sole-blue-stripe_272293-2521.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Adidas" , price : "130" , img :"https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Nike" , price : "110" , img :"https://img.freepik.com/premium-vector/orange-shoe-icons-vector-illustrations_835895-8360.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Puma" , price : "180" , img :"https://img.freepik.com/free-vector/blue-tennis-shoes-sport-icon_18591-82518.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Converse" , price : "100" , img :"https://img.freepik.com/premium-vector/shoes-vans-old-skool-shoe-vector-image-illustration_776624-56.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Reebok" , price : "105" , img :"https://img.freepik.com/premium-vector/baby-shoes_135595-91003.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"},
    {brand : "Khadims" , price : "24" , img :"https://img.freepik.com/premium-vector/brown-shoe-with-brown-sole-blue-stripe_272293-2521.jpg?uid=R153296725&ga=GA1.1.1729034354.1721123793&semt=ais_hybrid"}
] 

function displayproducts(productarray) {

    productlist.innerHTML = "";


    productarray.forEach(product => {
        let productcard = `
            <div class="product-card">
                <img src="${product.img}" >
                <div class="product-name">${product.brand}</div>
                <div class="product-price">$${product.price}</div>
                        <button id="wishlist-btn">
        <i class="wishlist-icon fa fa-heart"></i> Add to Wishlist
            </button>
    </div>
        `;
        productlist.innerHTML += productcard; 
    });
}

filterbtn.addEventListener("click", () => {
    let selectedbrands = [];
    let checkbox = document.querySelectorAll('input[name="brand"]:checked');
    checkbox.forEach(check => {
        selectedbrands.push(check.value);
    });

    let prices = parseFloat(maxprice.value);
    
    let filteredprice = products.filter(product => {
        return (selectedbrands.includes("all") || selectedbrands.includes(product.brand)) && 
               (!prices || product.price <= prices);
    });

    let warningtext = document.querySelector(".warning_text");

    if (filteredprice.length === 0) {
        warningtext.style.display = "block";
    } else { 
        warningtext.style.display = "none";
    }

    displayproducts(filteredprice);
});

// Ensure this is outside the event listener
displayproducts(products);

function wishlistbtn() {
    let wishlistButtons = document.querySelectorAll("#wishlist-btn");

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.textContent.includes("Add to Wishlist")) {
                this.innerHTML = `<i class="wishlist-icon fa fa-heart"></i> Added to Wishlist`;
                this.style.color = "red"; // Optional: Change color to indicate selection
            } else {
                this.innerHTML = `<i class="wishlist-icon fa fa-heart"></i> Add to Wishlist`;
                this.style.color = ""; // Reset color
            }
        });
    });
}

// Call the function after products are displayed
wishlistbtn();

