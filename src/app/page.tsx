"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Menu data from the provided menu
const menuItems = {
  muffins: {
    title: "Muffins",
    icon: "🧁",
    minOrder: "Min 6",
    items: ["Blueberry", "Vanilla Choco-Chip", "Chocolate"],
    color: "from-pink-soft to-pink-main",
  },
  loafCakes: {
    title: "Loaf Cakes",
    icon: "🍞",
    minOrder: "250g / 500g / 1kg",
    items: ["Plum Cake", "Banana Walnut", "Ragi Chocolate", "Double Chocolate", "Tooti-Frooti"],
    color: "from-brown-cookie to-pink-dark",
  },
  cookies: {
    title: "Cookies",
    icon: "🍪",
    minOrder: "Min 6",
    items: ["Choco-chip", "Oatmeal Choco-chip", "Oatmeal Raisin", "Biscoff", "Ragi Jaggery", "Coconut"],
    color: "from-teal-main to-teal-dark",
  },
  cakePops: {
    title: "Cake Pops",
    icon: "🍭",
    minOrder: "Min 10",
    items: ["Vanilla", "Chocolate", "Red Velvet"],
    color: "from-purple-main to-pink-dark",
  },
};

// Floating decorative elements
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">🍪</div>
      <div className="absolute top-40 right-20 text-3xl animate-float opacity-60" style={{ animationDelay: "0.5s" }}>🧁</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-float opacity-60" style={{ animationDelay: "1s" }}>🍭</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-60" style={{ animationDelay: "1.5s" }}>🎂</div>
      <div className="absolute top-60 left-1/4 text-2xl animate-bounce-soft opacity-50" style={{ animationDelay: "0.3s" }}>✨</div>
      <div className="absolute top-32 right-1/3 text-2xl animate-bounce-soft opacity-50" style={{ animationDelay: "0.8s" }}>💖</div>
    </div>
  );
}

// Navigation component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Image src="/logo.png" alt="The Pop and Chip Shop" width={50} height={50} className="rounded-full" />
          <span className={`font-[family-name:var(--font-bubblegum)] text-lg hidden sm:block ${scrolled ? "text-pink-dark" : "text-white"}`}>
            The Pop & Chip Shop
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Menu", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-semibold transition-colors hover:text-teal-dark ${scrolled ? "text-gray-700" : "text-white"}`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-teal-main to-teal-dark text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? "bg-pink-dark" : "bg-white"} ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? "bg-pink-dark" : "bg-white"} ${mobileMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 transition-all ${scrolled ? "bg-pink-dark" : "bg-white"} ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {["Menu", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-semibold text-gray-700 hover:text-teal-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-teal-main to-teal-dark text-white px-6 py-2 rounded-full font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-main via-pink-soft to-teal-light overflow-hidden">
      <FloatingElements />

      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-main/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-dark/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center px-4 py-20">
        <div className="animate-float mb-8">
          <Image
            src="/logo.png"
            alt="The Pop and Chip Shop Logo"
            width={280}
            height={280}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="font-[family-name:var(--font-bubblegum)] text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
          The Pop & Chip Shop
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
          Homemade baked goodies made with love!
          <br className="hidden sm:block" />
          Cookies, Muffins, Cake Pops & More
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="bg-white text-pink-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-light hover:scale-105 transition-all shadow-lg"
          >
            Explore Our Menu
          </a>
          <a
            href="#contact"
            className="bg-teal-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-main hover:scale-105 transition-all shadow-lg"
          >
            Order Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// Menu Card Component
