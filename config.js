/**
 * Chữ / thư / nhạc — sửa ở đây.
 * Ảnh: kéo file vào folder, không cần đụng index.html.
 *
 *   assets/photos/      → 6 ảnh trên bó hoa (1.png … 6.png)
 *   assets/photos-3d/   → ảnh bay màn 3D (kéo vào, tên gì cũng được)
 *   assets/letter/      → 1 ảnh trên lá thư (photo.png / photo.jpg)
 */
export const CONFIG = {
  letter: {
    envTo: "Dành tặng em",
    envDate: "20/10",
    envSub: "Chúc mừng ngày 20/10",
    title: "Chúc em ngày 20/10 vui vẻ ♡",
    body: "Anh chúc em ngày Phụ nữ Việt Nam thật vui, luôn xinh đẹp, khỏe mạnh và nhiều may mắn.\n\nMới được làm quen em được vài ngày thôi, nên anh chỉ muốn gửi một lời chúc nhỏ cho ngày đặc biệt này.\n\nMong em có một ngày 20/10 thật nhẹ nhàng và dễ chịu nhé.",
    photo: "assets/letter/photo.png"
  },

  photos: [
    "assets/photos/1.png",
    "assets/photos/2.png",
    "assets/photos/3.png",
    "assets/photos/4.png",
    "assets/photos/5.png",
    "assets/photos/6.png"
  ],

  photoOrder: [0, 1, 2, 3, 4, 5],

  scenePhotosDir: "assets/photos-3d",

  music: "assets/music.mp3",

  // Câu ngắn (≤ 20 ký tự) sẽ xếp dày hơn, câu dài xếp thưa hơn — nên trộn cả hai.
  wishes: [
    "Chúc em ngày 20/10 vui vẻ",
    "Chúc em xinh đẹp",
    "Luôn khỏe mạnh",
    "Chúc mừng ngày Phụ nữ Việt Nam",
    "20/10",
    "Nhiều may mắn",
    "Mong em luôn vui vẻ",
    "Chúc em yêu đời",
    "Chúc em bình an",
    "Mong mọi điều tốt lành đến với em",
    "Chúc mừng 20/10",
    "Vui vẻ nhé"
  ],

  hintTap: "Chạm nhẹ để hé ảnh",
  hintPull: "Kéo ruy băng xuống ↓ để mở quà",
  pullPx: 110,
  flyHint: "Vuốt để nhìn quanh · Chạm phong thư góc phải để đọc thư"
};
