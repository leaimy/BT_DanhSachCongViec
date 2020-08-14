var dsCongViec = document.getElementById("danhsach");

function themCongViec(tenCongViec) {
  var congviec = document.createElement("li");
  congviec.classList.add("dscon");
  congviec.innerHTML = `<span>${tenCongViec}</span>
        <span class="nutbam">
          <button class="nutbam_1"><i class="fas fa-check"></i></button>
          <button class="nutbam_2"><b>X</b></button>
        </span>`;
  // Thêm sự kiện
  congviec.addEventListener("click", function () {
    clickCongViec(congviec);
  });

  return congviec;
}

var congviec = themCongViec("Tập thể dục");
var congviec1 = themCongViec("Học làm web");
var congviec2 = themCongViec("Đọc sách");
var congviec3 = themCongViec("Làm việc nhà");
var congviec4 = themCongViec("Xem phim");

dsCongViec.appendChild(congviec);
dsCongViec.append(congviec1, congviec2, congviec3, congviec4);

function clickCongViec(congviec) {
  congviec.classList.toggle("danhdau");
}
