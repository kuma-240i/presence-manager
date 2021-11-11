exports.seed = (knex) => {
  return knex('presence').del()
    .then( () => {
      return knex('presence').insert([
        {name: '土方 歳三', presence: '壬生郷士八木邸'},
        {name: '沖田 総司', presence: '壬生郷士八木邸'},
        {name: '斎藤 一', presence: 'テレワーク中'},
        {name: '山崎 烝', presence: '池田屋監察中', message: '池田屋から直帰予定'},
        {name: '近藤 勇', presence: '業務終了', message: '11/12は有給取ります', date : '2021-11-11'}
      ]);
    });
};
