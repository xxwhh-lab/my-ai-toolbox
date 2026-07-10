const tools = [
  {
    name: "ChatGPT",
    description: "适合写提纲、改文案、总结资料，也可以帮助整理日常想法。",
    category: "写作"
  },
  {
    name: "Notion AI",
    description: "可以在笔记中生成内容、提炼重点，并把零散信息整理成清晰结构。",
    category: "写作"
  },
  {
    name: "Canva AI",
    description: "帮助制作海报、社交媒体图片和演示页面，适合没有设计经验的用户。",
    category: "设计"
  },
  {
    name: "Midjourney",
    description: "根据文字描述生成高质量图片，常用于视觉创意和灵感探索。",
    category: "设计"
  },
  {
    name: "GitHub Copilot",
    description: "为编程者提供代码建议、补全和简单解释，提升开发效率。",
    category: "编程"
  },
  {
    name: "Perplexity",
    description: "用问答方式搜索资料，并整理来源，适合快速了解新主题。",
    category: "搜索"
  }
];

const favoriteStorageKey = "my-ai-toolbox-favorites";
const toolGrid = document.getElementById("toolGrid");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const favoriteFilterButton = document.getElementById("favoriteFilterButton");
const filterButtons = document.querySelectorAll(".filter-button");

let selectedCategory = "全部";
let onlyFavorites = false;
let favoriteTools = loadFavorites();

function loadFavorites() {
  try {
    const savedFavorites = localStorage.getItem(favoriteStorageKey);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch (error) {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(favoriteStorageKey, JSON.stringify(favoriteTools));
  } catch (error) {
    emptyMessage.textContent = "收藏保存失败，请检查浏览器设置";
    emptyMessage.classList.add("show");
  }
}

function isFavorite(toolName) {
  return favoriteTools.includes(toolName);
}

function createToolCard(tool) {
  const favorite = isFavorite(tool.name);
  const buttonText = favorite ? "已收藏" : "收藏";

  return `
    <article class="tool-card">
      <div class="card-top">
        <h2>${tool.name}</h2>
        <button
          class="favorite-button ${favorite ? "is-favorite" : ""}"
          type="button"
          data-tool-name="${tool.name}"
          aria-pressed="${favorite}"
        >
          ${buttonText}
        </button>
      </div>
      <p>${tool.description}</p>
      <span class="tag">${tool.category}</span>
    </article>
  `;
}

function toolMatchesSearch(tool, keyword) {
  const searchableText = `${tool.name} ${tool.description}`.toLowerCase();
  return searchableText.includes(keyword);
}

function getVisibleTools() {
  const keyword = searchInput.value.trim().toLowerCase();

  return tools.filter(function (tool) {
    const matchesCategory = selectedCategory === "全部" || tool.category === selectedCategory;
    const matchesKeyword = keyword === "" || toolMatchesSearch(tool, keyword);
    const matchesFavorite = !onlyFavorites || isFavorite(tool.name);

    return matchesCategory && matchesKeyword && matchesFavorite;
  });
}

function getEmptyMessage() {
  if (onlyFavorites && favoriteTools.length === 0) {
    return "还没有收藏内容，请先点击工具卡片上的收藏按钮";
  }

  return "没有找到匹配的工具";
}

function renderTools() {
  const visibleTools = getVisibleTools();

  toolGrid.innerHTML = visibleTools.map(createToolCard).join("");
  emptyMessage.textContent = getEmptyMessage();
  emptyMessage.classList.toggle("show", visibleTools.length === 0);
}

function toggleFavorite(toolName) {
  if (isFavorite(toolName)) {
    favoriteTools = favoriteTools.filter(function (name) {
      return name !== toolName;
    });
  } else {
    favoriteTools.push(toolName);
  }

  saveFavorites();
  renderTools();
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".filter-button.active").classList.remove("active");
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderTools();
  });
});

favoriteFilterButton.addEventListener("click", function () {
  onlyFavorites = !onlyFavorites;
  favoriteFilterButton.classList.toggle("active", onlyFavorites);
  favoriteFilterButton.setAttribute("aria-pressed", onlyFavorites);
  renderTools();
});

searchInput.addEventListener("input", renderTools);

toolGrid.addEventListener("click", function (event) {
  const favoriteButton = event.target.closest(".favorite-button");

  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.toolName);
  }
});

renderTools();
