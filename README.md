# Tableau des Subordonnants Circonstanciels

موقع مرجعي كامل لجدول الروابط الظرفية الفرنسية (Subordonnants Circonstanciels).

## 🌐 الموقع

يمكن نشره مباشرة على **GitHub Pages** — لا يحتاج أي خادم (pure HTML/CSS/JS).

## ✨ المميزات

- **عرض كامل** لكل الروابط مع 8 تصنيفات (سبب، نتيجة، غاية، زمان، شرط، مقارنة، تنازل، معارضة)
- **تصفية** حسب التصنيف بضغطة واحدة
- **بحث** فوري في قائمة الروابط
- **وضع عام** للقراءة بدون تعديل
- **وضع Admin** (محمي بكود) لإضافة روابط جديدة
- التعديلات تُحفظ في `localStorage` تلقائياً

## 🔑 كود الAdmin

الكود الافتراضي: `admin2026`

**⚠️ يُنصح بتغييره** في ملف `js/app.js` — السطر:
```js
const ADMIN_CODE = "admin2026";
```

## 📁 هيكل الملفات

```
subordonnants/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── data.js     ← كل بيانات الروابط هنا
    └── app.js      ← منطق الموقع
```

## 🚀 النشر على GitHub Pages

1. ارفع المجلد على GitHub كـ repository جديد
2. اذهب إلى **Settings → Pages**
3. اختر **Source: Deploy from a branch → main → / (root)**
4. الموقع سيكون متاح على: `https://username.github.io/repo-name`

## 📖 المصدر

**Module :** Morphosyntaxe 2  
**Semestre :** 4  
**Réalisé par :** Omar Salhi & Nouredine Izerane — 27/04/2026
