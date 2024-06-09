# Use a imagem base oficial do Node.js
FROM node:14

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o conteúdo do projeto para o diretório de trabalho no container
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
