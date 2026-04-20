const aiData = {
    academic: {
        title: "학술 및 연구 (Research & Academic)",
        desc: "논문 검색, 팩트 체크, 대규모 데이터 분석에 특화된 2026년 최신 AI 에이전트",
        agents: [
            {
                name: "Perplexity AI (Pro)",
                company: "Perplexity",
                desc: "실시간 웹 검색과 인용구를 제공하여 할루시네이션(환각)을 최소화한 완벽한 연구 파트너입니다. 2026년 기준 딥서치(Deep Search) 기능으로 가장 깊이 있는 학술 검색을 제공합니다.",
                pros: "명확한 출처(인용) 제공, 최신 논문 실시간 반영",
                cons: "자체적인 창의적 가설 수립 능력은 상대적으로 부족",
                tags: ["논문검색", "팩트체크", "딥서치"]
            },
            {
                name: "Elicit",
                company: "Ought",
                desc: "수천 편의 논문을 빠르게 스캔하여 연구자의 질문에 맞는 데이터를 표 형태로 추출해주는 '문헌 고찰(Literature Review)' 전용 AI입니다.",
                pros: "방대한 논문 스캐닝, 연구 방법론/결과 자동 표 정렬",
                cons: "주로 영미권 논문에 최적화되어 있음",
                tags: ["문헌고찰", "데이터추출"]
            },
            {
                name: "Gemini 1.5 Pro",
                company: "Google",
                desc: "단일 챗봇을 넘어 최대 200만 토큰의 컨텍스트 윈도우를 바탕으로, 수십 권의 전공 서적이나 방대한 실험 데이터를 한 번에 분석할 수 있는 초대형 분석 엔진입니다.",
                pros: "압도적인 대용량 문서/영상 처리 능력",
                cons: "응답 속도가 다소 느릴 수 있음",
                tags: ["초대형컨텍스트", "통계분석", "멀티모달"]
            }
        ]
    },
    coding: {
        title: "개발 및 논리 사고 (Coding & Reasoning)",
        desc: "코드 자동 완성을 넘어 전체 프로젝트를 스스로 기획하고 구현하는 자율형 코딩 에이전트",
        agents: [
            {
                name: "Cursor",
                company: "Anysphere",
                desc: "2026년 현재 전 세계 개발자들의 표준(Default)이 된 AI-Native IDE입니다. 전체 코드베이스를 이해하고 다중 파일 수정 및 버그 예측을 수행합니다.",
                pros: "VS Code 기반의 친숙함, 완벽한 프로젝트 문맥 이해",
                cons: "유료 구독 모델 중심 (무료 사용량 제한)",
                tags: ["AI-IDE", "코드베이스이해", "멀티파일수정"]
            },
            {
                name: "Claude Code",
                company: "Anthropic",
                desc: "에디터 밖에서, 터미널/CLI 환경에 상주하며 개발자의 명령에 따라 깃헙 저장소를 분석하고 스스로 코드를 작성, 테스트하는 초강력 자율 에이전트입니다.",
                pros: "CLI 기반의 무한한 확장성, 압도적인 논리 추론력",
                cons: "터미널 환경에 익숙하지 않은 초보자에게는 진입 장벽 존재",
                tags: ["CLI에이전트", "자율실행", "터미널"]
            },
            {
                name: "GitHub Copilot Agent",
                company: "Microsoft / GitHub",
                desc: "단순한 코드 추천을 넘어, 이슈(Issue)를 읽고 기획안부터 코드 구현, 테스트 코드 작성까지 에디터 내에서 자율적으로 수행하는 통합 워크플로우 도구입니다.",
                pros: "GitHub 생태계 및 주요 에디터와의 완벽한 통합",
                cons: "때때로 개발자의 의도와 다른 방향으로 구조를 짤 수 있음",
                tags: ["워크플로우자동화", "이슈해결"]
            }
        ]
    },
    ppt: {
        title: "프레젠테이션 및 문서 (PPT & Documents)",
        desc: "아이디어를 즉시 시각화하고 전문가 수준의 구조적인 발표 자료로 완성해주는 AI",
        agents: [
            {
                name: "Alai (알라이)",
                company: "Alai",
                desc: "2026년 기준 속도와 디자인 퀄리티의 최고의 밸런스를 갖춘 AI 프레젠테이션 도구(Best Overall)입니다. '에이전트 모드'를 통해 슬라이드 레이아웃을 매우 유연하게 조정합니다.",
                pros: "고품질 디자인, 세밀한 객체 조정 가능, 빠른 초안 완성",
                cons: "상대적으로 덜 알려진 신흥 플랫폼",
                tags: ["디자인완성도", "에이전트모드", "초고속생성"]
            },
            {
                name: "Gamma App",
                company: "Gamma",
                desc: "주제나 텍스트만 입력하면 1분 안에 세련된 웹/문서형 프레젠테이션을 생성합니다. 모바일이나 웹 링크로 자료를 공유하는 '비동기적 공유'에 절대 강자입니다.",
                pros: "압도적인 웹 호환성, 문서-슬라이드 하이브리드 포맷",
                cons: "전통적인 .pptx 수정(로컬 오프라인 작업)에는 불편함",
                tags: ["웹문서공유", "쉬운편집"]
            },
            {
                name: "Plus AI",
                company: "Plus",
                desc: "Google Slides와 PowerPoint 환경 내부에 완벽히 통합되는 실무형 플러그인입니다. 별도의 툴을 배우기 싫고 기존 오피스 환경에서 AI의 도움만 받고 싶은 유저에게 최적입니다.",
                pros: "구글 슬라이드/PPT 네이티브 통합, 실무 템플릿 우수",
                cons: "디자인 자체의 파격적인 창의성은 Gamma 등에 비해 낮음",
                tags: ["구글슬라이드", "PPT플러그인"]
            }
        ]
    },
    creative: {
        title: "창작 및 시각 예술 (Creative Visuals)",
        desc: "프롬프트를 상상 이상의 실사 이미지와 비디오로 구현하는 비전 AI",
        agents: [
            {
                name: "Midjourney v6",
                company: "Midjourney",
                desc: "현재까지도 예술성, 텍스트 렌더링, 극사실주의 실사 구현에서 타의 추종을 불허하는 최고의 이미지 생성 AI입니다.",
                pros: "현존 최고의 디테일, 조명 및 질감 표현력",
                cons: "프롬프트 엔지니어링의 난이도가 다소 높음",
                tags: ["초실사화", "예술디자인"]
            },
            {
                name: "Sora / Runway Gen-3",
                company: "OpenAI / Runway",
                desc: "텍스트나 이미지를 입력하면 현실의 물리 법칙을 정밀하게 시뮬레이션한 고품질의 동영상을 생성해주는 비디오 에이전트들입니다.",
                pros: "물리 법칙 이해, 영화 수준의 카메라 워크 구현",
                cons: "생성에 필요한 컴퓨팅 비용 및 구독료가 매우 높음",
                tags: ["비디오생성", "물리시뮬레이션"]
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
    // Clear existing buttons to prevent duplication during hot-reloads
    categoryNav.innerHTML = '';
    
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