function MenuCard({ category, data, index }: { category: string; data: typeof menuItems.muffins; index: number }) {
  return (
    <div
      className={`card-hover bg-white rounded-3xl p-6 shadow-xl border-2 border-pink-light relative overflow-hidden`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Decorative corner */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${data.color} opacity-20 rounded-full`}></div>

      <div className="relative z-10">
        <div className="text-5xl mb-4">{data.icon}</div>
        <h3 className="font-[family-name:var(--font-bubblegum)] text-2xl text-pink-dark mb-2">{data.title}</h3>
        <p className="text-sm text-teal-dark font-semibold mb-4 bg-teal-light/30 inline-block px-3 py-1 rounded-full">
          {data.minOrder}
        </p>
        <ul className="space-y-2">
          {data.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-main to-teal-main rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Menu Section
function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-cream to-pink-light relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-bubblegum)] text-4xl md:text-5xl gradient-text mb-4">
            Our Yummy Menu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything is freshly baked to order with the finest ingredients.
            Perfect for parties, gifts, or treating yourself!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(menuItems).map(([key, data], index) => (
            <MenuCard key={key} category={key} data={data} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-pink-dark font-semibold text-lg mb-4">
            All items are made fresh to order!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-main to-pink-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span>Place Your Order</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-teal-light via-white to-pink-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-soft/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-main/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-main to-teal-main p-2 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8">
                <Image
                  src="/logo.png"
                  alt="The Pop and Chip Shop"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-teal-main text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-soft">
              Homemade!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-dark text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-soft" style={{ animationDelay: "0.5s" }}>
              Fresh Daily!
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-bubblegum)] text-4xl md:text-5xl gradient-text mb-6">
              Baked with Love
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Welcome to <strong className="text-pink-dark">The Pop and Chip Shop</strong>!
                We&apos;re a home bakery passionate about creating delicious, freshly baked treats
                that bring joy to every occasion.
              </p>
              <p>
                From soft, chewy cookies to perfectly moist muffins and adorable cake pops,
                every item is crafted with care using quality ingredients and lots of love.
              </p>
              <p>
                Whether you&apos;re celebrating a special moment or just craving something sweet,
                we&apos;ve got the perfect treat for you!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: "🏠", text: "Homemade" },
                { icon: "🌿", text: "Fresh Ingredients" },
                { icon: "💝", text: "Made with Love" },
                { icon: "📦", text: "Made to Order" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 p-3 rounded-xl shadow-md">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-semibold text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-main via-pink-dark to-purple-main relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pattern-sprinkles opacity-10"></div>
      <FloatingElements />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-bubblegum)] text-4xl md:text-5xl text-white mb-4">
            Let&apos;s Get in Touch!
          </h2>
          <p className="text-white/90 text-lg">
            Ready to order? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-bubblegum)] text-2xl text-pink-dark mb-4">
                Contact Chaitra Poornima
              </h3>

              {/* Phone */}
              <a
                href="tel:+919972382049"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-light/50 to-teal-main/20 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-teal-main rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call or WhatsApp</p>
                  <p className="font-bold text-gray-800">+91 997 238 2049</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/thepopandchipshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-light/50 to-pink-soft/50 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-main to-pink-dark rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Follow us on Instagram</p>
                  <p className="font-bold text-gray-800">@thepopandchipshop</p>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/919972382049?text=Hi!%20I'd%20like%20to%20place%20an%20order%20from%20The%20Pop%20and%20Chip%20Shop!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Quick Order Tips */}
            <div className="bg-gradient-to-br from-cream to-pink-light rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-bubblegum)] text-2xl text-pink-dark mb-4">
                How to Order
              </h3>
              <ul className="space-y-4">
                {[
                  { step: "1", text: "Choose your favorites from our menu" },
                  { step: "2", text: "Message us on WhatsApp or Instagram" },
                  { step: "3", text: "Confirm your order & delivery details" },
                  { step: "4", text: "Enjoy your fresh baked goodies!" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-gradient-to-br from-teal-main to-teal-dark text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="text-gray-700 pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-white/80 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong className="text-pink-dark">Note:</strong> Orders are made fresh, so please give us at least
                  <strong className="text-teal-dark"> 2-3 days advance notice</strong> for your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="The Pop and Chip Shop" width={40} height={40} className="rounded-full" />
            <span className="font-[family-name:var(--font-bubblegum)] text-lg">The Pop & Chip Shop</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com/thepopandchipshop" target="_blank" rel="noopener noreferrer" className="hover:text-pink-soft transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="tel:+919972382049" className="hover:text-teal-light transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Pop and Chip Shop. Made with 💖
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
