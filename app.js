const aiData = {
    academic: {
        title: "학술 및 연구 (Research & Academic)",
        desc: "논문 검색, 팩트 체크, 문헌 고찰에 특화된 AI 에이전트",
        agents: [
            {
                name: "Perplexity AI",
                company: "Perplexity",
                desc: "실시간 웹 검색과 인용구를 제공하여 할루시네이션(환각)을 최소화한 완벽한 연구 파트너입니다. 학술적 근거가 필요한 작업에 1순위로 추천합니다.",
                pros: "출처(인용) 명확 제공, 최신 정보 반영 속도 최상",
                cons: "창의적인 글쓰기 능력은 상대적으로 부족",
                tags: ["논문검색", "팩트체크", "출처표기"]
            },
            {
                name: "Elicit",
                company: "Ought",
                desc: "수천 편의 논문을 빠르게 분석하고 요약해주는 연구자 전용 AI입니다. 질문을 던지면 관련 논문들의 데이터를 표 형태로 정리해줍니다.",
                pros: "방대한 논문 데이터베이스 스캐닝, 연구 방법론 비교 용이",
                cons: "주로 영어 논문에 최적화됨",
                tags: ["문헌고찰", "데이터추출"]
            },
            {
                name: "Consensus",
                company: "Consensus NLP",
                desc: "사용자의 질문에 대해 과학적 근거가 있는 논문을 바탕으로 'Yes/No' 혹은 합의된 의견을 도출해주는 검색 엔진입니다.",
                pros: "과학적 사실 확인에 최적, 깔끔한 UI",
                cons: "깊이 있는 복합 추론보다는 단답형 팩트 체크에 유리",
                tags: ["과학적근거", "학술검색"]
            }
        ]
    },
    coding: {
        title: "개발 및 논리 사고 (Coding & Reasoning)",
        desc: "복잡한 알고리즘 설계, 코드 작성 및 디버깅에 압도적인 성능을 보이는 AI",
        agents: [
            {
                name: "Claude 3.5 Sonnet",
                company: "Anthropic",
                desc: "현재 현존하는 AI 중 코딩 성능 1위로 평가받습니다. 긴 문맥을 완벽하게 이해하며, 아티팩트(Artifact) 기능을 통해 웹 코드를 실시간으로 렌더링합니다.",
                pros: "압도적인 코딩 정확도, 인간다운 자연스러운 문장력",
                cons: "웹 검색 기능의 제한적 활용",
                tags: ["웹개발", "디버깅", "긴문맥이해"]
            },
            {
                name: "GPT-4o",
                company: "OpenAI",
                desc: "가장 범용적으로 뛰어난 성능을 자랑하는 모델입니다. 텍스트, 비전, 오디오를 실시간으로 처리하며 논리적 사고력이 매우 뛰어납니다.",
                pros: "다재다능함, 방대한 지식, 우수한 플러그인 생태계",
                cons: "가끔 발생하는 할루시네이션, 일관성 부족",
                tags: ["범용성", "데이터분석", "멀티모달"]
            },
            {
                name: "Gemini 1.5 Pro",
                company: "Google",
                desc: "최대 200만 토큰이라는 압도적인 컨텍스트 윈도우를 자랑합니다. 수천 페이지의 문서나 대규모 코드 베이스를 한 번에 분석할 수 있습니다.",
                pros: "초대형 문서/영상 처리 능력, 구글 워크스페이스 연동",
                cons: "섬세한 코딩 능력은 Claude에 다소 밀림",
                tags: ["대용량데이터", "영상분석"]
            }
        ]
    },
    ppt: {
        title: "프레젠테이션 및 문서 (PPT & Documents)",
        desc: "아이디어를 시각화하고 구조적인 프레젠테이션으로 완성해주는 AI",
        agents: [
            {
                name: "Gamma App",
                company: "Gamma",
                desc: "주제나 텍스트만 입력하면 1분 안에 세련된 PPT, 문서, 웹페이지를 생성합니다. 직관적인 블록 기반 편집과 미려한 템플릿이 강점입니다.",
                pros: "압도적인 디자인 퀄리티, 웹 브라우저 최적화, 쉬운 편집",
                cons: "세밀한 객체 위치 조정(기존 PPT 방식)에는 한계가 있음",
                tags: ["디자인자동화", "빠른초안", "웹기반"]
            },
            {
                name: "Tome",
                company: "Magical Tome",
                desc: "강력한 스토리텔링 중심의 프레젠테이션 도구입니다. DALL-E와 연동되어 내용에 맞는 독창적인 이미지를 함께 생성해줍니다.",
                pros: "스토리텔링 흐름 구성 탁월, 고품질 AI 이미지 생성 포함",
                cons: "한국어 폰트 및 디자인 최적화가 다소 아쉬움",
                tags: ["스토리텔링", "이미지생성"]
            },
            {
                name: "Copilot for PowerPoint",
                company: "Microsoft",
                desc: "Word 문서를 바탕으로 PPT를 자동 생성하거나, 기존 슬라이드의 디자인을 개선해줍니다. 기업용 환경에서 최고의 시너지를 냅니다.",
                pros: "기존 MS Office 생태계와의 완벽한 호환성",
                cons: "높은 구독료, 초기 아이디어 발상보다는 기존 문서 변환에 유리",
                tags: ["MS오피스", "문서변환"]
            }
        ]
    },
    creative: {
        title: "창작 및 시각 예술 (Creative Visuals)",
        desc: "상상력을 현실로 구현하는 이미지 및 비디오 생성 AI",
        agents: [
            {
                name: "Midjourney v6",
                company: "Midjourney",
                desc: "프롬프트 입력만으로 실사, 일러스트, 3D 렌더링 등 압도적인 퀄리티의 이미지를 생성하는 최고의 비전 AI입니다.",
                pros: "현존 최고의 이미지 디테일 및 예술성",
                cons: "Discord를 통한 사용법이 초보자에게 어려울 수 있음",
                tags: ["이미지생성", "예술성", "실사화"]
            },
            {
                name: "Sora (Preview)",
                company: "OpenAI",
                desc: "텍스트 프롬프트를 최대 1분 길이의 매우 사실적이고 일관된 동영상으로 변환하는 혁신적인 비디오 생성 모델입니다.",
                pros: "물리 법칙을 이해한 듯한 자연스러운 동영상 생성",
                cons: "아직 일반인 대중 공개 전 (제한적 접근)",
                tags: ["비디오생성", "물리엔진"]
            }
        ]
    }
};

