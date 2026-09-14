document.addEventListener('DOMContentLoaded', () => {
  const formatMoney = (cents) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(cents / 100);
  };

  const orderSummary = document.querySelector('.order-summary');
  const paymentSummary = document.querySelector('.payment-summary');

  if (!orderSummary || !paymentSummary || !window.products) {
    AmazonCart.updateCartBadge();
    return;
  }

  const productMap = new Map(window.products.map((product) => [product.id, product]));

  function renderOrderSummary() {
    const cart = AmazonCart.getCart();

    if (!cart.length) {
      orderSummary.innerHTML = `
        <div class="empty-cart-message">
          Your cart is empty. Add a few products to continue shopping.
        </div>
      `;
      return;
    }

    orderSummary.innerHTML = cart
      .map((item) => {
        const product = productMap.get(item.productId);
        if (!product) {
          return '';
        }

        const deliveryDate = 'Tuesday, June 21';

        return `
          <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: ${deliveryDate}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="${product.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.name}
                </div>
                <div class="product-price">
                  ${formatMoney(product.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity:
                    <span class="quantity-label">${item.quantity}</span>
                  </span>

                  <select class="quantity-select" data-product-id="${product.id}" aria-label="Update quantity for ${product.name}">
                    ${Array.from({ length: 10 }, (_, index) => {
                      const value = index + 1;
                      return `<option value="${value}" ${value === item.quantity ? 'selected' : ''}>${value}</option>`;
                    }).join('')}
                  </select>

                  <button type="button" class="delete-quantity-link link-primary" data-product-id="${product.id}">
                    Delete
                  </button>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input" name="delivery-option-${product.id}">
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" name="delivery-option-${product.id}">
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" name="delivery-option-${product.id}">
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    orderSummary.querySelectorAll('.quantity-select').forEach((select) => {
      select.addEventListener('change', (event) => {
        const productId = event.target.dataset.productId;
        AmazonCart.updateQuantity(productId, Number(event.target.value));
        renderCheckout();
      });
    });

    orderSummary.querySelectorAll('.delete-quantity-link').forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.productId;
        AmazonCart.removeFromCart(productId);
        renderCheckout();
      });
    });
  }

  function renderPaymentSummary() {
    const summary = AmazonCart.getCartSummary();

    paymentSummary.innerHTML = `
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${summary.itemCount}):</div>
        <div class="payment-summary-money">${formatMoney(summary.subtotalCents)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">${formatMoney(summary.shippingCents)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">${formatMoney(summary.totalBeforeTax)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">${formatMoney(summary.taxCents)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">${formatMoney(summary.totalCents)}</div>
      </div>

      <button class="place-order-button button-primary" ${summary.itemCount ? '' : 'disabled'}>
        Place your order
      </button>
    `;
  }

  function renderCheckout() {
    renderOrderSummary();
    renderPaymentSummary();
    AmazonCart.updateCartBadge();
  }

  renderCheckout();
});
