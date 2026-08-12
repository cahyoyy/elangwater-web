// Data Produk & Daftar Harga Elang Water (Pusat Grosir Malang)
const productsData = [
  // --- AIR GALON ---
  {
    id: "aqua-galon",
    category: "galon",
    name: "Aqua Galon",
    image: "assets/images/products/aqua.png",
    variants: [
      { size: "Galon Isi 19L", retail: "21.000", grosir: "19.000", isi: "19 Liter Refill", badge: "" }
    ]
  },
  {
    id: "cleo-galon",
    category: "galon",
    name: "Cleo Galon",
    image: "assets/images/products/cleo.jpeg",
    variants: [
      { size: "Galon Isi 19L", retail: "21.000", grosir: "18.500", isi: "19 Liter Refill", badge: "" },
      { size: "Galon SP 15L", retail: "20.000", grosir: "19.000", isi: "15 Liter (Sekali Pakai)", badge: "" }
    ]
  },
  {
    id: "cheers-galon",
    category: "galon",
    name: "Cheers Galon",
    image: "assets/images/products/cheers.jpeg",
    variants: [
      { size: "Galon Isi 20L", retail: "19.000", grosir: "17.000", isi: "20 Liter Refill", badge: "" }
    ]
  },
  {
    id: "crystaline-galon",
    category: "galon",
    name: "Crystaline Galon",
    image: "assets/images/products/crystaline.png",
    variants: [
      { size: "Galon Isi 19L", retail: "20.000", grosir: "19.000", isi: "19 Liter Refill", badge: "" }
    ]
  },
  {
    id: "le-minerale-galon",
    category: "galon",
    name: "Le Minerale Galon",
    image: "assets/images/products/le-mineral.png",
    variants: [
      { size: "Galon SP 15L", retail: "22.000", grosir: "20.000", isi: "15 Liter (Sekali Pakai)", badge: "" }
    ]
  },
  {
    id: "tulus-galon",
    category: "galon",
    name: "Tulus Galon",
    image: "assets/images/products/tulus.jpeg",
    variants: [
      { size: "Galon SP 16L", retail: "19.000", grosir: "18.000", isi: "16 Liter (Sekali Pakai)", badge: "" }
    ]
  },
  {
    id: "club-galon",
    category: "galon",
    name: "Club Galon",
    image: "assets/images/logo/club.jpg",
    variants: [
      { size: "Galon SP 15L", retail: "19.000", grosir: "18.000", isi: "15 Liter (Sekali Pakai)", badge: "" }
    ]
  },
  {
    id: "galon-kosong",
    category: "galon",
    name: "Galon Kosong",
    image: "",
    variants: [
      { size: "Galon Kosong", retail: "45.000", grosir: "45.000", isi: "1 Pcs Galon Kosong", badge: "" }
    ]
  },

  // --- AIR GELAS ---
  {
    id: "cleo-gelas",
    category: "gelas",
    name: "Cleo Air Gelas",
    image: "assets/images/products/cleo.jpeg",
    variants: [
      { size: "Cup 150ml", retail: "24.000", grosir: "22.500", isi: "40 / Karton", badge: "" },
      { size: "Gelas 220ml", retail: "26.500", grosir: "24.500", isi: "40 / Karton", badge: "" }
    ]
  },
  {
    id: "club-gelas",
    category: "gelas",
    name: "Club Air Gelas",
    image: "assets/images/logo/club.jpg",
    variants: [
      { size: "Cup 150ml", retail: "22.000", grosir: "20.000", isi: "48 / Karton", badge: "" },
      { size: "Gelas 220ml", retail: "25.000", grosir: "23.000", isi: "48 / Karton", badge: "" }
    ]
  },
  {
    id: "cheers-gelas",
    category: "gelas",
    name: "Cheers Air Gelas",
    image: "assets/images/products/cheers.jpeg",
    variants: [
      { size: "Cup 150ml", retail: "21.000", grosir: "19.500", isi: "48 / Karton", badge: "" },
      { size: "Gelas 220ml", retail: "25.000", grosir: "23.000", isi: "48 / Karton", badge: "" }
    ]
  },
  {
    id: "crystaline-gelas",
    category: "gelas",
    name: "Crystaline Gelas",
    image: "assets/images/products/crystaline.png",
    variants: [
      { size: "Gelas 220ml", retail: "24.000", grosir: "22.000", isi: "48 / Karton", badge: "" }
    ]
  },
  {
    id: "orchid-gelas",
    category: "gelas",
    name: "Orchid Gelas",
    image: "",
    variants: [
      { size: "Gelas 220ml", retail: "19.000", grosir: "17.000", isi: "48 / Karton", badge: "" }
    ]
  },

  // --- BOTOL MINERAL ---
  {
    id: "aqua-botol",
    category: "botol",
    name: "Aqua Botol Mineral",
    image: "assets/images/products/aqua.png",
    variants: [
      { size: "330ml", retail: "40.000", grosir: "38.000", isi: "24 / Karton", badge: "" },
      { size: "600ml", retail: "49.000", grosir: "47.000", isi: "24 / Karton", badge: "" },
      { size: "1500ml", retail: "55.000", grosir: "53.000", isi: "12 / Karton", badge: "" }
    ]
  },
  {
    id: "le-minerale-botol",
    category: "botol",
    name: "Le Minerale Botol",
    image: "assets/images/products/le-mineral.png",
    variants: [
      { size: "330ml", retail: "42.000", grosir: "40.000", isi: "24 / Karton", badge: "" },
      { size: "600ml", retail: "50.000", grosir: "48.000", isi: "24 / Karton", badge: "" },
      { size: "1500ml", retail: "55.000", grosir: "53.000", isi: "12 / Karton", badge: "" }
    ]
  },
  {
    id: "cleo-botol",
    category: "botol",
    name: "Cleo Botol Mineral",
    image: "assets/images/products/cleo.jpeg",
    variants: [
      { size: "220ml Imut", retail: "21.000", grosir: "19.000", isi: "24 / Pack", badge: "" },
      { size: "330ml", retail: "39.000", grosir: "37.000", isi: "24 / Karton", badge: "" },
      { size: "550ml", retail: "47.000", grosir: "45.000", isi: "24 / Karton", badge: "PAKET 180rb (4 Krt)" },
      { size: "Lite 500ml", retail: "36.000", grosir: "34.000", isi: "24 / Karton", badge: "" },
      { size: "1000ml", retail: "40.000", grosir: "38.000", isi: "12 / Karton", badge: "" },
      { size: "1500ml", retail: "52.000", grosir: "49.000", isi: "12 / Karton", badge: "PAKET 195rb (4 Krt)" }
    ]
  },
  {
    id: "tulus-botol",
    category: "botol",
    name: "Tulus Air Mineral",
    image: "assets/images/products/tulus.jpeg",
    variants: [
      { size: "330ml", retail: "41.000", grosir: "3 BONUS 1", isi: "24 / Karton", badge: "PROMO 3+1" },
      { size: "600ml", retail: "47.000", grosir: "3 BONUS 1", isi: "24 / Karton", badge: "PROMO 3+1" },
      { size: "1500ml", retail: "48.000", grosir: "3 BONUS 1", isi: "12 / Karton", badge: "PROMO 3+1" }
    ]
  },
  {
    id: "crystaline-botol",
    category: "botol",
    name: "Crystaline Botol",
    image: "assets/images/products/crystaline.png",
    variants: [
      { size: "330ml", retail: "38.000", grosir: "36.000", isi: "24 / Karton", badge: "" },
      { size: "600ml", retail: "46.000", grosir: "44.000", isi: "24 / Karton", badge: "" },
      { size: "1500ml", retail: "50.000", grosir: "48.000", isi: "12 / Karton", badge: "" }
    ]
  },
  {
    id: "cheers-botol",
    category: "botol",
    name: "Cheers Botol Mineral",
    image: "assets/images/products/cheers.jpeg",
    variants: [
      { size: "220ml Imut", retail: "26.000", grosir: "24.000", isi: "24 / Karton", badge: "" },
      { size: "Alk 500ml", retail: "52.000", grosir: "50.000", isi: "24 / Karton", badge: "ALKALINE" },
      { size: "600ml Nat", retail: "40.000", grosir: "38.000", isi: "24 / Karton", badge: "" },
      { size: "1500ml", retail: "42.000", grosir: "40.000", isi: "12 / Karton", badge: "" }
    ]
  },
  {
    id: "club-botol",
    category: "botol",
    name: "Club Botol Mineral",
    image: "assets/images/logo/club.jpg",
    variants: [
      { size: "600ml", retail: "42.000", grosir: "40.000", isi: "24 / Karton", badge: "" },
      { size: "1500ml", retail: "42.000", grosir: "40.000", isi: "12 / Karton", badge: "" }
    ]
  },
  {
    id: "aquviva-botol",
    category: "botol",
    name: "Aquviva Botol",
    image: "assets/images/products/aquviva.jpeg",
    variants: [
      { size: "700ml", retail: "23.000", grosir: "22.000", isi: "12 / Pack", badge: "" }
    ]
  },

  // --- MINUMAN NON-MINERAL ---
  {
    id: "teh-pucuk",
    category: "non-mineral",
    name: "Teh Pucuk Harum",
    image: "assets/images/products/teh-pucuk.jpeg",
    variants: [
      { size: "350ml", retail: "64.000", grosir: "62.500", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "teh-gelas",
    category: "non-mineral",
    name: "Teh Gelas Kemasan",
    image: "assets/images/products/teh-gelas.jpeg",
    variants: [
      { size: "175ml", retail: "20.000", grosir: "19.000", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "teh-lemon-madu",
    category: "non-mineral",
    name: "Teh Lemon Madu",
    image: "assets/images/products/teh-botol-sosro.jpeg",
    variants: [
      { size: "350ml", retail: "28.000", grosir: "26.000", isi: "12 / Pack", badge: "" }
    ]
  },
  {
    id: "teh-ichi-ocha",
    category: "non-mineral",
    name: "Teh Ichi Ocha",
    image: "assets/images/products/ichi-ocha.jpeg",
    variants: [
      { size: "450ml", retail: "64.000", grosir: "62.000", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "teh-kotak-ultra",
    category: "non-mineral",
    name: "Teh Kotak Ultrajaya",
    image: "assets/images/products/ultra-milk.jpeg",
    variants: [
      { size: "250ml", retail: "84.000", grosir: "82.000", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "ultra-milk",
    category: "non-mineral",
    name: "Ultra Milk",
    image: "assets/images/products/ultra-milk.jpeg",
    variants: [
      { size: "125ml", retail: "125.000", grosir: "122.000", isi: "40 / Karton", badge: "" },
      { size: "200ml", retail: "120.000", grosir: "117.000", isi: "24 / Karton", badge: "" },
      { size: "250ml", retail: "150.000", grosir: "148.000", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "ultra-kacang-ijo",
    category: "non-mineral",
    name: "Ultra Sari Kacang Ijo",
    image: "assets/images/products/sari-kacang-ijo.jpeg",
    variants: [
      { size: "250ml", retail: "105.000", grosir: "102.000", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "milku",
    category: "non-mineral",
    name: "Milku Susu UHT",
    image: "assets/images/products/milku.jpeg",
    variants: [
      { size: "200ml", retail: "38.000", grosir: "36.000", isi: "12 / Pack", badge: "" }
    ]
  },
  {
    id: "golda-coffee",
    category: "non-mineral",
    name: "Golda Coffee",
    image: "assets/images/products/golda.jpeg",
    variants: [
      { size: "200ml", retail: "38.000", grosir: "36.000", isi: "12 / Pack", badge: "" }
    ]
  },
  {
    id: "pocari-sweat",
    category: "non-mineral",
    name: "Pocari Sweat",
    image: "assets/images/products/pocari-sweat.png",
    variants: [
      { size: "350ml", retail: "132.000", grosir: "130.000", isi: "24 / Karton", badge: "" },
      { size: "500ml", retail: "155.000", grosir: "153.000", isi: "24 / Karton", badge: "" }
    ]
  },
  {
    id: "isoplus",
    category: "non-mineral",
    name: "Isoplus Isotonik",
    image: "assets/images/products/isoplus.jpeg",
    variants: [
      { size: "140ml", retail: "34.000", grosir: "32.000", isi: "12 / Pack", badge: "" }
    ]
  },
  {
    id: "floridina",
    category: "non-mineral",
    name: "Floridina Orange",
    image: "",
    variants: [
      { size: "350ml", retail: "34.000", grosir: "32.000", isi: "12 / Pack", badge: "" }
    ]
  },
  {
    id: "nipis-madu",
    category: "non-mineral",
    name: "Nipis Madu",
    image: "assets/images/products/nipis-madu.jpeg",
    variants: [
      { size: "350ml", retail: "41.000", grosir: "39.000", isi: "12 / Karton", badge: "" }
    ]
  }
];

// Active Variant Selection State per Product ID
const selectedVariants = {};

// Initialize Default Selection
productsData.forEach((product) => {
  selectedVariants[product.id] = 0;
});

// SVG Placeholder for missing/broken images
const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-10 h-10 sm:w-14 sm:h-14 max-w-[56px] max-h-[56px]" width="56" height="56" fill="none">
  <path d="M32 6C24.3 6 18 12.3 18 20v2c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2c0-7.7-6.3-14-14-14z" stroke="#b0c4de" stroke-width="1.5" fill="#dbeafe"/>
  <rect x="16" y="24" width="32" height="28" rx="3" stroke="#b0c4de" stroke-width="1.5" fill="#eff6ff"/>
  <path d="M28 38c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#93b5e0" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="32" cy="16" r="3" fill="#93b5e0"/>
</svg>`;

// Render Catalog Grid
function renderCatalog(categoryFilter = "all") {
  const gridContainer = document.getElementById("product-grid");
  if (!gridContainer) return;

  const limitAttr = gridContainer.dataset.limit;
  const limit = limitAttr ? parseInt(limitAttr, 10) : null;

  const filteredProducts = productsData.filter((product) => {
    if (categoryFilter === "all") return true;
    return product.category === categoryFilter;
  });

  const displayProducts = limit && limit > 0 ? filteredProducts.slice(0, limit) : filteredProducts;

  gridContainer.innerHTML = displayProducts
    .map((product) => {
      const activeIdx = selectedVariants[product.id] || 0;
      const activeVar = product.variants[activeIdx] || product.variants[0];
      const isGrosirNumeric = !isNaN(activeVar.grosir.replace(/\./g, ""));
      const displayGrosirText = isGrosirNumeric ? `Rp ${activeVar.grosir}` : activeVar.grosir;

      // WhatsApp Order URL
      const waText = encodeURIComponent(
        `Halo Elang Water, saya ingin pesan ${product.name} (Ukuran: ${activeVar.size}) - Harga Grosir ${displayGrosirText} (${activeVar.isi}).`
      );
      const waUrl = `https://wa.me/6281262100800?text=${waText}`;

      // Image or Placeholder
      const hasImage = product.image && product.image.length > 0;
      const imageHTML = hasImage
        ? `<img src="${product.image}" alt="${product.name}" class="max-h-[135px] sm:max-h-[195px] max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-105" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="flex flex-col items-center justify-center w-full h-full" style="display:none;">${PLACEHOLDER_SVG}</div>`
        : `<div class="flex flex-col items-center justify-center w-full h-full">${PLACEHOLDER_SVG}</div>`;

      return `
        <div class="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" data-category="${product.category}">
          <!-- Image Container (Clean White Background) -->
          <div class="bg-white h-40 sm:h-52 md:h-56 flex items-center justify-center p-2 sm:p-3 relative overflow-hidden">
            ${activeVar.badge ? `<span class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-amber-400 text-amber-950 text-[9px] sm:text-[10px] font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md uppercase tracking-wider shadow-sm z-10">${activeVar.badge}</span>` : ""}
            ${imageHTML}
          </div>

          <!-- Card Body Content -->
          <div class="p-3 sm:p-5 flex-1 flex flex-col bg-white">
            <!-- Product Title -->
            <h3 class="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-1">${product.name}</h3>

            <!-- Pack/Isi Info Badge -->
            <div class="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 border border-gray-200/60 rounded-lg text-[11px] sm:text-xs font-medium text-gray-600 mb-2 sm:mb-4 w-fit">
              <svg class="w-3.5 h-3.5 flex-shrink-0 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.29 7 12 12 20.71 7"/>
                <line x1="12" y1="22" x2="12" y2="12"/>
              </svg>
              <span>${activeVar.isi}</span>
            </div>

            <!-- Segmented Variant Button Control (Scrollable Track) -->
            <div class="flex gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-gray-100 border border-gray-200/60 rounded-xl p-1 mb-2 sm:mb-4">
              ${product.variants
                .map((v, idx) => {
                  const isActive = idx === activeIdx;
                  const btnClasses = isActive
                    ? "flex-1 min-w-fit py-1 sm:py-1.5 px-2.5 sm:px-3 text-[11px] sm:text-xs font-bold rounded-lg text-center whitespace-nowrap transition-all bg-white text-gray-900 shadow-sm border border-gray-200/50"
                    : "flex-1 min-w-fit py-1 sm:py-1.5 px-2.5 sm:px-3 text-[11px] sm:text-xs font-medium rounded-lg text-center whitespace-nowrap transition-all bg-transparent text-gray-500 hover:text-gray-900 border border-transparent";
                  return `<button type="button" onclick="selectProductVariant('${product.id}', ${idx})" class="${btnClasses}">${v.size}</button>`;
                })
                .join("")}
            </div>

            <!-- Pricing Rows -->
            <div class="mt-auto pt-1 sm:pt-2 mb-2 sm:mb-4 space-y-0.5 sm:space-y-1">
              <div class="flex justify-between items-center">
                <span class="text-[11px] sm:text-xs font-medium text-gray-500">Grosir</span>
                <span class="text-sm sm:text-lg font-extrabold text-emerald-600">${displayGrosirText}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[11px] sm:text-xs font-normal text-gray-400">Retail</span>
                <span class="text-[11px] sm:text-xs font-medium text-gray-700">Rp ${activeVar.retail}</span>
              </div>
            </div>

            <!-- WhatsApp Button CTA -->
            <a href="${waUrl}" target="_blank" class="w-full py-2 sm:py-3 px-3 sm:px-4 bg-primary-blue hover:bg-secondary-blue text-white rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        </div>
      `;
    })
    .join("");
}

// Handler Switch Variant
function selectProductVariant(productId, variantIdx) {
  selectedVariants[productId] = variantIdx;
  const activeTab = document.querySelector(".category-tab.active-tab");
  const category = activeTab ? activeTab.dataset.category : "all";
  renderCatalog(category);
}

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog("all");

  // Tab Filtering
  const categoryTabs = document.querySelectorAll(".category-tab");
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((t) => {
        t.classList.remove("active-tab", "bg-primary-blue", "text-white", "shadow-sm");
        t.classList.add("bg-white", "text-text-gray", "border", "border-gray-200");
      });
      tab.classList.remove("bg-white", "text-text-gray", "border", "border-gray-200");
      tab.classList.add("active-tab", "bg-primary-blue", "text-white", "shadow-sm");

      renderCatalog(tab.dataset.category);
    });
  });
});

