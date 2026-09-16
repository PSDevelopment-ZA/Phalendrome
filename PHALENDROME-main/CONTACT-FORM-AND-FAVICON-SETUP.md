# Contact Form & Favicon Setup Guide

This guide covers the final critical items before launch:
1. **Contact Form Configuration** (Formspree)
2. **Favicon Generation & Linking**
3. **Real Contact Information Update**

---

## Part 1: Contact Form Setup with Formspree ✉️

The contact form on `contact.html` is ready to receive submissions. You'll need to configure it with Formspree (a free service that routes form submissions to your email).

### Step 1: Create Formspree Account

1. Go to **https://formspree.io/**
2. Click **"Sign up"** or **"Get started"**
3. Sign up with your email (use: `you@phalendromesolutions.co.za`)
4. Verify your email address

### Step 2: Create New Form

1. In Formspree dashboard, click **"Create new form"**
2. Enter a name (e.g., `Contact Form` or `Website Inquiries`)
3. Select your email address (`you@phalendromesolutions.co.za`)
4. Click **"Create"**
5. You'll receive a **Form ID** (looks like: `f1a2b3c4d5` or similar)

### Step 3: Copy Your Form ID

After form creation, you'll see your form endpoint:
```
https://formspree.io/f/{YOUR-FORM-ID}
```

Copy the **{YOUR-FORM-ID}** portion (the alphanumeric string after `/f/`).

### Step 4: Update contact.html

In `contact.html`, find the contact form line (around line 55):

**Current:**
```html
<form id="contactForm" class="contact-form" novalidate data-endpoint="https://formspree.io/f/{your-form-id}">
```

**Replace with** (using your actual Form ID from Formspree):
```html
<form id="contactForm" class="contact-form" novalidate data-endpoint="https://formspree.io/f/YOUR-ACTUAL-FORM-ID">
```

**Example:**
```html
<form id="contactForm" class="contact-form" novalidate data-endpoint="https://formspree.io/f/xyzabc123">
```

### Step 5: Test the Form

1. Open `http://localhost:8000/contact.html`
2. Fill out the form with test data
3. Click **"Send Message"**
4. You should receive a confirmation message and an email at `you@phalendromesolutions.co.za`

### Troubleshooting

If form submissions fail:
- Verify your Form ID is correct in the form's `data-endpoint` attribute
- Check that you've verified your email in Formspree
- Check your email spam folder for Formspree verification emails
- Clear browser cache and try again

---

## Part 2: Favicon Generation & Setup 🎨

The favicon is the small icon that appears in browser tabs. We'll generate it from your logo and link it across all pages.

### Option A: Quick Online Conversion (Recommended for Speed)

1. **Visit an ICO converter:**
   - **https://convertio.co/svg-ico/**
   - **https://icoconvert.com/**
   - **https://www.cloudconvert.com/svg-to-ico**

2. **Upload the file:**
   - Go to `assets/logo-square.svg` in your workspace
   - Upload `logo-square.svg` to the converter
   - Download the resulting `.ico` file

3. **Save to workspace:**
   - Save the downloaded file as `assets/favicon.ico`

### Option B: Using ImageMagick (Advanced)

If you have ImageMagick installed:

```powershell
# In PowerShell from workspace directory
magick assets/logo-square.svg -define icon:auto-resize="256,128,96,64,48,32,16" assets/favicon.ico
```

### Step 6: Link Favicon in All Pages

Add this line to the `<head>` section of **all HTML pages** (index.html, about.html, contact.html, services.html, privacy.html, terms.html):

```html
<link rel="icon" href="assets/favicon.ico" type="image/x-icon">
```

**Add it right after the `<title>` tag**, like this:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PHALENDROME SOLUTIONS | Solutions in Symmetry</title>
  <link rel="icon" href="assets/favicon.ico" type="image/x-icon">
  <!-- Other meta tags follow... -->
```

### Verify Favicon is Working

1. Refresh your browser (Ctrl+F5 or Cmd+Shift+R to clear cache)
2. You should see the PHALENDROME logo in the browser tab

---

## Part 3: Replace Real Contact Information 📞

Update placeholder contact details across all pages and footer.

### Information to Update

**Current placeholders:**
- Phone: `[Your Phone Number]`
- Email: `you@phalendromesolutions.co.za` (already correct, but verify)

**Replace with your actual business contact info.**

### Files to Update

Use **Find & Replace** to update these across all files:

#### Method 1: VS Code Find & Replace

1. Press **Ctrl+H** (or Cmd+H on Mac) to open Find & Replace
2. In **"Find"** field: `[Your Phone Number]`
3. In **"Replace"** field: `+27 (your actual number)`
   - Example: `+27 (0)11 123-4567`
4. Click **"Replace All"** to update all instances

---

#### Method 2: Manual Replacement

Files containing contact info:
- **index.html** — Footer (line ~129)
- **contact.html** — Contact section "Phone" (line ~84), footer
- Any other files in footer sections

### Files to Check & Update

```
index.html          — Footer phone link
about.html          — (No phone in current version)
contact.html        — Contact info grid + form area
services.html       — (No phone in current version, just in footer)
privacy.html        — Contact section (line ~118)
terms.html          — Contact section (line ~145)
```

### Email Address

Verify that all email references use:
- `you@phalendromesolutions.co.za` (already set throughout)

Update this if you're using a different business email.

---

## Summary Checklist ✅

- [ ] **Formspree account created** at https://formspree.io/
- [ ] **Form ID copied** and added to `contact.html` line ~55
- [ ] **Contact form tested** successfully (submit test entry)
- [ ] **favicon.ico downloaded** and saved to `assets/`
- [ ] **Favicon links added** to all 6 HTML pages
- [ ] **Real phone number replaced** across all files
- [ ] **Email address verified** (should be `you@phalendromesolutions.co.za`)
- [ ] **Browser cache cleared** and favicon visible on all pages

---

## Post-Launch Checklist

Once you've completed the above:

1. **Test on live domain** (if deployed to phalendromesolutions.co.za)
2. **Check mobile responsiveness** — use browser DevTools (F12)
3. **Test form submission** from live URL
4. **Check favicon appears** in multiple browsers (Chrome, Firefox, Safari, Edge)
5. **Verify Analytics** — if you configured Google Analytics, check data flow
6. **Set up email automation** — optionally configure email autoresponders in Formspree

---

## Additional Resources

- **Formspree Docs:** https://formspree.io/docs/
- **Favicon Generator Advanced:** https://favicon-generator.org/
- **ICO Format Info:** https://en.wikipedia.org/wiki/ICO_(file_format)

---

**Status:** Ready for implementation  
**Updated:** February 9, 2026

