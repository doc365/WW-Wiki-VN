# Wuwa Fandom Wiki Website.

## Hướng dẫn cài đặt, cấu hình Project (dành cho dev).
- Đầu tiên thì Project này sẽ dùng tới Yarn thay vì Npm để cài đặt các Package, những ai cần kéo Source này về đề dev tiếp, code thêm thì cần chú ý tới những bước sau để có thể cài đặt Yarn và các commands cần thiết để cài đặt các package:
```bash
npm installl -g yarn # Cài đặt Yarn phiên bản mới nhất về máy.
yarn install # Tại folder WW-Wiki-VN sử dụng lệnh sau để cài đặt các package thông qua Yarn
```
- Giải thích một chút thì các Package manager sẽ sử dụng một file Lock để đồng bộ phiên bản các packages, và trong 1 project thì mọi người trong team không nên dùng Npm và Yarn lock file cùng một lúc, dễ gây ra xung đột trong khi cài đặt đồng bộ các gói. Lock file sẽ được đẩy lên git, ở đây là Yarn file nên chúng ta sẽ dùng Yarn để quản lý các packages.
- Sau khi dùng lệnh install thì Yarn sẽ cài đặt tất cả các Packages dành cho cả FrontEnd và BackEnd, việc cần làm tiếp theo chỉ là code thêm và chạy thử nghiệm.    