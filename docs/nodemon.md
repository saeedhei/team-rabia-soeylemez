# npm install --save-dev nodemon

# In package.json add 
 "scripts": {
    "dev": "nodemon"
  },

  # In nodemon.json add

  {
    "watch": ["."],
    "ext": "js",
    "exec": "node bin/www"
}