var dsCongViec = document.getElementById("danhsach");
var bieumau = document.getElementById("bieumau");
var input = document.getElementById("input");

var danhsach = [
  "Tập thể dục",
  "Học làm web",
  "Đọc sách",
  "Làm việc nhà",
  "Xem phim",
];

themVaoDanhSach();

function themCongViec(tenCongViec) {
  function clickCongViec(congviec) {
    congviec.classList.toggle("danhdau");
  }

  function click(nutbam) {
    nutbam.classList.toggle("tick");
  }

  var congviec = document.createElement("li");
  congviec.classList.add("dscon");
  congviec.innerHTML = `<span>${tenCongViec}</span>
        <span class="nutbam">
          <button class="nutbam_1"><i class="fas fa-check"></i></button>
          <button class="nutbam_2"><b>X</b></button>
        </span>`;
  //Thêm sự kiện
  congviec.addEventListener("click", function () {
    clickCongViec(congviec);
  });
  var nutbam = document.getElementsByClassName("nutbam_1[0]");
  // nutbam.addEventListener("click", function () {
  //   click(nutbam);
  // });

  return congviec;
}

function themVaoDanhSach() {
  for (var i = 0; i < danhsach.length; i++) {
    var congviec = themCongViec(danhsach[i]);
    dsCongViec.appendChild(congviec);
  }
}

bieumau.addEventListener("submit", function (event) {
  event.preventDefault();

  var congViecMoi = input.value;
  if (congViecMoi.trim().length > 0) {
    danhsach.push(congViecMoi);
    dsCongViec.innerHTML = "";
    themVaoDanhSach();

    input.value = "";
  }
});
