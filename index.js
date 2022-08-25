class Person{
    constructor(name, img, rarity, position, title, info, comment, twUrl, rePfUrl) {
        this.name = name;
        this.img = img;
        this.rarity = rarity;
        this.position = position;
        this.title = title;
        this.info = info;
        this.comment = comment;
        this.twUrl =twUrl;
        this.rePfUrl = rePfUrl;
    }

}

class View{
        static foo(personList) {
            let res = ``;
            for(let i = 0; i < personList.length; i++) {
                res = res + View.getResult(personList[i]);
            }
            return res;
        }

        static getResult(person){
        let res = `
            <div class=" d-flex flex-column justify-content-around align-items-center pt-4 pb-4">
                <div class="card d-flex flex-column justify-content-around align-items-center  col-10 col-sm-7 col-md-6 col-lg-5 col-xl-5 col-xxl-4 px-3 pb-3">
                    <div>
                        <h1 id="rarityText" class="${person.rarity.toLowerCase()}Effect">${person.rarity}</h1>
                    </div>
                    <div id="rarityBg" class="card ${person.rarity.toLowerCase()}Bg p-3">
                        <div class="card bg-white">
                            <div id="cardImg" class="col-12 d-flex justify-content-center maxH-30Vh">
                                <img src="${person.img}" alt="" class="img-fluid imgFit ">
                            </div>
                            <hr>
                            <div class="card-body bg-white text-center pt-0">
                                <h5 id="person-name" class="card-title">${person.name}</h5>
                                <h6 class="card-subtitle text-secondary">${person.position}</h6>
                                <hr>
                                <p class="card-text">${person.info}</p>
                                <hr>
                                <p class="card-text">${person.comment}</p>
                                <hr>
                                <div class="d-flex justify-content-around">
                                    <a href=${person.twUrl}>
                                        TwitterURL
                                        <i class="fa-brands fa-twitter"></i>
                                        <!-- ↑なぜか反映されなかったのでコメントアウトしてます -->
                                    </a>
                                    <a href=${person.rePfUrl}>
                                        RecursionPFURL
                                        <img src="https://pbs.twimg.com/profile_images/1351355180395028483/fmvRE5cO_400x400.jpg" height="30px">
                                        <!-- ほんとはRecursionのIconいれたい -->
                                    </a>
                                </div>
                                <hr>
                                <div class="d-flex justify-content-center align-items-center offset-2">
                                    <p class="m-0 pe-2">結果をTweetする</p>
                                    <div class="m-3" id="twitter-button">
                                        <a href="https://twitter.com/intent/tweet?text=Recursionガチャで「${person.name}」さんを回目で引けました！&url=https://recursion-teamdiv-green.github.io/project/&hashtags=RecursionCS">Tweet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="redrawBtn" class="pt-3">
                    <button class="btn btn-secondary btn-lg" id="againBtn">もう一度引く</button>
                </div>

                    <!-- open sidebar / offcanvas -->
                    <!-- 前のコード → <p class="text-center mt-2" style="font-size:small" id="userList"><u>ガチャ排出一覧</u></p> -->
                    <div class="d-flex justify-content-center align-items-center pb-2">
                        <a class="text-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">ガチャ排出率</a>
                    </div>
            </div>
        `;
        return res;
    }
}


