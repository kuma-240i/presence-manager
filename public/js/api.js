function exec() {
    const url ="http://localhost:3000/v1/presences";
    let officeElement = document.getElementById("office");
    let teleworkElement = document.getElementById("telework");
    let nonbusinessElement = document.getElementById("nonbusiness");
    
    fetch(url).then(res =>{
        return res.json();
    }).then(data => {
        const offi = data.filter((person) => {
            return person.presence !== 'テレワーク中' && person.presence !== '業務終了';
        }).reduce((acc, cur) => {
            if (cur.message === null){
                return acc + cur.name + "　　投稿時間：" + cur.update_time.slice(0, 4) + "/" + cur.update_time.slice(5, 7) + "/" + cur.update_time.slice(8, 10) + " " + cur.update_time.slice(11, 13) + ":" + cur.update_time.slice(14, 16) + "<br>";
            }else{
                return acc + cur.name + "　　投稿時間：" + cur.update_time.slice(0, 4) + "/" + cur.update_time.slice(5, 7) + "/" + cur.update_time.slice(8, 10) + " " + cur.update_time.slice(11, 13) + ":" + cur.update_time.slice(14, 16) + " 「" + cur.message + "」<br>";
            }
        },'');
        
        const tele = data.filter((person) => {
            return person.presence === 'テレワーク中';
        }).reduce((acc, cur) => {
            if (cur.message === null){
                return acc + cur.name + "　　投稿時間：" + cur.update_time.slice(0, 4) + "/" + cur.update_time.slice(5, 7) + "/" + cur.update_time.slice(8, 10) + " " + cur.update_time.slice(11, 13) + ":" + cur.update_time.slice(14, 16) + "<br>";
            }else{
                return acc + cur.name + "　　投稿時間：" + cur.update_time.slice(0, 4) + "/" + cur.update_time.slice(5, 7) + "/" + cur.update_time.slice(8, 10) + " " + cur.update_time.slice(11, 13) + ":" + cur.update_time.slice(14, 16) + " 「" + cur.message + "」<br>";
            }
        },'');

        const nonb = data.filter((person) => {
            return person.presence === '業務終了';
        }).reduce((acc, cur) => {
            if (cur.message === null){
                return acc + cur.name + "　　投稿時間：" + cur.update_time.slice(0, 4) + "/" + cur.update_time.slice(5, 7) + "/" + cur.update_time.slice(8, 10) + " " + cur.update_time.slice(11, 13) + ":" + cur.update_time.slice(14, 16) + "<br>";
            }else{
                return acc + cur.name + "　　投稿時間：" + cur.update_time.slice(0, 4) + "/" + cur.update_time.slice(5, 7) + "/" + cur.update_time.slice(8, 10) + " " + cur.update_time.slice(11, 13) + ":" + cur.update_time.slice(14, 16) + " 「" + cur.message + "」<br>";
            }
        },'');

        officeElement.innerHTML = offi;
        teleworkElement.innerHTML = tele;
        nonbusinessElement.innerHTML = nonb;
    }).catch((err) => {
        return err;
    });

}