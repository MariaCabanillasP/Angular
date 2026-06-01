FROM node:latest as node 

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Instalar Angular CLI de forma global
RUN npm install -g @angular/cli

# Copiar el resto del código
COPY . .

# EXTREMADAMENTE IMPORTANTE: Exponer el puerto y usar 0.0.0.0
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]