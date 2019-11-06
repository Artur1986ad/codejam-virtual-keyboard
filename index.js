let wrapper = document.createElement('div');
let blockarea = document.createElement('textarea');
let blockkeyboard = document.createElement('div');

let styleelement = `background-color: #D1BC8A`;

wrapper.className = "wrapper";
blockarea.className = "blockarea";
blockkeyboard.className = "keyboard";
wrapper.style.cssText = `width: 1200px;margin: 0 auto;
`;
blockarea.style.cssText = ` display : block ; margin : 0 auto ; width : 670px ; height : 220px `;
blockkeyboard.style.cssText = `margin : 20px auto ; width : 670px ; height : 220px ;display : grid ; grid-template-columns : repeat(46, 1fr) ; grid-template-rows : repeat(5, 1fr) ; grid-gap : 5px ;`;
document.body.append(wrapper);
wrapper.append(blockarea);
wrapper.append(blockkeyboard);

const arr = [
    ["Backquote", "`","~","ё","Ё"],
    ["Digit1", "1","!","1","!"],
    ["Digit2", "2","@","2",'"'],
    ["Digit3", "3","#","3","№"],
    ["Digit4", "4","$","4",";"],
    ["Digit5", "5","%","5","%"],
    ["Digit6", "6","^","6",":"],
    ["Digit7", "7","&","7","?"],
    ["Digit8", "8","*","8","*"],
    ["Digit9", "9","(","9","("],
    ["Digit0", "0",")","0",")"],
    ["Minus", "-","_","-","_"],
    ["Equal", "=","+","=","+"],
    ["Backspace", "Backspace","Backspace","Backspace","Backspace"],
    ["Tab", "Tab","Tab","Tab","Tab"],
    ["KeyQ", "q","Q","й","Й"],
    ["KeyW", "w","W","ц","Ц"],
    ["KeyE", "e","E","у","У"],
    ["KeyR", "r","R","к","К"],
    ["KeyT", "t","T","е","Е"],
    ["KeyY", "y","Y","н","Н"],
    ["KeyU", "u","U","г","Г"],
    ["KeyI", "i","I","ш","Ш"],
    ["KeyO", "o","O","щ","Щ"],
    ["KeyP", "p","P","з","З"],
    ["BracketLeft", "[","{","х","Х"],
    ["BracketRight", "]","}","ъ","Ъ"],
    ["Backslash", "\\","|","\\","/"],
    ["Delete", "Del", "Del", "Del", "Del"],
    ["CapsLock", "CapsLock","CapsLock","CapsLock","CapsLock"],
    ["KeyA", "a","A","ф","Ф"],
    ["KeyS", "s","S","ы","Ы"],
    ["KeyD", "d","D","в","В"],
    ["KeyF", "f","F","а","А"],
    ["KeyG", "g","G","п","П"],
    ["KeyH", "h","H","р","Р"],
    ["KeyJ", "j","J","о","О"],
    ["KeyK", "k","K","л","Л"],
    ["KeyL", "l","L","д","Д"],
    ["Semicolon", ";",":","ж","Ж"],
    ["Quote", "'",'"',"э","Э"],
    ["Enter", "\n","\n","\n","\n"],
    ["ShiftLeft", "Shift","Shift","Shift","Shift"],
    ["KeyZ", "z","Z","я","Я"],
    ["KeyX", "x","X","ч","Ч"],
    ["KeyC", "c","C","с","С"],
    ["KeyV", "v","V","м","М"],
    ["KeyB", "b","B","и","И"],
    ["KeyN", "n","N","т","Т"],
    ["KeyM", "m","M","ь","Ь"],
    ["Comma", ",","<","б","Б"],
    ["Period", ".",">","ю","Ю"],
    ["Slash", "/","?",".",","],
    ["Arrowup", "\u2191","\u2191","\u2191","\u2191"],
    ["ShiftRight", "Shift","Shift","Shift","Shift"],
    ["ControlLeft", "Ctrl","Ctrl","Ctrl","Ctrl"],
    ["WinLeft", "Win","Win","Win","Win"],
    ["AltLeft", "Alt","Alt","Alt","Alt"],
    ["Space", " "," "," "," "],
    ["AltRight", "Alt","Alt","Alt","Alt"],
    ["WinRight", "Win","Win","Win","Win"],
    ["ControlRight", "Ctrl","Ctrl","Ctrl","Ctrl"],
    ["Arrowleft", "\u2190","\u2190","\u2190","\u2190"],
    ["Arrowdown", "\u2193","\u2193","\u2193","\u2193"],
    ["Arrowright", "\u2192","\u2192","\u2192","\u2192"]
  ]

  /*=======Constructor_element========*/
  let lang = +localStorage.getItem("lang");
  class Key{
    constructor(value, elem){
      this.value = value;
      this.elem = elem;
      elem.addEventListener("mousedown", ()=>{
        this.keyon();
      });
      elem.addEventListener("mouseup", ()=>{
        this.keyoff();
      });
    }
    keyon(){
      if (!this.elem.classList.contains("active")){
        this.elem.style.background = "#FFA500";
        this.speak();
      }
      else {
        this.speak();
      }
    }
    keyoff(){
      this.elem.style.background = "#808080";
    }
    speak(){
      if (this.value[1] === "Backspace") {
        blockarea.value = blockarea.value.slice(0, -1);
      }
      else if(this.value[1] !== "Ctrl" && this.value[1] !== "Meta" && this.value[1] !== "Alt" && this.value[1] !== "Shift" && this.value[1] !== "CapsLock" && this.value[1] !== "Tab" && this.value[1] !== "Del"){
        blockarea.value += this.value[lang];
      }
    }
  }

  /*=================Constructor_end=========*/

  function update(){
    for (let item of keyArr) {
      if(item.value[lang] === "\n") item.elem.textContent = "Enter";
      else item.elem.textContent = item.value[lang];
    }
  }

  let keyArr = [];
  let shiftcount = 0;
