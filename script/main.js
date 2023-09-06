// animation
let ph = document.querySelector(".ph");
let slider = document.querySelector(".slider");
let ani = document.querySelector("section.animation");

const tl = new TimelineMax();
tl.fromTo(ph, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(ph, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(ani, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
  ani.style.pointerEvents = "none";
}, 2.5);

//let input tag cannot submit
addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    console.warn("檢測到用戶按下ENTER，已經阻止提交表單");
  }
});

//let button inside the form cannot submit
let albt = document.querySelectorAll("button");
albt.forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    console.warn("檢測到用戶使用了按鈕，已經阻止提交表單");
  });
});

//change color when user selecting their grade and set their gpa
let as = document.querySelectorAll("select");
as.forEach((s) => {
  s.addEventListener("change", (e) => {
    // console.log(e);
    sp();
    cc(e.target);
  });
});

function cc(t) {
  if (t.value == "A" || t.value == "A-") {
    t.style.backgroundColor = "lightgreen";
    t.style.color = "black";
  } else if (t.value == "B" || t.value == "B-" || t.value == "B+") {
    t.style.backgroundColor = "yellow";
    t.style.color = "black";
  } else if (t.value == "C" || t.value == "C-" || t.value == "C+") {
    t.style.backgroundColor = "orange";
    t.style.color = "black";
  } else if (t.value == "D" || t.value == "D-" || t.value == "D+") {
    t.style.backgroundColor = "red";
    t.style.color = "black";
  } else if (t.value == "F") {
    t.style.backgroundColor = "grey";
    t.style.color = "white";
  } else {
    t.style.backgroundColor = "white";
  }
}

//set the gpa
function cv(g) {
  switch (g) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function sp() {
  let fl = document.querySelectorAll("form").length;
  let cr = document.querySelectorAll(".cc");
  let ss = document.querySelectorAll("select");
  let s = 0;
  let cs = 0;

  for (let i = 0; i < cr.length; i++) {
    if (!isNaN(cr[i].valueAsNumber)) {
      cs += cr[i].valueAsNumber;
    }
  }

  for (let i = 0; i < fl; i++) {
    if (!isNaN(cr[i].valueAsNumber)) {
      s += cr[i].valueAsNumber * cv(ss[i].value);
    }
  }

  let gpa;
  if (cs == 0) {
    gpa = (0.0).toFixed(2);
  } else {
    gpa = (s / cs).toFixed(2);
  }
  document.querySelector(".mark").innerHTML = gpa;
}

//change the gpa value after user change the score
let cr = document.querySelectorAll(".cc");
cr.forEach((c) => {
  c.addEventListener("change", () => {
    sp();
  });
});

//add form
let adbt = document.querySelector(".pb");
adbt.addEventListener("click", () => {
  let nf = document.createElement("form");
  let nd = document.createElement("div");
  nd.classList.add("grader");
  let ni1 = document.createElement("input");
  ni1.setAttribute("type", "text");
  ni1.setAttribute("placeholder", "你的學科");
  ni1.setAttribute("list", "op");
  ni1.classList.add("ct");

  ni2 = document.createElement("input");
  ni2.setAttribute("type", "text");
  ni2.setAttribute("placeholder", "班級號碼");
  ni2.classList.add("cn");

  ni3 = document.createElement("input");
  ni3.setAttribute("type", "number");
  ni3.setAttribute("placeholder", "你的學分");
  ni3.setAttribute("min", "0");
  ni3.setAttribute("max", "6");
  ni3.classList.add("cc");
  ni3.addEventListener("change", () => {
    sp();
  });

  let ns = document.createElement("select");
  ns.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  ns.appendChild(opt1);
  ns.appendChild(opt2);
  ns.appendChild(opt3);
  ns.appendChild(opt4);
  ns.appendChild(opt5);
  ns.appendChild(opt6);
  ns.appendChild(opt7);
  ns.appendChild(opt8);
  ns.appendChild(opt9);
  ns.appendChild(opt10);
  ns.appendChild(opt11);
  ns.appendChild(opt12);
  ns.appendChild(opt13);
  ns.addEventListener("change", (e) => {
    sp();
    cc(e.target);
  });

  let nb = document.createElement("button");
  nb.classList.add("de");
  let ni = document.createElement("i");
  ni.classList.add("fa-solid");
  ni.classList.add("fa-trash");
  nb.appendChild(ni);

  nd.appendChild(ni1);
  nd.appendChild(ni2);
  nd.appendChild(ni3);
  nd.appendChild(ns);
  nd.appendChild(nb);
  nf.appendChild(nd);
  document.querySelector(".ip").appendChild(nf);
  nf.style.animation = "su 0.5s ease forwards";

  nb.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "sd 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        sp();
      }
    );
  });
});