const categoryNav = document.getElementById('category-nav');
const agentGrid = document.getElementById('agent-grid');
const categoryTitle = document.getElementById('current-category-title');
const categoryDesc = document.getElementById('current-category-desc');

// Initialize categories
function initCategories() {
    const categories = Object.keys(aiData);
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = aiData[cat].title.split(' ')[0] + ' AI'; // Shorten name for button
        btn.dataset.category = cat;
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Render content
            renderCategory(cat);
        });
        categoryNav.appendChild(btn);
    });

    // Initial render
    renderCategory(categories[0]);
}

function renderCategory(categoryKey) {
    const data = aiData[categoryKey];
    
    // Update headers
    categoryTitle.textContent = data.title;
    categoryDesc.textContent = data.desc;
    
    // Clear grid
    agentGrid.innerHTML = '';
    
    // Render cards
    data.agents.forEach((agent, index) => {
        const card = document.createElement('div');
        card.className = 'agent-card';
        
        let tagsHtml = agent.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <h3 class="agent-name">${agent.name}</h3>
                    <span class="agent-company">${agent.company}</span>
                </div>
                <div class="rank-badge">${index + 1}</div>
            </div>
            <p class="agent-desc">${agent.desc}</p>
            
            <div class="agent-metrics">
                <div class="metric pros">
                    <span class="metric-icon">▲</span>
                    <span><strong>강점:</strong> ${agent.pros}</span>
                </div>
                <div class="metric cons">
                    <span class="metric-icon">▼</span>
                    <span><strong>약점:</strong> ${agent.cons}</span>
                </div>
            </div>
            
            <div class="agent-footer">
                ${tagsHtml}
            </div>
        `;
        
        agentGrid.appendChild(card);
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', initCategories);
