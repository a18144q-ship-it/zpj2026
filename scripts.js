const pngAssets = new Set([
  "aure-product",
  "ssww-massage-product",
  "ssww-freestanding-product",
  "water-product",
  "poster-operation",
  "poster-main",
]);

function asset(name, kind = "thumb") {
  return `assets/${name}-${kind}.${pngAssets.has(name) ? "png" : "jpg"}`;
}

const galleries = {
  "render-feature": [
    { name: "render-watch", title: "机械手表 · 金属拆解", label: "硬表面 / 金属", size: "hero" },
    { name: "render-razor-crystal", title: "剃须刀 · 冰晶场景", label: "硬表面 / 场景光", size: "wide" },
    { name: "render-razor-dust", title: "剃须刀 · 尘土冲击", label: "硬表面 / 动势", size: "tall" },
    { name: "render-sofa-1", title: "单人沙发 · 室内暖光", label: "皮革 / 家居", size: "hero" },
    { name: "render-bathtub-scene", title: "独立浴缸 · 空间主图", label: "陶瓷 / 空间", size: "tall" },
    { name: "render-sofa-material", title: "皮革材质 · 微距质感", label: "材质 / 微距", size: "small" },
    { name: "render-oil", title: "精华油 · 岩浆光效", label: "美妆 / 暖色", size: "tall" },
    { name: "render-earbuds-scene", title: "耳机 · 概念场景", label: "消费电子 / 概念", size: "tall" },
    { name: "render-cream", title: "面霜 · 花瓣场景", label: "护肤 / 场景", size: "wide" },
  ],
  "render-more": [
    { name: "render-faucet-1", title: "水龙头 · 厨房场景", label: "金属 / 厨房" },
    { name: "render-faucet-2", title: "水龙头 · 台盆角度", label: "金属 / 结构" },
    { name: "render-faucet-ai", title: "水龙头 · AI 场景延展", label: "金属 / AI场景" },
    { name: "render-sofa-2", title: "单人沙发 · 空间构图", label: "皮革 / 家居" },
    { name: "render-bathtub-1", title: "浴缸 · 侧面视角", label: "陶瓷 / 空间" },
    { name: "render-bathtub-2", title: "浴缸 · 俯视结构", label: "陶瓷 / 结构" },
    { name: "render-bathtub-3", title: "浴缸 · 承重视觉", label: "陶瓷 / 卖点" },
  ],
  models: [
    { name: "model-speaker", title: "科幻音响白模" },
    { name: "model-controller", title: "游戏手柄白模" },
    { name: "model-mouse", title: "鼠标白模" },
    { name: "model-sofa", title: "沙发白模" },
    { name: "model-razor", title: "剃须刀白模" },
    { name: "model-camera", title: "相机白模" },
  ],
  "ai-images": [
    { name: "ai-skin-blue", title: "AI 护肤品蓝色场景", label: "Skincare / Blue", size: "wide" },
    { name: "ai-skin-gold", title: "AI 护肤品金色场景", label: "Skincare / Gold", size: "wide" },
    { name: "ai-cup-1", title: "AI 水杯场景 01", label: "Cup / Outdoor", size: "small" },
    { name: "ai-cup-2", title: "AI 水杯场景 02", label: "Cup / Sport", size: "small" },
    { name: "ai-cup-3", title: "AI 水杯场景 03", label: "Cup / Ice", size: "small" },
    { name: "ai-cup-4", title: "AI 水杯人像 01", label: "Cup / Portrait", size: "small" },
    { name: "ai-cup-5", title: "AI 水杯人像 02", label: "Cup / Portrait", size: "small" },
    { name: "ai-cup-6", title: "AI 水杯人像 03", label: "Cup / Lifestyle", size: "small" },
  ],
};

