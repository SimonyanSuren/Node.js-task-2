const fs = require('fs');
const path = require('path');

module.exports.createDir = (usersData) => {
  for (let user of usersData) {
    let name = user.id + '_' + user.name.split(' ').join('-');
    let _p = path.join(__dirname, 'clients', name);
    if (!fs.existsSync(_p)) {
      fs.mkdirSync(_p);
    } else {
      //console.log(1);
    }
    _p = path.resolve(_p, 'info.json');
    fs.writeFileSync(_p, JSON.stringify(user));
  }
};
