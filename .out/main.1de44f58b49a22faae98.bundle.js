(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72),_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(71),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_libs_eventbus__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_libs_consts__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),Letter=function(_React$Component){Object(_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Letter,_React$Component);var _super=Object(_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Letter);function Letter(props){var _this;return Object(_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Letter),(_this=_super.call(this,props)).selected=void 0,_this.checkboxRef=void 0,_this.imageRef=void 0,_this.selected=!1,_this.checkboxRef=react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(),_this.imageRef=react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(),_this.subscribe(),_this}return Object(_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Letter,[{key:"subscribe",value:function subscribe(){_libs_eventbus__WEBPACK_IMPORTED_MODULE_5__.a.on(_libs_consts__WEBPACK_IMPORTED_MODULE_6__.a.SELECT_ALL,this.setCheckbox.bind(this)),_libs_eventbus__WEBPACK_IMPORTED_MODULE_5__.a.on(_libs_consts__WEBPACK_IMPORTED_MODULE_6__.a.CLICKED_UNSELECT_BUTTON,this.setCheckbox.bind(this))}},{key:"setCheckbox",value:function setCheckbox(value){var _this$checkboxRef,_this$checkboxRef$cur;this.selected!==value&&(null===(_this$checkboxRef=this.checkboxRef)||void 0===_this$checkboxRef||null===(_this$checkboxRef$cur=_this$checkboxRef.current)||void 0===_this$checkboxRef$cur||_this$checkboxRef$cur.click())}},{key:"selectClicked",value:function selectClicked(indexInArray){var _this$imageRef,_image$previousElemen,_image$previousElemen2,image=null===(_this$imageRef=this.imageRef)||void 0===_this$imageRef?void 0:_this$imageRef.current;null==image||image.classList.toggle("selected"),null==image||null===(_image$previousElemen=image.previousElementSibling)||void 0===_image$previousElemen||null===(_image$previousElemen2=_image$previousElemen.classList)||void 0===_image$previousElemen2||_image$previousElemen2.toggle("selected-avatar"),this.selected=!this.selected,this.selected?_libs_eventbus__WEBPACK_IMPORTED_MODULE_5__.a.emit(_libs_consts__WEBPACK_IMPORTED_MODULE_6__.a.SELECT_LETTER,indexInArray):_libs_eventbus__WEBPACK_IMPORTED_MODULE_5__.a.emit(_libs_consts__WEBPACK_IMPORTED_MODULE_6__.a.UNSELECT_LETTER,indexInArray)}},{key:"render",value:function render(){var _this2=this,_this$props=this.props,avatar=(_this$props.id,_this$props.avatar),sender=_this$props.sender,theme=_this$props.theme,snippet=_this$props.snippet,indexInArray=_this$props.indexInArray;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input",{className:"letter__checkbox",type:"checkbox",ref:this.checkboxRef,onClick:function onClick(){return _this2.selectClicked(indexInArray)}}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter__author"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img",{className:"letter__avatar",src:avatar,alt:"user's avatar"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter__select-image",ref:this.imageRef,onClick:function onClick(){return _this2.setCheckbox(!_this2.selected)}}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter__name",title:sender},sender)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter__content"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter__theme"},theme),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"letter__snippet"},snippet)))}}]),Letter}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Letter},279:function(module){module.exports=JSON.parse('{"emails":[{"id":1,"avatar":"http://i.pravatar.cc/300?u=1","sender":"Бединге","theme":"Carolina Hurricanes","snippet":"Люди всё время меня спрашивают: знаю ли я Тайлера Дёрдена?"},{"id":2,"avatar":"http://i.pravatar.cc/300?u=2","sender":"Лиаторп","theme":"Columbus Blue Jackets","snippet":"Шесть месяцев я не мог спать. Когда у тебя бессонница — всё нереально; всё очень далеко от тебя, всё это — копия, снятая с копии, которая в свою очередь снята с копии."},{"id":3,"avatar":"http://i.pravatar.cc/300?u=3","sender":"Хемнэс","theme":"New Jersey Devils","snippet":"Когда-то мы зачитывались порнографией — теперь каталогами IKEA."},{"id":4,"avatar":"http://i.pravatar.cc/300?u=4","sender":"Стольмен","theme":"New York Islanders","snippet":"Я обрёл свободу. Свобода есть утрата всяческих надежд."},{"id":5,"avatar":"http://i.pravatar.cc/300?u=5","sender":"Вемб","theme":"Philadelphia Flyers","snippet":"Каждый вечер я умирал и каждый вечер я рождался заново. Воскресал."},{"id":6,"avatar":"http://i.pravatar.cc/300?u=6","sender":"Бьюрста","theme":"Pittsburgh Penguins","snippet":"После боя шумовой фон жизни становится приглушённым. Тебе всё по силам."},{"id":7,"avatar":"http://i.pravatar.cc/300?u=7","sender":"Сальми","theme":"Washington Capitals","snippet":"Суть бойцовского клуба не в победах и поражениях. Слова тут пустой звук. Истеричные выкрики на неведомых языках, как в церкви пятидесятников. После боя проблем меньше не становилось, но тебе на них было начхать. Каждый чувствовал, что возродился."},{"id":8,"avatar":"http://i.pravatar.cc/300?u=8","sender":"Гру​ндталь","theme":"Boston Bruins","snippet":"Преодолеть страх. Отсечь лишнее. Отвергнуть всё, что не имеет подлинной ценности. И скользить."},{"id":9,"avatar":"http://i.pravatar.cc/300?u=9","sender":"Лиллонген","theme":"Detroit Red Wings","snippet":"Я сплю? Я спал? Тайлер приснился мне? Или я снюсь Тайлеру?"},{"id":10,"avatar":"http://i.pravatar.cc/300?u=10","sender":"Мюскмальва","theme":"Tampa Bay Lightning","snippet":"Меня повсюду преследовало ощущение дежавю. Куда бы я не приходил, мне казалось, что я там уже бывал. Это было похоже на погоню за невидимкой."}]}')},280:function(module,exports,__webpack_require__){__webpack_require__(281),__webpack_require__(431),module.exports=__webpack_require__(432)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return globalEventBus}));var _home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),globalEventBus=new(function(){function EventBus(){Object(_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,EventBus),this.events=void 0,this.events={}}return Object(_home_nataly_Documents_Hobby_task_mail_task_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(EventBus,[{key:"on",value:function on(event,listener){return(this.events[event]||(this.events[event]=[])).push(listener),this}},{key:"emit",value:function emit(event){for(var _len=arguments.length,arg=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)arg[_key-1]=arguments[_key];(this.events[event]||[]).slice().forEach((function(listener){return listener.apply(void 0,arg)}))}}]),EventBus}())},347:function(module,exports){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return EVENTBUS}));var EVENTBUS={RENDER_LETTERS:"render letters after deletion",RENDER_EMPTY:"render empty box",SELECT_ALL:"select all letters",SELECT_LETTER:"select one letter",UNSELECT_LETTER:"unselect one letter",CHANGE_MENU_BUTTON_VISIBILITY:"change visibility of unselect button from menu",CLICKED_UNSELECT_BUTTON:"clicked unselect button from menu",DELETE:"delete selected letters",CHANGE_MENU_CHECKBOX:"set checkbox in checked state if it is necessary",ALL_SELECTED_MECHANICALLY:"check if all letters were selected by user's hands",CHANGE_LIST_STATE:"change list state"}},432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(278);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(627)],module)}.call(this,__webpack_require__(433)(module))},627:function(module,exports,__webpack_require__){var map={"./components/letter/letter.stories.tsx":628,"./components/letter_list/letter_list.stories.tsx":632};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=627},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultLetter",(function(){return defaultLetter}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_letter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(116);__webpack_require__(629);__webpack_exports__.default={title:"Letter"};var defaultLetter=function defaultLetter(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_letter__WEBPACK_IMPORTED_MODULE_1__.a,{id:1,indexInArray:0,avatar:"http://i.pravatar.cc/300?u=1",sender:"William Shakespeare",theme:"The Tragical Historie of Hamlet",snippet:"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer. "})}},629:function(module,exports,__webpack_require__){},630:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/delete-24px.16793e81.svg"},631:function(module,exports,__webpack_require__){},632:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultLetter",(function(){return defaultLetter}));var classCallCheck=__webpack_require__(19),createClass=__webpack_require__(20),react=__webpack_require__(1),react_default=__webpack_require__.n(react),react_dom=__webpack_require__(89),react_dom_default=__webpack_require__.n(react_dom),assertThisInitialized=__webpack_require__(117),inherits=__webpack_require__(72),createSuper=__webpack_require__(71),letter_letter=__webpack_require__(116),eventbus=__webpack_require__(3),consts=__webpack_require__(4),letter_list=function(_React$Component){Object(inherits.a)(LetterList,_React$Component);var _super=Object(createSuper.a)(LetterList);function LetterList(props){var _this;return Object(classCallCheck.a)(this,LetterList),(_this=_super.call(this,props)).state=void 0,_this.state={toChange:!1},eventbus.a.on(consts.a.CHANGE_LIST_STATE,_this.changeSet.bind(Object(assertThisInitialized.a)(_this))),_this}return Object(createClass.a)(LetterList,[{key:"changeSet",value:function changeSet(){var _this2=this;console.log("changeSet"),this.setState((function(state){return{toChange:!_this2.state.toChange}}))}},{key:"render",value:function render(){console.log("render");var letterList=this.props.data;console.log(letterList);var letterListTemplate=this.generateTemplate(letterList);return react_default.a.createElement("div",{className:"letter-list"},letterListTemplate.length>0?letterListTemplate:react_default.a.createElement("div",{className:"empty"},"You don`t have any letters ):"))}},{key:"generateTemplate",value:function generateTemplate(letterList){return letterList.map((function(letter,index){return react_default.a.createElement(letter_letter.a,{key:letter.id.toString(),indexInArray:index,id:letter.id,avatar:letter.avatar,sender:letter.sender,theme:letter.theme,snippet:letter.snippet})}))}}]),LetterList}(react_default.a.Component),data=__webpack_require__(279),letters=new(function(){function Letters(){Object(classCallCheck.a)(this,Letters),this.isAllSelected=void 0,this.lettersActive=void 0,this.lettersToDelete=void 0,this.lettersActive=data.emails,this.lettersToDelete=[],this.isAllSelected=!1,this.subscribe()}return Object(createClass.a)(Letters,[{key:"subscribe",value:function subscribe(){eventbus.a.on(consts.a.DELETE,this.deleteSelectedLetters.bind(this)),eventbus.a.on(consts.a.SELECT_ALL,this.changeIsAllSelected.bind(this)),eventbus.a.on(consts.a.SELECT_LETTER,this.selectLetter.bind(this)),eventbus.a.on(consts.a.UNSELECT_LETTER,this.unselectLetter.bind(this))}},{key:"changeIsAllSelected",value:function changeIsAllSelected(){0===this.lettersToDelete.length&&eventbus.a.emit(consts.a.CHANGE_MENU_BUTTON_VISIBILITY),this.isAllSelected=!this.isAllSelected,this.lettersToDelete=[]}},{key:"deleteSelectedLetters",value:function deleteSelectedLetters(){var _this=this;if(console.log("deleteSelectedLetters"),this.isAllSelected)return this.deleteAllLetters();0!==this.lettersToDelete.length&&(eventbus.a.emit(consts.a.CHANGE_MENU_BUTTON_VISIBILITY),this.lettersToDelete.sort((function(a,b){return b-a})).map((function(elem){_this.lettersActive.splice(elem,1)})),this.lettersToDelete=[],console.log(this.lettersToDelete),console.log(this.lettersActive),eventbus.a.emit(consts.a.CHANGE_LIST_STATE))}},{key:"deleteAllLetters",value:function deleteAllLetters(){this.lettersActive.length=0,this.lettersToDelete=[],this.isAllSelected=!1,console.log("deleteAllLetters"),console.log(this.lettersActive),eventbus.a.emit(consts.a.CHANGE_LIST_STATE)}},{key:"selectLetter",value:function selectLetter(selectedIndex){this.isAllSelected||this.lettersToDelete.push(selectedIndex),this.isAllSelectedMechanical()&&(this.isAllSelected=!this.isAllSelected,eventbus.a.emit(consts.a.CHANGE_MENU_CHECKBOX)),1===this.lettersToDelete.length&&eventbus.a.emit(consts.a.CHANGE_MENU_BUTTON_VISIBILITY)}},{key:"unselectLetter",value:function unselectLetter(selectedIndex){if(this.isAllSelected)return this.selectAllExceptOne(selectedIndex);var index=this.lettersToDelete.indexOf(selectedIndex);this.lettersToDelete.splice(index,1),0===this.lettersToDelete.length&&eventbus.a.emit(consts.a.CHANGE_MENU_BUTTON_VISIBILITY)}},{key:"selectAllExceptOne",value:function selectAllExceptOne(index){var amountOfActiveLetters=this.lettersActive.length;this.isAllSelected=!this.isAllSelected,this.lettersToDelete=Array.from(Array(amountOfActiveLetters).keys()),this.lettersToDelete.splice(index,1),eventbus.a.emit(consts.a.CHANGE_MENU_CHECKBOX),0===this.lettersToDelete.length&&eventbus.a.emit(consts.a.CHANGE_MENU_BUTTON_VISIBILITY)}},{key:"isAllSelectedMechanical",value:function isAllSelectedMechanical(){return this.lettersToDelete.length===this.lettersActive.length&&!this.isAllSelected}},{key:"data",get:function get(){return this.lettersActive}}]),Letters}()),menu=function(_React$Component){Object(inherits.a)(Menu,_React$Component);var _super=Object(createSuper.a)(Menu);function Menu(props){var _this;return Object(classCallCheck.a)(this,Menu),(_this=_super.call(this,props)).isAllSelected=void 0,_this.syntheticClick=void 0,_this.checkboxRef=void 0,_this.unselectRef=void 0,_this.isAllSelected=!1,_this.checkboxRef=react_default.a.createRef(),_this.unselectRef=react_default.a.createRef(),_this.syntheticClick=!1,_this.subscribe(),_this}return Object(createClass.a)(Menu,[{key:"subscribe",value:function subscribe(){eventbus.a.on(consts.a.CHANGE_MENU_CHECKBOX,this.setCheckbox.bind(this)),eventbus.a.on(consts.a.CHANGE_MENU_BUTTON_VISIBILITY,this.changeVisibility.bind(this))}},{key:"setCheckbox",value:function setCheckbox(){var _this$checkboxRef,_this$checkboxRef$cur;this.syntheticClick=!0,null===(_this$checkboxRef=this.checkboxRef)||void 0===_this$checkboxRef||null===(_this$checkboxRef$cur=_this$checkboxRef.current)||void 0===_this$checkboxRef$cur||_this$checkboxRef$cur.click()}},{key:"changeVisibility",value:function changeVisibility(){var _this$unselectRef,_this$unselectRef$cur;null===(_this$unselectRef=this.unselectRef)||void 0===_this$unselectRef||null===(_this$unselectRef$cur=_this$unselectRef.current)||void 0===_this$unselectRef$cur||_this$unselectRef$cur.classList.toggle("hidden")}},{key:"unselectedChosen",value:function unselectedChosen(){eventbus.a.emit(consts.a.CLICKED_UNSELECT_BUTTON,!1)}},{key:"selectAllClicked",value:function selectAllClicked(){var _this$checkboxRef2,_this$checkboxRef2$cu,_this$checkboxRef2$cu2;null===(_this$checkboxRef2=this.checkboxRef)||void 0===_this$checkboxRef2||null===(_this$checkboxRef2$cu=_this$checkboxRef2.current)||void 0===_this$checkboxRef2$cu||null===(_this$checkboxRef2$cu2=_this$checkboxRef2$cu.nextElementSibling)||void 0===_this$checkboxRef2$cu2||_this$checkboxRef2$cu2.classList.toggle("selected-all"),this.isAllSelected=!this.isAllSelected,this.syntheticClick?this.syntheticClick=!this.syntheticClick:eventbus.a.emit(consts.a.SELECT_ALL,this.isAllSelected)}},{key:"deleteClicked",value:function deleteClicked(){eventbus.a.emit(consts.a.DELETE)}},{key:"render",value:function render(){var _this2=this;return react_default.a.createElement("div",{className:"menu"},react_default.a.createElement("input",{className:"menu__checkbox",ref:this.checkboxRef,type:"checkbox",onClick:function onClick(){return _this2.selectAllClicked()}}),react_default.a.createElement("div",{className:"menu__set-all",onClick:function onClick(){return _this2.selectAllClicked()}},"Выделить"),react_default.a.createElement("img",{src:__webpack_require__(630),className:"menu__delete",onClick:function onClick(){return _this2.deleteClicked()}}),react_default.a.createElement("div",{className:"menu__unselect hidden",onClick:function onClick(){return _this2.unselectedChosen()},ref:this.unselectRef}," Убрать выделение"))}}]),Menu}(react_default.a.Component);function Empty(){return react_default.a.createElement("div",{className:"empty"},"You don`t have any letters")}var reactHelper_ReactHelper=function(){function ReactHelper(isStorybook){Object(classCallCheck.a)(this,ReactHelper),this.isStorybook=void 0,this.isStorybook=isStorybook,eventbus.a.on(consts.a.RENDER_LETTERS,this.renderLetters.bind(this)),eventbus.a.on(consts.a.RENDER_EMPTY,this.renderEmptyPage.bind(this)),this.renderLetters()}return Object(createClass.a)(ReactHelper,[{key:"renderLetters",value:function renderLetters(){if(console.log("RERENDER"),this.isStorybook)return react_default.a.createElement("div",null,react_default.a.createElement(menu,null),react_default.a.createElement(letter_list,{data:letters.data}));react_dom_default.a.render(react_default.a.createElement("div",null,react_default.a.createElement(menu,null),react_default.a.createElement(letter_list,{data:letters.data})),document.getElementById("root"))}},{key:"renderEmptyPage",value:function renderEmptyPage(){if(this.isStorybook)return react_default.a.createElement(Empty,null);react_dom_default.a.render(react_default.a.createElement(Empty,null),document.getElementById("root"))}}]),ReactHelper}(),reactHelper=(__webpack_require__(631),new reactHelper_ReactHelper(!0)),defaultLetter=(__webpack_exports__.default={title:"LetterList"},function defaultLetter(){return reactHelper.renderLetters()})}},[[280,1,2]]]);
//# sourceMappingURL=main.1de44f58b49a22faae98.bundle.js.map