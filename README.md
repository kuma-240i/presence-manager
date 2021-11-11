# presence-manager

出社・テレワーク状況を管理します。
以下はAPI仕様です。

## GET /presence
```
/presence
```
#### パラメータ
|Name|Type|In|Description|
|:----|:----|:----|:----|
|limit|integer|query|表示人数の上限 <br> Default:30|

#### コードサンプル
Javascript(chai.request)
```Javascript
await request.get("/presence");
```

#### レスポンス
```
Status: 200 OK
```
```
[
  {
    "id": 1,
    "name": "山田 太郎",
    "presence": "in the Tokyo office",
  }
]
[
  {
    "id": 2,
    "name": "田中 花子",
    "presence": "teleworking at home",
  }
]
```
