# 🎨 Quick Color Change Reference

## 🚀 INSTANT THEME CHANGE (30 Seconds)

### 1. Open File
📁 `src/index.css` (Line 10-12)

### 2. Replace RGB Numbers
```css
--color-primary: [R] [G] [B];        /* Main color */
--color-primary-dark: [R] [G] [B];   /* Darker shade */
--color-primary-light: [R] [G] [B];  /* Lighter shade */
```

### 3. Save → Done! ✅

---

## 🎨 READY-TO-USE THEMES

### Copy & Paste Any Theme Below:

#### 🔵 Blue (Current)
```css
--color-primary: 37 99 235;
--color-primary-dark: 30 64 175;
--color-primary-light: 59 130 246;
```

#### 🟢 Green
```css
--color-primary: 34 197 94;
--color-primary-dark: 21 128 61;
--color-primary-light: 74 222 128;
```

#### 🟣 Purple
```css
--color-primary: 168 85 247;
--color-primary-dark: 126 34 206;
--color-primary-light: 192 132 252;
```

#### 🟠 Orange
```css
--color-primary: 249 115 22;
--color-primary-dark: 194 65 12;
--color-primary-light: 251 146 60;
```

#### 🔴 Red
```css
--color-primary: 239 68 68;
--color-primary-dark: 185 28 28;
--color-primary-light: 248 113 113;
```

#### 🩵 Teal
```css
--color-primary: 20 184 166;
--color-primary-dark: 15 118 110;
--color-primary-light: 45 212 191;
```

#### 🟡 Yellow
```css
--color-primary: 234 179 8;
--color-primary-dark: 161 98 7;
--color-primary-light: 250 204 21;
```

#### 🩷 Pink
```css
--color-primary: 236 72 153;
--color-primary-dark: 190 24 93;
--color-primary-light: 244 114 182;
```

#### 🟤 Brown
```css
--color-primary: 180 83 9;
--color-primary-dark: 120 53 15;
--color-primary-light: 217 119 6;
```

#### ⚫ Dark Blue
```css
--color-primary: 30 58 138;
--color-primary-dark: 23 37 84;
--color-primary-light: 37 99 235;
```

---

## 🔄 HEX to RGB Converter

### Use This Formula:
1. Get HEX: `#2563eb`
2. Split into pairs: `25` `63` `eb`
3. Convert to decimal:
   - `25` (hex) = `37` (decimal)
   - `63` (hex) = `99` (decimal)
   - `eb` (hex) = `235` (decimal)
4. Result: `37 99 235`

### Online Tools:
- https://www.rapidtables.com/convert/color/hex-to-rgb.html
- https://rgbcolorcode.com/hex-to-rgb
- Chrome DevTools → Pick color → See RGB values

---

## 📝 Format Rules

✅ **CORRECT:**
```css
--color-primary: 37 99 235;  /* Space-separated, NO commas */
```

❌ **WRONG:**
```css
--color-primary: #2563eb;     /* Don't use HEX */
--color-primary: 37, 99, 235; /* Don't use commas */
--color-primary: rgb(37 99 235); /* Don't use rgb() */
```

---

## 🎯 Testing Your New Theme

1. Save `src/index.css`
2. Browser auto-refreshes (Vite)
3. Check these pages:
   - ✅ Home page (hero, buttons, gradients)
   - ✅ About page (cards, numbers)
   - ✅ Pricing page (badges, prices)
   - ✅ Navbar (logo, toggle)
   - ✅ Footer (logo)

---

## 💡 Pro Tips

### Generate Darker/Lighter Shades
Use this tool: https://maketintsandshades.com/
1. Enter your main HEX color
2. Pick -30% darker for `primary-dark`
3. Pick +30% lighter for `primary-light`
4. Convert to RGB
5. Paste into `src/index.css`

### Brand Color Matching
1. Get brand HEX from logo/design
2. Use tint/shade generator
3. Create 3 variants (main, dark, light)
4. Update CSS variables
5. Entire site matches brand! 🎉

---

**Need Help?** See full guide: `COLOR_THEME_GUIDE.md`