for (let item of arr) {
  let el;
  el = document.createElement("div");
  el.style.cssText = `class = "item" ;width: 100%;
  height: 100%;
  display: flex;
  grid-column-end: span 3;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #808080;
  cursor: pointer;`
  keyArr.push(new Key(item, el))
  if(item[0] === "Backspace") {
    el.style.gridColumnEnd = "span " + 7;
  }
  else if (item[0] === "Enter") {
    el.style.gridColumnEnd = "span " + 5;
  }
  else if(item[0] === "CapsLock"){
    el.style.gridColumnEnd = "span " + 8;
  } 
  else if(item[0] === "Tab"){
    el.style.gridColumnEnd = "span " + 4;
  }
    if(item[1] === "Shift"){
      if(shiftcount === 0){
      el.style.gridColumnEnd = "span " + 10;
      shiftcount++;
    }
    else if(shiftcount === 1) {
      el.style.gridColumnEnd = "span ";
    }
    
  }
  else if(item[0] === "Space"){
    el.style.gridColumnEnd = "span " + 19;
  }
  blockkeyboard.append(el);
}

update();

function getKey(code){
  for (const item of keyArr) {
    if(item.value[0] === code) {
      return item;
    }
  }
  return -1;
}

document.addEventListener("keydown", function(e){
  e.preventDefault();
  let elem = getKey(e.code);
  if (elem != -1){
    elem.keyon();
  }
  if (e.shiftKey && e.altKey) {
    changeLang();
    update();
  }
  else if (e.shiftKey && lang % 2 !== 0) {
    lang++;
    update();
    console.log(lang)
  }
});
document.addEventListener("keyup", function(e){
  if (e.key === "Shift" && lang % 2 == 0) {
    lang--;
    update();
  }
  let elem = getKey(e.code);
  if (elem != -1){
    elem.keyoff();
  }
});