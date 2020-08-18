var dsCongViec = document.getElementById("danhsach");
var bieumau = document.getElementById("bieumau");
var input = document.getElementById("input");
var xoaTatCa = document.getElementById("nutbam_xoa");

var danhsach = [
  "Tập thể dục",
  "Học làm web",
  "Đọc sách",
  "Làm việc nhà",
  "Xem phim",
];
input.focus();

themVaoDanhSach();

function tickCongViec(tenCVCanTick) {
  var nutbam = document.getElementsByClassName("nutbam_1");

  for (var i = 0; i < danhsach.length; i++) {
    if (danhsach[i] === tenCVCanTick) {
      nutbam[i].classList.toggle("tick");
    }
  }
}

function xoaCongViec(tenCVCanXoa) {
  const danhsachmoi = [];
  for (var i = 0; i < danhsach.length; i++) {
    if (danhsach[i] !== tenCVCanXoa) {
      danhsachmoi.push(danhsach[i]);
    }
  }

  danhsach = danhsachmoi;
  themVaoDanhSach();
}

function themCongViec(tenCongViec) {
  var congviec = document.createElement("li");
  congviec.classList.add("dscon");
  congviec.innerHTML = `<span>${tenCongViec}</span>
        <span class="nutbam">
          <button onClick="tickCongViec('${tenCongViec}')" class="nutbam_1"><i class="fas fa-check"></i></button>
          <button onClick="xoaCongViec('${tenCongViec}')" class="nutbam_2" ><b>X</b></button>
        </span>`;

  return congviec;
}

function themVaoDanhSach() {
  dsCongViec.innerHTML = "";
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

    themVaoDanhSach();

    input.value = "";
  }
});

xoaTatCa.addEventListener("click", function () {
  danhsach = [];
  themVaoDanhSach();
});
