  var terms = [
    {
      'expected': 'あいにく',
      'pattern': ['生憎',],
      'tokenCheck': ''
    },
    {
      'expected': 'あえて',
      'pattern': ['敢えて',],
      'tokenCheck': ''
    },
    {
      'expected': '青々',
      'pattern': ['あおあお',],
      'tokenCheck': ''
    },
    {
      'expected': '飽き足りない',
      'pattern': ['あきたりない',],
      'tokenCheck': ''
    },
    {
      'expected': 'あくまで',
      'pattern': ['飽迄',],
      'tokenCheck': ''
    },
    {
      'expected': 'あげる',
      'pattern': ['上げる',],
      'tokenCheck': ''
    },
    {
      'expected': 'あしからず',
      'pattern': ['悪しからず',],
      'tokenCheck': ''
    },
    {
      'expected': 'あなた',
      'pattern': ['貴方','貴女',],
      'tokenCheck': ''
    },
    {
      'expected': 'あまりに',
      'pattern': ['余りに',],
      'tokenCheck': ''
    },
    {
      'expected': '危うく',
      'pattern': ['あやうく',],
      'tokenCheck': ''
    },
    {
      'expected': '荒々しい',
      'pattern': ['あらあらしい',],
      'tokenCheck': ''
    },
    {
      'expected': 'あらかじめ',
      'pattern': ['予め',],
      'tokenCheck': ''
    },
    {
      'expected': '新たに',
      'pattern': ['あらたに',],
      'tokenCheck': ''
    },
    {
      'expected': 'あらゆる',
      'pattern': ['凡ゆる',],
      'tokenCheck': ''
    },
    {
      'expected': 'ありがたい',
      'pattern': ['有り難い','有難い',],
      'tokenCheck': ''
    },
    {
      'expected': 'ありがとう',
      'pattern': ['有り難う','有難う',],
      'tokenCheck': ''
    },
    {
      'expected': 'ある',
      'pattern': ['或る',],
      'tokenCheck': ''
    },
    {
      'expected': 'である',
      'pattern': ['で有る',],
      'tokenCheck': ''
    },
    {
      'expected': 'あるいは',
      'pattern': ['或いは',],
      'tokenCheck': ''
    },
    {
      'expected': '併せて',
      'pattern': ['あわせて',],
      'tokenCheck': ''
    },
    {
      'expected': '暗に',
      'pattern': ['あんに',],
      'tokenCheck': ''
    },
    {
      'expected': '案の定',
      'pattern': ['あんのじょう',],
      'tokenCheck': ''
    },
    {
      'expected': 'いう',
      'pattern': ['言う',],
      'tokenCheck': ''
    },
    {
      'expected': '意外に',
      'pattern': ['いがいに',],
      'tokenCheck': ''
    },
    {
      'expected': 'いかが',
      'pattern': ['如何が',],
      'tokenCheck': ''
    },
    {
      'expected': 'いかにも',
      'pattern': ['如何にも',],
      'tokenCheck': ''
    },
    {
      'expected': '生き生き',
      'pattern': ['いきいき',],
      'tokenCheck': ''
    },
    {
      'expected': 'いきなり',
      'pattern': ['行き成り',],
      'tokenCheck': ''
    },
    {
      'expected': 'いく',
      'pattern': ['行く',],
      'tokenCheck': ''
    },
    {
      'expected': 'いくつ',
      'pattern': ['幾つ',],
      'tokenCheck': ''
    },
    {
      'expected': 'いくぶん',
      'pattern': ['幾分',],
      'tokenCheck': ''
    },
    {
      'expected': 'いずれ',
      'pattern': ['何れ',],
      'tokenCheck': ''
    },
    {
      'expected': '致す',
      'pattern': ['いたす',],
      'tokenCheck': ''
    },
    {
      'expected': 'いたします',
      'pattern': ['致します',],
      'tokenCheck': ''
    },
    {
      'expected': 'いたずらに',
      'pattern': ['徒に',],
      'tokenCheck': ''
    },
    {
      'expected': 'いただく',
      'pattern': ['頂く',],
      'tokenCheck': ''
    },
    {
      'expected': 'いちいち',
      'pattern': ['一々',],
      'tokenCheck': ''
    },
    {
      'expected': '一応',
      'pattern': ['いちおう',],
      'tokenCheck': ''
    },
    {
      'expected': '一概に',
      'pattern': ['いちがいに',],
      'tokenCheck': ''
    },
    {
      'expected': '一時に',
      'pattern': ['いちじに',],
      'tokenCheck': ''
    },
    {
      'expected': '一段と',
      'pattern': ['いちだんと',],
      'tokenCheck': ''
    },
    {
      'expected': '一度に',
      'pattern': ['いちどに',],
      'tokenCheck': ''
    },
    {
      'expected': 'いち早く',
      'pattern': ['逸早く',],
      'tokenCheck': ''
    },
    {
      'expected': '一番',
      'pattern': ['いちばん',],
      'tokenCheck': ''
    },
    {
      'expected': '一様に',
      'pattern': ['いちように',],
      'tokenCheck': ''
    },
    {
      'expected': 'いつ',
      'pattern': ['何時',],
      'tokenCheck': ''
    },
    {
      'expected': 'いつか',
      'pattern': ['何時か',],
      'tokenCheck': ''
    },
    {
      'expected': '一気に',
      'pattern': ['いっきに',],
      'tokenCheck': ''
    },
    {
      'expected': '一挙に',
      'pattern': ['いっきょに',],
      'tokenCheck': ''
    },
    {
      'expected': '一見',
      'pattern': ['いっけん',],
      'tokenCheck': ''
    },
    {
      'expected': '一向に',
      'pattern': ['いっこうに',],
      'tokenCheck': ''
    },
    {
      'expected': '一切',
      'pattern': ['いっさい',],
      'tokenCheck': ''
    },
    {
      'expected': '一緒に',
      'pattern': ['いっしょに',],
      'tokenCheck': ''
    },
    {
      'expected': '一心に',
      'pattern': ['いっしんに',],
      'tokenCheck': ''
    },
    {
      'expected': '一斉に',
      'pattern': ['いっせいに',],
      'tokenCheck': ''
    },
    {
      'expected': 'いったん',
      'pattern': ['一旦',],
      'tokenCheck': ''
    },
    {
      'expected': 'いっぱい',
      'pattern': ['一杯',],
      'tokenCheck': ''
    },
    {
      'expected': '一般に',
      'pattern': ['いっぱんに',],
      'tokenCheck': ''
    },
    {
      'expected': '一方',
      'pattern': ['いっぽう',],
      'tokenCheck': ''
    },
    {
      'expected': 'いつも',
      'pattern': ['何時も',],
      'tokenCheck': ''
    },
    {
      'expected': 'いまだに',
      'pattern': ['未だに',],
      'tokenCheck': ''
    },
    {
      'expected': '今にも',
      'pattern': ['いまにも',],
      'tokenCheck': ''
    },
    {
      'expected': 'いよいよ',
      'pattern': ['愈々',],
      'tokenCheck': ''
    },
    {
      'expected': 'いる',
      'pattern': ['居る',],
      'tokenCheck': ''
    },
    {
      'expected': 'いろいろ',
      'pattern': ['色々',],
      'tokenCheck': ''
    },
    {
      'expected': 'いわば',
      'pattern': ['言わば',],
      'tokenCheck': ''
    },
    {
      'expected': 'いわゆる',
      'pattern': ['所謂',],
      'tokenCheck': ''
    },
    {
      'expected': '後ろめたい',
      'pattern': ['うしろめたい',],
      'tokenCheck': ''
    },
    {
      'expected': 'うすうす',
      'pattern': ['薄々',],
      'tokenCheck': ''
    },
    {
      'expected': 'うっすら',
      'pattern': ['薄ら','薄っすら',],
      'tokenCheck': ''
    },
    {
      'expected': 'うまい',
      'pattern': ['上手い','巧い',],
      'tokenCheck': ''
    },
    {
      'expected': '延々',
      'pattern': ['えんえん',],
      'tokenCheck': ''
    },
    {
      'expected': 'お、ご',
      'pattern': ['御',],
      'tokenCheck': ''
    },
    {
      'expected': 'おいおい',
      'pattern': ['追々','追い追い',],
      'tokenCheck': ''
    },
    {
      'expected': 'おいしい',
      'pattern': ['美味しい',],
      'tokenCheck': ''
    },
    {
      'expected': 'において',
      'pattern': ['に於いて',],
      'tokenCheck': ''
    },
    {
      'expected': '往々にして',
      'pattern': ['おうおうにして',],
      'tokenCheck': ''
    },
    {
      'expected': '大いに',
      'pattern': ['おおいに',],
      'tokenCheck': ''
    },
    {
      'expected': '大きな',
      'pattern': ['おおきな',],
      'tokenCheck': ''
    },
    {
      'expected': '大ざっぱ',
      'pattern': ['大雑把',],
      'tokenCheck': ''
    },
    {
      'expected': '大っぴら、おおっぴら',
      'pattern': ['大っ平',],
      'tokenCheck': ''
    },
    {
      'expected': '大幅',
      'pattern': ['おおはば',],
      'tokenCheck': ''
    },
    {
      'expected': '大まか',
      'pattern': ['おおまか',],
      'tokenCheck': ''
    },
    {
      'expected': 'おおむね',
      'pattern': ['概ね','大旨',],
      'tokenCheck': ''
    },
    {
      'expected': 'おおよそ',
      'pattern': ['大凡',],
      'tokenCheck': ''
    },
    {
      'expected': 'おおらか',
      'pattern': ['大らか',],
      'tokenCheck': ''
    },
    {
      'expected': 'おかげさま',
      'pattern': ['お陰様',],
      'tokenCheck': ''
    },
    {
      'expected': 'おかげ',
      'pattern': ['お陰',],
      'tokenCheck': ''
    },
    {
      'expected': 'おかしい',
      'pattern': ['可笑しい',],
      'tokenCheck': ''
    },
    {
      'expected': '折から',
      'pattern': ['折柄',],
      'tokenCheck': ''
    },
    {
      'expected': 'おく',
      'pattern': ['置く',],
      'tokenCheck': ''
    },
    {
      'expected': '恐る恐る',
      'pattern': ['おそるおそる',],
      'tokenCheck': ''
    },
    {
      'expected': '追って',
      'pattern': ['おって',],
      'tokenCheck': ''
    },
    {
      'expected': 'おのおの',
      'pattern': ['各々',],
      'tokenCheck': ''
    },
    {
      'expected': 'おのずから',
      'pattern': ['自ずから',],
      'tokenCheck': ''
    },
    {
      'expected': 'おはよう',
      'pattern': ['お早う','御早う',],
      'tokenCheck': ''
    },
    {
      'expected': 'おめでとう',
      'pattern': ['御目出度う',],
      'tokenCheck': ''
    },
    {
      'expected': '思い思い',
      'pattern': ['おもいおもい',],
      'tokenCheck': ''
    },
    {
      'expected': '思いきって',
      'pattern': ['思い切って','おもいきって',],
      'tokenCheck': ''
    },
    {
      'expected': '思いきり',
      'pattern': ['思い切り','おもいきり',],
      'tokenCheck': ''
    },
    {
      'expected': '思う存分',
      'pattern': ['思うぞんぶん',],
      'tokenCheck': ''
    },
    {
      'expected': '主な',
      'pattern': ['おもな',],
      'tokenCheck': ''
    },
    {
      'expected': '主に',
      'pattern': ['おもに',],
      'tokenCheck': ''
    },
    {
      'expected': 'おもむろに',
      'pattern': ['徐に',],
      'tokenCheck': ''
    },
    {
      'expected': '思わしい',
      'pattern': ['おもわしい',],
      'tokenCheck': ''
    },
    {
      'expected': '思わず',
      'pattern': ['おもわず',],
      'tokenCheck': ''
    },
    {
      'expected': 'およそ',
      'pattern': ['凡そ',],
      'tokenCheck': ''
    },
    {
      'expected': '及ばずながら',
      'pattern': ['及ばず乍ら','およばずながら',],
      'tokenCheck': ''
    },
    {
      'expected': '及ぶ',
      'pattern': ['およぶ',],
      'tokenCheck': ''
    },
    {
      'expected': 'および',
      'pattern': ['及び',],
      'tokenCheck': ''
    },
    {
      'expected': '折あしく',
      'pattern': ['折悪しく','おりあしく',],
      'tokenCheck': ''
    },
    {
      'expected': '折り入って',
      'pattern': ['おりいって',],
      'tokenCheck': ''
    },
    {
      'expected': '折よく',
      'pattern': ['折良く','おりよく',],
      'tokenCheck': ''
    },
    {
      'expected': 'おろそか',
      'pattern': ['疎か',],
      'tokenCheck': ''
    },
    {
      'expected': 'か月',
      'pattern': ['ヶ月','ヵ月','カ月','箇月','ケ月','個月',],
      'tokenCheck': ''
    },
    {
      'expected': '概して',
      'pattern': ['がいして',],
      'tokenCheck': ''
    },
    {
      'expected': '皆目',
      'pattern': ['かいもく',],
      'tokenCheck': ''
    },
    {
      'expected': 'かえって',
      'pattern': ['却って',],
      'tokenCheck': ''
    },
    {
      'expected': 'かかわらず',
      'pattern': ['関わらず','関らず','係わらず','係らず','拘わらず','拘らず',],
      'tokenCheck': ''
    },
    {
      'expected': 'かかわる',
      'pattern': ['関わる','関る','係わる','係る','拘わる','拘る',],
      'tokenCheck': ''
    },
    {
      'expected': 'かぎり',
      'pattern': ['限り',],
      'tokenCheck': ''
    },
    {
      'expected': '格別',
      'pattern': ['かくべつ',],
      'tokenCheck': ''
    },
    {
      'expected': '陰ながら',
      'pattern': ['陰乍ら','かげながら',],
      'tokenCheck': ''
    },
    {
      'expected': '重ねて',
      'pattern': ['かさねて',],
      'tokenCheck': ''
    },
    {
      'expected': '箇所',
      'pattern': ['個所','か所','カ所','ヵ所','ヶ所','ケ所',],
      'tokenCheck': ''
    },
    {
      'expected': '箇条書き',
      'pattern': ['個条書き',],
      'tokenCheck': ''
    },
    {
      'expected': 'かつ',
      'pattern': ['且つ',],
      'tokenCheck': ''
    },
    {
      'expected': 'かつて',
      'pattern': ['嘗て','且つて',],
      'tokenCheck': ''
    },
    {
      'expected': 'かなた',
      'pattern': ['彼方',],
      'tokenCheck': ''
    },
    {
      'expected': '必ず',
      'pattern': ['かならず',],
      'tokenCheck': ''
    },
    {
      'expected': 'かなり',
      'pattern': ['可成り','可なり',],
      'tokenCheck': ''
    },
    {
      'expected': 'かねて',
      'pattern': ['予て',],
      'tokenCheck': ''
    },
    {
      'expected': '彼女',
      'pattern': ['かのじょ',],
      'tokenCheck': ''
    },
    {
      'expected': 'かもしれない',
      'pattern': ['かも知れない',],
      'tokenCheck': ''
    },
    {
      'expected': '仮に',
      'pattern': ['かりに',],
      'tokenCheck': ''
    },
    {
      'expected': '彼',
      'pattern': ['かれ',],
      'tokenCheck': ''
    },
    {
      'expected': 'かわいい',
      'pattern': ['可愛い',],
      'tokenCheck': ''
    },
    {
      'expected': '代わりに',
      'pattern': ['かわりに',],
      'tokenCheck': ''
    },
    {
      'expected': '代わる代わる',
      'pattern': ['かわるがわる',],
      'tokenCheck': ''
    },
    {
      'expected': '元来',
      'pattern': ['がんらい',],
      'tokenCheck': ''
    },
    {
      'expected': 'してきた',
      'pattern': ['して来た',],
      'tokenCheck': ''
    },
    {
      'expected': '厳しい',
      'pattern': ['きびしい',],
      'tokenCheck': ''
    },
    {
      'expected': '決まって',
      'pattern': ['きまって',],
      'tokenCheck': ''
    },
    {
      'expected': '君',
      'pattern': ['きみ',],
      'tokenCheck': ''
    },
    {
      'expected': 'きわめて',
      'pattern': ['極めて',],
      'tokenCheck': ''
    },
    {
      'expected': '急きょ',
      'pattern': ['急遽',],
      'tokenCheck': ''
    },
    {
      'expected': '極力',
      'pattern': ['きょくりょく',],
      'tokenCheck': ''
    },
    {
      'expected': 'ください',
      'pattern': ['下さい',],
      'tokenCheck': ''
    },
    {
      'expected': 'くまなく',
      'pattern': ['隈無く','隈なく',],
      'tokenCheck': ''
    },
    {
      'expected': 'くらい',
      'pattern': ['位',],
      'tokenCheck': ''
    },
    {
      'expected': 'くる',
      'pattern': ['来る',],
      'tokenCheck': ''
    },
    {
      'expected': 'くれぐれ',
      'pattern': ['呉々',],
      'tokenCheck': ''
    },
    {
      'expected': '詳しい',
      'pattern': ['くわしい',],
      'tokenCheck': ''
    },
    {
      'expected': '結局',
      'pattern': ['けっきょく',],
      'tokenCheck': ''
    },
    {
      'expected': '決して',
      'pattern': ['けっして',],
      'tokenCheck': ''
    },
    {
      'expected': '厳に',
      'pattern': ['げんに',],
      'tokenCheck': ''
    },
    {
      'expected': '現に',
      'pattern': ['げんに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ごく',
      'pattern': ['極く',],
      'tokenCheck': ''
    },
    {
      'expected': 'ここ',
      'pattern': ['此処',],
      'tokenCheck': ''
    },
    {
      'expected': '心して',
      'pattern': ['こころして',],
      'tokenCheck': ''
    },
    {
      'expected': '試みに',
      'pattern': ['こころみに',],
      'tokenCheck': ''
    },
    {
      'expected': 'こちら',
      'pattern': ['此方',],
      'tokenCheck': ''
    },
    {
      'expected': 'こと',
      'pattern': ['事',],
      'tokenCheck': ''
    },
    {
      'expected': 'ごとに',
      'pattern': ['毎に',],
      'tokenCheck': ''
    },
    {
      'expected': 'ことごとく',
      'pattern': ['悉く',],
      'tokenCheck': ''
    },
    {
      'expected': '事ごとに',
      'pattern': ['ことごとに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ことさら',
      'pattern': ['殊更',],
      'tokenCheck': ''
    },
    {
      'expected': '子ども',
      'pattern': ['子供','こども',],
      'tokenCheck': ''
    },
    {
      'expected': 'この',
      'pattern': ['此の',],
      'tokenCheck': ''
    },
    {
      'expected': 'このごろ',
      'pattern': ['此の頃',],
      'tokenCheck': ''
    },
    {
      'expected': 'この際',
      'pattern': ['このさい',],
      'tokenCheck': ''
    },
    {
      'expected': 'このたび',
      'pattern': ['此度',],
      'tokenCheck': ''
    },
    {
      'expected': 'この辺で',
      'pattern': ['このへんで',],
      'tokenCheck': ''
    },
    {
      'expected': 'このほど',
      'pattern': ['此の程',],
      'tokenCheck': ''
    },
    {
      'expected': '好んで',
      'pattern': ['このんで',],
      'tokenCheck': ''
    },
    {
      'expected': 'こまごま',
      'pattern': ['細々',],
      'tokenCheck': ''
    },
    {
      'expected': 'これ',
      'pattern': ['此れ',],
      'tokenCheck': ''
    },
    {
      'expected': 'これぐらい',
      'pattern': ['此位',],
      'tokenCheck': ''
    },
    {
      'expected': 'これほど',
      'pattern': ['此程',],
      'tokenCheck': ''
    },
    {
      'expected': 'ころ、ごろ',
      'pattern': ['頃',],
      'tokenCheck': ''
    },
    {
      'expected': 'こわごわ',
      'pattern': ['恐々','恐恐','怖々','怖怖',],
      'tokenCheck': ''
    },
    {
      'expected': '今後',
      'pattern': ['こんご',],
      'tokenCheck': ''
    },
    {
      'expected': '今度',
      'pattern': ['こんど',],
      'tokenCheck': ''
    },
    {
      'expected': 'こんにちは',
      'pattern': ['今日は',],
      'tokenCheck': ''
    },
    {
      'expected': 'こんばんは',
      'pattern': ['今晩は',],
      'tokenCheck': ''
    },
    {
      'expected': '再三',
      'pattern': ['さいさん',],
      'tokenCheck': ''
    },
    {
      'expected': '幸い',
      'pattern': ['さいわい',],
      'tokenCheck': ''
    },
    {
      'expected': '逆さま',
      'pattern': ['逆様','さかさま',],
      'tokenCheck': ''
    },
    {
      'expected': 'さかのぼって',
      'pattern': ['遡って',],
      'tokenCheck': ''
    },
    {
      'expected': '盛ん',
      'pattern': ['さかん',],
      'tokenCheck': ''
    },
    {
      'expected': '先に',
      'pattern': ['さきに',],
      'tokenCheck': ''
    },
    {
      'expected': 'さしづめ',
      'pattern': ['差し詰め',],
      'tokenCheck': ''
    },
    {
      'expected': 'さすが',
      'pattern': ['流石',],
      'tokenCheck': ''
    },
    {
      'expected': 'さほど',
      'pattern': ['左程',],
      'tokenCheck': ''
    },
    {
      'expected': 'さまざま',
      'pattern': ['様々',],
      'tokenCheck': ''
    },
    {
      'expected': 'さようなら',
      'pattern': ['左様なら',],
      'tokenCheck': ''
    },
    {
      'expected': 'さらに',
      'pattern': ['更に',],
      'tokenCheck': ''
    },
    {
      'expected': '去る',
      'pattern': ['さる',],
      'tokenCheck': ''
    },
    {
      'expected': '強いて',
      'pattern': ['しいて',],
      'tokenCheck': ''
    },
    {
      'expected': 'しかし',
      'pattern': ['然し',],
      'tokenCheck': ''
    },
    {
      'expected': '仕方なく',
      'pattern': ['しかたなく',],
      'tokenCheck': ''
    },
    {
      'expected': 'じかに',
      'pattern': ['直に',],
      'tokenCheck': ''
    },
    {
      'expected': 'しかも',
      'pattern': ['而も','然も',],
      'tokenCheck': ''
    },
    {
      'expected': '至急',
      'pattern': ['しきゅう',],
      'tokenCheck': ''
    },
    {
      'expected': 'しだい',
      'pattern': ['次第',],
      'tokenCheck': ''
    },
    {
      'expected': '従う',
      'pattern': ['したがう',],
      'tokenCheck': ''
    },
    {
      'expected': 'したがって',
      'pattern': ['従って',],
      'tokenCheck': ''
    },
    {
      'expected': '親しく',
      'pattern': ['したしく',],
      'tokenCheck': ''
    },
    {
      'expected': 'しだす',
      'pattern': ['し出す',],
      'tokenCheck': ''
    },
    {
      'expected': '実際',
      'pattern': ['じっさい',],
      'tokenCheck': ''
    },
    {
      'expected': '実のところ',
      'pattern': ['実の所','じつのところ',],
      'tokenCheck': ''
    },
    {
      'expected': '実は',
      'pattern': ['じつは',],
      'tokenCheck': ''
    },
    {
      'expected': 'しばらく',
      'pattern': ['暫く',],
      'tokenCheck': ''
    },
    {
      'expected': 'てしまう',
      'pattern': ['て了う',],
      'tokenCheck': ''
    },
    {
      'expected': '中',
      'pattern': ['じゅう',],
      'tokenCheck': ''
    },
    {
      'expected': '終始',
      'pattern': ['しゅうし',],
      'tokenCheck': ''
    },
    {
      'expected': '十分、じゅうぶん',
      'pattern': ['充分',],
      'tokenCheck': ''
    },
    {
      'expected': '従来',
      'pattern': ['じゅうらい',],
      'tokenCheck': ''
    },
    {
      'expected': '主として',
      'pattern': ['しゅとして',],
      'tokenCheck': ''
    },
    {
      'expected': '少々',
      'pattern': ['しょうしょう',],
      'tokenCheck': ''
    },
    {
      'expected': '徐々に',
      'pattern': ['じょじょに',],
      'tokenCheck': ''
    },
    {
      'expected': 'しょせん',
      'pattern': ['所詮',],
      'tokenCheck': ''
    },
    {
      'expected': '白々と',
      'pattern': ['しらじらと',],
      'tokenCheck': ''
    },
    {
      'expected': '知らず知らず',
      'pattern': ['しらずしらず',],
      'tokenCheck': ''
    },
    {
      'expected': '真に',
      'pattern': ['しんに',],
      'tokenCheck': ''
    },
    {
      'expected': 'にすぎない',
      'pattern': ['に過ぎない',],
      'tokenCheck': ''
    },
    {
      'expected': '少なくとも',
      'pattern': ['すくなくとも',],
      'tokenCheck': ''
    },
    {
      'expected': 'すぐに',
      'pattern': ['直ぐに',],
      'tokenCheck': ''
    },
    {
      'expected': '少し',
      'pattern': ['すこし',],
      'tokenCheck': ''
    },
    {
      'expected': 'すてき',
      'pattern': ['素敵',],
      'tokenCheck': ''
    },
    {
      'expected': 'すでに',
      'pattern': ['既に',],
      'tokenCheck': ''
    },
    {
      'expected': 'すなわち',
      'pattern': ['即ち',],
      'tokenCheck': ''
    },
    {
      'expected': '素早い',
      'pattern': ['すばやい',],
      'tokenCheck': ''
    },
    {
      'expected': '素早く',
      'pattern': ['すばやく',],
      'tokenCheck': ''
    },
    {
      'expected': 'すべき',
      'pattern': ['可き',],
      'tokenCheck': ''
    },
    {
      'expected': 'すべて',
      'pattern': ['全て','凡て','総て','統べて','総べて',],
      'tokenCheck': ''
    },
    {
      'expected': '速やか',
      'pattern': ['すみやか',],
      'tokenCheck': ''
    },
    {
      'expected': '精いっぱい',
      'pattern': ['精一杯',],
      'tokenCheck': ''
    },
    {
      'expected': 'せいぜい',
      'pattern': ['精々',],
      'tokenCheck': ''
    },
    {
      'expected': 'せっかく',
      'pattern': ['折角',],
      'tokenCheck': ''
    },
    {
      'expected': '絶対に',
      'pattern': ['ぜったいに',],
      'tokenCheck': ''
    },
    {
      'expected': '切に',
      'pattern': ['せつに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ぜひ',
      'pattern': ['是非',],
      'tokenCheck': ''
    },
    {
      'expected': '全然',
      'pattern': ['ぜんぜん',],
      'tokenCheck': ''
    },
    {
      'expected': '相当',
      'pattern': ['そうとう',],
      'tokenCheck': ''
    },
    {
      'expected': '続々',
      'pattern': ['ぞくぞく',],
      'tokenCheck': ''
    },
    {
      'expected': 'そこ',
      'pattern': ['其処',],
      'tokenCheck': ''
    },
    {
      'expected': 'その上、そのうえ',
      'pattern': ['其の上',],
      'tokenCheck': ''
    },
    {
      'expected': 'そのうち',
      'pattern': ['その内','其の内',],
      'tokenCheck': ''
    },
    {
      'expected': 'その代わり、そのかわり',
      'pattern': ['其の代わり',],
      'tokenCheck': ''
    },
    {
      'expected': 'そのほか',
      'pattern': ['其の外','その外','その他',],
      'tokenCheck': ''
    },
    {
      'expected': 'それ',
      'pattern': ['其れ',],
      'tokenCheck': ''
    },
    {
      'expected': 'それぞれ',
      'pattern': ['夫々',],
      'tokenCheck': ''
    },
    {
      'expected': 'たい',
      'pattern': ['度い',],
      'tokenCheck': ''
    },
    {
      'expected': '第一',
      'pattern': ['だいいち',],
      'tokenCheck': ''
    },
    {
      'expected': 'だいぶ',
      'pattern': ['大分',],
      'tokenCheck': ''
    },
    {
      'expected': '互いに',
      'pattern': ['たがいに',],
      'tokenCheck': ''
    },
    {
      'expected': 'たかが',
      'pattern': ['高が',],
      'tokenCheck': ''
    },
    {
      'expected': 'たかだか',
      'pattern': ['高々',],
      'tokenCheck': ''
    },
    {
      'expected': 'たくさん',
      'pattern': ['沢山',],
      'tokenCheck': ''
    },
    {
      'expected': '巧みに',
      'pattern': ['たくみに',],
      'tokenCheck': ''
    },
    {
      'expected': 'だけ',
      'pattern': ['丈',],
      'tokenCheck': ''
    },
    {
      'expected': '確かに',
      'pattern': ['たしかに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ただ',
      'pattern': ['只','唯',],
      'tokenCheck': ''
    },
    {
      'expected': 'ただし',
      'pattern': ['但し',],
      'tokenCheck': ''
    },
    {
      'expected': 'ただちに',
      'pattern': ['直ちに',],
      'tokenCheck': ''
    },
    {
      'expected': 'たち',
      'pattern': ['達',],
      'tokenCheck': ''
    },
    {
      'expected': 'たちどころに',
      'pattern': ['立ち所に',],
      'tokenCheck': ''
    },
    {
      'expected': 'たとえ',
      'pattern': ['仮令',],
      'tokenCheck': ''
    },
    {
      'expected': 'たとえば',
      'pattern': ['例えば',],
      'tokenCheck': ''
    },
    {
      'expected': 'たび',
      'pattern': ['度',],
      'tokenCheck': ''
    },
    {
      'expected': 'たびたび',
      'pattern': ['度々',],
      'tokenCheck': ''
    },
    {
      'expected': 'たまたま',
      'pattern': ['偶々',],
      'tokenCheck': ''
    },
    {
      'expected': 'ため',
      'pattern': ['為',],
      'tokenCheck': ''
    },
    {
      'expected': '断じて',
      'pattern': ['だんじて',],
      'tokenCheck': ''
    },
    {
      'expected': 'だんだん',
      'pattern': ['段々',],
      'tokenCheck': ''
    },
    {
      'expected': '単なる',
      'pattern': ['たんなる',],
      'tokenCheck': ''
    },
    {
      'expected': '単に',
      'pattern': ['たんに',],
      'tokenCheck': ''
    },
    {
      'expected': '小さい',
      'pattern': ['ちいさい',],
      'tokenCheck': ''
    },
    {
      'expected': '小さな',
      'pattern': ['ちいさな',],
      'tokenCheck': ''
    },
    {
      'expected': '近く',
      'pattern': ['ちかく',],
      'tokenCheck': ''
    },
    {
      'expected': '近々',
      'pattern': ['近々',],
      'tokenCheck': ''
    },
    {
      'expected': '誓って',
      'pattern': ['ちかって',],
      'tokenCheck': ''
    },
    {
      'expected': '力いっぱい',
      'pattern': ['力一杯','ちからいっぱい',],
      'tokenCheck': ''
    },
    {
      'expected': '逐一',
      'pattern': ['ちくいち',],
      'tokenCheck': ''
    },
    {
      'expected': '逐次',
      'pattern': ['ちくじ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ちなみに',
      'pattern': ['因みに',],
      'tokenCheck': ''
    },
    {
      'expected': '着々',
      'pattern': ['ちゃくちゃく',],
      'tokenCheck': ''
    },
    {
      'expected': 'ちょうど',
      'pattern': ['丁度',],
      'tokenCheck': ''
    },
    {
      'expected': 'ちょっと',
      'pattern': ['一寸',],
      'tokenCheck': ''
    },
    {
      'expected': '次いで',
      'pattern': ['ついで',],
      'tokenCheck': ''
    },
    {
      'expected': 'ついて',
      'pattern': ['就いて',],
      'tokenCheck': ''
    },
    {
      'expected': 'ついでに',
      'pattern': ['序に',],
      'tokenCheck': ''
    },
    {
      'expected': 'ついては',
      'pattern': ['就いては',],
      'tokenCheck': ''
    },
    {
      'expected': 'ついに',
      'pattern': ['遂に',],
      'tokenCheck': ''
    },
    {
      'expected': '通常',
      'pattern': ['つうじょう',],
      'tokenCheck': ''
    },
    {
      'expected': '次々に',
      'pattern': ['つぎつぎに',],
      'tokenCheck': ''
    },
    {
      'expected': '次に',
      'pattern': ['つぎに',],
      'tokenCheck': ''
    },
    {
      'expected': 'つく、づく',
      'pattern': ['付く',],
      'tokenCheck': ''
    },
    {
      'expected': '努めて',
      'pattern': ['つとめて',],
      'tokenCheck': ''
    },
    {
      'expected': 'つまり',
      'pattern': ['詰まり',],
      'tokenCheck': ''
    },
    {
      'expected': '～づらい',
      'pattern': ['辛い',],
      'tokenCheck': ''
    },
    {
      'expected': '～つれて',
      'pattern': ['連れて',],
      'tokenCheck': ''
    },
    {
      'expected': '～できる',
      'pattern': ['出来る',],
      'tokenCheck': ''
    },
    {
      'expected': 'できる限り',
      'pattern': ['出来る限り',],
      'tokenCheck': ''
    },
    {
      'expected': 'できるだけ',
      'pattern': ['出来るだけ',],
      'tokenCheck': ''
    },
    {
      'expected': '上出来',
      'pattern': ['上でき',],
      'tokenCheck': ''
    },
    {
      'expected': '出来事',
      'pattern': ['でき事',],
      'tokenCheck': ''
    },
    {
      'expected': '～でない',
      'pattern': ['で無い',],
      'tokenCheck': ''
    },
    {
      'expected': '手もなく',
      'pattern': ['てもなく','手も無く',],
      'tokenCheck': ''
    },
    {
      'expected': '同時に',
      'pattern': ['どうじに',],
      'tokenCheck': ''
    },
    {
      'expected': '当然',
      'pattern': ['とうぜん',],
      'tokenCheck': ''
    },
    {
      'expected': 'とうてい',
      'pattern': ['到底',],
      'tokenCheck': ''
    },
    {
      'expected': 'とうとう',
      'pattern': ['到頭',],
      'tokenCheck': ''
    },
    {
      'expected': '当分',
      'pattern': ['とうぶん',],
      'tokenCheck': ''
    },
    {
      'expected': '遠からず',
      'pattern': ['とおからず',],
      'tokenCheck': ''
    },
    {
      'expected': 'とかく',
      'pattern': ['兎角',],
      'tokenCheck': ''
    },
    {
      'expected': 'とき',
      'pattern': ['時',],
      'tokenCheck': ''
    },
    {
      'expected': '時折',
      'pattern': ['ときおり',],
      'tokenCheck': ''
    },
    {
      'expected': '時々',
      'pattern': ['ときどき',],
      'tokenCheck': ''
    },
    {
      'expected': '特に',
      'pattern': ['とくに',],
      'tokenCheck': ''
    },
    {
      'expected': 'どこ',
      'pattern': ['何処',],
      'tokenCheck': ''
    },
    {
      'expected': 'ところ',
      'pattern': ['所',],
      'tokenCheck': ''
    },
    {
      'expected': 'ところが',
      'pattern': ['所が','処が',],
      'tokenCheck': ''
    },
    {
      'expected': 'ところで',
      'pattern': ['所で','処で',],
      'tokenCheck': ''
    },
    {
      'expected': '突然',
      'pattern': ['とつぜん',],
      'tokenCheck': ''
    },
    {
      'expected': 'とにかく',
      'pattern': ['兎に角',],
      'tokenCheck': ''
    },
    {
      'expected': 'とはいえ',
      'pattern': ['とは言え',],
      'tokenCheck': ''
    },
    {
      'expected': 'とびとび',
      'pattern': ['飛び飛び',],
      'tokenCheck': ''
    },
    {
      'expected': '～とも',
      'pattern': ['共',],
      'tokenCheck': ''
    },
    {
      'expected': 'ともかく',
      'pattern': ['兎も角',],
      'tokenCheck': ''
    },
    {
      'expected': 'ともに',
      'pattern': ['共に',],
      'tokenCheck': ''
    },
    {
      'expected': 'ともども',
      'pattern': ['共々',],
      'tokenCheck': ''
    },
    {
      'expected': '取り合えず、とりあえず',
      'pattern': ['取り敢えず',],
      'tokenCheck': ''
    },
    {
      'expected': '取り急ぎ',
      'pattern': ['とりいそぎ',],
      'tokenCheck': ''
    },
    {
      'expected': 'とりわけ',
      'pattern': ['取り分け',],
      'tokenCheck': ''
    },
    {
      'expected': '～ない',
      'pattern': ['無い',],
      'tokenCheck': ''
    },
    {
      'expected': 'ないし',
      'pattern': ['乃至',],
      'tokenCheck': ''
    },
    {
      'expected': 'なお',
      'pattern': ['尚',],
      'tokenCheck': ''
    },
    {
      'expected': 'なおさら',
      'pattern': ['尚更',],
      'tokenCheck': ''
    },
    {
      'expected': '中でも',
      'pattern': ['なかでも',],
      'tokenCheck': ''
    },
    {
      'expected': 'なかなか',
      'pattern': ['中々',],
      'tokenCheck': ''
    },
    {
      'expected': '長々と',
      'pattern': ['ながながと',],
      'tokenCheck': ''
    },
    {
      'expected': 'ながら',
      'pattern': ['乍ら',],
      'tokenCheck': ''
    },
    {
      'expected': '長らく',
      'pattern': ['ながらく',],
      'tokenCheck': ''
    },
    {
      'expected': 'なぜ',
      'pattern': ['何故',],
      'tokenCheck': ''
    },
    {
      'expected': 'なぜなら',
      'pattern': ['何故なら',],
      'tokenCheck': ''
    },
    {
      'expected': 'など',
      'pattern': ['等',],
      'tokenCheck': ''
    },
    {
      'expected': '何',
      'pattern': ['なに',],
      'tokenCheck': ''
    },
    {
      'expected': '何か',
      'pattern': ['なにか',],
      'tokenCheck': ''
    },
    {
      'expected': '何げない',
      'pattern': ['何気ない',],
      'tokenCheck': ''
    },
    {
      'expected': '何しろ',
      'pattern': ['なにしろ',],
      'tokenCheck': ''
    },
    {
      'expected': '何とぞ',
      'pattern': ['なにとぞ',],
      'tokenCheck': ''
    },
    {
      'expected': '何とも',
      'pattern': ['なんとも',],
      'tokenCheck': ''
    },
    {
      'expected': '何ぶん、なにぶん',
      'pattern': ['何分',],
      'tokenCheck': ''
    },
    {
      'expected': '何も',
      'pattern': ['なにも',],
      'tokenCheck': ''
    },
    {
      'expected': 'になる',
      'pattern': ['に成る',],
      'tokenCheck': ''
    },
    {
      'expected': 'なるべく',
      'pattern': ['成るべく',],
      'tokenCheck': ''
    },
    {
      'expected': 'なるほど',
      'pattern': ['成る程',],
      'tokenCheck': ''
    },
    {
      'expected': '何だか',
      'pattern': ['なんだか',],
      'tokenCheck': ''
    },
    {
      'expected': '難なく',
      'pattern': ['なんなく',],
      'tokenCheck': ''
    },
    {
      'expected': '何らかの',
      'pattern': ['なんらかの',],
      'tokenCheck': ''
    },
    {
      'expected': '～にくい',
      'pattern': ['難い',],
      'tokenCheck': ''
    },
    {
      'expected': '願わくは',
      'pattern': ['ねがわくは',],
      'tokenCheck': ''
    },
    {
      'expected': '根っから',
      'pattern': ['ねっから',],
      'tokenCheck': ''
    },
    {
      'expected': '根掘り葉掘り',
      'pattern': ['ねほりはほり',],
      'tokenCheck': ''
    },
    {
      'expected': '伸び伸び',
      'pattern': ['のびのび',],
      'tokenCheck': ''
    },
    {
      'expected': '図らずも',
      'pattern': ['はからずも',],
      'tokenCheck': ''
    },
    {
      'expected': '～をはじめ',
      'pattern': ['を始め',],
      'tokenCheck': ''
    },
    {
      'expected': '初めて',
      'pattern': ['はじめて',],
      'tokenCheck': ''
    },
    {
      'expected': 'はたして',
      'pattern': ['果たして',],
      'tokenCheck': ''
    },
    {
      'expected': 'はず',
      'pattern': ['筈',],
      'tokenCheck': ''
    },
    {
      'expected': '早くも',
      'pattern': ['はやくも',],
      'tokenCheck': ''
    },
    {
      'expected': '早々と',
      'pattern': ['はやばやと',],
      'tokenCheck': ''
    },
    {
      'expected': 'はるか',
      'pattern': ['遙か',],
      'tokenCheck': ''
    },
    {
      'expected': '引き続き',
      'pattern': ['ひきつづき',],
      'tokenCheck': ''
    },
    {
      'expected': '引きも切らさず',
      'pattern': ['ひきもきらさず',],
      'tokenCheck': ''
    },
    {
      'expected': '引きも切らず',
      'pattern': ['ひきもきらず',],
      'tokenCheck': ''
    },
    {
      'expected': '非常に',
      'pattern': ['ひじょうに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひとえに',
      'pattern': ['偏に',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひと思いに、一思いに',
      'pattern': ['ひとおもいに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひとかたならず',
      'pattern': ['一方ならず',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひときわ',
      'pattern': ['一際',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひとつひとつ',
      'pattern': ['一つ一つ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひとまず',
      'pattern': ['一先ず',],
      'tokenCheck': ''
    },
    {
      'expected': 'ひとまとめ',
      'pattern': ['一まとめ',],
      'tokenCheck': ''
    },
    {
      'expected': '日に日に',
      'pattern': ['ひにひに',],
      'tokenCheck': ''
    },
    {
      'expected': '広々と',
      'pattern': ['ひろびろと',],
      'tokenCheck': ''
    },
    {
      'expected': '～ふう',
      'pattern': ['風',],
      'tokenCheck': ''
    },
    {
      'expected': '付属する',
      'pattern': ['附属する',],
      'tokenCheck': ''
    },
    {
      'expected': 'ふさわしい',
      'pattern': ['相応しい',],
      'tokenCheck': ''
    },
    {
      'expected': '再び',
      'pattern': ['ふたたび',],
      'tokenCheck': ''
    },
    {
      'expected': '普通',
      'pattern': ['ふつう',],
      'tokenCheck': ''
    },
    {
      'expected': '～ぶり',
      'pattern': ['振り',],
      'tokenCheck': ''
    },
    {
      'expected': '～ぶる',
      'pattern': ['振る',],
      'tokenCheck': ''
    },
    {
      'expected': '別に',
      'pattern': ['べつに',],
      'tokenCheck': ''
    },
    {
      'expected': '～し放題',
      'pattern': ['しほうだい',],
      'tokenCheck': ''
    },
    {
      'expected': 'ほか',
      'pattern': ['他',],
      'tokenCheck': ''
    },
    {
      'expected': '僕',
      'pattern': ['ぼく',],
      'tokenCheck': ''
    },
    {
      'expected': '～してほしい',
      'pattern': ['して欲しい',],
      'tokenCheck': ''
    },
    {
      'expected': 'ほそぼそ',
      'pattern': ['細々',],
      'tokenCheck': ''
    },
    {
      'expected': 'ほかならぬ',
      'pattern': ['他ならぬ','外ならぬ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ほど',
      'pattern': ['程',],
      'tokenCheck': ''
    },
    {
      'expected': '程なく',
      'pattern': ['ほどなく',],
      'tokenCheck': ''
    },
    {
      'expected': '程々に',
      'pattern': ['ほどほどに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ほとんど',
      'pattern': ['殆ど',],
      'tokenCheck': ''
    },
    {
      'expected': '本当に',
      'pattern': ['ほんとうに',],
      'tokenCheck': ''
    },
    {
      'expected': '前もって',
      'pattern': ['前以て',],
      'tokenCheck': ''
    },
    {
      'expected': '摩耗',
      'pattern': ['磨耗',],
      'tokenCheck': ''
    },
    {
      'expected': 'まさに',
      'pattern': ['正に',],
      'tokenCheck': ''
    },
    {
      'expected': 'まず',
      'pattern': ['先ず',],
      'tokenCheck': ''
    },
    {
      'expected': 'ますます',
      'pattern': ['益々',],
      'tokenCheck': ''
    },
    {
      'expected': 'また',
      'pattern': ['又',],
      'tokenCheck': ''
    },
    {
      'expected': 'または',
      'pattern': ['又は',],
      'tokenCheck': ''
    },
    {
      'expected': 'まったく',
      'pattern': ['全く',],
      'tokenCheck': ''
    },
    {
      'expected': 'まで',
      'pattern': ['迄',],
      'tokenCheck': ''
    },
    {
      'expected': '摩滅',
      'pattern': ['磨滅',],
      'tokenCheck': ''
    },
    {
      'expected': '間もなく、まもなく',
      'pattern': ['間も無く',],
      'tokenCheck': ''
    },
    {
      'expected': 'まるで',
      'pattern': ['丸で',],
      'tokenCheck': ''
    },
    {
      'expected': '丸々',
      'pattern': ['まるまる',],
      'tokenCheck': ''
    },
    {
      'expected': '万一',
      'pattern': ['まんいち',],
      'tokenCheck': ''
    },
    {
      'expected': '満更',
      'pattern': ['満更',],
      'tokenCheck': ''
    },
    {
      'expected': '～み',
      'pattern': ['味',],
      'tokenCheck': ''
    },
    {
      'expected': 'てみせる',
      'pattern': ['て見せる',],
      'tokenCheck': ''
    },
    {
      'expected': '道すがら',
      'pattern': ['みちすがら',],
      'tokenCheck': ''
    },
    {
      'expected': '皆さん',
      'pattern': ['みなさん',],
      'tokenCheck': ''
    },
    {
      'expected': 'てみる',
      'pattern': ['て見る',],
      'tokenCheck': ''
    },
    {
      'expected': '見るからに',
      'pattern': ['みるからに',],
      'tokenCheck': ''
    },
    {
      'expected': 'むげに',
      'pattern': ['無下に',],
      'tokenCheck': ''
    },
    {
      'expected': '無性に',
      'pattern': ['むしょうに',],
      'tokenCheck': ''
    },
    {
      'expected': 'むしろ',
      'pattern': ['寧ろ',],
      'tokenCheck': ''
    },
    {
      'expected': 'むなしい',
      'pattern': ['空しい','虚しい',],
      'tokenCheck': ''
    },
    {
      'expected': 'むやみ',
      'pattern': ['無暗','無闇',],
      'tokenCheck': ''
    },
    {
      'expected': '無理に',
      'pattern': ['むりに',],
      'tokenCheck': ''
    },
    {
      'expected': '無理やり',
      'pattern': ['むりやり','無理矢理',],
      'tokenCheck': ''
    },
    {
      'expected': 'めったに',
      'pattern': ['滅多に',],
      'tokenCheck': ''
    },
    {
      'expected': 'めっぽう',
      'pattern': ['滅法',],
      'tokenCheck': ''
    },
    {
      'expected': 'めでたい',
      'pattern': ['目出たい',],
      'tokenCheck': ''
    },
    {
      'expected': '申しあげる',
      'pattern': ['もうしあげる',],
      'tokenCheck': ''
    },
    {
      'expected': '毛頭',
      'pattern': ['もうとう',],
      'tokenCheck': ''
    },
    {
      'expected': 'もし',
      'pattern': ['若し',],
      'tokenCheck': ''
    },
    {
      'expected': 'もしくは',
      'pattern': ['若しくは',],
      'tokenCheck': ''
    },
    {
      'expected': '文字どおり',
      'pattern': ['文字通り','もじどおり',],
      'tokenCheck': ''
    },
    {
      'expected': 'もちろん',
      'pattern': ['勿論',],
      'tokenCheck': ''
    },
    {
      'expected': 'もっか',
      'pattern': ['目下',],
      'tokenCheck': ''
    },
    {
      'expected': 'もって',
      'pattern': ['以て','以って',],
      'tokenCheck': ''
    },
    {
      'expected': '最も',
      'pattern': ['もっとも',],
      'tokenCheck': ''
    },
    {
      'expected': 'もともと',
      'pattern': ['元々','本々',],
      'tokenCheck': ''
    },
    {
      'expected': 'もとより',
      'pattern': ['固より','素より',],
      'tokenCheck': ''
    },
    {
      'expected': 'もの',
      'pattern': ['物',],
      'tokenCheck': ''
    },
    {
      'expected': 'もはや',
      'pattern': ['最早',],
      'tokenCheck': ''
    },
    {
      'expected': '～もらう',
      'pattern': ['貰う',],
      'tokenCheck': ''
    },
    {
      'expected': '漏れなく',
      'pattern': ['もれなく',],
      'tokenCheck': ''
    },
    {
      'expected': '～やすい',
      'pattern': ['易い',],
      'tokenCheck': ''
    },
    {
      'expected': '休み休み',
      'pattern': ['やすみやすみ',],
      'tokenCheck': ''
    },
    {
      'expected': 'やすやす',
      'pattern': ['易々',],
      'tokenCheck': ''
    },
    {
      'expected': 'やにわに',
      'pattern': ['矢庭に',],
      'tokenCheck': ''
    },
    {
      'expected': 'やはり',
      'pattern': ['矢張り',],
      'tokenCheck': ''
    },
    {
      'expected': '優に',
      'pattern': ['ゆうに',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゆえに',
      'pattern': ['故に',],
      'tokenCheck': ''
    },
    {
      'expected': '～てゆく',
      'pattern': ['て行く',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゆくゆく',
      'pattern': ['行く行く',],
      'tokenCheck': ''
    },
    {
      'expected': '夢にも',
      'pattern': ['ゆめにも',],
      'tokenCheck': ''
    },
    {
      'expected': '～てよい',
      'pattern': ['て良い',],
      'tokenCheck': ''
    },
    {
      'expected': '要するに',
      'pattern': ['ようするに',],
      'tokenCheck': ''
    },
    {
      'expected': '～ように',
      'pattern': ['様に',],
      'tokenCheck': ''
    },
    {
      'expected': '要は',
      'pattern': ['ようは',],
      'tokenCheck': ''
    },
    {
      'expected': 'ようやく',
      'pattern': ['漸く',],
      'tokenCheck': ''
    },
    {
      'expected': 'よく',
      'pattern': ['良く','善く',],
      'tokenCheck': ''
    },
    {
      'expected': '善しあし、良しあし',
      'pattern': ['善し悪し','よしあし',],
      'tokenCheck': ''
    },
    {
      'expected': 'よって',
      'pattern': ['依って','因って',],
      'tokenCheck': ''
    },
    {
      'expected': '夜通し',
      'pattern': ['よどおし',],
      'tokenCheck': ''
    },
    {
      'expected': 'よろしく',
      'pattern': ['宜しく',],
      'tokenCheck': ''
    },
    {
      'expected': 'よほど',
      'pattern': ['余程',],
      'tokenCheck': ''
    },
    {
      'expected': 'わが',
      'pattern': ['我が',],
      'tokenCheck': ''
    },
    {
      'expected': 'わかる',
      'pattern': ['分かる','解る','判る',],
      'tokenCheck': ''
    },
    {
      'expected': 'わけ',
      'pattern': ['訳',],
      'tokenCheck': ''
    },
    {
      'expected': 'わずか',
      'pattern': ['僅か',],
      'tokenCheck': ''
    },
    {
      'expected': '私',
      'pattern': ['わたし',],
      'tokenCheck': ''
    },
    {
      'expected': '私たち',
      'pattern': ['私達','わたくしたち',],
      'tokenCheck': ''
    },
    {
      'expected': 'われわれ',
      'pattern': ['我々',],
      'tokenCheck': ''
    },
    {
      'expected': 'アーキテクチャー',
      'pattern': ['アーキテクチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アーキテクト',
      'pattern': ['アキテクト',],
      'tokenCheck': ''
    },
    {
      'expected': 'アーケード',
      'pattern': ['アーケイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'アイデア',
      'pattern': ['アイディア',],
      'tokenCheck': ''
    },
    {
      'expected': 'アイデンティティー',
      'pattern': ['アイデンティティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アクセサリー',
      'pattern': ['アクセサリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アクセシビリティー',
      'pattern': ['アクセシビリティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アコーディオン',
      'pattern': ['アコーデオン',],
      'tokenCheck': ''
    },
    {
      'expected': 'アジャスター',
      'pattern': ['アジャスタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アセンブラー',
      'pattern': ['アセンブラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アダプター',
      'pattern': ['アダプタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アップグレード',
      'pattern': ['アップグレイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'アップデーター',
      'pattern': ['アップデータ','アップデイタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アップロード',
      'pattern': ['アップロウド',],
      'tokenCheck': ''
    },
    {
      'expected': 'アドバイザー',
      'pattern': ['アドバイザ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アドバイス',
      'pattern': ['アドヴァイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'アドベンチャー',
      'pattern': ['アドベンチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アニメーション',
      'pattern': ['アニメイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'アブソーバー',
      'pattern': ['アブソーバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アフター',
      'pattern': ['アフタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アプリケーション',
      'pattern': ['アプリケーシヨン',],
      'tokenCheck': ''
    },
    {
      'expected': 'アベレージ',
      'pattern': ['アベレイジ','アヴェレージ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アライアンス',
      'pattern': ['アライヤンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'アラビア',
      'pattern': ['アラビヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アルジェリア',
      'pattern': ['アルジェリヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アルゼンチン',
      'pattern': ['アルゼンティン',],
      'tokenCheck': ''
    },
    {
      'expected': 'アルファ',
      'pattern': ['アルフア',],
      'tokenCheck': ''
    },
    {
      'expected': 'アルファベット',
      'pattern': ['アルフアベット',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンカー',
      'pattern': ['アンカ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンサー',
      'pattern': ['アンサ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンダーバー',
      'pattern': ['アンダーバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンチ',
      'pattern': ['アンティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンティーク',
      'pattern': ['アンテイーク',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンペア',
      'pattern': ['アンペヤ','アンペアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'アンモニア',
      'pattern': ['アンモニヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'イエロー',
      'pattern': ['イエロ',],
      'tokenCheck': ''
    },
    {
      'expected': 'イデオロギー',
      'pattern': ['イディオロギー',],
      'tokenCheck': ''
    },
    {
      'expected': 'イニシアチブ',
      'pattern': ['イニシアティブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'イベント',
      'pattern': ['イヴェント',],
      'tokenCheck': ''
    },
    {
      'expected': 'イミテーション',
      'pattern': ['イミテイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'イメージ',
      'pattern': ['イメイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'イヤホン',
      'pattern': ['イヤフォン',],
      'tokenCheck': ''
    },
    {
      'expected': 'イラストレーション',
      'pattern': ['イラストレイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'イラストレーター',
      'pattern': ['イラストレイター','イラストレータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'イレーサー',
      'pattern': ['イレーサ','イレイサー',],
      'tokenCheck': ''
    },
    {
      'expected': 'インジケーター',
      'pattern': ['インジケイター','インジケータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'インストーラー',
      'pattern': ['インストーラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'インストール',
      'pattern': ['インストウル',],
      'tokenCheck': ''
    },
    {
      'expected': 'インストラクター',
      'pattern': ['インストラクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'インターネット',
      'pattern': ['インタネット',],
      'tokenCheck': ''
    },
    {
      'expected': 'インターフェイス',
      'pattern': ['インターフェース','インターフエイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'インターホン',
      'pattern': ['インターフォン',],
      'tokenCheck': ''
    },
    {
      'expected': 'インデックス',
      'pattern': ['インディックス',],
      'tokenCheck': ''
    },
    {
      'expected': 'インデント',
      'pattern': ['インテンド',],
      'tokenCheck': ''
    },
    {
      'expected': 'インフォメーション',
      'pattern': ['インフォメイション','インフオメーション','インフォメーシヨン',],
      'tokenCheck': ''
    },
    {
      'expected': 'インフラストラクチャー',
      'pattern': ['インフラストラクチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウィザード',
      'pattern': ['ウィザド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウイスキー',
      'pattern': ['ウィスキー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウインドウ',
      'pattern': ['ウィンドウ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウェア',
      'pattern': ['ウェアー','ウエア',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウエアラブル',
      'pattern': ['ウェアラブル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウェイト',
      'pattern': ['ウエイト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウェールズ',
      'pattern': ['ウエールズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウエディング',
      'pattern': ['ウェディング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウェブ',
      'pattern': ['ウエブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウオーター',
      'pattern': ['ウォーター',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウオーターフォール',
      'pattern': ['ウォーターフォール','ウォーターフオール',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウオーム',
      'pattern': ['ウォーム',],
      'tokenCheck': ''
    },
    {
      'expected': 'ウオッチ',
      'pattern': ['ウォッチ',],
      'tokenCheck': ''
    },
    {
      'expected': 'エイリアス',
      'pattern': ['エイリヤス',],
      'tokenCheck': ''
    },
    {
      'expected': 'エクスプローラー',
      'pattern': ['エクスプローラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'エスカレーター',
      'pattern': ['エスカレイター',],
      'tokenCheck': ''
    },
    {
      'expected': 'エチケット',
      'pattern': ['エティケット',],
      'tokenCheck': ''
    },
    {
      'expected': 'エディター',
      'pattern': ['エヂター',],
      'tokenCheck': ''
    },
    {
      'expected': 'エディット',
      'pattern': ['エヂット',],
      'tokenCheck': ''
    },
    {
      'expected': 'エネルギー',
      'pattern': ['エネルギ',],
      'tokenCheck': ''
    },
    {
      'expected': 'エレベーター',
      'pattern': ['エレベータ','エレベイター',],
      'tokenCheck': ''
    },
    {
      'expected': 'エンコーディング',
      'pattern': ['エンコディング',],
      'tokenCheck': ''
    },
    {
      'expected': 'エンジニア',
      'pattern': ['エンジニヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'エントリー',
      'pattern': ['エントリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'オーディオ',
      'pattern': ['オウディオ','オーデオ',],
      'tokenCheck': ''
    },
    {
      'expected': 'オーディション',
      'pattern': ['オーデション',],
      'tokenCheck': ''
    },
    {
      'expected': 'オートマチック',
      'pattern': ['オートマティック',],
      'tokenCheck': ''
    },
    {
      'expected': 'オーナー',
      'pattern': ['オウナー',],
      'tokenCheck': ''
    },
    {
      'expected': 'オーナーズ',
      'pattern': ['オウナーズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'オーバー',
      'pattern': ['オーヴァー','オウバー','オウヴァー',],
      'tokenCheck': ''
    },
    {
      'expected': 'オーバーコート',
      'pattern': ['オウバーコート','オーヴァーコート',],
      'tokenCheck': ''
    },
    {
      'expected': 'オープン',
      'pattern': ['オウプン',],
      'tokenCheck': ''
    },
    {
      'expected': 'オフィス',
      'pattern': ['オフイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'オペレーション',
      'pattern': ['オペレイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'オペレーター',
      'pattern': ['オペレイター','オペレータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'オペレーティング',
      'pattern': ['オペレイティング','オペレィティング',],
      'tokenCheck': ''
    },
    {
      'expected': 'オリエンテーション',
      'pattern': ['オリエンテイション','オリエンティション',],
      'tokenCheck': ''
    },
    {
      'expected': 'カーソル',
      'pattern': ['カアソル','カァソル',],
      'tokenCheck': ''
    },
    {
      'expected': 'カーディガン',
      'pattern': ['カーデガン','カアディガン',],
      'tokenCheck': ''
    },
    {
      'expected': 'カーテン',
      'pattern': ['カアテン','カァテン',],
      'tokenCheck': ''
    },
    {
      'expected': 'カード',
      'pattern': ['カアド','カァド',],
      'tokenCheck': ''
    },
    {
      'expected': 'カーニング',
      'pattern': ['カアニング','カァニング',],
      'tokenCheck': ''
    },
    {
      'expected': 'カーブ',
      'pattern': ['カアブ','カァブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カウンター',
      'pattern': ['カウンタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カスタマー',
      'pattern': ['カスタマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カテゴリー',
      'pattern': ['カテゴリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カバー',
      'pattern': ['カバ','カヴァー',],
      'tokenCheck': ''
    },
    {
      'expected': 'カジュアルウエア',
      'pattern': ['カジュアルウェア',],
      'tokenCheck': ''
    },
    {
      'expected': 'カフェテリア',
      'pattern': ['カフェテリヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カプラー',
      'pattern': ['カプラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カルチャー',
      'pattern': ['カルチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カルチャースクール',
      'pattern': ['カルチャスクール',],
      'tokenCheck': ''
    },
    {
      'expected': 'カレンダー',
      'pattern': ['カレンダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'カンデラ',
      'pattern': ['カンディラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ギア',
      'pattern': ['ギヤ','ギアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'キーフレーム',
      'pattern': ['キーフレイム','キィフレーム',],
      'tokenCheck': ''
    },
    {
      'expected': 'キーボード',
      'pattern': ['キィボード','キーボォド','キィボォド',],
      'tokenCheck': ''
    },
    {
      'expected': 'キーワード',
      'pattern': ['キィワード','キーワァド','キィワァド',],
      'tokenCheck': ''
    },
    {
      'expected': 'キャッチフレーズ',
      'pattern': ['キャッチフレイズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'キャプチャー',
      'pattern': ['キャプチャ','キャプチュア',],
      'tokenCheck': ''
    },
    {
      'expected': 'キャラクター',
      'pattern': ['キャラクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'キャラバン',
      'pattern': ['キャラヴァン',],
      'tokenCheck': ''
    },
    {
      'expected': 'キャリブレーション',
      'pattern': ['キャリブレイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'クアトロ',
      'pattern': ['クァトロ',],
      'tokenCheck': ''
    },
    {
      'expected': 'クアハウス',
      'pattern': ['クァハウス',],
      'tokenCheck': ''
    },
    {
      'expected': 'クイック',
      'pattern': ['クィック',],
      'tokenCheck': ''
    },
    {
      'expected': 'クィーン',
      'pattern': ['クウィーン',],
      'tokenCheck': ''
    },
    {
      'expected': 'クエスチョン',
      'pattern': ['クェスチョン','クウェスチョン',],
      'tokenCheck': ''
    },
    {
      'expected': 'クィンテット',
      'pattern': ['クウィンテット',],
      'tokenCheck': ''
    },
    {
      'expected': 'クーラー',
      'pattern': ['クゥラー','クーラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'クォーク',
      'pattern': ['クオーク',],
      'tokenCheck': ''
    },
    {
      'expected': 'クオータリー',
      'pattern': ['クウォータリー',],
      'tokenCheck': ''
    },
    {
      'expected': 'クオーツ',
      'pattern': ['クォーツ',],
      'tokenCheck': ''
    },
    {
      'expected': 'クオリティー',
      'pattern': ['クォリティー',],
      'tokenCheck': ''
    },
    {
      'expected': 'グラデーション',
      'pattern': ['グラデイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'グラビア',
      'pattern': ['グラビアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'グラフィカル',
      'pattern': ['グラフイカル',],
      'tokenCheck': ''
    },
    {
      'expected': 'グラフィック',
      'pattern': ['グラフイック',],
      'tokenCheck': ''
    },
    {
      'expected': 'グラフィックス',
      'pattern': ['グラフイックス',],
      'tokenCheck': ''
    },
    {
      'expected': 'クリーナー',
      'pattern': ['クリーナ','クリイナー',],
      'tokenCheck': ''
    },
    {
      'expected': 'クリーニング',
      'pattern': ['クリイニング',],
      'tokenCheck': ''
    },
    {
      'expected': 'クリエイター',
      'pattern': ['クリエィター',],
      'tokenCheck': ''
    },
    {
      'expected': 'クリエーティブ',
      'pattern': ['クリエイティブ','クリエイテイブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'グルーピング',
      'pattern': ['グルウピング','グルゥピング',],
      'tokenCheck': ''
    },
    {
      'expected': 'グループ',
      'pattern': ['グルウプ','グルゥプ',],
      'tokenCheck': ''
    },
    {
      'expected': 'グループウェア',
      'pattern': ['グループウェアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'グレー',
      'pattern': ['グレイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'グレースケール',
      'pattern': ['グレイスケール',],
      'tokenCheck': ''
    },
    {
      'expected': 'グローバリゼーション',
      'pattern': ['グロウバリゼーション','グロゥバリゼーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'グローバル',
      'pattern': ['グロウバル','グロゥバル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ケア',
      'pattern': ['ケアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ケーキ',
      'pattern': ['ケイキ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゲージ',
      'pattern': ['ゲイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ケース',
      'pattern': ['ケイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゲートウェイ',
      'pattern': ['ゲートウエイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ケーブル',
      'pattern': ['ケイブル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ケルビン',
      'pattern': ['ケルヴィン',],
      'tokenCheck': ''
    },
    {
      'expected': 'コア',
      'pattern': ['コアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'コーディネーター',
      'pattern': ['コーデネーター',],
      'tokenCheck': ''
    },
    {
      'expected': 'コーディネート',
      'pattern': ['コオディネート','コォディネート','コーディネイト','コーディネィト','コオディネイト','コオディネィト','コォディネイト','コォディネィト',],
      'tokenCheck': ''
    },
    {
      'expected': 'コーディング',
      'pattern': ['コーヂング','コオディング','コォディング',],
      'tokenCheck': ''
    },
    {
      'expected': 'コード',
      'pattern': ['コオド','コォド',],
      'tokenCheck': ''
    },
    {
      'expected': 'コーナー',
      'pattern': ['コウナー','コオナー',],
      'tokenCheck': ''
    },
    {
      'expected': 'コーポレーション',
      'pattern': ['コウポレーション','コゥポレーション','コーポレイション','コーポレィション',],
      'tokenCheck': ''
    },
    {
      'expected': 'コーポレート',
      'pattern': ['コウポレート','コゥポレート','コーポレイト','コーポレィト','コウポレイト','コウポレィト','コゥポレイト','コゥポレィト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゴール',
      'pattern': ['ゴオル','ゴォル','ゴウル','ゴゥル',],
      'tokenCheck': ''
    },
    {
      'expected': 'コネクター',
      'pattern': ['コネクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コピー',
      'pattern': ['コピイ','コピィ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コミュニケーション',
      'pattern': ['コミニケーション','コミニュケーション','コミュニュケーション','コミニケイション','コミニュケイション','コミュニュケイション','コミニケィション','コミニュケィション','コミュニュケィション',],
      'tokenCheck': ''
    },
    {
      'expected': 'コミュニティー',
      'pattern': ['コミュニティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コモディティー',
      'pattern': ['コモディティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コロンビア',
      'pattern': ['コロンビヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンサバティブ',
      'pattern': ['コンサバテイブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンシューマー',
      'pattern': ['コンシューマ','コンシュマー',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンソーシアム',
      'pattern': ['コンソシアム','コンソオシアム','コンソォシアム',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンダクター',
      'pattern': ['コンダクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンディショナル',
      'pattern': ['コンデショナル',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンディション',
      'pattern': ['コンデション',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンデンサー',
      'pattern': ['コンデンサ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コントローラー',
      'pattern': ['コントローラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コントロール',
      'pattern': ['コントロオル','コントロォル',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンバーター',
      'pattern': ['コンバーター','コンバータ','コンヴァーター','コンヴァータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンバート',
      'pattern': ['コンヴァート',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンパイラー',
      'pattern': ['コンパイラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンピューター',
      'pattern': ['コンピュータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンピューティング',
      'pattern': ['コンピューテイング',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンプライアンス',
      'pattern': ['コンプライヤンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'コンポーネント',
      'pattern': ['コンポネント',],
      'tokenCheck': ''
    },
    {
      'expected': 'サーチ',
      'pattern': ['サアチ','サァチ',],
      'tokenCheck': ''
    },
    {
      'expected': 'サーディン',
      'pattern': ['サーヂン',],
      'tokenCheck': ''
    },
    {
      'expected': 'サード',
      'pattern': ['サアド','サァド',],
      'tokenCheck': ''
    },
    {
      'expected': 'サーバー',
      'pattern': ['サーバ','サーヴァー',],
      'tokenCheck': ''
    },
    {
      'expected': 'サービス',
      'pattern': ['サーヴィス',],
      'tokenCheck': ''
    },
    {
      'expected': 'サーベイ',
      'pattern': ['サーヴェイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'サディスト',
      'pattern': ['サデスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'サファイア',
      'pattern': ['サファイアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'サブフォルダー',
      'pattern': ['サブフォルダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'サプライ',
      'pattern': ['サープライ',],
      'tokenCheck': ''
    },
    {
      'expected': 'サブルーチン',
      'pattern': ['サブルーティン',],
      'tokenCheck': ''
    },
    {
      'expected': 'サマリー',
      'pattern': ['サマリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'サムネール',
      'pattern': ['サムネイル',],
      'tokenCheck': ''
    },
    {
      'expected': 'シークレット',
      'pattern': ['シクレット',],
      'tokenCheck': ''
    },
    {
      'expected': 'シェア',
      'pattern': ['シェアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'シェアウェア',
      'pattern': ['シェアーウェア','シェアーウエア',],
      'tokenCheck': ''
    },
    {
      'expected': 'シェーカー',
      'pattern': ['シェイカー',],
      'tokenCheck': ''
    },
    {
      'expected': 'シェード',
      'pattern': ['シェイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジェスチャー',
      'pattern': ['ジェスチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジェネレーター',
      'pattern': ['ジェネレータ','ジェネレイタ','ジェネレイター',],
      'tokenCheck': ''
    },
    {
      'expected': 'シグネチャー',
      'pattern': ['シグネチャ','シグネイチャー','シグネイチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シチュエーション',
      'pattern': ['シチュエイション','シュチエイション','シュチエーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'シビア',
      'pattern': ['シビアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジフテリア',
      'pattern': ['ジフテリヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シミュレーション',
      'pattern': ['シミュレイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'シミュレーター',
      'pattern': ['シミュレータ','シュミレータ','シュミレーター',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジャーナル',
      'pattern': ['ジャァナル','ジャアナル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジャギー',
      'pattern': ['ジャギィ','ジャギイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シャッター',
      'pattern': ['シャッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シャドウ',
      'pattern': ['シャドー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジュース',
      'pattern': ['ジュウス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジョイントベンチャー',
      'pattern': ['ジョイントベンチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジョッキー',
      'pattern': ['ジョッキイ','ジョッキィ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シリアル',
      'pattern': ['シリヤル',],
      'tokenCheck': ''
    },
    {
      'expected': 'シリーズ',
      'pattern': ['シリイズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シリンダー',
      'pattern': ['シリンダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シルバー',
      'pattern': ['シルバ','シルヴァー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ジレンマ',
      'pattern': ['ヂレンマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シンナー',
      'pattern': ['シンナ',],
      'tokenCheck': ''
    },
    {
      'expected': 'シンメトリー',
      'pattern': ['シンメトリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スーパー',
      'pattern': ['スーパ','スゥパー','スゥパ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スーパーバイザー',
      'pattern': ['スーパーバイザ','スゥパーバイザ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スキーマ',
      'pattern': ['スキーマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スキャナー',
      'pattern': ['スキャナ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スクエア',
      'pattern': ['スクエアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'スケール',
      'pattern': ['スケイル',],
      'tokenCheck': ''
    },
    {
      'expected': 'スケジューリング',
      'pattern': ['スケジュウリング',],
      'tokenCheck': ''
    },
    {
      'expected': 'スケジュール',
      'pattern': ['スケジュウル',],
      'tokenCheck': ''
    },
    {
      'expected': 'スコア',
      'pattern': ['スコアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'スタジオ',
      'pattern': ['スタディオ','スチュディオ','ステュディオ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スタッカー',
      'pattern': ['スタッカ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スチール',
      'pattern': ['スチイル',],
      'tokenCheck': ''
    },
    {
      'expected': 'スティック',
      'pattern': ['ステイック','スティツク','ステイツク',],
      'tokenCheck': ''
    },
    {
      'expected': 'ステークホルダー',
      'pattern': ['ステイクホルダー','ステークホルダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ステージ',
      'pattern': ['ステイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ステータス',
      'pattern': ['ステイタス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ステート',
      'pattern': ['ステイト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ストア',
      'pattern': ['ストアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ストラクチャー',
      'pattern': ['ストラクチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ストーブ',
      'pattern': ['ストウブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ストーリー',
      'pattern': ['ストオリー','ストォリー','ストーリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スパイウェア',
      'pattern': ['スパイウエア',],
      'tokenCheck': ''
    },
    {
      'expected': 'スペア',
      'pattern': ['スペアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'スピード',
      'pattern': ['スピイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'スペアキー',
      'pattern': ['スペアキ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スペース',
      'pattern': ['スペイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'スポーツ',
      'pattern': ['スポオツ','スポォツ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スマートフォン',
      'pattern': ['スマートホン',],
      'tokenCheck': ''
    },
    {
      'expected': 'スムーズ',
      'pattern': ['スムウズ','スムゥズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スライダー',
      'pattern': ['スライダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'スリッパ',
      'pattern': ['スリッパー',],
      'tokenCheck': ''
    },
    {
      'expected': 'セーバー',
      'pattern': ['セーバ','セイバー',],
      'tokenCheck': ''
    },
    {
      'expected': 'セーフティー',
      'pattern': ['セイフティー',],
      'tokenCheck': ''
    },
    {
      'expected': 'セーフティーネット',
      'pattern': ['セイフティネット',],
      'tokenCheck': ''
    },
    {
      'expected': 'ソフトウェア',
      'pattern': ['ソフトウェアー','ソフトウエア',],
      'tokenCheck': ''
    },
    {
      'expected': 'セールス',
      'pattern': ['セエルス','セェルス','セェールス',],
      'tokenCheck': ''
    },
    {
      'expected': 'セキュリティー',
      'pattern': ['セキュリティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'セクター',
      'pattern': ['セクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'セッター',
      'pattern': ['セッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'セパレーター',
      'pattern': ['セパレータ','セパレイター','セパレイタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'セピア',
      'pattern': ['セピヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'セミナー',
      'pattern': ['セミナ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゼラチン',
      'pattern': ['ゼラティン',],
      'tokenCheck': ''
    },
    {
      'expected': 'セレクター',
      'pattern': ['セレクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'センサー',
      'pattern': ['センサ',],
      'tokenCheck': ''
    },
    {
      'expected': 'センター',
      'pattern': ['センタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ソース',
      'pattern': ['ソウス','ソオス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ソーター',
      'pattern': ['ソータ','ソオター',],
      'tokenCheck': ''
    },
    {
      'expected': 'ソート',
      'pattern': ['ソオト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ゾーン',
      'pattern': ['ゾオン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ソリューション',
      'pattern': ['ソリューシォン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダーク',
      'pattern': ['ダァク',],
      'tokenCheck': ''
    },
    {
      'expected': 'ターゲット',
      'pattern': ['タァゲット',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイアリー',
      'pattern': ['ダイアリ','ディアリー','ディアリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイアログ',
      'pattern': ['ディアログ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイオード',
      'pattern': ['ダイオゥド','ダイオウド','ディオード','ディオウド','ディオゥド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイカスト',
      'pattern': ['ディカスト','ダイキャスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイジェスト',
      'pattern': ['ディジェスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイニング',
      'pattern': ['ディニング','ダィニング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイビング',
      'pattern': ['ダイヴィング',],
      'tokenCheck': ''
    },
    {
      'expected': 'タイプフェース',
      'pattern': ['タイプフェイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'タイプライター',
      'pattern': ['タイプライタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'タイポグラフィー',
      'pattern': ['タイポグラフィ',],
      'tokenCheck': ''
    },
    {
      'expected': 'タイマー',
      'pattern': ['タイマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイメトリック',
      'pattern': ['ディメトリック',],
      'tokenCheck': ''
    },
    {
      'expected': 'タイヤ',
      'pattern': ['タイヤー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイヤグラム',
      'pattern': ['ダイアグラム',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイヤモンド',
      'pattern': ['ダイアモンド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイヤラー',
      'pattern': ['ダイヤラ','ディヤラー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイヤル',
      'pattern': ['ダイアル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダイレクト',
      'pattern': ['ディレクト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダウンロード',
      'pattern': ['ダウンロオド','ダウンロウド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ダミー',
      'pattern': ['ダミイ','ダミィ',],
      'tokenCheck': ''
    },
    {
      'expected': 'チアミン',
      'pattern': ['チヤミン',],
      'tokenCheck': ''
    },
    {
      'expected': 'チェーン',
      'pattern': ['チェイン',],
      'tokenCheck': ''
    },
    {
      'expected': 'チェッカー',
      'pattern': ['チェッカ',],
      'tokenCheck': ''
    },
    {
      'expected': 'チケット',
      'pattern': ['ティケット',],
      'tokenCheck': ''
    },
    {
      'expected': 'チップ',
      'pattern': ['ティップ',],
      'tokenCheck': ''
    },
    {
      'expected': 'チャージャー',
      'pattern': ['チャージャ','チャアジャ','チャアジャー',],
      'tokenCheck': ''
    },
    {
      'expected': 'チャート',
      'pattern': ['チャアト',],
      'tokenCheck': ''
    },
    {
      'expected': 'チュートリアル',
      'pattern': ['チュウトリアル','チュゥトリアル',],
      'tokenCheck': ''
    },
    {
      'expected': 'チューナー',
      'pattern': ['チューナ','チュウナー',],
      'tokenCheck': ''
    },
    {
      'expected': 'チューニング',
      'pattern': ['チュウニング',],
      'tokenCheck': ''
    },
    {
      'expected': 'チューバ',
      'pattern': ['チュウバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ツイッター',
      'pattern': ['ツイッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ツール',
      'pattern': ['ツウル','トゥール','トゥールバー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ツールバー',
      'pattern': ['ツウルバー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディーゼル',
      'pattern': ['デーゼル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディーラー',
      'pattern': ['デーラー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディクショナリー',
      'pattern': ['デクショナリー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディザリング',
      'pattern': ['デザリング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスカウント',
      'pattern': ['デスカウント',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスカッション',
      'pattern': ['デスカッション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスカバリー',
      'pattern': ['デスカバリー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスクロージャー',
      'pattern': ['ディスクロージャ','デスクロージャー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスコ',
      'pattern': ['デスコ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスタンス',
      'pattern': ['デスタンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'テイスト',
      'pattern': ['テースト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスプレー',
      'pattern': ['ディスプレイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディスポーザー',
      'pattern': ['デスポーザー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディテール',
      'pattern': ['デテール',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディナー',
      'pattern': ['ディナ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディバイド',
      'pattern': ['デバイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディファレンシャルギア',
      'pattern': ['デファレンシャルギア',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディフェンス',
      'pattern': ['デフェンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディレイ',
      'pattern': ['デレイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディレクション',
      'pattern': ['ダイレクション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディレクター',
      'pattern': ['デレクター',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディレクトリー',
      'pattern': ['ディレクトリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ディレッタント',
      'pattern': ['デレッタント',],
      'tokenCheck': ''
    },
    {
      'expected': 'データ',
      'pattern': ['デイタ','デェタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'データベース',
      'pattern': ['デイタベース','デェタベース',],
      'tokenCheck': ''
    },
    {
      'expected': 'テーブル',
      'pattern': ['テイブル','テエブル',],
      'tokenCheck': ''
    },
    {
      'expected': 'テーマ',
      'pattern': ['テエマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'テクスチャー',
      'pattern': ['テクスチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'テクノロジー',
      'pattern': ['テクノロジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'デコーダー',
      'pattern': ['デコーダ','デコオダー','デコオダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'デザイナー',
      'pattern': ['デザイナ','ディザイナー',],
      'tokenCheck': ''
    },
    {
      'expected': 'デザイン',
      'pattern': ['ディザイン',],
      'tokenCheck': ''
    },
    {
      'expected': 'デジタル',
      'pattern': ['ディジタル',],
      'tokenCheck': ''
    },
    {
      'expected': 'デジャビュ',
      'pattern': ['ディジャビュ',],
      'tokenCheck': ''
    },
    {
      'expected': 'デジュール',
      'pattern': ['デジュル','ダジュール','ダジュル',],
      'tokenCheck': ''
    },
    {
      'expected': 'デバイス',
      'pattern': ['デヴァイス','ディバイス','ディヴァイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'デバッグ',
      'pattern': ['ディバッグ',],
      'tokenCheck': ''
    },
    {
      'expected': 'デファクト',
      'pattern': ['ディファクト',],
      'tokenCheck': ''
    },
    {
      'expected': 'デフォルト',
      'pattern': ['ディフォルト',],
      'tokenCheck': ''
    },
    {
      'expected': 'デフォルメ',
      'pattern': ['ディフォルメ',],
      'tokenCheck': ''
    },
    {
      'expected': 'デベロッパー',
      'pattern': ['ディベロッパー',],
      'tokenCheck': ''
    },
    {
      'expected': 'デポジット',
      'pattern': ['ディポジット',],
      'tokenCheck': ''
    },
    {
      'expected': 'デマンド',
      'pattern': ['ディマンド',],
      'tokenCheck': ''
    },
    {
      'expected': 'デメリット',
      'pattern': ['ディメリット',],
      'tokenCheck': ''
    },
    {
      'expected': 'デラウェア',
      'pattern': ['デラウェアー','デラウエア',],
      'tokenCheck': ''
    },
    {
      'expected': 'デリバリー',
      'pattern': ['デリバリ','ディリバリー','ディリバリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'テレビ',
      'pattern': ['テレヴィ',],
      'tokenCheck': ''
    },
    {
      'expected': 'テレフォン',
      'pattern': ['テレフオン',],
      'tokenCheck': ''
    },
    {
      'expected': 'テンプレート',
      'pattern': ['テンプレイト',],
      'tokenCheck': ''
    },
    {
      'expected': 'デンマーク',
      'pattern': ['ディンマーク','デンマアク','デンマァク',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドア',
      'pattern': ['ドアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'トゥイーン',
      'pattern': ['トゥイン',],
      'tokenCheck': ''
    },
    {
      'expected': 'トースト',
      'pattern': ['トオスト','トウスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'トーナメント',
      'pattern': ['トオナメント',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドーム',
      'pattern': ['ドウム',],
      'tokenCheck': ''
    },
    {
      'expected': 'トーン',
      'pattern': ['トオン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドキュメンテーション',
      'pattern': ['ドキュメンテイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドメイン',
      'pattern': ['ドメーン',],
      'tokenCheck': ''
    },
    {
      'expected': 'トライアル',
      'pattern': ['トライヤル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドライバー',
      'pattern': ['ドライバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドライブ',
      'pattern': ['ドライヴ',],
      'tokenCheck': ''
    },
    {
      'expected': 'トラッカー',
      'pattern': ['トラッカ',],
      'tokenCheck': ''
    },
    {
      'expected': 'トランシーバー',
      'pattern': ['トランシーバ','トランシイバー','トランシーヴァー','トランシーヴァ',],
      'tokenCheck': ''
    },
    {
      'expected': 'トランジション',
      'pattern': ['トランズィション',],
      'tokenCheck': ''
    },
    {
      'expected': 'トランスミッター',
      'pattern': ['トランスミッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'トランスレーション',
      'pattern': ['トランスレイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'トランスレーター',
      'pattern': ['トランスレータ','トランスレイタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ドリア',
      'pattern': ['ドリヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'トレーサビリティー',
      'pattern': ['トレーサビリティ','トレイサビリティー','トレーサビリティー',],
      'tokenCheck': ''
    },
    {
      'expected': 'トレース',
      'pattern': ['トレイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'トレード',
      'pattern': ['トレイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'トレーナー',
      'pattern': ['トレイナー','トレーナ',],
      'tokenCheck': ''
    },
    {
      'expected': 'トレーニング',
      'pattern': ['トレイニング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ナビゲーション',
      'pattern': ['ナビゲイション','ナヴィゲーション','ナヴィゲイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ナレーション',
      'pattern': ['ナレイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ナンバー',
      'pattern': ['ナンバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ニーズ',
      'pattern': ['ニイズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ニュース',
      'pattern': ['ニュウス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ニュートン',
      'pattern': ['ニュウトン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ヌーディスト',
      'pattern': ['ヌーヂスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ネイチャー',
      'pattern': ['ネイチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ネイティブ',
      'pattern': ['ネイティヴ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ネーム',
      'pattern': ['ネイム',],
      'tokenCheck': ''
    },
    {
      'expected': 'ネガティブ',
      'pattern': ['ネガティヴ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ノード',
      'pattern': ['ノオド','ノウド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ノート',
      'pattern': ['ノオト','ノウト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ノルウェー',
      'pattern': ['ノルウェイ','ノルウエー',],
      'tokenCheck': ''
    },
    {
      'expected': 'バージョン',
      'pattern': ['ヴァージョン',],
      'tokenCheck': ''
    },
    {
      'expected': 'バージン',
      'pattern': ['ヴァージン',],
      'tokenCheck': ''
    },
    {
      'expected': 'パース',
      'pattern': ['パアス',],
      'tokenCheck': ''
    },
    {
      'expected': 'パースペクティブ',
      'pattern': ['パースペクチブ','パースペクチヴ','パースペクティヴ',],
      'tokenCheck': ''
    },
    {
      'expected': 'パーセント',
      'pattern': ['パアセント',],
      'tokenCheck': ''
    },
    {
      'expected': 'パーソナル',
      'pattern': ['パアソナル',],
      'tokenCheck': ''
    },
    {
      'expected': 'パーツ',
      'pattern': ['パアツ',],
      'tokenCheck': ''
    },
    {
      'expected': 'パーティー',
      'pattern': ['パーティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バーティカル',
      'pattern': ['バーチカル','ヴァーティカル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハード',
      'pattern': ['ハアド',],
      'tokenCheck': ''
    },
    {
      'expected': 'パート',
      'pattern': ['パアト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハードウェア',
      'pattern': ['ハードウェアー','ハードウエア',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハーフトーン',
      'pattern': ['ハアフトーン','ハーフトオン',],
      'tokenCheck': ''
    },
    {
      'expected': 'バイアス',
      'pattern': ['バイヤス',],
      'tokenCheck': ''
    },
    {
      'expected': 'バイオリン',
      'pattern': ['ヴァイオリン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハイデルベルグ',
      'pattern': ['ハイディルベルグ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バイナリー',
      'pattern': ['バイナリ','ヴァイナリー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハイパー',
      'pattern': ['ハイパ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハイパーリンク',
      'pattern': ['ハイパリンク',],
      'tokenCheck': ''
    },
    {
      'expected': 'バインダー',
      'pattern': ['バインダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バインダリー',
      'pattern': ['バインダリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バウンディング',
      'pattern': ['バウンデング',],
      'tokenCheck': ''
    },
    {
      'expected': 'バクテリア',
      'pattern': ['バクテリヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'パスワード',
      'pattern': ['パスワアド',],
      'tokenCheck': ''
    },
    {
      'expected': 'バッテリー',
      'pattern': ['バッテリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バッファー',
      'pattern': ['バッファ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バニラ',
      'pattern': ['ヴァニラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'パフォーマンス',
      'pattern': ['パホーマンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'バラエティー',
      'pattern': ['バラエティ','ヴァラエティー',],
      'tokenCheck': ''
    },
    {
      'expected': 'パラメーター',
      'pattern': ['パラメータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'バリア',
      'pattern': ['バリアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'バリエーション',
      'pattern': ['ヴァリエーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'バリデーター',
      'pattern': ['バリデータ','ヴァリデーター',],
      'tokenCheck': ''
    },
    {
      'expected': 'バリデート',
      'pattern': ['バリデイト','ヴァリデート','ヴァリデイト',],
      'tokenCheck': ''
    },
    {
      'expected': 'バリデーション',
      'pattern': ['ヴァリデーション','バリデイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'バルブ',
      'pattern': ['ヴァルヴ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハンガリー',
      'pattern': ['ハンガリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハンチング',
      'pattern': ['ハンティング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハンディー',
      'pattern': ['ハンディ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハンディキャップ',
      'pattern': ['ハンデキャップ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ハンドラー',
      'pattern': ['ハンドラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ピア',
      'pattern': ['ピアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ピアノ',
      'pattern': ['ピヤノ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビーナス',
      'pattern': ['ヴィーナス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ピクチャー',
      'pattern': ['ピクチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビジネスパーソン',
      'pattern': ['ビジネスパアソン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビジュアル',
      'pattern': ['ヴィジュアル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビジョン',
      'pattern': ['ヴィジョン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビデオ',
      'pattern': ['ヴィデオ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビニール',
      'pattern': ['ヴィニール',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビビッド',
      'pattern': ['ヴィヴィッド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ピボット',
      'pattern': ['ピヴォット',],
      'tokenCheck': ''
    },
    {
      'expected': 'ピュア',
      'pattern': ['ピュアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビューアー',
      'pattern': ['ビューア','ヴューアー','ヴューア',],
      'tokenCheck': ''
    },
    {
      'expected': 'ヒューリスティック',
      'pattern': ['ヒューリスチック',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビリヤード',
      'pattern': ['ビリアード',],
      'tokenCheck': ''
    },
    {
      'expected': 'ビルディング',
      'pattern': ['ビルヂング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファースト',
      'pattern': ['ファスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファームウェア',
      'pattern': ['ファームウェアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファイアウォール',
      'pattern': ['ファイアウオール',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファイル',
      'pattern': ['フアイル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファインダー',
      'pattern': ['ファインダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファクス',
      'pattern': ['ファックス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファニチャー',
      'pattern': ['ファニチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファミリー',
      'pattern': ['ファミリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファン',
      'pattern': ['フアン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ファンタスティック',
      'pattern': ['ファンタステイック','ファンタスティツク','ファンタステイツク',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィーチャー',
      'pattern': ['フィーチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィードバック',
      'pattern': ['フイードバック',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィールド',
      'pattern': ['フィルド',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィギュア',
      'pattern': ['フィギュアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィニッシャー',
      'pattern': ['フィニッシャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィルター',
      'pattern': ['フイルター',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィルム',
      'pattern': ['フイルム',],
      'tokenCheck': ''
    },
    {
      'expected': 'フィルムストリップ',
      'pattern': ['フイルムストリップ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フェード',
      'pattern': ['フェイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーカス',
      'pattern': ['ホーカス',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーク ダンス',
      'pattern': ['フオーク ダンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーマッター',
      'pattern': ['フォーマッタ','フォマッター','フォマッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーマッティング',
      'pattern': ['フォマッティング','フォウマッティング',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーマット',
      'pattern': ['フォウマット',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーム',
      'pattern': ['フオーム','フォウム',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォーラム',
      'pattern': ['フォウラム',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォルダー',
      'pattern': ['フオルダー',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォロー',
      'pattern': ['フオロー',],
      'tokenCheck': ''
    },
    {
      'expected': 'フォワード',
      'pattern': ['フオワード',],
      'tokenCheck': ''
    },
    {
      'expected': 'フッター',
      'pattern': ['フッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フューザー',
      'pattern': ['フューザ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フュージョン',
      'pattern': ['フュウジョン',],
      'tokenCheck': ''
    },
    {
      'expected': 'フライ',
      'pattern': ['フラーイ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プライバシー',
      'pattern': ['プライバシ','プライヴァシー','プライヴァシ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プライベート',
      'pattern': ['プライヴェート','プライヴェイト',],
      'tokenCheck': ''
    },
    {
      'expected': 'プライマリー',
      'pattern': ['プライマリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ブラウザー',
      'pattern': ['ブラウザ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プラスチック',
      'pattern': ['プラスティック',],
      'tokenCheck': ''
    },
    {
      'expected': 'プラットホーム',
      'pattern': ['プラットフォーム',],
      'tokenCheck': ''
    },
    {
      'expected': 'フリーウェア',
      'pattern': ['フリーウェアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'フリーハンド',
      'pattern': ['フリィハンド',],
      'tokenCheck': ''
    },
    {
      'expected': 'フリーランサー',
      'pattern': ['フリーランサ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プリインストール',
      'pattern': ['プレインストール',],
      'tokenCheck': ''
    },
    {
      'expected': 'プリペイド',
      'pattern': ['プレペイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'フリッカー',
      'pattern': ['フリッカ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プリンター',
      'pattern': ['プリンタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレースホルダー',
      'pattern': ['プレースホルダ','プレイスホルダー','プレースフォルダー','プレイスフォルダー','プレイスフォルダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フレーム',
      'pattern': ['フレイム',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレーヤー',
      'pattern': ['プレイヤー',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレーン',
      'pattern': ['プレイン',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレゼンテーション',
      'pattern': ['プレゼンテイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレジャーボート',
      'pattern': ['プレジャボート',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレッシャー',
      'pattern': ['プレッシャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プレビュー',
      'pattern': ['プリビュー',],
      'tokenCheck': ''
    },
    {
      'expected': 'プローブ',
      'pattern': ['プロウブ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プログラマー',
      'pattern': ['プログラマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロジェクター',
      'pattern': ['プロジェクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロセッサー',
      'pattern': ['プロセッサ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロッター',
      'pattern': ['プロッタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'フロッピー',
      'pattern': ['フロッピ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロデューサー',
      'pattern': ['プロデューサ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロバイダー',
      'pattern': ['プロヴァイダー','プロヴァイダ','プロバイダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロパティ',
      'pattern': ['プロパティー',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロポーショナル',
      'pattern': ['プロポウショナル',],
      'tokenCheck': ''
    },
    {
      'expected': 'プロモーション',
      'pattern': ['プロモウション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ページ',
      'pattern': ['ペイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ページネーション',
      'pattern': ['ページネイション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ペース',
      'pattern': ['ペイス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ペースト',
      'pattern': ['ペイスト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ペーパー',
      'pattern': ['ペイパー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ペーパーレス',
      'pattern': ['ペイパーレス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベール',
      'pattern': ['ベイル','ヴェール','ヴェイル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベクター',
      'pattern': ['ベクタ','ヴェクター','ヴェクタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベジェ',
      'pattern': ['ベジェー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ヘッダー',
      'pattern': ['ヘッダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ヘッドホン',
      'pattern': ['ヘッドフォン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベテラン',
      'pattern': ['ヴェテラン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ペナルティー',
      'pattern': ['ペナルティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ヘルスケア',
      'pattern': ['ヘルスケアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベンダー',
      'pattern': ['ベンダ','ヴェンダー','ヴェンダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベンチャー',
      'pattern': ['ベンチャ','ヴェンチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ベンチャービジネス',
      'pattern': ['ベンチャビジネス',],
      'tokenCheck': ''
    },
    {
      'expected': 'ボーカル',
      'pattern': ['ヴォーカル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ホーム',
      'pattern': ['ホウム',],
      'tokenCheck': ''
    },
    {
      'expected': 'ポーランド',
      'pattern': ['ポオランド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ポスター',
      'pattern': ['ポスタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ボディー',
      'pattern': ['ボディ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ボランティア',
      'pattern': ['ヴォランティア',],
      'tokenCheck': ''
    },
    {
      'expected': 'ポリシー',
      'pattern': ['ポリシ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ボリューム',
      'pattern': ['ヴォリューム',],
      'tokenCheck': ''
    },
    {
      'expected': 'ホルマリン',
      'pattern': ['フォルマリン',],
      'tokenCheck': ''
    },
    {
      'expected': 'マーカー',
      'pattern': ['マーカ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マーキング',
      'pattern': ['マアキング',],
      'tokenCheck': ''
    },
    {
      'expected': 'マーク',
      'pattern': ['マアク',],
      'tokenCheck': ''
    },
    {
      'expected': 'マークアップ',
      'pattern': ['マアクアップ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マーケット',
      'pattern': ['マアケット',],
      'tokenCheck': ''
    },
    {
      'expected': 'マーケティング',
      'pattern': ['マアケティング',],
      'tokenCheck': ''
    },
    {
      'expected': 'マージ',
      'pattern': ['マアジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マージン',
      'pattern': ['マアジン',],
      'tokenCheck': ''
    },
    {
      'expected': 'マジック',
      'pattern': ['マジック',],
      'tokenCheck': ''
    },
    {
      'expected': 'マスター',
      'pattern': ['マスタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マニュファクチャー',
      'pattern': ['マニュファクチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マネージャー',
      'pattern': ['マネージャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マルチ',
      'pattern': ['マルティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マルチステート',
      'pattern': ['マルチステイト','マルチステエト',],
      'tokenCheck': ''
    },
    {
      'expected': 'マルチページ',
      'pattern': ['マルチペイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'マルチメディア',
      'pattern': ['マルチメヂア',],
      'tokenCheck': ''
    },
    {
      'expected': 'マルチユース',
      'pattern': ['マルチユウス',],
      'tokenCheck': ''
    },
    {
      'expected': 'マルチランゲージ',
      'pattern': ['マルチランゲイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ミリメートル',
      'pattern': ['ミリメイトル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ミルクセーキ',
      'pattern': ['ミルクセイキ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ムービー',
      'pattern': ['ムーヴィー',],
      'tokenCheck': ''
    },
    {
      'expected': 'メイン',
      'pattern': ['メーン',],
      'tokenCheck': ''
    },
    {
      'expected': 'メーカー',
      'pattern': ['メーカ','メイカー',],
      'tokenCheck': ''
    },
    {
      'expected': 'メートル',
      'pattern': ['メイトル',],
      'tokenCheck': ''
    },
    {
      'expected': 'メール',
      'pattern': ['メイル',],
      'tokenCheck': ''
    },
    {
      'expected': 'メガホン',
      'pattern': ['メガフォン',],
      'tokenCheck': ''
    },
    {
      'expected': 'メソポタミア',
      'pattern': ['メソポタミヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'メタデータ',
      'pattern': ['メタデイタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'メッセージ',
      'pattern': ['メッセイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'メディア',
      'pattern': ['メデア','メディヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'メモリー',
      'pattern': ['メモリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'メロディー',
      'pattern': ['メロディ',],
      'tokenCheck': ''
    },
    {
      'expected': 'メンテナンス',
      'pattern': ['メーンテナンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'メンバー',
      'pattern': ['メンバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'モーション',
      'pattern': ['モオション',],
      'tokenCheck': ''
    },
    {
      'expected': 'モーター',
      'pattern': ['モータ',],
      'tokenCheck': ''
    },
    {
      'expected': 'モールド',
      'pattern': ['モオルド','モウルド',],
      'tokenCheck': ''
    },
    {
      'expected': 'モジュラー',
      'pattern': ['モジュラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'モチーフ',
      'pattern': ['モティーフ',],
      'tokenCheck': ''
    },
    {
      'expected': 'モニター',
      'pattern': ['モニタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ユーザー',
      'pattern': ['ユーザ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ユーザビリティー',
      'pattern': ['ユーザビリティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ユーティリティー',
      'pattern': ['ユーティリティ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ユーモア',
      'pattern': ['ユウモア',],
      'tokenCheck': ''
    },
    {
      'expected': 'ユニバーサル',
      'pattern': ['ユニヴァーサル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ユニフォーム',
      'pattern': ['ユニフオーム',],
      'tokenCheck': ''
    },
    {
      'expected': 'ヨーロッパ',
      'pattern': ['ヨオロッパ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ライター',
      'pattern': ['ライタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ライブ',
      'pattern': ['ライヴ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ライブラリー',
      'pattern': ['ライブラリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ラジアル',
      'pattern': ['ラジヤル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ラジオ',
      'pattern': ['ラディオ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ラスタライザー',
      'pattern': ['ラスタライザ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ラテン',
      'pattern': ['ラティン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ランゲージ',
      'pattern': ['ラングエッジ','ラングウェッジ','ラングウェイジ',],
      'tokenCheck': ''
    },
    {
      'expected': 'リアル',
      'pattern': ['レアル',],
      'tokenCheck': ''
    },
    {
      'expected': 'リーダー',
      'pattern': ['リーダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'リード',
      'pattern': ['リイド',],
      'tokenCheck': ''
    },
    {
      'expected': 'リコーダー',
      'pattern': ['リコーダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'リコール',
      'pattern': ['レコール',],
      'tokenCheck': ''
    },
    {
      'expected': 'リサイクル',
      'pattern': ['レサイクル',],
      'tokenCheck': ''
    },
    {
      'expected': 'リジューム',
      'pattern': ['レジューム',],
      'tokenCheck': ''
    },
    {
      'expected': 'リソース',
      'pattern': ['リソオス',],
      'tokenCheck': ''
    },
    {
      'expected': 'リタイア',
      'pattern': ['リタイアー',],
      'tokenCheck': ''
    },
    {
      'expected': 'リダイヤル',
      'pattern': ['レダイヤル',],
      'tokenCheck': ''
    },
    {
      'expected': 'リデュース',
      'pattern': ['レデュース',],
      'tokenCheck': ''
    },
    {
      'expected': 'リテラシー',
      'pattern': ['リテラシ',],
      'tokenCheck': ''
    },
    {
      'expected': 'リハーサル',
      'pattern': ['レハーサル','リハアサル',],
      'tokenCheck': ''
    },
    {
      'expected': 'リバーサル',
      'pattern': ['レバーサル','リバアサル',],
      'tokenCheck': ''
    },
    {
      'expected': 'リバイバル',
      'pattern': ['リヴァイヴァル',],
      'tokenCheck': ''
    },
    {
      'expected': 'リピート',
      'pattern': ['リピイト',],
      'tokenCheck': ''
    },
    {
      'expected': 'リファレンス',
      'pattern': ['レファレンス',],
      'tokenCheck': ''
    },
    {
      'expected': 'リフォーム',
      'pattern': ['レフォーム',],
      'tokenCheck': ''
    },
    {
      'expected': 'リフレッシュ',
      'pattern': ['レフレッシュ',],
      'tokenCheck': ''
    },
    {
      'expected': 'リフロー',
      'pattern': ['リフロ','レフロー',],
      'tokenCheck': ''
    },
    {
      'expected': 'リポジトリー',
      'pattern': ['リポジトリ','レポジトリー','レポジトリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'リボルビング',
      'pattern': ['レボルビング',],
      'tokenCheck': ''
    },
    {
      'expected': 'リユース',
      'pattern': ['レユース',],
      'tokenCheck': ''
    },
    {
      'expected': 'リラクセーション',
      'pattern': ['レラクセーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'リリース',
      'pattern': ['レリース',],
      'tokenCheck': ''
    },
    {
      'expected': 'ルート',
      'pattern': ['ルウト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ルーマニア',
      'pattern': ['ルーマニヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ルーラー',
      'pattern': ['ルーラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レイヤー',
      'pattern': ['レイヤ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レインコート',
      'pattern': ['レーンコート',],
      'tokenCheck': ''
    },
    {
      'expected': 'レーザー',
      'pattern': ['レイザー',],
      'tokenCheck': ''
    },
    {
      'expected': 'レーダー',
      'pattern': ['レーダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レクチャー',
      'pattern': ['レクチャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レクリエーション',
      'pattern': ['リクリエーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'レコーダー',
      'pattern': ['レコーダ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レコード',
      'pattern': ['リコード',],
      'tokenCheck': ''
    },
    {
      'expected': 'レシーバー',
      'pattern': ['レシーバ','レシイバー','レシイバ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レジスター',
      'pattern': ['レジスタ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レジストリー',
      'pattern': ['レジストリ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レジストレーション',
      'pattern': ['リジストレーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'レジャー',
      'pattern': ['レジャ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レタッチ',
      'pattern': ['リタッチ',],
      'tokenCheck': ''
    },
    {
      'expected': 'レトルト',
      'pattern': ['リトルト',],
      'tokenCheck': ''
    },
    {
      'expected': 'レパートリー',
      'pattern': ['リパートリー',],
      'tokenCheck': ''
    },
    {
      'expected': 'レビュー',
      'pattern': ['レヴュー','リビュー',],
      'tokenCheck': ''
    },
    {
      'expected': 'レベル',
      'pattern': ['レヴェル',],
      'tokenCheck': ''
    },
    {
      'expected': 'レポート',
      'pattern': ['レポウト','レポオト',],
      'tokenCheck': ''
    },
    {
      'expected': 'ローカライズ',
      'pattern': ['ロオカライズ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ローカライゼーション',
      'pattern': ['ロオカライゼーション',],
      'tokenCheck': ''
    },
    {
      'expected': 'ローカル',
      'pattern': ['ローカル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ロープ',
      'pattern': ['ロウプ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ローマ',
      'pattern': ['ロウマ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ローマン',
      'pattern': ['ロウマン',],
      'tokenCheck': ''
    },
    {
      'expected': 'ローラー',
      'pattern': ['ローラ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ロール',
      'pattern': ['ロウル',],
      'tokenCheck': ''
    },
    {
      'expected': 'ロマンチック',
      'pattern': ['ロマンティック',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワーキング',
      'pattern': ['ワアキング',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワークフロー',
      'pattern': ['ワアクフロー','ワークフロ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワード',
      'pattern': ['ワアド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワードパッド',
      'pattern': ['ワアドパッド',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワープロ',
      'pattern': ['ワアプロ',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワイヤ',
      'pattern': ['ワイヤー',],
      'tokenCheck': ''
    },
    {
      'expected': 'ワイヤレス',
      'pattern': ['ワイヤーレス',],
      'tokenCheck': ''
    },
  ];

function validateSentence(sentence) {
  for (var i = 0; i < terms.length; i++) {
    for (var j = 0; j < terms[i]['pattern'].length; j++) {
      var regex = new RegExp(terms[i]['pattern'][j]);
      if (sentence.content.match(regex)) {
          for (var k = 0; k < sentence.tokens.length; k++) {
            if (sentence.tokens[k].surface == terms[i]['pattern'][j]) {
              addError('文書規約違反です。「' + sentence.tokens[k].surface + sentence.tokens[k].tags[1] + '」を「' + terms[i]['expected'] + '」に修正してください。', sentence);
            } else if (terms[i]['pattern'][j].indexOf(sentence.tokens[k].surface) == 0 && k != sentence.tokens.length - 1) {
              allText = sentence.tokens[k].surface;
              for (var q = k + 1; q < sentence.tokens.length; q++) {
                allText += sentence.tokens[q].surface;
                if (terms[i]['pattern'][j].indexOf(allText) != 0) break;
                if (allText == terms[i]['pattern'][j]) {
                  alert = '文書規約違反です。「' + allText  + sentence.tokens[k-1].tag[1] +  '」を「' + terms[i]['expected'] + '」に修正してください。';
                  addError(alert, sentence);
                }
              };
            };
          };
      };
    };
  };
};