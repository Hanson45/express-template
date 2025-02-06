# Imagen base con Node.js
FROM node:lts-alpine

ENV NODE_ENV=production

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias y luego instala
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

# Copia el resto del proyecto
COPY . .

# Define el puerto que se va a exponer
EXPOSE 3000

RUN chown -R node /usr/src/app

USER node

# Comando para ejecutar la app
CMD ["npm", "start"]
