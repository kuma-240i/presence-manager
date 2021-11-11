
exports.seed = function(knex) {
  return knex('presence').del()
    .then( () => {
      return knex('presence').insert([
        {name: '土方 歳三', presence: '壬生郷士八木邸'},
        {name: '斎藤 一', presence: 'テレワーク'},
        {name: '沖田 総司', presence: '業務終了', message: '明日は池田屋のため早退します'},
        {name: '近藤 勇', presence: '年次有給休暇', message: '11/12は有給取ります', date : '2021-11-11'}
      ]);
    });
};
