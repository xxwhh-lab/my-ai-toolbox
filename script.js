const tools = [
  {
    name: "ChatGPT",
    description: "OpenAI 推出的通用 AI 助手，适合问答、写作、分析和创意生成。",
    category: "通用助手",
    website: "https://chatgpt.com/",
    themeColor: "#10a37f",
    logoUrl: "https://chatgpt.com/favicon.ico",
    logoText: "GPT"
  },
  {
    name: "Claude",
    description: "Anthropic 的 AI 助手，擅长长文本理解、写作和复杂问题分析。",
    category: "通用助手",
    website: "https://claude.ai/",
    themeColor: "#d97757",
    logoUrl: "https://claude.ai/favicon.ico",
    logoText: "Cl"
  },
  {
    name: "Gemini",
    description: "Google 推出的多模态 AI 助手，适合结合搜索、图片和办公场景使用。",
    category: "通用助手",
    website: "https://gemini.google.com/",
    themeColor: "#4285f4",
    logoUrl: "https://gemini.google.com/favicon.ico",
    logoText: "G"
  },
  {
    name: "DeepSeek",
    description: "深度求索推出的 AI 助手，适合中文问答、推理和代码相关任务。",
    category: "通用助手",
    website: "https://www.deepseek.com/",
    themeColor: "#4d6bfe",
    logoUrl: "https://www.deepseek.com/favicon.ico",
    logoText: "D"
  },
  {
    name: "豆包",
    description: "字节跳动旗下 AI 智能助手，适合聊天、创作、搜索和多媒体任务。",
    category: "通用助手",
    website: "https://www.doubao.com/",
    themeColor: "#2f6bff",
    logoUrl: "https://www.doubao.com/favicon.ico",
    logoText: "豆"
  },
  {
    name: "Kimi",
    description: "月之暗面推出的 AI 助手，擅长长文档阅读、总结和智能问答。",
    category: "通用助手",
    website: "https://www.kimi.com/",
    themeColor: "#111827",
    logoUrl: "https://www.kimi.com/favicon.ico",
    logoText: "K"
  },
  {
    name: "通义千问",
    description: "阿里旗下全能 AI 助手，覆盖问答、写作、办公和多模态理解。",
    category: "通用助手",
    website: "https://www.qianwen.com/",
    themeColor: "#615ced",
    logoUrl: "https://www.qianwen.com/favicon.ico",
    logoText: "千"
  },
  {
    name: "腾讯元宝",
    description: "腾讯推出的智能助手，可用于搜索问答、内容创作和日常效率任务。",
    category: "通用助手",
    website: "https://yuanbao.tencent.com/",
    themeColor: "#1677ff",
    logoUrl: "https://yuanbao.tencent.com/favicon.ico",
    logoText: "元"
  },
  {
    name: "Cursor",
    description: "面向开发者的 AI 代码编辑器，支持代码生成、理解和智能修改。",
    category: "编程",
    website: "https://www.cursor.com/",
    themeColor: "#111827",
    logoUrl: "https://www.cursor.com/favicon.ico",
    logoText: "Cu"
  },
  {
    name: "Codex",
    description: "OpenAI 的软件工程智能体，可协助编写代码、修复问题和处理工程任务。",
    category: "编程",
    website: "https://openai.com/codex/",
    themeColor: "#10a37f",
    logoUrl: "https://openai.com/favicon.ico",
    logoText: "C"
  },
  {
    name: "TRAE",
    description: "AI 编程工具，帮助开发者通过智能协作完成代码编写和项目构建。",
    category: "编程",
    website: "https://www.trae.ai/",
    themeColor: "#7c3aed",
    logoUrl: "https://www.trae.ai/favicon.ico",
    logoText: "T"
  },
  {
    name: "GitHub Copilot",
    description: "GitHub 的 AI 编程助手，提供代码补全、解释和开发流程辅助。",
    category: "编程",
    website: "https://github.com/features/copilot/",
    themeColor: "#24292f",
    logoUrl: "https://github.githubassets.com/favicons/favicon.svg",
    logoText: "GH"
  },
  {
    name: "Claude Code",
    description: "Anthropic 的 AI 编程智能体，可在终端和开发环境中协助构建与调试。",
    category: "编程",
    website: "https://www.anthropic.com/claude-code",
    themeColor: "#d97757",
    logoUrl: "https://www.anthropic.com/favicon.ico",
    logoText: "CC"
  },
  {
    name: "WorkBuddy",
    description: "CodeBuddy 产品体系中的办公智能体，面向文案、数据处理和自动化办公任务。",
    category: "办公",
    website: "https://www.codebuddy.cn/home/",
    themeColor: "#2368ff",
    logoUrl: "https://www.codebuddy.cn/favicon.ico",
    logoText: "W"
  },
  {
    name: "Coze",
    description: "字节跳动旗下 AI Agent 平台，适合创建、发布和管理智能体应用。",
    category: "Agent 平台",
    website: "https://www.coze.com/",
    themeColor: "#4f46e5",
    logoUrl: "https://www.coze.com/favicon.ico",
    logoText: "Co"
  },
  {
    name: "Notion AI",
    description: "Notion 内置 AI 助手，适合整理笔记、总结内容和提升办公效率。",
    category: "办公",
    website: "https://www.notion.com/product/ai",
    themeColor: "#111111",
    logoUrl: "https://www.notion.com/images/favicon.ico",
    logoText: "N"
  },
  {
    name: "Perplexity",
    description: "AI 搜索和问答工具，适合快速查资料并查看来源线索。",
    category: "搜索",
    website: "https://www.perplexity.ai/",
    themeColor: "#20b8cd",
    logoUrl: "https://www.perplexity.ai/favicon.ico",
    logoText: "P"
  },
  {
    name: "Midjourney",
    description: "AI 图像生成工具，可根据文字提示生成高质量视觉创意图片。",
    category: "设计",
    website: "https://www.midjourney.com/",
    themeColor: "#111827",
    logoUrl: "https://www.midjourney.com/favicon.ico",
    logoText: "M"
  },
  {
    name: "Canva",
    description: "面向大众的在线设计工具，提供 AI 辅助排版、图片和内容创作能力。",
    category: "设计",
    website: "https://www.canva.com/",
    themeColor: "#00c4cc",
    logoUrl: "https://www.canva.com/favicon.ico",
    logoText: "Ca"
  },
  {
    name: "Pencil",
    description: "AI 设计工具，可在可视化画布中完成界面设计，并将设计落地为代码",
    category: "设计",
    website: "https://www.pencil.dev/",
    themeColor: "#111827",
    logoUrl: "https://www.pencil.dev/favicon.ico",
    logoText: "P"
  },
  {
    name: "Figma",
    description: "协作式产品设计平台，提供设计、原型、交付和 AI 创作能力。",
    category: "设计",
    website: "https://www.figma.com/",
    themeColor: "#a259ff",
    logoUrl: "https://www.figma.com/favicon.ico",
    logoText: "F"
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

function createWebsiteLink(tool) {
  if (!tool.website) {
    return '<span class="website-link disabled">官网待确认</span>';
  }

  return `
    <a class="website-link" href="${tool.website}" target="_blank" rel="noopener noreferrer">
      访问官网
    </a>
  `;
}

function hexToRgb(hexColor) {
  const cleanHex = hexColor.replace("#", "");
  const colorNumber = parseInt(cleanHex, 16);

  return {
    red: (colorNumber >> 16) & 255,
    green: (colorNumber >> 8) & 255,
    blue: colorNumber & 255
  };
}

function createThemeStyle(tool) {
  const themeColor = tool.themeColor || "#0b7ce3";
  const rgb = hexToRgb(themeColor);

  return `--theme-color: ${themeColor}; --theme-rgb: ${rgb.red}, ${rgb.green}, ${rgb.blue};`;
}

function createToolLogo(tool) {
  if (!tool.logoUrl && !tool.logoText) {
    return "";
  }

  return `
    <span class="tool-logo">
      <img
        src="${tool.logoUrl}"
        alt="${tool.name} logo"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      <span class="logo-fallback" aria-hidden="true">${tool.logoText}</span>
    </span>
  `;
}

function createToolCard(tool) {
  const favorite = isFavorite(tool.name);
  const favoriteLabel = favorite ? `取消收藏 ${tool.name}` : `收藏 ${tool.name}`;
  const favoriteTitle = favorite ? "取消收藏" : "收藏";
  const favoriteIcon = favorite ? "♥" : "♡";

  return `
    <article class="tool-card" style="${createThemeStyle(tool)}">
      <div class="card-top">
        <div class="tool-title">
          ${createToolLogo(tool)}
          <h2>${tool.name}</h2>
        </div>
        <button
          class="favorite-button ${favorite ? "is-favorite" : ""}"
          type="button"
          data-tool-name="${tool.name}"
          aria-label="${favoriteLabel}"
          aria-pressed="${favorite}"
          title="${favoriteTitle}"
        >
          ${favoriteIcon}
        </button>
      </div>
      <p>${tool.description}</p>
      <div class="card-actions">
        <span class="tag">${tool.category}</span>
        ${createWebsiteLink(tool)}
      </div>
    </article>
  `;
}

function toolMatchesSearch(tool, keyword) {
  const searchableText = `${tool.name} ${tool.description} ${tool.category}`.toLowerCase();
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
    return "还没有收藏内容，请先点击工具卡片上的红心按钮";
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
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.toolName);
  }
});

renderTools();
