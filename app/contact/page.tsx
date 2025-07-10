@@ .. @@
   const validatePhone = (phone) => {
-    const phoneRegex = /^[+]?[\d\s\-$$$$]{10,}$/
+    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
     return phoneRegex.test(phone)
   }