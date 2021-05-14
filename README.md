# ElBase
**Support: [discord.gg/T4BMtSu](https://discord.gg/T4BMtSu)**

### Example
```js
const db = require('elbase');

db.set('userInfo', 'HERE_ID')
db.push('userInfo.items', 'sword')
db.add('userInfo.balance', 100)
db.get('userInfo.balance')
db.get('userInfo.items')
db.fetch('userInfo')

Methods

new db.table(name)
.add(key, number, [options]) > Rank updated
.all() > Total data
.delete(key, [options]) > Boole
.get(key, [options]) > Rank
.has(key, [options]) > Boole
.push(key, element, [options]) > Rank updated
.set(key, data, [options]) > Rank updated
.subtract(key, number, [options]) > Rank updated
```

### Installation
**Linux**
- **Ubuntu** `sudo apt-get install build-essential, npm i elbase`
- **CenTos** `npm i node-gyp rebuild, npm i elbase`
- **Fedora** `npm i elbase`
- **Kali** `npm i elbase`
- **Pardus** `npm i elbase`

**Windows**
- **Run:** `npm -g --add-python-to-path install windows-build-tools node-gyp` in cmd (run as administrator)
- **Run:** `npm i elbase`
- 
**Mac**
- **Install:** XCode
- **Run:** `npm i -g node-gyp` in terminal
- **Run:** `node-gyp --python /path/to/python2.7` (skip this step if you didn't install python 3.x)
- **Run:** `npm i elbase`
