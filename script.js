// order of array elements: content tab title, image path, text body, color (hex code), color name, color meaning
const contentOfCards = {
    "vangogh": {
        "title": "História do Van Gogh",
        "path": "assets/img/card-vangogh.jpg",
        "textBody": "Vincent Willem van Gogh, nasceu em 30 de março de 1853 em um pequeno vilarejo no sul da Holanda, chamado de Brabante de Zundert. Seus pais eram Theodorus e Anna Carbentus van Gogh.<br>Com apenas dezesseis anos, em 1869, é mandado pelo pai para trabalhar com seu tio em Haia, cidade da Holanda, para a ajudar na inauguração de uma filial da Casa Goupil, galeria francesa que comerciava livros e obras artística, que o demitiu pelo excesso de conflitos sete anos após sua admissão.<br>Influenciado pelo pai, Van Gogh tenta carreira na área religiosa e paralelamente candidata-se para professor de francês e alemão em uma escola na Inglaterra, porém em ambas as profissões não obtêm êxito. Entre empregos e demissões, sem perspectiva de uma carreira promissora, Vincent passa por seus primeiros episódios depressivos e inúmeras crises nervosas e solitárias, encontrando abrigo na bebida e em sua amizade com seu irmão.<br>Após deixar a carreira de religiosidade de lado, assa a trabalhar como minerador uma pequena região da Bélgica, mas também acaba sendo demitido em 1879. Durante todas suas viagens e profissões, Vincent escrevia cartas para seu irmão – e melhor amigo – Theo, contando sobre seus dias acompanhado de ilustrações, ao ver os esboços, o irmão oferece apoio financeiro para que pudesse começar seus primeiros quadros.<br>Com o financiamento do irmão, começa a estudar os fundamentos da arte, como anatomia e uso da perspectiva, a usar aquarela e tinta a óleo, é nesse mesmo período que Vincent pinta um de seus primeiros quadros “Os comedores de batata”, marcando sua fase de profissionalização nas artes e uso de técnicas de outros pintores. Em 1886, o artista mudou-se para Paris novamente, onde teve contato com outros pintores e com o movimento impressionista, marcando a transição das cores apagadas e escuras para cores puras e brilhantes que Gogh começou a usar em seus trabalhos.<br>Depois do episódio do corte da orelha devido uma briga com seu colega Paul Gauguin, Vincent se interna em um hospital psiquiátrico Saint-Remy-de-Provence, localizado na França, onde produz uma de suas obras mais conhecidas, a famosa “Noite Estrelada”, que era a vista da janela do seu quarto ao anoitecer.<br>Após um ano de seu tratamento, Vincent viaja para um campo de trigo e morre com um tiro no peito, morrendo dois dias após o disparo, em 29 de julho de 1890, com trinta e sete anos, é enterrado no cemitério de Auvers.",
    },
    "psicologia": {
        "title": "O que é psicologia das cores?",
        "path": "assets/img/circulo_cromatico.jpg",
        "textBody": "A cor começa a ser estudada pelos físicos, obviamente já sendo usada para manifestações visuais desde a época dos homens em cavernas e desenvolvendo-se em técnicas e movimentos variados desde então. O primeiro físico a estudar o fenômeno da cor é Isaac Newton e a dispersão da luz e sua refração em sete cores por um prisma de vidro, em 1672, criando a expressão “espectro das cores”, que começaria no vermelho e se prolongaria em laranja, amarelo, verde, azul, anil e violeta.<br>Em 1810, outra pesquisa sobre as cores aparece, chamado de “Teoria das cores”, publicado pelo escritor científico Johan Wolfgang von Goethe, o estudo começou quando Goethe supôs que as cores se desenvolviam a partir da interação entre o claro e o escuro, e que as diferentes combinações entre a luz e sua ausência ofereciam distintos efeitos sobre as pessoas, referindo-se a esse fenômeno como “efeito sensorial-moral das cores”. A partir da difusão dos estudos produzidos por Wolfgang sobre os efeitos psicológicos da cor sobre um indivíduo, muitos artistas começaram a produzir suas artes analisando como sua obra iria impactar o admirador, uma técnica muitíssimo utilizada por Van Gogh em suas pesquisas sobre “as questões da cor” como ele chamava em algumas cartas direcionadas a Theodorus.<br>No ano de 1839 o químico Michel-Eugene Chevreul produziu e publicou o primeiro círculo cromático, uma peça que alinhava as cores e demonstrava como funcionava o gradiente do vermelho e as cores seguintes até o roxo, foi Michel quem também dividiu as cores quentes (vermelho ou magenta, laranja e amarelo), transmitindo calor e proximidade, das frias (verde, azul, anil e roxo), exalando distanciamento e calma, e assim surgiu as categorias como cores análogas, complementares e monocromáticas.<br>A palavra “cor” é um termo que caracteriza um fenômeno visual que se pode notar a partir de um feixe de luz direcionado ao olho, que é identificado e sintetizado pelo cérebro. A cor divide-se em três categorias, sendo elas: matiz ou croma, que é a cor em si; a saturação que seria do croma ao cinza e o brilho relativo, no caso, do tom mais claro (branco) ao mais escuro (preto). A cor segrega-se ainda em outras duas denominações: as cores primárias (amarelo, magenta ou vermelho e azul ou ciano), e as combinações destas dão forma as secundárias (laranja, verde e roxo).",
    },
    "batata": {
        "title": "Os comedores de batata, 1885",
        "path": "assets/img/comedores_batata.jpg",
        "textBody": "O quadro foi uma das primeiras produções de Van Gogh, sob grande influência de outros artistas e experimentações, apresentando muita luz e sombra, com cinco pessoas à mesa e expressões sérias durante a refeição, foi nessa pintura que foi despertado seu interesse na teoria das cores e o que elas podiam provocar no expectador. A palheta utilizada é sóbria e traz um sentimento de melancolia, evocando tons mais apagados, que transmitem maturidade e seriedade para a cena, em oposição a aura amarelada brilhante emitido pela lamparina.",
    },
    "montmartre": {
        "title": "Guinguette de Montmartre, 1886",
        "path": "assets/img/montmartre.jpg",
        "textBody": "Nessa obra, Van Gogh captura a atmosfera animada e alegre de uma guinguette, pode-se ver pessoas dançando e se divertindo ao som de uma banda, enquanto outras estão sentadas em mesas. Van Gogh utiliza pinceladas ousadas e tons amarronzados, com uma cartela de cores mais escura que suas futuras produções, para representar essa cena de entretenimento, e seu estilo está começando a mostrar sinais do pós-impressionismo. O artista estava explorando novas técnicas e experimentando com núcleos para capturar a atmosfera e o espírito do local.",
    },
    "ponte": {
        "title": "A Ponte Debaixo da Chuva, 1887",
        "path": "assets/img/ponte_chuva.jpg",
        "textBody": "Ponte na Chuva é uma cópia pintada de uma xilogravura do artista japonês Utagawa Hiroshige, ao mesmo tempo em que o trabalho consegue ter um estilo próprio pelas clássicas e marcadas pinceladas evidentes e cores mais brilhantes, como o clássico amarelo – que começa a ganhar destaque nesta e em muitas outras obras adiante – verde, azul, vermelho, branco e preto.",
    },
    "girassois": {
        "title": "Dois Girassóis Cortados, 1887",
        "path": "assets/img/girassois.jpg",
        "textBody": "Este é, provavelmente, um dos quadros mais conhecidos do artista, considerado uma façanha em termos técnicos, pois é quase todo pintado em amarelo e outras misturas com a cor, preferência que se manifestou em Paris, sob a influência da arte japonesa. Vincent escreveu para seu irmão Theodorus sobre o processo de pintura, em que pretendia pintar uma série de quadros com tema de girassol, todos com as mesmas cores de azul e amarelo em predominância.",
    },
    "chapeu": {
        "title": "Autorretrato com chapéu de palha, 1887",
        "path": "assets/img/chapeu_palha.jpg",
        "textBody": "Neste óleo sobre tela, o artista optou por usar tons de amarelo, complementados por laranja e azul, se retratando em uma postura onde encara o público com olhar firme, mas transmitindo também certa ansiedade.",
    },
    "encarnada": {
        "title": "A Vinha Encarnada ou A Vinha Vermelha, 1888",
        "path": "assets/img/encarnada.jpg",
        "textBody": 'O único quadro que Teodorus conseguiu vender de seu irmão, enquanto os dois estavam vivos. Ao descrever o quadro ao irmão, Van Gogh disse que o tinha feito após a chuva, com o pôr-do-sol, pintando o chão de violeta e as folhas das parreiras de vermelho "como vinho". O toque esverdeado no céu foi usado para contrastar com os tons de vermelho quente que dominam a composição, o feito provavelmente criado a partir do estudo das técnicas de pintura de outros artistas e o círculo cromático, em que verde e vermelho se contrastam de forma complementar entre si, enquanto o verde e amarelo trazem a ideia de um cenário mais calmo, pacífico e harmonioso, o vermelho traz o peso das pinceladas e da profundidade do campo em que as pessoas trabalham, transmitindo calor e força a imagem.',
    },
    "terraco": {
        "title": "Terraço do Café na Praça do Fórum, 1888",
        "path": "assets/img/terraco.jpg",
        "textBody": "Durante seu período em Arles, Van Gogh se tornou obcecado em trazer cores vivas para os seus quadros. A cena apresenta mesas dispostas no terraço do café, com pessoas sentadas e em pé. As figuras são representadas de maneira estilizada e com cores vibrantes. O artista utilizou pinceladas ousadas e cores contrastantes para capturar a atmosfera animada do local. O céu azul brilhante em contraste com as mesas vermelhas e amarelas cria uma sensação de calor e vitalidade. Além do amarelo e azul, presentes em muitas obras de Vincent, nesta obra temos o laranja, usado para representar a profundidade da rua, conduzindo o visualizador a entrar naquele cenário de excitação e animosidade das pessoas no lugar.",
    },
    "moinho": {
        "title": "O Velho Moinho, 1888",
        "path": "assets/img/moinho.jpg",
        "textBody": "É uma pintura criada durante seu tempo na cidade de Arles, no sul da França. Esta obra retrata um antigo moinho de vento que era uma característica proeminente da paisagem rural da região. Na pintura, Van Gogh captura o cenário com pinceladas ousadas e expressivas. O moinho é representado em tons de amarelo, azul, branco e cinza, contrastando com o céu e as áreas de vegetação verde, típicos das representações que Vincent fazia da paisagem do sul da França. O quadro formado principalmente de variações de amarelo, e alguns relâmpagos de verde e azul ao fundo, transmite um ambiente abafado, mas ainda assim reconfortante, alegre e vivo.",
    },
    "jarra": {
        "title": "Os Doze Girassóis Em Uma Jarra, 1889",
        "path": "assets/img/jarra.jpg",
        "textBody": "Ele imaginou a série como parte de uma decoração para o quarto de seu amigo e colega artista Paul Gauguin. As pinturas de girassóis de Van Gogh são conhecidas por sua vivacidade de cores e pinceladas expressivas, trazendo buquês de girassóis em várias fases de florescimento, desde o botão até a floração completa e o murchamento. A escolha de pintar girassóis pode ter sido inspirada pelo clima ensolarado do sul da França e pela alegria que o pintor associava à cor amarela, símbolo de alegria e vivacidade. As obras têm uma qualidade luminosa que reflete o interesse de Van Gogh em explorar as cores vivas e a luz.",
    },
    "quarto": {
        "title": "O Quarto Em Arles, 1889",
        "path": "assets/img/quarto.jpg",
        "textBody": "A pintura retrata o quarto de Van Gogh com simplicidade e a perspectiva é propositalmente distorcida para criar um efeito mais expressivo e pessoal. Utilizando uma paleta de cores vibrantes, incluindo tons de amarelo, azul, verde e vermelho. As cores são escolhidas para criar uma sensação de calma e harmonia, e também para destacar a emoção e personalidade do artista. O objeto de mais destaque é a cama, pelo amarelo brilhante que a compõe, o resto do cômodo é preenchido por cores mais opacas, transmitindo calma e equilíbrio.",
    },
    "autorretrato": {
        "title": "Autorretrato, 1889",
        "path": "assets/img/autorretrato.jpg",
        "textBody": "A produção foi uma das cerca de 32 produzidas ao longo de um período de 10 anos, e fizeram parte de um importante momento no seu trabalho como pintor. Seus olhos, em particular, são marcantes e parecem transmitir uma sensação de profundidade e reflexão, mas também pode ser visto como uma forma de ele se comunicar com o mundo sobre sua luta pessoal, em oposição, as cores são tranquilas e claras, expressando certo frescor ao cenário.",
    },
    "lirios": {
        "title": "Lírios, 1889",
        "path": "assets/img/lirios.jpg",
        "textBody": "A pintura faz parte de uma série de pinturas de íris que o artista holandês produziu durante seu tempo no hospital em que se internou. Na primeira semana, ele começou a pintar “Irises”, trabalhando a partir da natureza no jardim do prédio, com um senso de emoção e intensidade que reflete as lutas internas e a visão criativa do artista durante esse período de sua vida. Essa única flor branca, sabendo que a tonalidade é normalmente usada para representar inocência e pureza, pode nos transportar para teorias sobre a subjetividade que o próprio Van Gogh poderia estar colocando ali, usando do roxo e azul escuro para referenciar a si mesmo como diferente dos outros que o cercavam.",
    },
    "noite": {
        "title": "Noite Estrelada, 1889",
        "path": "assets/img/starry-night.jpg",
        "textBody": "Uma das obras mais marcantes da trajetória do artista foi com certeza a famosa “A Noite Estrelada”. O quadro retrata a paisagem vista pela janela do quarto e ateliê do hospital psiquiátrico durante o nascer do sol. A cor mais presente na obra é o azul, em muitas variações, exprimindo ao admirador da tela serenidade e sabedoria.",
    },
    "ciprestes": {
        "title": "Os Ciprestes, 1889",
        "path": "assets/img/ciprestes.jpg",
        "textBody": "O quadro, assim como a noite estrelada, foi produzido durante sua estadia no hospital psiquiátrico, sendo produzido e copiado três vezes, uma se encontra na National Gallery, em Londres, a segunda no Metropolitan Museum of Art, em Nova Iorque e a terceira foi destinada a uma coleção particular, há também o primeiro rascunho da obra, localizado no Museu Van Gogh, em Amsterdã. A produção apresenta cores brilhantes, com tons de amarelo, ocre, azul e branco, todos misturados entre si, tornando a cena uma representação quase lucinante, como se os desenhos estivessem de fato vivos e em seu próprio ritmo, a cor que mais se sobressai é o verde escuro, trazendo prosperidade e harmonia.",
    },
    "siesta": {
        "title": "A Sesta ou A Siesta, 1890",
        "path": "assets/img/siesta.jpg",
        "textBody": "A obra enquadra uma cena típica das primeiras pinturas de Vincent, uma paisagem naturalista, entretanto, agora com seus toques de cor e técnicas específicas, desenvolvidas após longas sessões de pintura e experimentações. Composto pelo amarelo e ocre comuns a Gogh e o tom de azul claro para o céu, no centro vê-se um casal de trabalhadores fazendeiros, enquanto a mulher repousa sobre o peito do homem, este está apoiado de costas para um monte de feno com um chapéu cobrindo seu rosto, ao fundo também há a presença de um burro acompanhado de uma pequena carroça.",
    },
    "ronda": {
        "title": "A Ronda dos Prisioneiros, 1890",
        "path": "assets/img/ronda.jpg",
        "textBody": "A cena retrata um conjunto de prisioneiros andando em uma fila circular, enquanto alguns estão com a cabeça baixa, visando o chão, outros olham diretamente para o espectador, ao canto, três homens encaram os prisioneiros. A pintura é feita com um gradiente simbólico, enquanto a cena com os prisioneiros é verde e cinza, com sombras em azul escuro, ao alto emana uma luz amarela quase divina do céu, refletindo a tonalidade sob a cabeça dos homens, um fato muito interessante é analisar a obra sob a mudança de cores, enquanto o céu é claro e iluminado, o chão é sujo e escuro.",
    },
    "amendoeiras": {
        "title": "Amendoeiras, 1890",
        "path": "assets/img/amendoeiras.jpg",
        "textBody": 'A obra "amendoeiras" ou "amendoeira em flor" foi um presente do pintor ao sobrinho, filho de Theodorus com sua esposa Johanna, van Gogh ficou muito emocionado e honrado quando seu nome foi usado para nomear o primogênito do irmão. Em uma carta a sua irmã Willelmina em fevereiro de 1890, alguns meses antes de morrer, o artista escreveu “Comecei a pintar nesses últimos dias para ele uma grande tela azul do céu sobre a qual se destacam galhos floridos” descrevendo a pintura.',
    },
    "igreja": {
        "title": "A Igreja de Auvers, 1890",
        "path": "assets/img/igreja.jpg",
        "textBody": "A obra é uma paisagem de um vilarejo perto de Paris, chamado Auvers-sur-Oise, com misturas de branco, verde e azul, criando um tom acinzentado, expressando neutralidade para a cena. O tema da igreja, tratado várias vezes, poderia ter sido influenciado pela vida pastoral de seu pai e sua tentativa fracassada em seguir na carreira religiosa. Após seu período parisiense entre 1886 e 1888, o pintor havia abandonado o tema, retomado novamente ao fim de sua estada no hospital.",
    },
    "gachet": {
        "title": "Retrato de Dr, Gachet, 1890",
        "path": "assets/img/gachet.jpg",
        "textBody": "Depois de uma estadia no manicômio de Saint-Paul-de-Mausole, Vincent foi supervisionado pelo Dr. Paul-Ferdinand Gachet. Apesar de inicialmente desgostar do médico, Gogh logo o considerou um amigo e uma alma gêmea, notando semelhanças físicas e mentais entre eles. Willem até retratou Gachet, descrevendo-o como melancólico na pintura e usando de tonalidades mais frias e opacas, como o preto e variações para transmitir parte dessa tristeza e angústia, a composição conta ainda com um ramo de flores sob uma mesa, a planta em questão era uma dedaleira, usada como erva medicinal no tratamento psicológico do artista.",
    },
    "corvos": {
        "title": "Trigal com Corvos, 1890",
        "path": "assets/img/corvos.jpg",
        "textBody": 'Há uma crença de que o Campo de Trigos com Corvos seja o último quadro do pintor. Por causa do conteúdo da obra, "o céu ameaçador, os corvos e o caminho de um beco sem saída", alguns acreditam que eles “se referem ao fim de sua vida se aproximando”, com fortes pinceladas de preto entre os tons de azul tranquilos do céu, o amarelo puxado para um tom levemente esverdeado e o marrom equilibrando o contraste entre as cores principais. Mas isso é apenas um mito persistente. Na vanguarda, ele fez várias outras obras depois desta. É possível que "Raízes da Árvore" ou "Daubigny´s Garden" tenham sido suas verdadeiras últimas obras.',
    },
};