const personList =
    [
        new Person("壁Jeffry", "https://user-images.githubusercontent.com/51078652/185964168-41ded5e3-6c28-4364-a5d9-0a4e8f12faf8.jpg", "UR", "かべ", "title", "", "Recursionで学んでいくうちに、いろいろできるようになって調子乗ってないかい？そんな時は、Jeffryさんを思い出そう。ブラウザでフレームワークやらSQLやらを動くようにしてしますめちゃすごMetaエンジニアだ。そんなJeffryさんはCSの技術を自慢するのではなく、日本のソフトウェア界の未来のためにその技術を用いている。Jeffryさんに感謝を伝えながら、学んだ知識は自分のためでなく人のために使おう！", "https://twitter.com/jalva_dev", "https://recursionist.io/users/ja-lv"),
        new Person("王Jeffry", "https://user-images.githubusercontent.com/51078652/186164980-e1432de3-472d-4475-93b2-610be7941d88.jpg", "UR", "King", "title", "", " !!!!! WARNING !!!!!　王Jeffryと謁見中!! 今すぐRecursionを使用している旨を伝え、周りがどんな状態でも大きな声で「ありがとうございます！」と画像に3回伝えましょう。そうすればJeffryさんがやさしく微笑んでいるように見えます。", "https://twitter.com/jalva_dev", "https://recursionist.io/users/ja-lv"),
        new Person("無敵Jeffry", "https://user-images.githubusercontent.com/51078652/186164988-26963477-7cfd-4a58-9398-aaff34f081b9.jpg", "UR", "無敵", "", "", "無敵状態のJeffryさん。無敵Jeffryを引き当てたあなたは、今後一週間、どんなエラーでも5秒で解決できる(かもしれない)能力を手にいれた！！！！", "https://twitter.com/jalva_dev", "https://recursionist.io/users/ja-lv"),
        new Person("チャリで来たJeffryさん", "https://user-images.githubusercontent.com/51078652/186164993-2e92a0af-9b4d-4b3b-a059-7a203d38ea6c.jpg", "UR", "遠いとこ", "title", "", "いつも優しい表情のJeffryさんですが、実は強面の中に入っても、あら不思議、すんなり馴染んじゃいます。皆さんもJeffryさんを見習って、どんな職場でも自分の力を遺憾なく発揮しましょう。", "https://twitter.com/jalva_dev", "https://recursionist.io/users/ja-lv"),
        new Person("Shinya", "https://recursionist.io/img/front/business/recursion-bear.png", "SR", "Recursion共同創業者", "Recursionユーザーをコンピュータサイエンスの世界に連れ込んだ男", "福岡県出身 アメリカ在住 アメリカ渡米時に苦労した", "共同創業者のShinyaです！", "https://twitter.com/shinya_cal", "https://recursionist.io/users/shinya"),
        new Person("Jeffry Alvarado", "https://blog.recursionist.io/wp-content/uploads/2022/02/r8KOXERo_400x400.jpeg", "SR", "Recursion共同創業者", "、日本でCS旋風を巻き起こす男", "グアテマラ系アメリカ人/Metaエンジニア", "日本はもっとソフトウェア開発者溢れている国になってほしい、そして日本からのソフトウェアもっと世界中に広げてほしい", "https://twitter.com/jalva_dev", "https://recursionist.io/users/ja-lv"),
        new Person("Reina", "images/reina.png", "R", "コミュニティマネージャー", "質問回答数No.１子育て中ママ", "鹿児島出身、超初心者からのRecursion最長ユーザー、質問回答数No.１子育て中ママ", "デバッグ大好物のデバッグ芸人です。", "https://twitter.com/reina_second_", "https://recursionist.io/users/%E3%83%AC%E3%82%A4%E3%83%8A"),
        new Person("Acha", "images/acha.png", "R", "Gitワークショップのメンター", "", "Recursionと出会って五十路でエンジニアデビューを果たした駆け出しおばちゃんエンジニア", "一言:だいじょうぶます。Gitこわくない", "https://twitter.com/Acha_for_CS", " https://recursionist.io/users/atsu201005"),
        // new Person("Kown", img, rarity, position, "title", info, comment, twUrl, rePfUrl),
        new Person("ハルキ", "images/haruki.png", "R", "初心者用チーム開発メンター", "title", "出身:長崎 / 職業:設備の保全作業してます", "一言:落とし物を届けに交番に行って身分証として免許証を見せたら、3か月ほど期限切れでした🥶。車運転してないか問い詰められちゃいました😂。", "https://twitter.com/d01rEe7nqjn3UCT", "https://recursionist.io/users/harki"),
        new Person("Nori", "images/nori.png", "R", "初回テストユーザからの参加者,OSS開発者", "tiRecursionメンバー最初のOSS開発者!(←あってるかわからない)le", "東京都出身/経歴:大学院(化学)-> 機械設計エンジニア(3社)-> ソフトウェアエンジニア", "Recursionの木構造の問題で、フーバーするとホップアップで出てくる可視化された木構造は、OSSとして作りました。Recursion内では最古参ですが、ソフトウェアエンジニアとしては駆け出しエンジニアです!", "https://twitter.com/ut3gs", "https://recursionist.io/users/Nori"),
        new Person("Sorasuke", "images/sorasuke.png", "R", "イベント計画者", "Recursionで学びシリコンバレーで就職！", "東京生まれ/海外大卒/シリコンバレーのソフトウェアエンジニア", "一言:恋かと思ったらCTOからフィードバックをもらっているだけでした。", "https://twitter.com/Sorasukeprog", "https://recursionist.io/users/Sorasuke"),
        new Person("Masa", "images/masa.png", "R", "チーム開発メンター", "title", "北陸圏産高卒エンジニア", "一言:タケノコよりキノコ派です", "https://twitter.com/soylove2", "https://recursionist.io/users/MASA"),
        new Person("fanta", "images/fanta.png", "R", "チーム開発メンター", "title", "栃木県出身", "エンジニア未経験ですがメンターを始めました！名ばかりのメンターにならないように日々修行です😂", "https://twitter.com/fantafanta335", "https://recursionist.io/users/fanta335"),
        new Person("Taka", "images/taka.png", "R", "初心者交流ワークショップ計画者", "To be MukiMukiエンジニア💪", "福岡出身/食品メーカー勤務ですが企画やったり、DB設計とかやってます", "CSと筋トレガチ勢です。ムキムキエンジニアに転職するのが夢です。", "https://twitter.com/orihack35", "https://recursionist.io/users/Takahir-O"),
        new Person("RYU", "images/ryu.png", "R", "公式イベント講師", "title", "大阪出身/京都工芸繊維大学(電子システム学科)(休学して3ヶ月間フィリピン留学)→ 不動産ベンチャーのバックエンドエンジニア(1年)→ 金融系の上場企業(九段下)でエンジニア(Golang)", "一言:周りと比較して疲弊してるんだろ？俺のTwitter見て元気出しな。", "https://twitter.com/Ryu0121cat", ""),
        // new Person("name", img, "R", "position", "title", "info", "comment", "twUrl", "rePfUrl"),
        // new Person("name", img, "R", "position", "title", "info", "comment", "twUrl", "rePfUrl"),
        // new Person("name", img, "R", "position", "title", "info", "comment", "twUrl", "rePfUrl"),
        // new Person("name", img, "R", "position", "title", "info", "comment", "twUrl", "rePfUrl"),
        // new Person("name", img, "R", "position", "title", "info", "comment", "twUrl", "rePfUrl"),
        // new Person("name", img, rarity, "position", "title", "info", "comment", "twUrl", "rePfUrl"),
        new Person("takeshi","https://lh3.googleusercontent.com/pw/AL9nZEVfm6Xe1FmewGYmNmEi8NggKDrvCC1azvR0DXdWQunLRgX_b6_eLZVZKj0dh3XCKsbmc4KBO6Vj6aQw0wZset2E_1GmAWqsHpR8JgeS2r3jbXBJeh2DhFJzZdB0mZMjx5I9rzd8OhckapDUGyJng1u5=s828-no?authuser=0","N","Recursionガチャ!ガチャ!開発者","駆け出しユーザー", "カナダ留学中","一言:とにかくこれからも楽しくRecursionやっていきます!","https://twitter.com/orange_take4","https://recursionist.io/users/takeshi8989"),
        new Person("Taro", "https://recursionist.io/storage/avatars/mtYMPtYm5ngayUHxcnCXLxbnVLXHSxWFpR95kv9z.png", "N", "Recursionガチャ!ガチャ!開発者", "title", "広島/ニュージーランド オークランド市出身/日英バイリンガル/最近はサーフィンにどハマり中", "CSとサーフィンでアクティブエンジニアになるのが夢です", "https://twitter.com/purin2121", "https://recursionist.io/users/SalmonMunchies"),
        new Person("Kai", "images/kai.PNG", "N", "Recursionガチャ!ガチャ!開発者", "駆け出しユーザー", "元電気工事士", "I'm doing a Bible study! There is a lot of useful content for your life!", "https://twitter.com/OiLactee", "https://recursionist.io/users/Kai10")
    ];


    document.getElementById("resultPage").innerHTML = View.foo(personList);
