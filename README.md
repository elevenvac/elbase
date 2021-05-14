# ElBase
### Contact
* [Discord](https://discord.gg/T4BMtSu)

### Creators / Developers
👤 Eleven

### Documentation
```js
const db = require('elbase');

db.set('userInfo', 'id')
db.push('userInfo.items', 'apple')
db.add('userInfo.balance', 500)
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

### Setup
- npm i elbase
