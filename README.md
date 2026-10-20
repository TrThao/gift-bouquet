# gift-bouquet

```bash
python3 -m http.server 8765
```

http://127.0.0.1:8765/index.html

## Đổi ảnh (kéo file là xong)

| Folder | Dùng cho | Cách đặt tên |
|--------|----------|--------------|
| `assets/photos/` | 6 ảnh trên bó hoa | `1.png` … `6.png` |
| `assets/photos-3d/` | ảnh bay màn 3D | tên gì cũng được |
| `assets/letter/` | 1 ảnh trên lá thư | `photo.png` (hoặc `.jpg`) |

## Đổi chữ / thư / nhạc

Sửa **`config.js`**:

- `letter` — tiêu đề + nội dung thư, chữ trên phong bì
- `wishes` — chữ bay màn 3D
- `music` — nhạc nền
