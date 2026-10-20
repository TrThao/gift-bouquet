# gift-bouquet

Mở bằng host tĩnh bất kỳ (GitHub Pages, Netlify…) — chỉ cần `index.html` + `config.js` + `assets/`.

Local:

```bash
python3 -m http.server 8765
```

http://127.0.0.1:8765/index.html

## Đổi ảnh

| Folder | Dùng cho | Khai báo trong `config.js` |
|--------|----------|----------------------------|
| `assets/photos/` | 6 ảnh trên bó hoa | `photos` |
| `assets/photos-3d/` | ảnh bay màn 3D | `scenePhotos` |
| `assets/letter/` | 1 ảnh trên lá thư | `letter.photo` |

Đặt file vào folder rồi ghi path tương ứng vào `config.js`.

## Đổi chữ / thư / nhạc

Sửa **`config.js`**:

- `letter` — tiêu đề + nội dung thư, chữ trên phong bì
- `wishes` — chữ bay màn 3D
- `music` — nhạc nền
