# Imagen base con Node.js
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias y luego instala
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del proyecto
COPY . .

# Define el puerto que se va a exponer
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "server.js"]