const contentOfColors = {
    "branco": {
        "title": "Branco",
        "textBody": 'A famosa "cor das noivas" e "réveillon" remete a neutralidade, renovação, pureza na alma, virgindade, simplicidade, estabilidade, religiosidade e paz (visão ocidental) e luto (visão oriental), usada também para representar o imaterial, como deuses e fantasmas. O branco é a adição de todas as cores na luz, a origem de seu nome vem do germânico "blank" que significa "brilhante". No design, o branco é usado como "respiro", um espaço vazio que, quando utilizados corretamente, deixam a peça mais fluída e minimalista. Um fato interessante é que a luz branca é chamada também de acromática, ou seja, ausência de cor.',
        "hexcode": "#ffffff",
    },
    "cinza": {
        "title": "Cinza",
        "textBody": 'A cor das cidades grandes, da fumaça e poluição, representa neutralidade, maturidade, velhice e tristeza, o cinza é o meio termo entre branco e preto, luz e escuro. Vem do latim “cinicia” e germânico “gris”.',
        "hexcode": "#565861",
    },
    "preto": {
        "title": "Preto",
        "textBody": 'É a completa ausência de luz, a cor da perda, mistério, tristeza, luto, fragilidade, negação, melancolia, raiva e angústia, mas também representa elegância, riqueza e sofisticação. A palavra tem origem do latim “niger” e “premo” que significam, respectivamente, “escuro” e “pressionar”.',
        "hexcode": "#18181b",
    },
    "vermelho": {
        "title": "Vermelho",
        "textBody": 'A cor do sangue e paixão, pode representar o amor, acolhimento, feminilidade, coragem, calor, perigo, força, atenção, ataque e pecado. É a cor mais quente e saturada, pode remeter também a felicidade e festa. Tem origem etimológica vinda do latim “vermiculus” que significa “verme”, refere-se ao inseto cochonilha do qual era extraído um corante cor de carmim, utilizado para a produção de tintas e cosméticos. No design, a cor é usada quando se deseja dinamismo e confiança e urgência, presente em muitas marcas de alimentos e bebidas pois é associada a abrir o apetite.',
        "hexcode": "#fa3232",
    },
    "laranja": {
        "title": "Laranja",
        "textBody": 'Representa desejo, excitação, alegria, a cor do pôr do Sol, força, energia e animação. Talvez seja a cor com mais viagens pelo mundo, antes de uma nominação específica, o “laranja” não tinha um título próprio. A fruta teve sua origem na Índia, onde era chamada de “nareng", e depois “nâranj” na Arábia, foram os arábes que, durante suas viagens comerciais, levaram mudas para cultivar pela Europa, e lá seu nome foi modificado novamente para “orange”.',
        "hexcode": "#fa5732",
    },
    "amarelo": {
        "title": "Amarelo",
        "textBody": 'Remete a alegria, felicidade, impulsividade, estímulo, otimismo, energia, conforto, sabedoria e expectativa, chamada comumente de “cor do Sol”. Vem do latim hispânico “amerellus”, “amaryllis” ou ainda “amargus” que significa “amargo”, provavelmente o nome deriva de alguma fruta ácida com a mesma tonalidade.',
        "hexcode": "#ffcc29",
    },
    "verde": {
        "title": "Verde",
        "textBody": 'A junção do amarelo e azul, a cor da natureza e árvores, pode transmitir tanto calma, tranquilidade, perseverança, juventude, renovação, generosidade, fertilidade, esperança, fraternidade, repouso, saúde, liberdade, como também inveja e ciúme. Vem do latim “viridis” que significa “a cor do mato” ou ainda a cor “do que é forte”.',
        "hexcode": "#45b041",
    },
    "azul": {
        "title": "Azul",
        "textBody": 'Simboliza amizade, confiança, é a cor do céu e o infinito, também pode indicar - em seus tons mais escuros - sofisticação, inteligência, esperteza, agilidade, intensidade e profundidade. O nome da cor tem origem em dois povos, no árabe e persa, em que em um era titulado pela pedra lápis-lazúli e no outro “lázúrdi”. Uma curiosidade sobre a cor é que muitas das civilizações antigas não possuíam um nome para batizá-la pela ausência de contato de elementos que poderiam extrair essa tonalidade, sendo uma das últimas cores a ser nomeada (primeiro foi o preto, depois branco, vermelho, verde, amarelo e por último o azul e roxo). Para caracterizar o mar, por exemplo, eles usavam termos como “escuro” e “profundo”, mas nunca azul. Foram os egípcios que descobriram o material que poderiam obter a cor e a nomearam pela primeira vez.',
        "hexcode": "#4f6fc9",
    },
    "roxo": {
        "title": "Roxo",
        "textBody": 'A cor lilás, violeta e purpura estão entre os diferentes tons de roxo, é o resultado da combinação entre uma mistura de vermelho ou magenta, com o azul ou ciano, sendo a primeira acrescida do branco. A cor consegue transmitir duas esferas de significado, enquanto por um lado pode representar religiosidade, magia, mistério, profundidade, espiritualidade, sensibilidade, calma, controle, por outra perspectiva transmite agressão, egoísmo e violência. A palavra roxo vem do latim “russeus”, usado originalmente para representar um vermelho-escuro, enquanto outras denominações como violeta e púrpura transcendem, também do latim e respectivamente, “viola” e “purpùra”. Um fato interessante sobre a cor púrpura é sua semelhança histórica com o azul, por muito tempo a tonalidade foi usada somente pelos mais ricos, pela dificuldade de conseguir o pigmento, extraído por uma série de processos artesanais sob um molusco encontrado somente no Mediterrâneo, especificamente em Fenícia, atual Líbano.',
        "hexcode": "#8750e6",
    },
    "marrom": {
        "title": "Marrom",
        "textBody": 'A “cor do outono” foi por muito tempo utilizada para retratar tanto a fertilidade, por fazer lembrar a coloração da terra, e representar também as classes mais pobres, indicando a falta de tingimento nas roupas. A cor transmite frieza, responsabilidade, natureza e maturidade. Seu nome vem do francês “marron”, que remetia a castanha portuguesa do Natal, que significa “castanho”.',
        "hexcode": "#593d31",
    },
};

