document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.products-grid');

  if (!grid || !window.products) {
    return;
  }

  function formatRatingImage(product) {
    const starValue = Math.round(product.rating.stars * 10);
    return `images/ratings/rating-${starValue}.png`;
  }

  function renderProducts() {
    grid.innerHTML = window.products
      .map((product) => {
        return `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars" src="${formatRatingImage(product)}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
              <select aria-label="Quantity for ${product.name}">
                ${Array.from({ length: 10 }, (_, index) => {
                  const value = index + 1;
                  return `<option value="${value}" ${value === 1 ? 'selected' : ''}>${value}</option>`;
                }).join('')}
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
        `;
      })
      .join('');

    grid.querySelectorAll('.add-to-cart-button').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const container = button.closest('.product-container');
        const quantitySelect = container.querySelector('select');
        const quantity = Number(quantitySelect.value) || 1;

        AmazonCart.addToCart(productId, quantity);

        const addedMessage = container.querySelector('.added-to-cart');
        addedMessage.style.opacity = '1';

        window.clearTimeout(addedMessage._addedTimer);
        addedMessage._addedTimer = window.setTimeout(() => {
          addedMessage.style.opacity = '0';
        }, 1200);
      });
    });
  }

  renderProducts();
  AmazonCart.updateCartBadge();
});
