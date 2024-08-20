# Projede kullanılacak kütüphaneleri yüklüyoruz;

npm install veya yarn

# Proje node 22 versiyonunda geliştirilmiştir lütfen aşağıdaki kod ile kontrol edin gerekliyse güncelleyiniz;

node -v

# json serveri ayağa kaldırmadan önce json-server i global olarak yüklüyoruz;

npm i -g json-server

# Api istekleri için json-serveri ayağa kaldırıyoruz.

json-server --watch api/db.json --port 3001

# Projemizi başlatıyoruz.

npm start