// creates cards of each element of contentOfCards
function createCards() {
    const container = document.getElementById("cards-container");
    const cardClasses = ['flex', 'justify-center', 'items-center', 'h-52', 'sm:h-72', 'w-full', 'max-w-52', 'sm:max-w-72', 'card', 'cursor-pointer', 'shadow-2xl'];
    const imageClasses = ['w-full', 'h-full', 'bg-cover', 'bg-no-repeat', 'bg-center', 'rounded-xl', 'card-image', 'transition-all', 'interactive'];
    const textClasses = ['absolute', 'select-none', 'text-white', 'text-3xl', 'text-center', 'card-text', 'transition-all', 'opacity-0', 'interactive', 'max-w-64', 'break-words'];

    for (let key in contentOfCards) {
        if (contentOfCards.hasOwnProperty(key)) {
            const card = document.createElement("div");
            const image = document.createElement("div");
            const text = document.createElement("h2");

            card.classList.add(...cardClasses);

            image.classList.add(...imageClasses);
            image.style.backgroundImage = `url(${contentOfCards[key].path})`;
            image.id = key;

            text.classList.add(...textClasses);
            text.innerHTML = contentOfCards[key].title;
            text.id = key + "-text";

            card.appendChild(image);
            card.appendChild(text);

            container.appendChild(card);
        }
    }
}

