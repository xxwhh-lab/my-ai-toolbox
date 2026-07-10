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

const toolGrid = document.getElementById("toolGrid");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-button");

let selectedCategory = "全部";

function createToolCard(tool) {
  return `
    <article class="tool-card">
      <h2>${tool.name}</h2>
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

    return matchesCategory && matchesKeyword;
  });
}

function renderTools() {
  const visibleTools = getVisibleTools();

  toolGrid.innerHTML = visibleTools.map(createToolCard).join("");
  emptyMessage.classList.toggle("show", visibleTools.length === 0);
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".filter-button.active").classList.remove("active");
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderTools();
  });
});

searchInput.addEventListener("input", renderTools);

renderTools();
