# TTB Agro India Private Limited — Client Content Verification Checklist

> **Mandatory Pre-Launch Checklist for Client Confirmation**
> 
> *To protect company liability and maintain strict regulatory compliance, please review and confirm the following items before connecting your custom `.com` domain.*

---

## 1. Corporate Identity & Legal Registrations

| Item | Status in Codebase | Client Confirmation Required | Action / File Location |
|---|---|---|---|
| **Full Legal Name** | `TTB Agro India Private Limited` | ✅ Confirmed from Deck | `src/data/company.ts` |
| **Registered Office Address** | `Shop No. 3, Plot No. 19, Sector 48, Seawoods, Nerul, Navi Mumbai – 400706` | ⚠️ Confirm current MCA records | `src/data/company.ts` |
| **CIN (Corporate ID Number)** | `[Structured Placeholder]` | 📝 Provide actual 21-digit CIN | `src/data/certifications.ts` |
| **GSTIN** | `[27XXXXX0000X1Z5]` | 📝 Provide official GST certificate | `src/data/certifications.ts` |
| **PAN / TAN** | `[Placeholder]` | 📝 Provide PAN for statutory file | `src/data/certifications.ts` |

---

## 2. Food Safety, Trade & Quality Compliance

| Item | Status in Codebase | Client Confirmation Required | Action / File Location |
|---|---|---|---|
| **FSSAI License Number** | `[Active Group License]` | 📝 Provide 14-digit FSSAI number | `src/data/certifications.ts` |
| **IEC (Importer Exporter Code)** | `[Active Import Clearance]` | 📝 Provide 10-digit IEC code | `src/data/certifications.ts` |
| **APEDA Registration** | `[Pending Client Upload]` | 📝 Provide RCMC certificate if active | `src/data/certifications.ts` |
| **ISO / HACCP Certifications** | `[Document on Request]` | 📝 Provide certificate copies if certified | `src/data/certifications.ts` |

---

## 3. Financial & Group Ecosystem Wording

| Item | Status in Codebase | Client Confirmation Required | Action / File Location |
|---|---|---|---|
| **Group Turnover Figures** | `₹228 Cr Combined Group Ecosystem` | ✅ Strictly phrased as group ecosystem | `src/data/group.ts` |
| **Entity Breakdown** | `Just Go Eco (₹98 Cr)`, `SP Coconut (₹80 Cr)`, `Just Go Project (₹25 Cr)`, `STP Traders & TTB (₹25 Cr)` | ⚠️ Confirm entity turnover allocations | `src/data/group.ts` |

---

## 4. Leadership & Directorship

| Item | Status in Codebase | Client Confirmation Required | Action / File Location |
|---|---|---|---|
| **Director 1** | `Mr. Prakash Patil` | ✅ Confirmed Director | `src/data/leadership.ts` |
| **Director 2** | `Mr. Harshal Nikam` | ✅ Confirmed Director | `src/data/leadership.ts` |
| **Director Photographs** | Neutral Monogram Badges | 📸 Provide professional portraits (optional) | `public/images/directors/` |

---

## 5. Commercial References & Client Logos

| Item | Status in Codebase | Client Confirmation Required | Action / File Location |
|---|---|---|---|
| **Organised Retail Reference** | `D-Mart` (Descriptive sector reference) | ⚠️ Confirm if logo display is authorized | `src/data/customers.ts` |
| **QSR / Café References** | `Mani's Cafe`, `Thumbi` | ⚠️ Confirm if logo display is authorized | `src/data/customers.ts` |
| **Hospitality Reference** | `Udupi Hotels` | ⚠️ Confirm if logo display is authorized | `src/data/customers.ts` |

---

## 6. Official Contact Channels & Domain

| Item | Status in Codebase | Client Confirmation Required | Action / File Location |
|---|---|---|---|
| **Official Email** | `procurement@ttbagro.com` / `rfp@ttbagro.com` | 📝 Confirm active inbox | `src/data/company.ts` |
| **Official Phone Number** | `+91 22 4800 XXXX` / `+91 98XXX XXXXX` | 📝 Provide official landline/mobile | `src/data/company.ts` |
| **Custom Domain** | `https://ttbagro.com` | 🌐 Purchase domain on GoDaddy/Namecheap | `DEPLOYMENT.md` |

---

*Once the client provides the missing certificate numbers and official contact numbers, simply open the respective files in `src/data/` and update the strings. No code refactoring is necessary.*
