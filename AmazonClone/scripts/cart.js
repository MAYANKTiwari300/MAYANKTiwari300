(function (global) {
  const STORAGE_KEY = 'amazon-cart-items';

  function readStoredItems() {
    if (typeof localStorage === 'undefined') {
      return global.__amazonCartFallback || [];
    }

    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  }

  function writeStoredItems(items) {
    if (typeof localStorage === 'undefined') {
      global.__amazonCartFallback = items;
      return items;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return items;
  }

  function normalizeCart(items) {
    if (!Array.isArray(items)) {
      return [];
    }

    return items
      .filter((item) => item && item.productId)
      .map((item) => ({
        productId: String(item.productId),
        quantity: Math.max(1, Number(item.quantity) || 1)
      }))
      .filter((item, index, array) => {
        const firstMatch = array.findIndex((entry) => entry.productId === item.productId);
        if (firstMatch !== index) {
          const [firstItem] = array.filter((entry) => entry.productId === item.productId);
          if (firstItem) {
            firstItem.quantity += item.quantity;
          }
          return false;
        }

        return true;
      });
  }

  function getCart() {
    return normalizeCart(readStoredItems());
  }

  function saveCart(cart) {
    return writeStoredItems(normalizeCart(cart));
  }

  function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const nextQuantity = Math.max(1, Number(quantity) || 1);
    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += nextQuantity;
    } else {
      cart.push({ productId, quantity: nextQuantity });
    }

    saveCart(cart);
    updateCartBadge();
    return getCart();
  }

  function updateQuantity(productId, quantity) {
    const cart = getCart();
    const nextQuantity = Math.max(0, Number(quantity) || 0);
    const nextCart = cart.filter((item) => item.productId !== productId);

    if (nextQuantity > 0) {
      nextCart.push({ productId, quantity: nextQuantity });
    }

    saveCart(nextCart);
    updateCartBadge();
    return getCart();
  }

  function removeFromCart(productId) {
    const cart = getCart().filter((item) => item.productId !== productId);
    saveCart(cart);
    updateCartBadge();
    return getCart();
  }

  function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  function getCartSummary() {
    const items = getCart();
    const productMap = new Map((global.products || []).map((product) => [product.id, product]));

    const subtotalCents = items.reduce((sum, item) => {
      const product = productMap.get(item.productId);
      if (!product) {
        return sum;
      }

      return sum + product.priceCents * item.quantity;
    }, 0);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const shippingCents = items.length > 0 ? 499 : 0;
    const totalBeforeTax = subtotalCents + shippingCents;
    const taxCents = Math.round(totalBeforeTax * 0.1);
    const totalCents = totalBeforeTax + taxCents;

    return {
      items,
      itemCount,
      subtotalCents,
      shippingCents,
      totalBeforeTax,
      taxCents,
      totalCents
    };
  }

  function updateCartBadge() {
    if (typeof document === 'undefined') {
      return getCartCount();
    }

    const total = getCartCount();
    document.querySelectorAll('.cart-quantity').forEach((element) => {
      element.textContent = String(total);
    });

    return total;
  }

  const amazonCart = {
    getCart,
    saveCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartCount,
    getCartSummary,
    updateCartBadge
  };

  global.AmazonCart = amazonCart;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = amazonCart;
  }
})(typeof window !== 'undefined' ? window : globalThis);