function createColors() {
    const container = document.getElementById("colors-container");
    const colorClasses = [
        'flex',
        'w-full',
        'sm:flex-1',
        'sm:min-w-72', 'justify-center',
        'items-center',
        'p-4',
        'rounded-md',
        'interactive',
        'shadow-2xl',
        'cursor-pointer',
        'transition-all',
        'hover:scale-[1.02]'
    ];
    const textClasses = ['text-2xl', 'text-center', 'select-none'];

    for (let key in contentOfColors) {
        if (contentOfColors.hasOwnProperty(key)) {
            const color = document.createElement("div");
            const text = document.createElement("h2");

            color.classList.add(...colorClasses);
            color.style.backgroundColor = contentOfColors[key].hexcode;
            color.id = key + "-color";

            text.classList.add(...textClasses);
            text.style.color = getTextColor(contentOfColors[key].hexcode, false);
            text.innerHTML = contentOfColors[key].title;

            color.appendChild(text);

            container.appendChild(color);
        }
    }
}

// adds the click event to the cards
function addEvents() {
    const interactiveElements = document.querySelectorAll(".interactive");
    const container = document.getElementById("contents-container");
    const contentsBodyContainer = document.getElementById("contents-body-container");
    const image = document.getElementById("contents-image");
    const title = document.getElementById("contents-title");
    const textBody = document.getElementById("contents-body");
    
    // event listener to open the contents tab with the respective content
    interactiveElements.forEach((element) => {
        element.addEventListener("click", (e) => {
            let id = element.id;

            if (!id.includes("-text") && !id.includes("-color"))
                id = element.id;
            else if (id.includes("-text"))
                id = id.replace("-text", "");

            if (!id.includes("-color")) {
                const contents = contentOfCards[id];
                
                container.style.backgroundColor = "#ffffff";

                title.style.color = "#18181b";
                title.innerHTML = contents["title"];

                textBody.style.color = "#27272a";
                textBody.innerHTML = contents["textBody"];

                image.style.backgroundImage = `url(${contents["path"]})`;
                image.style.display = "block";

                if (!container.classList.contains("lg:h-[600px]"))
                    container.classList.add("lg:h-[600px]");

                if (!contentsBodyContainer.classList.contains("overflow-y-scroll"))
                    contentsBodyContainer.classList.add("overflow-y-scroll");

                if (!contentsBodyContainer.classList.contains("max-h-96"))
                    contentsBodyContainer.classList.add("max-h-96");

            } else {
                id = id.replace("-color", "");

                const contents = contentOfColors[id];

                container.style.backgroundColor = contents["hexcode"];

                title.style.color = getTextColor(contents["hexcode"], true);
                title.innerHTML = contents["title"];

                textBody.style.color = getTextColor(contents["hexcode"], false);
                textBody.innerHTML = contents["textBody"];

                image.style.display = "none";

                if (container.classList.contains("lg:h-[600px]"))
                    container.classList.remove("lg:h-[600px]");

                if (contentsBodyContainer.classList.contains("overflow-y-scroll"))
                    contentsBodyContainer.classList.remove("overflow-y-scroll");

                if (contentsBodyContainer.classList.contains("max-h-96"))
                    contentsBodyContainer.classList.remove("max-h-96");
            }

            globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    });
}

// determines if the text color for the color content container should be white or black
function getTextColor(hexcode, isTitle){
    const r = parseInt(hexcode.substring(1,3), 16);
    const g = parseInt(hexcode.substring(3,5), 16);
    const b = parseInt(hexcode.substring(5,7), 16);
    let brightness = ((r*299)+(g*587)+(b*114))/1000;

    if (isTitle)
        return (brightness >= 128) ? '#18181b' : '#ffffff';
    return (brightness >= 128) ? '#27272a' : '#ffffff';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const contentImage = document.getElementById("contents-image");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close-button");

    createCards();
    createColors();
    addEvents();

    contentImage.addEventListener("click", () => {
        const overlayImage = document.getElementById("overlay-image");

        style = window.getComputedStyle(contentImage);
        fullPath = style.backgroundImage;
        path = fullPath.substring(fullPath.indexOf("assets"), fullPath.length - 2);
        
        overlayImage.src = path;
        overlay.style.display = "flex";
    });

    [closeButton, overlay].forEach((element) => {
        element.addEventListener("click", (e) => {
            overlay.style.display = "none";
        });
    });
});
