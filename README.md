# presence-manager

出社・テレワーク状況を管理します。
以下はAPI仕様です。

## GET presences
出社状況を配列で取得します。
```
/v1/presences
```
#### パラメータ
|Name|Type|In|Description|
|:----|:----|:----|:----|
|limit|integer|query|表示人数の上限 <br> Default:30|

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