let rc = document.querySelectorAll(".de");
rc.forEach((t) => {
  t.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.classList.add("removes");
  });
});
rc.forEach((t) => {
  let f = t.parentElement.parentElement;
  f.addEventListener("transitionend", (e) => {
    e.target.remove();
    sp();
  });
});

//sort program
//do it tmr la
//idw to fix the fucking bug la -2023-9-3-23:02.
let deb = document.querySelector(".dec");
let acb = document.querySelector(".asc");

deb.addEventListener("click", () => {
  hs("descending");
});

acb.addEventListener("click", () => {
  hs("ascending");
});

function hs(d) {
  let g = document.querySelectorAll("div.grader");
  let oa = [];

  for (i = 0; i < g.length; i++) {
    let ct = g[i].children[0].value;
    let cn = g[i].children[1].value;
    let cc = g[i].children[2].value;
    let se = g[i].children[3].value;

    if (!(ct == "" && cn == "" && cc == "" && se == "")) {
      let co = {
        ct: ct,
        cn: cn,
        cc: cc,
        se: se,
      };
      oa.push(co);
    }
  }

  for (i = 0; i < oa.length; i++) {
    oa[i].sen = cv(oa[i].se);
  }

  if (oa.length == 0) {
    return;
  }

  oa = ms(oa);

  if (d == "descending") {
    oa = oa.reverse();
    // console.log(oa);
  }

  let ai = document.querySelector(".ip");
  ai.innerHTML = "";

  for (let i = 0; i < oa.length; i++) {
    ai.innerHTML += `<form>
    <div class="grader">
      <input
        type="text"
        placeholder="你的學科"
        class="ct"
        list="op"
        value="${oa[i].ct}"
      /><!--
      
      --><input type="text" placeholder="班級號碼" class="cn" value="${oa[i].cn}"/><!--
      
      --><input
        type="number"
        placeholder="你的學分"
        class="cc"
        min="0"
        max="6"
        value="${oa[i].cc}"
      /><!--
      
      --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
      ><!--
      
      --><button class="de">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </form>`;
  }

  g = document.querySelectorAll("div.grader");
  for (let i = 0; i < g.length; i++) {
    g[i].children[3].value = oa[i].se;
  }

  let as = document.querySelectorAll("select");
  as.forEach((s) => {
    cc(s);
    s.addEventListener("change", (e) => {
      sp();
      cc(e.target);
    });
  });

  let ac = document.querySelectorAll(".cc");
  ac.forEach((c) => {
    c.addEventListener("change", (e) => {
      sp();
    });
  });

  let at = document.querySelectorAll(".de");
  at.forEach((t) => {
    t.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "sd 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          sp();
        }
      );
    });
  });
}

//merge
function m(a, b) {
  let r = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i].sen > b[j].sen) {
      r.push(b[j]);
      j++;
    } else {
      r.push(a[i]);
      i++;
    }
  }

  while (i < a.length) {
    r.push(a[i]);
    i++;
  }
  while (j < b.length) {
    r.push(b[j]);
    j++;
  }

  return r;
}

function ms(arr) {
  if (arr.length == 0) {
    return;
  }

  if (arr.length == 1) {
    return arr;
  } else {
    let mi = Math.floor(arr.length / 2);
    let l = arr.slice(0, mi);
    let r = arr.slice(mi, arr.length);
    return m(ms(l), ms(r));
  }
}
