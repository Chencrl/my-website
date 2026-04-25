// 精简的销售团队数据
const teamData = [
    {
        name: "陈雅婷",
        role: "美国及美洲线路",
        country: "🇺🇸 美国",
        products: ["电子产品", "服装鞋包"],
        wechat: "yating_freight",
        whatsapp: "+1 234 567 8901",
        telegram: "yating_chen",
        line: "yating.freight",
        facebook: "yating.freight",
        instagram: "yating_freight"
    },
    {
        name: "王建国",
        role: "欧洲及英国线路",
        country: "🇬🇧 英国",
        products: ["家具建材", "服装鞋包"],
        wechat: "jianguo_logistics",
        whatsapp: "+44 20 1234 5678",
        telegram: "jianguo_wang",
        line: "jianguo.freight",
        facebook: "jianguo.freight",
        instagram: "jianguo_freight"
    },
    {
        name: "刘思琪",
        role: "日本及亚太线路",
        country: "🇯🇵 日本",
        products: ["电子产品", "食品饮料"],
        wechat: "siqi_freight",
        whatsapp: "+81 3 1234 5678",
        telegram: "siqi_liu",
        line: "siqi.freight",
        facebook: "siqi.freight",
        instagram: "siqi_freight"
    },
    {
        name: "张明浩",
        role: "澳洲及新西兰线路",
        country: "🇦🇺 澳大利亚",
        products: ["食品饮料", "化工产品"],
        wechat: "minghao_logistics",
        whatsapp: "+61 2 1234 5678",
        telegram: "minghao_zhang",
        line: "minghao.freight",
        facebook: "minghao.freight",
        instagram: "minghao_freight"
    }
];

// 渲染团队卡片
function renderTeam() {
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = '';
    
    teamData.forEach(person => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.dataset.searchText = `${person.name} ${person.role} ${person.country} ${person.products.join(' ')}`.toLowerCase();
        
        card.innerHTML = `
            <div class="card-top">
                <div class="avatar">${person.name.charAt(0)}</div>
                <div class="card-info">
                    <h3>${person.name}</h3>
                    <div class="role">${person.role}</div>
                </div>
            </div>
            <div class="card-tags">
                <span class="tag">${person.country}</span>
                ${person.products.map(p => `<span class="tag">${p}</span>`).join('')}
            </div>
            <div class="social-grid">
                <button class="social-btn" onclick="showWechat('${person.wechat}')">
                    <span class="icon">💬</span>
                    <span>WeChat</span>
                </button>
                <button class="social-btn" onclick="openWhatsApp('${person.whatsapp}')">
                    <span class="icon">📱</span>
                    <span>WhatsApp</span>
                </button>
                <button class="social-btn" onclick="openTelegram('${person.telegram}')">
                    <span class="icon">✈️</span>
                    <span>Telegram</span>
                </button>
                <button class="social-btn" onclick="openLine('${person.line}')">
                    <span class="icon">💚</span>
                    <span>LINE</span>
                </button>
                <button class="social-btn" onclick="openFacebook('${person.facebook}')">
                    <span class="icon">👤</span>
                    <span>Facebook</span>
                </button>
                <button class="social-btn" onclick="openInstagram('${person.instagram}')">
                    <span class="icon">📷</span>
                    <span>Instagram</span>
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// 搜索功能
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach(card => {
        const searchText = card.dataset.searchText;
        if (searchText.includes(searchTerm) || searchTerm === '') {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// 实时搜索
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
});

// 社交媒体功能
function showWechat(wechatId) {
    alert(`微信号：${wechatId}\n\n已复制到剪贴板！`);
    navigator.clipboard.writeText(wechatId);
}

function openWhatsApp(number) {
    const msg = encodeURIComponent('你好，我想咨询国际货运服务');
    window.open(`https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
}

function openTelegram(username) {
    window.open(`https://t.me/${username}`, '_blank');
}

function openLine(lineId) {
    window.open(`https://line.me/ti/p/~${lineId}`, '_blank');
}

function openFacebook(username) {
    window.open(`https://www.facebook.com/${username}`, '_blank');
}

function openInstagram(username) {
    window.open(`https://www.instagram.com/${username}`, '_blank');
}
