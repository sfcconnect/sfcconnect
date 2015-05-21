'use strict';

angular.module('connectApp')
.controller('GroupCtrl', function ($scope) {

    $scope.tags = [
        '政治',
        '開発',
        'IT',
        '生物',
        '教育',
        '経済',
        'ことば',
        '心',
        'デザイン',
        'マネジメント',
        '文化',
        '芸術',
        '宗教',
        '宇宙',
        'コミュニケーション',
        'つくる',
        '身体',
        '自然',
        'エネルギー',
        '企業',
        'まち',
        'スポーツ'
    ];

    $scope.quests = [
        '【国際NGO】途上国の教育政策を募集！',
        '干ばつに強い稲を開発してほしい',
        '遠藤，活性化のアイデアありませんか',
        '会社webページできるSE募集',
    ];

    $scope.projects = [
        {
            title: 'ウガンダ衛星教育',
            description: '発展途上国において、教育問題を解決することは格差の連鎖に歯止めをかけるという意味でも非常に重要な命題です。私たちは低コストで広範囲に及ぶ教育政策を衛星授業によるビデオ授業という形で実現し、学校や教員を配置するのが難しい貧困地域や離れた村落に住む現状では初等教育を受けられない子供達に教育を受ける機会を提供したいと考えています。',
            image: 'images/projects/uganda.jpg'
        },
        {
            title: 'SFCで屋外アートフェス！',
            description: 'コンクリート打ちのクールな印象なSFC。確かにかっこいいキャンパスですが、少し殺風景に感じませんか。私たちはSFCの壁をキャンバスにみたてプロジェクションマッピングや水性ペンキでの水風船ファイトを企画し、SFCを期間限定でカラフルに衣装替えさせ、SFC生たちの気持ちをハッピーにしたいと思います。',
            image: 'images/projects/paint.jpg'
        },
        {
            title: '豚のにおいでエコ発電',
            description: 'SFCを取り巻くあの“悪臭“。そうです、養豚場から風に乗ってやってくるあのとてつもない匂いです。一刻も早くなってほしいというそこのあなた。実はあの豚の匂いが新しいバイオ燃料になる可能性を秘めていることを知っていますか。私たち「豚バイオチーム」は研究を重ね、化石燃料の５０倍の発電効率を誇るバイオ燃料を豚の悪臭から抽出することに成功しました。将来はあの「嫌われ者」が世界を救うかもしれません。',
            image: 'images/projects/piggy.jpg'
        },
        {
            title: 'やっかいな雪が地域を救う',
            description: '地方活性化を図るために多くの団体が様々な政策を打ってきたと思います。ですが、その中で本当に成功だと言えるのは数える程でしょう。それは地元に馴染みのないことを背伸びして行ってしまった結果ではないでしょうか。今後の地域活性化は地元に馴染み深いものをメインに進めていくべきだと思います。そこで私たちが着目したのは「雪」です。最近増加傾向にある東南アジアなどからの外国人観光客は雪を知らず、ぜひ一度目にしたいと思っているはず！私たちは地元秋田で、「グローバル国別雪合戦大会」を開催し、秋田の冬をホットにします。',
            image: 'images/projects/snow.jpg'
        },
        {
            title: 'ITで広める新しいミント茶栽培',
            description: '静岡県のある茶畑で突然変異してできたと言われる「ミント茶」、新茶の状態で淹れるとほのかなミントの後味が心地よいと最近、麻布十番に開かれたティーショップで列ができるほどの人気を博しています。しかし、この「ミント茶」栽培が非常に困難で、一年に流通できる量が限られています。そこで私たちはミント茶の栽培に必要な肥料や水分の量をデータ解析し、お茶の栽培に最適な環境をキープするソフトウェアーを開発します。',
            image: 'images/projects/mint.jpg'
        }
    ];

});
