import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://ecommerce-a7xz.onrender.com',  // when we are doing front end and backend in the same device so the 
                                      //the port of the these code will be different so this may cause the CORS
    }
  },
  plugins: [react()],
})
