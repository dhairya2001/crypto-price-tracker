### 📄 **`api.md`** 

### **API Integration Details**

## 🌐 CoinCap API

We fetch live cryptocurrency prices using CoinCap API.

### **🔹 API Request**
```tsx
const API_URL = "https://api.coincap.io/v2/assets";
const { data } = await axios.get(API_URL);
