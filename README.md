# presence-manager

出社・テレワーク状況を管理します。
以下はAPI仕様です。

* * *
## GET presences
出社状況を配列で取得します。
```
/v1/presences
```

#### コードサンプル
Javascript(chai.request)
```Javascript
await request.get("/v1/presences");
```

#### レスポンス
```
Status: 200 OK
```
```
[
  {
    id: 1,
    name: '山田 太郎',
    date: '2021-11-11',
    presence": 'in the Tokyo office',
    message: null,
    update_time: '2021-11-11 08:35:01'
  }
]
[
  {
    id: 2,
    name: '田中 花子',
    date: '2021-11-11',
    presence": 'teleworking at home',
    message: null,
    update_time: '2021-11-11 08:12:20'
  }
]
```
* * *
## GET presences/:id
idで指定された個人の出社状況を長さ1の配列で取得します。
```
/v1/presences/:id
```

#### コードサンプル
Javascript(chai.request)
```Javascript
await request.get("/v1/presences/1");
```

#### レスポンス
```
Status: 200 OK
```
```
[
  {
    id: 1,
    name: '山田 太郎',
    date: '2021-11-11',
    presence": 'in the Tokyo office',
    message: null,
    update_time: '2021-11-11 08:35:01'
  }
]
```
* * *
## POST /v1/presences
新しいメンバーを追加します。
```
/v1/presences
```

#### コードサンプル
Javascript(chai.request)
```Javascript
const newMenber = {
  name: '佐藤　一郎',
  presence: 'under paid leave',
};
await request.post("/v1/presences").send(newMenber);
```

#### レスポンス
```
Status: 201 Created
```

* * *
## DELETE /v1/presences/:id
idで指定されたメンバーを削除します。
```
/v1/presences/:id
```

#### コードサンプル
Javascript(chai.request)
```Javascript
await request.delete("/v1/presences/1");
```

#### レスポンス
```
Status: 204 No Content
```
* * *
## PATCH /v1/presences/:id
idで指定された個人の出社状況を変更します。
```
/v1/presences/:id
```

#### コードサンプル
Javascript(chai.request)
```Javascript
const changeContent = {
  presence: "leave the office",
  message: "poor physical condition",
};
await request.patch("/v1/presences/1").send(changeContent);
```

#### レスポンス
```
Status: 204 No Content
```