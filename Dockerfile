# Use Nginx to serve the React build
FROM nginx:alpine

# Clean the default nginx html folder
RUN rm -rf /usr/share/nginx/html/*

# Copy the build files from React into Nginx html folder
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
