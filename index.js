document.addEventListener("DOMContentLoaded", () => {
  const projectData = [
    {
      id: "erp",
      name: "W.VERDE ERP",
      shortTitle: "패션 브랜드 웹 ERP 시스템",
      period: "2025.08 ~ 2025.09",
      team: "팀 프로젝트 / 팀장",
      stack: [
        "Java",
        "Spring",
        "Spring Security",
        "MyBatis",
        "MySQL",
        "JavaScript",
        "AJAX",
        "HTML",
        "CSS",
      ],
      intro:
        "패션 브랜드 기업을 가정하여 인사, 근태, 재무, 품질 관리 기능을 통합한 웹 ERP 시스템입니다.",
      role: [
        "프로젝트 팀장으로 일정 조율 및 역할 분배",
        "로그인 / 회원가입 / 비밀번호 재설정 등 보안 기능 구현",
        "인사 관리 및 근태 관리 핵심 로직 구현",
        "AJAX 기반 페이징 처리 구현",
      ],
      features: [
        "Spring Security 기반 로그인 및 인증 처리",
        "권한(Role)에 따른 접근 제어",
        "사원 정보 조회 / 상세 조회 / 수정 / 등록",
        "부서 변경 시 권한 자동 변경",
        "출퇴근 기록 조회 및 상태 자동 판별",
        "비동기 페이징 처리로 사용자 경험 개선",
      ],
      trouble:
        "데이터 수정 후 페이지 이동 시 값이 사라지는 문제를 해결하기 위해 AJAX 비동기 페이징과 프론트 임시 상태 저장 방식을 적용했습니다.",
      learned:
        "단순 기능 구현보다 인증/인가 구조와 데이터 흐름 설계가 더 중요하다는 점을 배웠고, 팀장 경험을 통해 협업 시 구조 설계와 일정 관리의 중요성을 체감했습니다.",
      previewImage: "assets/project1-main.png",
      screenshots: [
        {
          src: "assets/project1-login.png",
          title: "로그인 화면",
          desc: "Spring Security 기반 로그인과 권한별 접근 제어를 적용한 화면입니다.",
        },
        {
          src: "assets/project1-employee.png",
          title: "사원 관리 화면",
          desc: "사원 조회, 상세 조회, 수정 기능을 구현한 인사 관리 화면입니다.",
        },
        {
          src: "assets/project1-attendance.png",
          title: "근태 관리 화면",
          desc: "출퇴근 기록과 근무 상태를 확인할 수 있도록 구성한 화면입니다.",
        },
        {
          src: "assets/project1-pagination.png",
          title: "페이징 처리 화면",
          desc: "AJAX 기반 비동기 페이징 처리로 목록 탐색 편의성을 높인 화면입니다.",
        },
      ],
      github: "#",
    },
    {
      id: "space",
      name: "Space Rental Platform",
      shortTitle: "공간 예약 통합 플랫폼",
      period: "2025.10 ~ 2025.12",
      team: "팀 프로젝트",
      stack: [
        "Java",
        "Spring",
        "MyBatis",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      intro:
        "공간 예약을 핵심으로 ERP와 이커머스를 연계하여 공간, 예약, 부가서비스를 통합 관리할 수 있도록 설계한 플랫폼입니다.",
      role: [
        "마이페이지 기능 구현",
        "결제 기능 구현",
        "데이터베이스 구축 참여",
        "공간 검색 / 공간 상세 / 예약 기능 구현",
        "임대인 페이지(공간 등록 및 수정, 예약 확인/수락) 구현",
      ],
      features: [
        "공간 필터 검색 및 상세 정보 조회",
        "예약 일시 / 대여 목적 / 부가서비스 신청",
        "예약 불가 날짜 제약조건 검증",
        "결제 기능 연동",
        "임대인 공간 등록 / 수정 / 예약 승인",
        "사용자 역할에 따른 기능 분리",
      ],
      trouble:
        "검색, 상세, 예약, 결제 흐름이 끊기지 않도록 사용자 동선을 기준으로 화면 구성을 정리하고, 예약 불가 날짜 및 조건 위배 시 즉시 알림이 보이도록 처리했습니다.",
      learned:
        "단순 CRUD가 아니라 검색 → 상세 → 예약 → 결제까지 이어지는 서비스 흐름 설계가 중요하다는 점을 배웠고, 사용자 역할에 따른 기능 분리 경험을 쌓았습니다.",
      previewImage: "assets/project2-main.png",
      screenshots: [
        {
          src: "assets/project2-search.png",
          title: "공간 검색 화면",
          desc: "조건별 필터를 통해 원하는 공간을 탐색할 수 있도록 구현한 화면입니다.",
        },
        {
          src: "assets/project2-reservation.png",
          title: "예약 화면",
          desc: "예약 일시와 부가서비스를 선택할 수 있도록 구성한 화면입니다.",
        },
        {
          src: "assets/project2-payment.png",
          title: "결제 화면",
          desc: "예약 정보 확인 후 결제를 진행할 수 있도록 만든 화면입니다.",
        },
        {
          src: "assets/project2-host.png",
          title: "임대인 관리 화면",
          desc: "임대인이 공간 등록, 수정, 예약 확인을 할 수 있도록 구현한 화면입니다.",
        },
      ],
      github: "#",
    },
  ];

  const previewBox = document.querySelector(".preview");
  const contentBox = document.querySelector(".project-content");
  const screenBox = document.querySelector(".project-screen");
  const navBox = document.querySelector(".project-nav");
  const footer = document.querySelector("footer");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content");

  if (!previewBox || !contentBox || !screenBox || !navBox) return;

  let currentProjectIndex = 0;

  function createStackTags(stackArray) {
    return stackArray
      .map((stack) => `<span class="stack-tag">${stack}</span>`)
      .join("");
  }

  function createList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function createScreenshotItems(images, projectName) {
    return images
      .map(
        (item, index) => `
          <div class="shot-card">
            <button 
              class="shot-btn" 
              data-image="${item.src}" 
              data-title="${item.title || `${projectName} 화면 ${index + 1}`}"
              data-desc="${item.desc || ""}"
            >
              <img src="${item.src}" alt="${item.title || `${projectName} 화면 ${index + 1}`}" />
            </button>
            <div class="shot-caption">
              <strong>${item.title || `${projectName} 화면 ${index + 1}`}</strong>
            </div>
          </div>
        `,
      )
      .join("");
  }

  function renderProject(index) {
    const project = projectData[index];
    currentProjectIndex = index;

    previewBox.innerHTML = `
      <div class="project-preview-wrap">
        <img src="${project.previewImage}" alt="${project.shortTitle}" class="project-preview-image" />
        <div class="project-preview-text">
          <h2>${project.shortTitle}</h2>
          <p>${project.intro}</p>
        </div>
      </div>
    `;

    contentBox.innerHTML = `
      <div class="project-detail-wrap">
        <h2>${project.name}</h2>
        <p class="project-meta">${project.period} | ${project.team}</p>

        <div class="project-stack-wrap">
          ${createStackTags(project.stack)}
        </div>

        <div class="project-tab-header">
          <button class="detail-tab-btn active" data-tab="role">담당 역할</button>
          <button class="detail-tab-btn" data-tab="features">주요 기능</button>
          <button class="detail-tab-btn" data-tab="trouble">트러블 슈팅</button>
          <button class="detail-tab-btn" data-tab="learned">배운 점</button>
        </div>

        <div class="project-tab-panel active" data-panel="role">
          <section class="project-section">
            <h3>담당 역할</h3>
            <ul>
              ${createList(project.role)}
            </ul>
          </section>
        </div>

        <div class="project-tab-panel" data-panel="features">
          <section class="project-section">
            <h3>주요 기능</h3>
            <ul>
              ${createList(project.features)}
            </ul>
          </section>
        </div>

        <div class="project-tab-panel" data-panel="trouble">
          <section class="project-section">
            <h3>트러블 슈팅</h3>
            <p>${project.trouble}</p>
          </section>
        </div>

        <div class="project-tab-panel" data-panel="learned">
          <section class="project-section">
            <h3>배운 점</h3>
            <p>${project.learned}</p>
          </section>
        </div>

        <div class="project-link-wrap">
          <a href="${project.github}" target="_blank" class="project-link">GitHub 보기</a>
        </div>
      </div>
    `;

    screenBox.innerHTML = `
      <div class="project-screen-wrap">
        <h3 class="project-screen-title">화면 구성</h3>
        <p class="project-screen-desc">클릭하면 크게 볼 수 있습니다.</p>
        <div class="screenshot-list">
          ${createScreenshotItems(project.screenshots, project.shortTitle)}
        </div>
      </div>
    `;

    const navButtons = navBox.querySelectorAll(".project-tab-btn");
    navButtons.forEach((btn, btnIndex) => {
      btn.classList.toggle("active", btnIndex === index);
    });

    bindDetailTabs();
    bindScreenshotEvents();
  }

  function bindDetailTabs() {
    const tabButtons = contentBox.querySelectorAll(".detail-tab-btn");
    const panels = contentBox.querySelectorAll(".project-tab-panel");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.dataset.tab;

        tabButtons.forEach((btn) => btn.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));

        button.classList.add("active");
        contentBox
          .querySelector(`.project-tab-panel[data-panel="${targetTab}"]`)
          .classList.add("active");
      });
    });
  }

  function renderProjectNav() {
    navBox.innerHTML = `
      <div class="project-tab-wrap">
        ${projectData
          .map(
            (project, index) => `
              <button class="project-tab-btn ${index === 0 ? "active" : ""}" data-index="${index}">
                <span class="project-order">0${index + 1}</span>
                <span class="project-tab-title">${project.shortTitle}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    `;

    const tabButtons = navBox.querySelectorAll(".project-tab-btn");
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        renderProject(index);
      });
    });
  }

  function bindScreenshotEvents() {
    const shotButtons = document.querySelectorAll(".shot-btn");
    shotButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const imageSrc = button.dataset.image;
        const imageTitle = button.dataset.title;
        const imageDesc = button.dataset.desc;
        openImageModal(imageSrc, imageTitle, imageDesc);
      });
    });
  }

  function openImageModal(src, title, desc = "") {
    let modal = document.querySelector(".image-modal");

    if (!modal) {
      modal = document.createElement("div");
      modal.className = "image-modal";
      modal.innerHTML = `
        <div class="image-modal-backdrop"></div>
        <div class="image-modal-content">
          <button class="image-modal-close" aria-label="닫기">&times;</button>
          <h3 class="image-modal-title"></h3>
          <img class="image-modal-img" src="" alt="" />
          <p class="image-modal-desc"></p>
        </div>
      `;
      document.body.appendChild(modal);

      modal
        .querySelector(".image-modal-backdrop")
        .addEventListener("click", closeImageModal);
      modal
        .querySelector(".image-modal-close")
        .addEventListener("click", closeImageModal);
    }

    modal.querySelector(".image-modal-title").textContent = title;
    modal.querySelector(".image-modal-img").src = src;
    modal.querySelector(".image-modal-img").alt = title;
    modal.querySelector(".image-modal-desc").textContent = desc;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeImageModal() {
    const modal = document.querySelector(".image-modal");
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function handleActiveMenu() {
    let currentId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", target === currentId);
    });
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    footer.innerHTML = `<p>© ${year} 오재덕 Portfolio</p>`;
  }

  renderProjectNav();
  renderProject(0);
  renderFooter();
  handleActiveMenu();

  window.addEventListener("scroll", handleActiveMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImageModal();
    }

    if (event.key === "ArrowRight") {
      const nextIndex = (currentProjectIndex + 1) % projectData.length;
      renderProject(nextIndex);
    }

    if (event.key === "ArrowLeft") {
      const prevIndex =
        (currentProjectIndex - 1 + projectData.length) % projectData.length;
      renderProject(prevIndex);
    }
  });
});
