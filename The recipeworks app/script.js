/* -------------------------------- */
/* Supplier Registration Logic */
/* -------------------------------- */
const suppliers = []; // Array to store supplier data

document.getElementById("supplierRegistrationForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const supplierName = document.getElementById("supplierName").value.trim();
  const supplierEmail = document.getElementById("supplierEmail").value.trim();
  const supplierProducts = document.getElementById("supplierProducts").value
    .split(",")
    .map((product) => product.trim())
    .filter((product) => product !== ""); // Filter out empty product entries

  if (!supplierName || !supplierEmail || supplierProducts.length === 0) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new supplier object
  const newSupplier = {
    name: supplierName,
    email: supplierEmail,
    products: supplierProducts,
  };

  suppliers.push(newSupplier); // Add supplier to the array
  updateSupplierList(); // Update the display

  document.getElementById("supplierRegistrationForm").reset(); // Clear form fields
  alert("Supplier registered successfully!");
});

// Update Supplier List on Supplier Registration Page
function updateSupplierList() {
  const supplierList = document.getElementById("supplierList");
  if (!supplierList) return; // Ensure the element exists

  supplierList.innerHTML = ""; // Clear existing list

  suppliers.forEach((supplier, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${supplier.name}</strong> (${supplier.email})<br>
      Products: ${supplier.products.join(", ")}
      <button class="btn-secondary" onclick="removeSupplier(${index})">Remove</button>
    `;
    supplierList.appendChild(li);
  });
}

// Remove Supplier
function removeSupplier(index) {
  suppliers.splice(index, 1); // Remove supplier by index
  updateSupplierList(); // Refresh the list
}

/* -------------------------------- */
/* Supplier Dashboard Logic */
/* -------------------------------- */
const products = []; // Array to store products

document.getElementById("addProductForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const productName = document.getElementById("productName").value.trim();
  const productPrice = parseFloat(document.getElementById("productPrice").value);

  if (!productName || isNaN(productPrice) || productPrice <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  // Add the new product to the array
  const newProduct = {
    name: productName,
    price: productPrice.toFixed(2),
  };
  products.push(newProduct);

  updateProductList(); // Update the product display
  document.getElementById("addProductForm").reset(); // Clear form fields
  alert("Product added successfully!");
});

// Update Product List on Supplier Dashboard Page
function updateProductList() {
  const productList = document.getElementById("supplierProductList");
  if (!productList) return; // Ensure the element exists

  productList.innerHTML = ""; // Clear existing list

  products.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong> - £${product.price}
      <button class="btn-secondary" onclick="removeProduct(${index})">Remove</button>
    `;
    productList.appendChild(li);
  });
}

// Remove Product
function removeProduct(index) {
  products.splice(index, 1); // Remove product by index
  updateProductList(); // Refresh the list
}

/* -------------------------------- */
/* Shopping List Logic */
/* -------------------------------- */
const shoppingList = []; // Array to store shopping list items

function addItem() {
  const newItem = document.getElementById("newItem").value.trim();
  if (newItem) {
    shoppingList.push(newItem);
    updateShoppingList();
    document.getElementById("newItem").value = ""; // Clear the input field
  } else {
    alert("Please enter a valid item.");
  }
}

// Update Shopping List Display
function updateShoppingList() {
  const list = document.getElementById("shoppingList");
  if (!list) return; // Ensure the element exists

  list.innerHTML = ""; // Clear existing list
  shoppingList.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <button class="btn-secondary" onclick="removeItem(${index})">Remove</button>
    `;
    list.appendChild(li);
  });
}

// Remove Item from Shopping List
function removeItem(index) {
  shoppingList.splice(index, 1); // Remove item by index
  updateShoppingList(); // Refresh the list
}

/* -------------------------------- */
/* GP Calculator Logic */
/* -------------------------------- */
document.getElementById("gpForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const ingredientCost = parseFloat(document.getElementById("ingredientCost").value);
  const laborCost = parseFloat(document.getElementById("laborCost").value);

  if (isNaN(ingredientCost) || isNaN(laborCost)) {
    alert("Please enter valid costs.");
    return;
  }

  const totalCost = ingredientCost + laborCost;
  const suggestedRetailPrice = totalCost * 1.5; // Example markup
  const grossProfit = suggestedRetailPrice - totalCost;

  alert(`
    Total Cost: £${totalCost.toFixed(2)}
    Suggested Retail Price: £${suggestedRetailPrice.toFixed(2)}
    Gross Profit: £${grossProfit.toFixed(2)}
  `);
});

/* -------------------------------- */
/* Recipe Search Logic */
/* -------------------------------- */
function searchRecipes(query) {
  const recipes = [
    { name: "Flourless Chocolate Torte", category: "Dessert" },
    { name: "Vanilla Cheesecake", category: "Dessert" },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  updateRecipeList(filteredRecipes);
}

function updateRecipeList(recipes) {
  const recipeList = document.getElementById("recipeList");
  if (!recipeList) return; // Ensure the element exists

  recipeList.innerHTML = ""; // Clear the existing list
  recipes.forEach((recipe) => {
    const li = document.createElement("li");
    li.textContent = `${recipe.name} (${recipe.category})`;
    recipeList.appendChild(li);
  });
}

/* -------------------------------- */
/* Navigation Helper */
/* -------------------------------- */
function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

/* -------------------------------- */
/* Animations and UI Enhancements */
/* -------------------------------- */
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 150);
  });
});

const elements = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

elements.forEach((el) => observer.observe(el));
// Array to store suppliers
const suppliers = [];

// Event listener for supplier registration form submission
document.getElementById("supplierRegistrationForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Debugging messages to ensure elements are correctly fetched
  console.log("Supplier Registration Form Submitted");

  // Get form field values
  const supplierName = document.getElementById("supplierName")?.value.trim();
  const supplierEmail = document.getElementById("supplierEmail")?.value.trim();
  const supplierProducts = document.getElementById("supplierProducts")?.value
    .split(",")
    .map((product) => product.trim())
    .filter((product) => product !== ""); // Remove empty products

  // Debugging: Log values to ensure they are captured correctly
  console.log("Supplier Name:", supplierName);
  console.log("Supplier Email:", supplierEmail);
  console.log("Supplier Products:", supplierProducts);

  // Validation: Check if fields are filled
  if (!supplierName || !supplierEmail || supplierProducts.length === 0) {
    alert("Please complete all fields.");
    return;
  }

  // Create supplier object
  const newSupplier = {
    name: supplierName,
    email: supplierEmail,
    products: supplierProducts,
  };

  // Add supplier to the array and update the UI
  suppliers.push(newSupplier);
  updateSupplierList();

  // Debugging: Log the updated suppliers array
  console.log("Updated Suppliers:", suppliers);

  // Clear the form fields
  document.getElementById("supplierRegistrationForm").reset();
  alert("Supplier registered successfully!");
});

// Function to update the supplier list display
function updateSupplierList() {
  const supplierList = document.getElementById("supplierList");
  if (!supplierList) return; // Ensure the element exists

  supplierList.innerHTML = ""; // Clear existing list

  suppliers.forEach((supplier, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${supplier.name}</strong> (${supplier.email})<br>
      Products: ${supplier.products.join(", ")}
      <button class="btn-secondary" onclick="removeSupplier(${index})">Remove</button>
    `;
    supplierList.appendChild(li);
  });
}

// Function to remove a supplier from the list
function removeSupplier(index) {
  suppliers.splice(index, 1); // Remove the supplier at the specified index
  updateSupplierList(); // Refresh the list
}