const renderGroups = [
  {
    id: "razor-crystal",
    size: "tall",
    tab: "剃须刀",
    kicker: "Hard Surface / Motion",
    title: "剃须刀冰晶场景",
    desc: "以冰晶、冷光和金属切面建立硬表面产品的速度感与科技感。",
    ratio: "1600 / 893",
    images: ["render-razor-crystal"],
    label: "硬表面 / 场景光",
  },
  {
    id: "razor-dust",
    size: "tall",
    tab: "剃须刀",
    kicker: "Hard Surface / Impact",
    title: "剃须刀尘土冲击",
    desc: "用扬尘动势强化产品冲击瞬间，补充更具张力的竖向画面。",
    ratio: "896 / 1184",
    images: ["render-razor-dust"],
    label: "硬表面 / 动势",
  },
  {
    id: "cream",
    size: "wide",
    tab: "面霜",
    kicker: "Beauty / Atmosphere",
    title: "面霜花瓣场景",
    desc: "以花瓣、柔光和产品主体建立护肤品的轻盈氛围。",
    ratio: "1200 / 674",
    images: ["render-cream"],
    label: "护肤 / 场景",
  },
  {
    id: "oil",
    size: "tall",
    tab: "精华油",
    kicker: "Beauty / Lava Light",
    title: "精华油岩浆光效",
    desc: "暖色岩浆光塑造瓶身轮廓，突出美妆产品的高亮质感。",
    ratio: "1120 / 1379",
    images: ["render-oil"],
    label: "美妆 / 暖色",
  },
  {
    id: "bathtub",
    size: "hero",
    tab: "浴缸",
    kicker: "Ceramic / Oval Bathtub",
    title: "椭圆浴缸空间渲染",
    desc: "陶瓷白、石材墙面与暖光空间共同呈现卫浴产品的体量感。",
    ratio: "1000 / 1500",
    images: ["render-bathtub-scene", "render-bathtub-1", "render-bathtub-2", "render-bathtub-3"],
    label: "陶瓷 / 空间",
  },
  {
    id: "waterfall-bathtub",
    size: "tall",
    tab: "按摩浴缸",
    kicker: "Waterfall / Massage Bathtub",
    title: "瀑布按摩浴缸渲染",
    desc: "蓝色水光与瀑布出水强化功能识别，形成更强的体验画面。",
    ratio: "3 / 4",
    images: ["render-waterfall-bathtub-1", "render-waterfall-bathtub-2", "render-waterfall-bathtub-3"],
    label: "陶瓷 / 水光",
  },
  {
    id: "sofa",
    size: "tall",
    tab: "沙发",
    kicker: "Leather / Interior",
    title: "单人沙发空间主图",
    desc: "暖木空间与皮革质感组合，突出家居产品的舒适氛围。",
    ratio: "1050 / 1400",
    images: ["render-sofa-1", "render-sofa-2", "render-sofa-material"],
    label: "皮革 / 家居",
  },
  {
    id: "watch",
    size: "hero",
    tab: "腕表",
    kicker: "Metal / Exploded View",
    title: "机械手表金属拆解",
    desc: "以拆解视角呈现金属结构、零件层级和精密机械感。",
    ratio: "1200 / 1017",
    images: ["render-watch"],
    label: "金属 / 结构",
  },
  {
    id: "faucet",
    size: "wide",
    tab: "水龙头",
    kicker: "Kitchen / Chrome",
    title: "水龙头空间渲染",
    desc: "厨房场景和台盆视角呈现金属反射、洁净水光与真实使用语境。",
    ratio: "1 / 1",
    images: ["render-faucet-1", "render-faucet-2", "render-faucet-ai"],
    label: "金属 / 厨房",
  },
  {
    id: "earbuds",
    size: "wide",
    tab: "耳机",
    kicker: "Concept / Electronics",
    title: "耳机概念场景",
    desc: "概念场景强化消费电子产品的透明材质、光感和未来气质。",
    ratio: "1095 / 1460",
    images: ["render-earbuds-scene"],
    label: "电子 / 概念",
  },
];

function renderGallery(container) {
  const key = container.dataset.gallery;
  const baseItems = galleries[key] || [];
  const items = key === "render-more" ? [...baseItems, ...baseItems] : baseItems;
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item image-trigger";
    if (key === "render-more") button.classList.add("strip-item");
    button.dataset.full = item.full || asset(item.name, "full");
    button.dataset.title = item.title;
    if (item.size) button.dataset.size = item.size;
    if (key === "models") button.classList.add("model-card");

    const image = document.createElement("img");
    image.src = item.thumb || asset(item.name, "thumb");
    image.alt = item.title;
    image.loading = "lazy";
    button.appendChild(image);

    const caption = document.createElement("span");
    caption.className = "gallery-title";
    caption.innerHTML = `<b>${item.title}</b>${item.label ? `<small>${item.label}</small>` : ""}`;
    button.appendChild(caption);

    fragment.appendChild(button);
  });

  container.appendChild(fragment);
}

document.querySelectorAll("[data-gallery]").forEach(renderGallery);

const renderWaterfalls = [...document.querySelectorAll("[data-render-waterfall]")];

function setRenderSlide(card, index) {
  const slides = [...card.querySelectorAll(".render-slide")];
  if (!slides.length) return;
  const activeIndex = (index + slides.length) % slides.length;
  const group = renderGroups.find((item) => item.id === card.dataset.group);
  const currentName = group.images[activeIndex];
  slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === activeIndex));
  card.dataset.active = activeIndex;
  const trigger = card.querySelector(".render-product-media");
  trigger.dataset.full = asset(currentName, "full");
  trigger.dataset.title = `${group.title} · ${String(activeIndex + 1).padStart(2, "0")}`;
  [...card.querySelectorAll(".render-dot")].forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === activeIndex));
}

