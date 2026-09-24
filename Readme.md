# SmartVision AI

## 1. Pengenalan Projek

SmartVision AI ialah sistem *Computer Vision* yang dibangunkan sebagai *Proof of Concept (PoC)* untuk mengenal pasti objek menggunakan teknologi *Artificial Intelligence (AI)*.

Sistem ini menggunakan **Google Teachable Machine** untuk melatih model *Image Classification*. Pengguna boleh menggunakan kamera komputer untuk mengimbas sesuatu objek dan sistem akan membuat ramalan berdasarkan kelas objek yang telah dilatih.

Sistem akan memaparkan nama objek yang dikesan serta nilai *confidence* bagi menunjukkan tahap keyakinan model terhadap ramalan tersebut.

---

## 2. Objektif Projek

Objektif pembangunan SmartVision AI adalah:

1. Membangunkan sistem pengenalpastian objek menggunakan teknologi *Computer Vision*.
2. Menggunakan Google Teachable Machine untuk membina dan melatih model *Image Classification*.
3. Membolehkan pengguna mengimbas objek menggunakan kamera secara masa nyata.
4. Memaparkan kelas objek dan nilai *confidence* berdasarkan keputusan model.
5. Membina aplikasi web yang mudah digunakan untuk demonstrasi model AI.

---

## 3. Teknologi yang Digunakan

Teknologi dan perisian yang digunakan dalam projek ini ialah:

* HTML
* CSS
* JavaScript
* Google Teachable Machine
* TensorFlow.js
* Visual Studio Code
* GitHub
* Live Server

---

## 4. Kelas Objek

Model SmartVision AI mempunyai lima kelas objek:

| Bil | Kelas Objek   |
| --- | ------------- |
| 1   | Perfume       |
| 2   | Kereta Mainan |
| 3   | Medal         |
| 4   | Kad           |
| 5   | Duit          |

Model akan membuat ramalan berdasarkan lima kelas tersebut.

---

## 5. Kaedah Pembangunan Model

Model *Image Classification* dibangunkan menggunakan Google Teachable Machine.

Proses pembangunan model adalah seperti berikut:

### Langkah 1: Pengumpulan Data

Imej dikumpulkan untuk setiap kelas objek. Imej yang digunakan mempunyai variasi dari segi kedudukan, jarak, sudut dan keadaan persekitaran bagi membantu model mengenal pasti objek dengan lebih baik.

### Langkah 2: Pembahagian Kelas

Imej dibahagikan kepada lima kelas:

* Perfume
* Kereta Mainan
* Medal
* Kad
* Duit

### Langkah 3: Training Model

Semua imej dimasukkan ke dalam Google Teachable Machine dan digunakan untuk melatih model *Image Classification*.

### Langkah 4: Pengujian

Model diuji menggunakan objek yang sebenar melalui kamera bagi melihat sama ada model dapat mengenal pasti objek dengan betul.

### Langkah 5: Export Model

Model yang telah siap dilatih dieksport dalam format **TensorFlow.js** dan digunakan dalam aplikasi web SmartVision AI.

---

## 6. Cara Sistem Berfungsi

Sistem SmartVision AI berfungsi melalui beberapa proses:

**Kamera → Input Imej → Model AI → Prediction → Nama Objek + Confidence**

Apabila pengguna menekan butang **Mula Kamera**, sistem akan meminta akses kepada kamera.

Kamera akan mengambil imej secara masa nyata. Imej tersebut dihantar kepada model *Teachable Machine* untuk dibuat ramalan.

Model akan membandingkan imej dengan lima kelas yang telah dilatih dan memilih kelas dengan nilai kebarangkalian yang paling tinggi.

Keputusan akan dipaparkan pada bahagian **AI Prediction**.

---

## 7. Paparan Sistem

Sistem mempunyai dua bahagian utama:

### Live Camera

Bahagian ini digunakan untuk memaparkan kamera secara masa nyata. Pengguna boleh menekan butang **Mula Kamera** untuk memulakan proses pengimbasan.

### AI Prediction

Bahagian ini memaparkan:

* Objek yang dikesan
* Nilai *confidence*
* Senarai kelas objek
* Bar *confidence*

Jika nilai *confidence* terlalu rendah, sistem akan memaparkan:

**Objek Tidak Dikenali**

---

## 8. Struktur Fail Projek

Struktur fail projek adalah seperti berikut:

SmartVision/

├── index.html

├── style.css

├── script.js

├── README.md

└── my_model/

    ├── model.json

    ├── metadata.json

    └── fail model (.bin)

---

## 9. Penerangan Fail

### index.html

Fail utama yang mengandungi struktur dan kandungan halaman web SmartVision AI.

### style.css

Digunakan untuk mengawal reka bentuk, warna, susunan, butang, kad dan paparan responsif sistem.

### script.js

Mengawal fungsi sistem seperti:

* Memulakan kamera
* Memuatkan model AI
* Membuat prediction
* Mengira confidence
* Memaparkan keputusan
* Reset kamera

### my_model

Folder yang mengandungi model Teachable Machine yang telah dieksport dalam format TensorFlow.js.

---

## 10. Keperluan Sistem

Untuk menjalankan projek ini, pengguna memerlukan:

* Komputer atau laptop
* Web browser
* Kamera
* Sambungan Internet
* Visual Studio Code
* Extension Live Server

---

## 11. Cara Menjalankan Sistem

### Langkah 1

Download atau *clone* repository SmartVision.

### Langkah 2

Buka folder projek menggunakan Visual Studio Code.

### Langkah 3

Pastikan folder `my_model` berada dalam folder utama projek.

### Langkah 4

Pastikan fail berikut terdapat dalam folder `my_model`:

