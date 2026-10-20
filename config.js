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
    title: "Chúc em ngày 20/10 thật vui ♡",
    body: "Anh chúc em ngày Phụ nữ Việt Nam lúc nào cũng xinh đẹp, vui vẻ, thật nhiều sức khỏe và may mắn.\n\nCảm ơn em vì đã cho anh được làm quen và có những kỷ niệm dễ thương như thế này. Mong mọi điều dịu dàng sẽ đến với em.\n\nChúc em luôn là phiên bản rạng rỡ nhất của chính mình nhé.",
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

  wishes: [
    "Chúc em luôn vui vẻ",
    "Chúc em luôn xinh đẹp",
    "Chúc em luôn yêu đời",
    "Chúc mừng ngày phụ nữ Việt Nam",
    "20/10",
    "Chúc em thật nhiều may mắn",
    "Mong em luôn hạnh phúc",
    "Em thật dễ thương",
    "Cảm ơn em đã xuất hiện",
    "Chúc em bình an và rạng rỡ",
    "Mong mọi điều dịu dàng đến với em"
  ],

  hintTap: "Chạm nhẹ để hé ảnh",
  hintPull: "Kéo ruy băng xuống để mở quà",
  pullPx: 130,
  flyHint: "Vuốt để nhìn quanh · Chạm phong thư góc phải để đọc thư"
};
