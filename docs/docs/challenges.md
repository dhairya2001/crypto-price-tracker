### 📄 **`challenges.md`** 

## **Challenges & Solutions**

### **🚨 1️⃣ API Rate Limits**
- **Problem:** CoinCap limits API calls.
- **Solution:** Cached data with `staleTime: 0` in React Query.

### 🚨 **2️⃣ Prices Not Updating on Refresh**
- **Problem:** Clicking refresh didn’t show loading state.
- **Solution:** Used `isFetching` instead of `isLoading`.

### 🚨 **3️⃣ UI Not Responsive**
- **Problem:** The crypto list was not mobile-friendly.
- **Solution:** Added CSS media queries.

### 🚨 **4️⃣ Multi-Currency Support**
- **Problem:** CoinCap only provides USD.
- **Solution:** Used Exchange Rate API to convert prices.
