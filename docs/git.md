git add .
git commit -m "Ignore package-lock.json in backend-telegram-js"
git push -u origin main


git rm --cached backend-telegram-js/package-lock.json
git commit -m "Ignore package-lock.json in backend-telegram-js"