* `model.json`
* `metadata.json`
* Fail `.bin`

### Langkah 5

Klik kanan pada `index.html`.

Pilih:

**Open with Live Server**

### Langkah 6

Browser akan membuka sistem SmartVision AI.

### Langkah 7

Tekan:

**Mula Kamera**

Benarkan akses kamera apabila diminta oleh browser.

### Langkah 8

Letakkan salah satu objek di hadapan kamera.

Sistem akan memaparkan objek yang dikesan dan nilai *confidence*.

---

## 12. Pengendalian Confidence

Sistem menggunakan nilai *confidence* untuk menunjukkan tahap keyakinan model terhadap sesuatu ramalan.

Contohnya:

**Perfume — 95%**

Ini menunjukkan model memberikan kebarangkalian yang tinggi kepada kelas Perfume.

Jika nilai *confidence* berada di bawah tahap yang ditetapkan oleh sistem, keputusan akan dipaparkan sebagai:

**Objek Tidak Dikenali**

Fungsi ini digunakan bagi mengurangkan kemungkinan sistem memaparkan kelas yang salah apabila objek tidak dapat dikenal pasti dengan yakin.

---

## 13. Pengujian Sistem

Pengujian dilakukan dengan menggunakan objek sebenar yang mewakili setiap kelas.

| Objek         | Keputusan  |
| ------------- | ---------- |
| Perfume       | Prediction |
| Kereta Mainan | Prediction |
| Medal         | Prediction |
| Kad           | Prediction |
| Duit          | Prediction |

Pengujian juga boleh dilakukan menggunakan variasi kedudukan, jarak dan pencahayaan bagi melihat prestasi model dalam keadaan yang berbeza.

---

## 14. Model dan Eksperimen

Model diuji berdasarkan keputusan *prediction* dan nilai *confidence*.

Antara faktor yang boleh mempengaruhi keputusan model ialah:

* Bilangan imej latihan
* Kepelbagaian imej
* Sudut objek
* Jarak objek dengan kamera
* Pencahayaan
* Latar belakang
* Persamaan antara objek

Keputusan eksperimen direkodkan berdasarkan nilai *confidence* dan ketepatan prediction bagi setiap kelas.

---

## 15. Integrasi Model Dengan Website

Model Teachable Machine diintegrasikan ke dalam website menggunakan **TensorFlow.js** dan **Teachable Machine Image Library**.

JavaScript akan memuatkan:

* `model.json`
* `metadata.json`
* Fail model `.bin`

Kemudian kamera digunakan sebagai input kepada model.

Aliran sistem adalah:

**Webcam → TensorFlow.js → Teachable Machine Model → Prediction → Website**

---

## 16. AI Code Assistant

AI Code Assistant digunakan sebagai bantuan semasa pembangunan sistem.

Antara penggunaan AI Code Assistant ialah:

1. Membantu menghasilkan struktur asas HTML.
2. Membantu menghasilkan reka bentuk CSS.
3. Membantu mengintegrasikan JavaScript dengan model Teachable Machine.
4. Membantu mengenal pasti dan membaiki ralat kod.
5. Membantu menjelaskan fungsi kod yang digunakan.

Contoh prompt yang digunakan:

> "Bantu saya membina website Computer Vision menggunakan HTML, CSS dan JavaScript yang boleh mengintegrasikan model Google Teachable Machine."

Contoh prompt kedua:

> "Bantu saya menghubungkan model Teachable Machine TensorFlow.js dengan webcam dan memaparkan nama kelas serta confidence."

---

## 17. Limitasi Sistem

Sistem mempunyai beberapa limitasi:

* Model hanya dilatih untuk lima kelas objek.
* Prestasi prediction bergantung kepada kualiti imej latihan.
* Pencahayaan yang terlalu gelap atau terlalu terang boleh mempengaruhi prediction.
* Objek yang tidak termasuk dalam dataset mungkin tidak dapat dikenal pasti dengan tepat.
* Nilai *confidence* tidak semestinya bermaksud prediction sentiasa betul.

---

## 18. Penambahbaikan Pada Masa Hadapan

Antara penambahbaikan yang boleh dilakukan ialah:

1. Menambah lebih banyak kelas objek.
2. Menambah jumlah imej latihan bagi setiap kelas.
3. Menggunakan imej dengan lebih banyak variasi.
4. Meningkatkan reka bentuk antaramuka pengguna.
5. Menambah fungsi untuk memuat naik imej.
6. Menyimpan rekod keputusan prediction.
7. Meningkatkan kaedah pengendalian objek yang tidak dikenali.
8. Menggunakan dataset yang lebih besar untuk meningkatkan prestasi model.

---

## 19. Kesimpulan

SmartVision AI merupakan sistem *Computer Vision* yang menggunakan Google Teachable Machine untuk mengenal pasti lima jenis objek melalui kamera.

Model AI diintegrasikan ke dalam aplikasi web menggunakan JavaScript dan TensorFlow.js. Sistem memaparkan nama objek yang dikesan bersama nilai *confidence* bagi memberikan maklumat tentang keputusan prediction.

Projek ini menunjukkan bagaimana teknologi *Artificial Intelligence*, *Machine Learning* dan *Computer Vision* boleh digunakan untuk membangunkan aplikasi pengenalpastian objek yang mudah dan interaktif.

---

## 20. Projek

**Nama Projek:** SmartVision AI
**Jenis Projek:** Computer Vision / Image Classification
**Platform Model:** Google Teachable Machine
**Bahasa:** HTML, CSS, JavaScript
**Model:** TensorFlow.js
**Kelas:** Perfume, Kereta Mainan, Medal, Kad, Duit
