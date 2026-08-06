// TODO(백엔드 연동): 이 배열을 지우고 GET /products 응답으로 채울 것.
// 필드명은 이미 API 응답과 동일한 모양으로 맞춰둠 (id, name, category, price, salePrice, stock, rating, onSale, image).
const PRODUCTS = [
  { id: 1, name: "무선 노이즈캔슬링 이어폰", category: "전자기기", price: 189000, salePrice: 141800, stock: 14, rating: 4.7, onSale: true,  image: "img/ex_pic1.jpg" },
  { id: 2, name: "미니멀 데스크 스탠드",     category: "리빙",     price: 42000,  salePrice: 31500,  stock: 3,  rating: 4.5, onSale: true,  image: "img/ex_pic2.jpg" },
  { id: 3, name: "레더 크로스백",           category: "패션",     price: 96000,  salePrice: 72000,  stock: 7,  rating: 4.6, onSale: true,  image: "img/ex_pic3.jpg" },
  { id: 4, name: "휴대용 블루투스 스피커",   category: "전자기기", price: 59000,  salePrice: 44300,  stock: 5,  rating: 4.6, onSale: true,  image: "img/ex_pic1.jpg" },
  { id: 5, name: "세라믹 원형 화병",         category: "리빙",     price: 28000,  salePrice: null,   stock: 21, rating: 4.8, onSale: false, image: "img/ex_pic2.jpg" },
  { id: 6, name: "울 니트 가디건",           category: "패션",     price: 68000,  salePrice: null,   stock: 11, rating: 4.3, onSale: false, image: "img/ex_pic3.jpg" },
  { id: 7, name: "저자극 비건 선크림",       category: "뷰티",     price: 24000,  salePrice: null,   stock: 0,  rating: 4.4, onSale: false, image: "img/ex_pic1.jpg" },
  { id: 8, name: "수분 진정 앰플 세트",      category: "뷰티",     price: 45000,  salePrice: null,   stock: 18, rating: 4.9, onSale: false, image: "img/ex_pic2.jpg" },
];

function won(n) {
  return n.toLocaleString("ko-KR") + "원";
}

// TODO(백엔드 연동): 아래 줄을 지우고 GET /timesale/status 응답의 start_at으로 설정할 것.
// 지금은 동작 확인용으로 30초 후로 짧게 고정해둔 값.
const SALE_START = new Date(Date.now() + 30 * 1000);

// TODO(백엔드 연동): 클라이언트 시계 대신 서버가 내려주는 시작 여부를 기준으로 판단해야
// 사용자가 기기 시계를 조작해서 일찍 구매하는 걸 막을 수 있음.
function saleStarted() {
  return new Date() >= SALE_START;
}

function pad(n) { return String(n).padStart(2, "0"); }

function formatCountdown(ms) {
  const diff = Math.max(0, ms);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${d}일 ${pad(h)}:${pad(m)}:${pad(s)}`;
}

// 상품 썸네일(사진) 렌더링 — 홈 그리드, 상세 페이지에서 공용으로 사용.
// height는 호출부마다 다름(홈 카드 140, 상세 320).
function renderThumb(p, height) {
  return `
    <div class="thumb" style="height:${height}px;">
      ${p.onSale ? '<span class="badge-sale">SALE</span>' : ""}
      <img src="${p.image}" alt="${p.name}">
    </div>`;
}
