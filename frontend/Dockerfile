# 使用官方Node.js的基础镜像
FROM node:20

# 设置工作目录
WORKDIR /

# 复制项目文件到工作目录
COPY . /

# 安装依赖
RUN npm install --force

# 构建前端项目
RUN npm run build

# 使用nginx作为静态服务器
FROM nginx:alpine

# 复制构建的文件到nginx的html目录
COPY --from=0 ./dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 运行nginx
CMD ["nginx", "-g", "daemon off;"]
