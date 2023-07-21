let p = fetch("info.json");
p.then((value1) => {
  return value1.json();
}).then((value2) => {
  document.getElementById("head_a").innerHTML = value2[0].heading;
  document.getElementById("head2_a").innerHTML = value2[0].heading2;
  document.getElementById("contents1_a").innerHTML = value2[0].info;
  document.getElementById("contents2_a").innerHTML = value2[0].info2;
  document.getElementById("contents3_a").innerHTML = value2[0].info3;

  document.getElementById("head_b").innerHTML = value2[1].heading;
  document.getElementById("head2_b").innerHTML = value2[1].heading2;
  document.getElementById("contents1_b").innerHTML = value2[1].info;
  document.getElementById("contents2_b").innerHTML = value2[1].info2;
  document.getElementById("contents3_b").innerHTML = value2[1].info3;

  document.getElementById("head_c").innerHTML = value2[2].heading;
  document.getElementById("head2_c").innerHTML = value2[2].heading2;
  document.getElementById("contents1_c").innerHTML = value2[2].info;
  document.getElementById("contents2_c").innerHTML = value2[2].info2;
  document.getElementById("contents3_c").innerHTML = value2[2].info3;

  document.getElementById("head_d").innerHTML = value2[3].heading;
  document.getElementById("head2_d").innerHTML = value2[3].heading2;
  document.getElementById("contents1_d").innerHTML = value2[3].info1;
  document.getElementById("contents2_d").innerHTML = value2[3].info2;
  document.getElementById("contents3_d").innerHTML = value2[3].info3;

  document.getElementById("head_e").innerHTML = value2[4].heading;
  document.getElementById("head2_e").innerHTML = value2[4].heading2;
  document.getElementById("contents1_e").innerHTML = value2[4].info1;
  document.getElementById("contents2_e").innerHTML = value2[4].info2;
  document.getElementById("contents3_e").innerHTML = value2[4].info3;
});
function theme() {
  const theme = addEventListener("click", function () {
    let th = document.getElementById("th_btn");
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let archives = document.getElementById("archives");
    if (th.value != "undefined" && th.value != "LIGHT") {
      th.value = "LIGHT";
      th.id = "";
      box1.id = "";
      box2.id = "";
      box3.id = "";
      box4.id = "";
      box5.id = "";
      archives.id = "";
    } else {
      th.value = "DARK";
      th.id = "dark";
      box1.id = "dark";
      box2.id = "dark";
      box3.id = "dark";
      box4.id = "dark";
      box5.id = "dark";
      archives.id = "dark";
    }
  });
}
