import Component from "../../js/Component.js";

export default class AboutMe extends Component {

  constructor() {
    super({
      elements:[
        Component.createElement({type: 'h1', content: 'About Me'}),
        Component.createElement({type: 'h3', content: '안녕하세요! 저는 조인태입니다.'}),
        Component.createElement({type: 'h3', content: '저는 개발을 좋아합니다.'}),
        Component.createElement({type: 'h3', content: '기초를 중요하게 생각합니다. 개발의 기본은 기초! 튼튼한 기초는 성장에 큰 도움을 줍니다.'}),
      ]
    });
  }

}

