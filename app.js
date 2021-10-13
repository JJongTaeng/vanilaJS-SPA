import Contact from "./pages/contact";
import AboutMe from "./pages/about_me";

class App {
  $menu = document.querySelector('.menu-container');
  $app = document.querySelector('.app');

  currentMenu; // 현재 메뉴가 어떤 메뉴인지

  constructor() {
    this.menuClick();
  }

  menuClick() { // 메뉴 클릭 메서드
    this.$menu.addEventListener('click', (e) => {
      let element = e.target;
      while (!element.classList.contains('menu')) {
        element = element.parentNode;
        if (element.nodeName === 'BODY') {
          element = null;
          return;
        }
      }

      if (element.classList.contains('button1')) {
        this.pushMenu({ menu: '/about-me', component: AboutMe });
      }

      if (element.classList.contains('button2')) {
        this.pushMenu({ menu: '/contact', component: Contact })
      }

    })
  }

  pushMenu({ menu, component }) {
    if (this.currentMenu === menu) return; // 이미 해당 메뉴 상태라면 반환
    this.$app.replaceChildren();

    this.currentMenu = menu // 현재 메뉴 할당
    window.history.pushState({ path: menu }, '', menu); // history.pushState 로 url 주소변경
    this.createPage({ component })
  }

  createPage({ component }) {
    const page = new component(); // 페이지 인스턴스 생성
    page.attechElements(this.$app); // 페이지 렌더링
  }
}

const app = new App();

window.onpopstate = function (event) { // 사용자가 브라우저 이동 시 발생되는 이벤트
  const { path } = window.history.state

  switch (path) {
    case '/contact':
      app.$app.replaceChildren();
      app.createPage({ component: Contact });
      break;
    case '/about-me':
      app.$app.replaceChildren();
      app.createPage({ component: AboutMe });
      break;
  }

};

