var t;function e(){}Element.prototype.appendAfter=function(t){t.parentNode.insertBefore(this,t.nextSibling)};class n{constructor(t,e){this.$el=document.querySelector(t),this.options=e,this.#t()}#t(){var t;this.$el.innerHTML=(t=this.options,`
    <div class="container pt-1">
    <h1>${t.title}</h1>
        <div class="person-info">
            <h5>${t.text}</h5>
        </div>
    </div>
    `),(function(t=[]){if(0===t.length)return document.createElement("div");let n=document.createElement("span");return t.forEach(t=>{let s=document.createElement("button");s.textContent=t.text,s.classList.add("btn"),s.classList.add("btn-outline-info"),s.classList.add("w-100"),s.classList.add("mt-3"),s.onclick=t.handler||e,n.appendChild(s)}),n})(this.options.footerButtons).appendAfter(this.$el.querySelector(".person-info")),document.body.appendChild(this.$el)}clickHandler(t){let{type:e}=t.target.dataset}setContent(t){this.options=t,this.#t()}destroy(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}}class s{constructor(t,e){this.$el=document.querySelector(t),this.options=e,this.count=0,this.answersUser=[],this.#t(),this.#e()}#t(){this.$el.innerHTML=function(t){let e=t.curQ,n=t.lastQ,s=e/n*100;return`
    <div class="container pt-1">
                <div
                    class="progress position-relative mt-3"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="${s}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        class="progress-bar overflow-visible text-dark"
                        style="width: ${s}%"
                    ></div>
                    <small
                        class="justify-content-center text-dark d-flex position-absolute w-100"
                        >${`\u{412}\u{43E}\u{43F}\u{440}\u{43E}\u{441} ${e} \u{438}\u{437} ${n}`}</small
                    >
                </div>
                <div class="test-info">
                    <nav aria-label="..." class="mt-2">
                        <span>
                            <button
                                class="btn btn-outline-secondary ${1===e?"disabled":""}"
                                data-type="btn_prev"
                            >
                            &larr; \u{41D}\u{430}\u{437}\u{430}\u{434}
                            </button>
                        </span>
                    </nav>

                    <span class="d-flex justify-content-center mt-5 mb-5">
                        <p id="question_text">
                           ${t.text}
                        </p>
                    </span>

                    <span class="d-flex justify-content-between">
                        <span>
                            <button
                                class="btn btn-outline-info"
                                data-type="btn_yes" data-answ="true"
                            >
                                \u{414}\u{430}
                            </button>
                        </span>
                        <span>
                            <button
                                class="btn btn-outline-info"
                                data-type="btn_no" data-answ="false"
                            >
                                \u{41D}\u{435}\u{442}
                            </button>
                        </span>
                    </span>
                </div>
            </div>
    `}(this.#n(this.count))}#e(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler)}#n(t){let e=this.options.blockQuestions[t];return{curQ:e.number,lastQ:this.options.countQuestions,text:e.question,type:e.type}}setDataBLock(t){this.options.blockNumber=t.blockNumber,this.options.blockQuestions=t.blockQuestions,this.options.countQuestions=t.countQuestions,this.count=0,this.answersUser=[],this.#t()}clickHandler(t){let{type:e}=t.target.dataset;if("btn_yes"===e||"btn_no"===e){let{answ:e}=t.target.dataset;if(this.answersUser.push("true"===e),this.count++,this.count>=this.options.countQuestions){this.options.onFinishBlockQuestion({blockNumber:this.options.blockNumber,answers:this.answersUser});return}this.#t()}"btn_prev"===e&&(this.count--,this.#t())}destroy(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}}const i=t=>`
    <div
                    class="progress position-relative mt-3"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="${t.value}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        class="progress-bar overflow-visible text-dark  bg-success"
                        style="width: ${t.value}%"
                    ></div>
                    <small
                        class="justify-content-center text-dark d-flex position-absolute w-100"
                        >${t.text} : ${t.value}%</small
                    >
                </div>
                `;class u{constructor(t,e){this.$el=document.querySelector(t),this.options=e,this.#t()}#t(){this.$el.innerHTML=function(t){let e=t.dataOne?t.dataOne.map(i).join(""):"",n=t.dataTwo?t.dataTwo.map(i).join(""):"",s=t.dataOne?"":" d-none";return`
  <div class="container pt-1">
                <h1>\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442} \u{442}\u{435}\u{441}\u{442}\u{430}</h1>
                <div class="dominant ${s}">
                    <h5 class="text-center">\u{414}\u{43E}\u{43C}\u{438}\u{43D}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{438}\u{439} \u{442}\u{438}\u{43F}</h5>
                    ${e}
                </div>
                <div class="deficyt">
                    <h5 class="text-center">\u{414}\u{435}\u{444}\u{438}\u{446}\u{438}\u{442} \u{43D}\u{435}\u{439}\u{440}\u{43E}\u{43C}\u{435}\u{434}\u{438}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{432}</h5>
                     ${n}
                </div>
            </div>
                `}(this.options)}destroy(){this.$el.innerHTML=""}}t={blockOne:[{number:1,question:"Мне легко решать задачи в уме.",type:"Дофамин - память и внимание"},{number:2,question:"Я легко концентрируюсь на делах.",type:"Дофамин - память и внимание"},{number:3,question:"Я могу мыслить глубоко.",type:"Дофамин - память и внимание"},{number:4,question:"Я быстро соображаю.",type:"Дофамин - память и внимание"},{number:5,question:"Я не могу сосредоточиться из-за того, что делаю много дел одновременно.",type:"Дофамин - память и внимание"},{number:6,question:"Мне нравятся напряженные дискуссии.",type:"Дофамин - память и внимание"},{number:7,question:"У меня хорошее воображение.",type:"Дофамин - память и внимание"}],blockTwo:[{number:1,question:"У меня проблемы с фокусировкой внимания и концентрацией на задаче.",type:"Дофамин - память и внимание"},{number:2,question:"Мне нужен кофеин, чтобы проснуться.",type:"Дофамин - память и внимание"},{number:3,question:"Я думаю недостаточно быстро.",type:"Дофамин - память и внимание"},{number:4,question:"У меня трудности со способностью удерживать внимание.",type:"Дофамин - память и внимание"},{number:5,question:"Мне трудно справиться с заданием, даже если оно мне интересно.",type:"Дофамин - память и внимание"},{number:6,question:"Я медленно усваиваю новые идеи.",type:"Дофамин - Физиология"},{number:7,question:"Меня тянет на сладкое.",type:"Дофамин - Физиология"}]},new class{constructor(t,e){this.$el=document.querySelector(t),this.options=e,this.defaultData={isValid:{name:!0,age:!0},name:"",age:""},this.#t(this.defaultData),this.#e()}#t(t){this.$el.innerHTML=`
    <div class="container pt-1">
        <div class="d-flex">
        <img src="http://127.0.0.1:5500/logo.png" class="logo mt-3" alt="oopps">
        <h5 class="text_logo">\u{41D}\u{435}\u{439}\u{440}\u{43E}\u{43C}\u{430}\u{441}\u{441}\u{43E}\u{43D}\u{44B}</h5>
        </div>
    <h1>\u{414}\u{43E}\u{431}\u{440}\u{43E} \u{43F}\u{43E}\u{436}\u{430}\u{43B}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{43D}\u{430} \u{442}\u{435}\u{441}\u{442} \u{411}\u{440}\u{430}\u{432}\u{435}\u{440}\u{43C}\u{430}\u{43D}\u{430}</h1>
        <div class="person-info">
            <div class="form-floating mb-3">
                <input type="text" class="form-control ${t.isValid.name||"is-invalid"}" id="input_name" placeholder="\u{418}\u{432}\u{430}\u{43D}" data-type="input" value="${t.name}">
                <label for="input_name">\u{418}\u{43C}\u{44F}</label>
            </div>
            <div class="form-floating mb-3">
                <select class="form-select" id="select_gender">
                    <option selected="1" value="man">\u{41C}\u{443}\u{436}\u{441}\u{43A}\u{43E}\u{439}</option>
                    <option value="women">\u{416}\u{435}\u{43D}\u{441}\u{43A}\u{438}\u{439}</option>
                </select>
                <label for="select_gender">\u{41F}\u{43E}\u{43B}</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control  ${t.isValid.age||"is-invalid"}" id="input_age" placeholder="18" data-type="input" value="${t.age}">
                <label for="input_age">\u{412}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}</label>
            </div>
            <button class="btn btn-outline-info w-100 mt-2" data-type="start" id="start">
                \u{41D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{442}\u{435}\u{441}\u{442}
            </button>
        </div>
    </div>
    `}#e(){this.$btnStart=document.getElementById("start"),this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler)}clickHandler(t){let{type:e}=t.target.dataset;"start"===e&&this.startTest()}startTest(){let t=this.isCorrectFields(),e=this.$el.querySelector("#select_gender");delete t.isValid,this.options.onStart&&this.options.onStart(Object.assign(t,{gender:e.value}))}isCorrectFields(){let t=this.$el.querySelector("#input_name"),e=this.$el.querySelector("#input_age");this.$el.querySelectorAll('[data-type="input"]').forEach(t=>{t.classList.remove("is-invalid")});let n=!0,s={isValid:{name:!0,age:!0},name:t.value,age:e.value};if(0===t.value.length&&(s.isValid.name=!1,n=!1),(0>=+e.value||0===e.value.length)&&(s.isValid.age=!1,n=!1),!n){this.#t(s);return}return s}destroy(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}}("#app",{async onStart(t){await a(t)}});let o=null;async function a(e={}){document.querySelector("#app").innerHTML="",o=new n("#app",{title:"Определение доминирующего нейромедиатора",text:"Первый блок вопросов. Отвечайте на вопросы, основываясь на вашем текущем состоянии.",footerButtons:[{text:"Перейти ко второму блоку",async handler(){await c({blockNumber:2,blockQuestions:t.blockTwo,countQuestions:t.blockTwo.length})}},{text:"Далее",async handler(){await c({blockNumber:1,blockQuestions:t.blockOne,countQuestions:t.blockOne.length})}}]})}let l=null;async function r(e){let n={};l=new s("#app",{blockNumber:e.blockNumber,blockQuestions:e.blockQuestions,countQuestions:e.countQuestions,async onFinishBlockQuestion(e){console.log("Finish test block",e.blockNumber),1===e.blockNumber?(await c({blockNumber:2,blockQuestions:t.blockTwo,countQuestions:t.blockTwo.length}),n.blockOne=await d(e.answers,50)):2===e.blockNumber&&(n.blockTwo=await d(e.answers,[25,25,40,25]),new u("#app",{dataOne:n.blockOne,dataTwo:n.blockTwo}))}})}async function c(t){null===l&&(await r(t),console.log("test init")),2===t.blockNumber&&o.setContent({title:"Определение дефицита нейромедиаторов",text:"Второй блок вопросов. Отвечайте на вопросы, основываясь на вашем текущем состоянии.",footerButtons:[{text:"Далее",handler(){l.setDataBLock(t)}}]})}async function d(t,e){let n=0,s=0,i=0,u=0;return t.forEach((t,o)=>{t&&(o>=0&&o<(e[0]||50)?n++:o>=(e[0]||50)&&o<(e[0]||50)+(e[1]||50)?s++:o>=(e[0]||50)+(e[1]||50)&&o<(e[0]||50)+(e[1]||50)+(e[2]||50)?i++:o>=(e[0]||50)+(e[1]||50)+(e[2]||50)&&o<(e[0]||50)+(e[1]||50)+(e[2]||50)+(e[3]||50)&&u++)}),[{text:"Дофамин",value:n},{text:"Ацетилхолин",value:s},{text:"ГАМК",value:i},{text:"Серотонин",value:u}]}