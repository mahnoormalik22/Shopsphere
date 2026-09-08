function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

          <div>
            <p className="mb-4 font-semibold text-purple-600">
              WELCOME TO SHOPSPHERE
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Everything you need,
              <span className="text-purple-600"> in one place.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Discover quality products, great prices, and a simple shopping
              experience built for you.
            </p>

            <div className="mt-8">
              <button className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex h-80 items-center justify-center rounded-2xl bg-purple-100">
            <span className="text-6xl">🛍️</span>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-2 text-gray-600">
            Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {["Electronics", "Fashion", "Home", "Sports"].map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-xl border border-gray-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">🛒</div>

              <h3 className="text-xl font-semibold text-gray-900">
                {category}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Explore {category.toLowerCase()} products
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-3xl font-bold text-gray-900">
            Featured Products
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              { name: "Wireless Headphones", price: "Rs. 5,999" },
              { name: "Smart Watch", price: "Rs. 8,499" },
              { name: "Running Shoes", price: "Rs. 6,999" },
              { name: "Backpack", price: "Rs. 3,499" },
            ].map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="flex h-48 items-center justify-center bg-gray-100 text-5xl">
                  📦
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-bold text-purple-600">
                    {product.price}
                  </p>

                  <button className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-white hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;