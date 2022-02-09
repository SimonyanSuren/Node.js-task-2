const fs = require('fs');
const path = require('path');

module.exports.createAlbums = (usersAlbum) => {
  const _p = path.join(__dirname, 'clients');
  const usersFolders = fs.readdirSync(_p);
  const usersId = usersFolders.map(
    (el) => (el = { id: +el.split('_')[0], name: el })
  );
  for (let user of usersId) {
    let album = usersAlbum.filter((alb) => alb.userId === user.id);
    let alb_p = path.join(_p, user.name, 'album.json');
    fs.writeFileSync(alb_p, JSON.stringify(album));
  }
};

module.exports.addPhotos = (usersPhoto) => {
  let _p = path.join(__dirname, 'clients');
  const usersFolders = fs.readdirSync(_p);
  
  for (let folder of usersFolders) {
    let _p = path.join(__dirname, 'clients', folder, 'album.json');
    let albums = JSON.parse(fs.readFileSync(_p));

    for (let alb of albums) {
      let photos = usersPhoto.filter((photo) => photo.albumId === alb.id);
      alb['photos'] = photos;
    }
    fs.writeFileSync(_p, JSON.stringify(albums));
  }
};