function createRenderCard(group, groupIndex) {
  const card = document.createElement("article");
  card.className = "render-product-card";
  card.dataset.size = group.size;
  card.dataset.group = group.id;
  card.dataset.layout = Number(group.ratio.split("/")[0]) / Number(group.ratio.split("/")[1]) > 1.35 ? "wide" : Number(group.ratio.split("/")[0]) / Number(group.ratio.split("/")[1]) < 0.9 ? "vertical" : "square";
  card.dataset.active = "0";
  card.style.setProperty("--ratio", group.ratio || "4 / 5");

  const media = document.createElement("button");
  media.type = "button";
  media.className = "render-product-media image-trigger";

  group.images.forEach((name, imageIndex) => {
    const image = document.createElement("img");
    image.src = asset(name, "full");
    image.alt = `${group.title} ${imageIndex + 1}`;
    image.loading = "lazy";
    image.className = `render-slide${imageIndex === 0 ? " is-active" : ""}`;
    media.appendChild(image);
  });

  const copy = document.createElement("div");
  copy.className = "render-product-copy";
  copy.innerHTML = `
    <span>${group.kicker}</span>
    <h3>${group.title}</h3>
    <p>${group.desc}</p>
    <small>${group.label}</small>
  `;

  const dots = document.createElement("div");
  dots.className = "render-dots";
  group.images.forEach((_, dotIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `render-dot${dotIndex === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `${group.title} 角度 ${dotIndex + 1}`);
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      setRenderSlide(card, dotIndex);
    });
    dots.appendChild(dot);
  });

  card.append(media, copy, dots);
  setRenderSlide(card, 0);

  if (group.images.length > 1) {
    let timer = window.setInterval(() => setRenderSlide(card, Number(card.dataset.active) + 1), 3000 + groupIndex * 260);
    card.addEventListener("mouseenter", () => window.clearInterval(timer));
    card.addEventListener("mouseleave", () => {
      timer = window.setInterval(() => setRenderSlide(card, Number(card.dataset.active) + 1), 3000 + groupIndex * 260);
    });
  }

  return card;
}

renderWaterfalls.forEach((renderWaterfall) => {
  const fragment = document.createDocumentFragment();

  renderGroups.forEach((group, groupIndex) => {
    fragment.appendChild(createRenderCard(group, groupIndex));
  });

  renderWaterfall.appendChild(fragment);
});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");
const closeLightboxButton = lightbox.querySelector(".lightbox-close");

function openLightbox(trigger) {
  lightboxImg.src = trigger.dataset.full;
  lightboxImg.alt = trigger.dataset.title || "";
  lightboxCaption.textContent = trigger.dataset.title || "";
  lightbox.classList.toggle("is-long", trigger.dataset.long === "true");
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open", "is-long");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxImg.removeAttribute("src");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".image-trigger");
  if (trigger) {
    openLightbox(trigger);
    return;
  }

  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;

  const target = document.querySelector(anchor.getAttribute("href"));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  if (anchor.classList.contains("catalog-card") || anchor.closest(".side-nav")) {
    anchor.classList.add("is-pulsing");
    window.setTimeout(() => anchor.classList.remove("is-pulsing"), 560);
  }
});

closeLightboxButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
);

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

const sectionIds = ["catalog", "detail", "render", "poster", "aigc", "ai-image"];
const topLinks = [...document.querySelectorAll(".top-nav a")];
const sideLinks = [...document.querySelectorAll(".side-nav a")];
const catalogCards = [...document.querySelectorAll(".catalog-card")];
const catalogSummary = document.querySelector("#catalog-summary");
const sideTargets = sideLinks
  .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
  .filter((item) => item.section);

if (catalogSummary) {
  const defaultSummary = catalogSummary.dataset.default || catalogSummary.textContent;

  catalogCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      catalogCards.forEach((item) => item.classList.toggle("is-hovered", item === card));
      catalogSummary.textContent = card.dataset.summary || defaultSummary;
      catalogSummary.classList.add("is-changing");
      window.setTimeout(() => catalogSummary.classList.remove("is-changing"), 180);
    });

    card.addEventListener("mouseleave", () => {
      catalogCards.forEach((item) => item.classList.remove("is-hovered"));
      catalogSummary.textContent = defaultSummary;
    });
  });
}

function setActiveSection(id) {
  [...topLinks, ...sideLinks].forEach((link) => {
    if (topLinks.includes(link)) link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });

  const activeCardId = id === "catalog" ? "" : id;
  catalogCards.forEach((card) => {
    card.classList.toggle("is-active", card.getAttribute("href") === `#${activeCardId}`);
  });
}

let ticking = false;

function updateActiveFromScroll() {
  const marker = window.innerHeight * 0.42;
  let current = sectionIds[0];

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    if (section.getBoundingClientRect().top <= marker) current = id;
  });

  setActiveSection(current);
  let currentSide = sideTargets[0];
  sideTargets.forEach((item) => {
    if (item.section.getBoundingClientRect().top <= marker) currentSide = item;
  });
  sideLinks.forEach((link) => link.classList.toggle("is-active", currentSide?.link === link));
  document.body.classList.toggle("show-side-nav", current !== "catalog" && window.scrollY > window.innerHeight * 0.58);
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActiveFromScroll);
  },
  { passive: true },
);

updateActiveFromScroll();
