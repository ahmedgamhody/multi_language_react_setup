# 🌐 React Multi-Language Setup  

Setup جاهز لمشاريع React يدعم تعدد اللغات (EN/AR) باستخدام i18next + TypeScript + React Router.  

----------------------------------------------

## ✅ المميزات  

- دعم تعدد اللغات (عربي / إنجليزي) باستخدام i18next  
- Type-Safe للترجمة مع Auto-complete للمفاتيح  
- تغيير اللغة ديناميكي من خلال URL مثل `/en/home` أو `/ar/home`  
- HOC `withLocaleValidation` للتحقق من صحة اللغة وإعادة التوجيه  
- `useTypedTranslation` Hook لاستخدام الترجمة بأمان  
- ProtectedRoutes لمحاكاة Authorization  
- 3 Layouts لمحاكاة هيكل المشاريع الكبيرة  

-------------------------------------------------------------------------
## 📂 هيكل المشروع  

src/
├─ locales/ # ملفات الترجمة en.json / ar.json
├─ hooks/
│ └─ useTypedTranslation.ts # Hook للترجمة مع Type Safety
├─ hoc/
│ └─ withLocaleValidation.tsx # HOC للتحقق من اللغة
├─ routes/
│ ├─ ProtectedRoutes.tsx # حماية الصفحات
│ └─ AppRoutes.tsx
├─ layouts/
│ ├─ MainLayout.tsx
│ ├─ AuthLayout.tsx
│ └─ DashboardLayout.tsx
├─ components/
│ └─ Header.tsx # الهيدر مع زرار تغيير اللغة


----------------------------------

---

## ✅ الخطوة 6: مثال بسيط للاستخدام  

```md
## 📌 مثال سريع  

```tsx
import { useTypedTranslation } from "../hooks/useTypedTranslation";

export default function HomePage() {
  const { t } = useTypedTranslation();
  return <h1>{t("homePage.title")}</h1>;
}


------------------------------

---

## ✅ الخطوة 7: (اختياري) نضيف Tech Stack  

```md
## 🛠️ التقنيات المستخدمة  

- React + TypeScript  
- React Router v6  
- i18next + react-i18next  
- TailwindCSS  
- Vite  
