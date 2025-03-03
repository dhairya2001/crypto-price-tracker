### 📄 **`state-management.md`**

### **State Management (React Query)**

We use **React Query** for data fetching because:

✅ **Auto Caching** - It caches API responses to reduce calls.  
✅ **Auto Refresh** - Re-fetches data automatically.  
✅ **Manual Refresh** - Users can click "Refresh" to update prices.  

### **🔹 Implementation**
```tsx
const { data, error, isLoading, refetch } = useQuery({
  queryKey: ["cryptoPrices"],
  queryFn: fetchCryptoPrices,
  refetchInterval: 60000,
});
