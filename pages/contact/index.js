import Component from "../../js/Component.js";

export default class Contact extends Component {

  constructor() {
    super({
            elements:[
              Component.createElement({type: 'h1', content: 'Contact'}),
              Component.createElement({type: 'h1', content: 'Email: IloveDev@gmail.com'}),
              Component.createElement({type: 'h1', content: 'Github: https://github.com/IloveDev'}),
              Component.createElement({type: 'h1', content: 'Phone: 010-1234-1234'}),
            ]
    });
  }

}

