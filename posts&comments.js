const fs = require('fs');
const path = require('path');

module.exports.craetePosts = (usersPosts) => {
  const _p = path.join(__dirname, 'clients');
  const usersFolders = fs.readdirSync(_p);
  const usersId = usersFolders.map(
    (el) => (el = { id: +el.split('_')[0], name: el })
  );
  for (let user of usersId) {
    let posts = [];
    const post_p = path.join(_p, user.name, 'posts.json');
    usersPosts.map((post) => {
      if (post.userId === user.id) {
        posts.push(post);
      }
    });
    fs.writeFileSync(post_p, JSON.stringify(posts));
  }
};

module.exports.addComments = (usersComment) => {
  let _p = path.join(__dirname, 'clients');
  const usersFolders = fs.readdirSync(_p);
  for (let folder of usersFolders) {
    let _p = path.join(__dirname, 'clients', folder, 'posts.json');
    let posts = JSON.parse(fs.readFileSync(_p));
    for (let post of posts) {
      let comments = usersComment.filter((com) => com.postId === post.id);
      post['comments'] = comments;
    }
    fs.writeFileSync(_p, JSON.stringify(posts));
  }
};
