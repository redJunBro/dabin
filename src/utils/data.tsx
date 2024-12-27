export interface Book {
  id: number;
  category: string;
  view: number;
  description: string;
  title: string;
  subTitle: string;
  price: number; // KRW
  subdescription: string;
  contents: {
    textContents: string;
    imege: string;
  }[]; // 한국어 설명
  cover: string;
}
export interface Hair {
  id: number;
  sex: string;
  best: boolean;
  styleName: string;
  nameKr: string;
  nameEn: string;
  price: number; // KRW
  subdescriptionKr: string;
  subdescriptionEn: string;
  descriptionKr: string; // 한국어 설명
  descriptionEn: string; // 영어 설명
  etc: string; // 기타 설명
  image: string;
}

// 스타일 네임이 한줄 제목
// nameKr이 책제목
// 영어는 잡종
//subdescriptionKr는 책뒷장

export const hairData2: Hair[] = [
  {
    id: 2,
    sex: "man",
    best: false,
    styleName: "엄마, 그 한 단어가 내 삶의 가장 큰 울림이야 '여운'",
    nameKr: "여운",
    nameEn: "엄마의 마음",
    price: 12000,
    subdescriptionKr:
      "슬릭 컷은 정갈한 라인과 세련된 분위기를 연출하는 스타일입니다",
    subdescriptionEn:
      "Sleek cut creates a polished and sophisticated look with clean lines",
    descriptionKr:
      "어릴 때에는 몰랐어 단어 하나에 마음이 아릿할 줄은. 학교를 다닐 때에는 마냥 귀찮았지. 언제나 곁에 있었거든. 막 성인이 되고 난 뒤로는 벗어나기 급급 했던 것 같아. 나 혼자 알아서 컸다고 생각 했거든. 지금에 와서 내가 같은 입장이 되고 보니 이제서야 보이는 것들이 있더라. 항상 곁에 있지는 않다는 것. 언제까지고 있어 줄 수 없다는 것. 점 점 야위어 가고, 작아져가고 있다는 것. 그래서 인가 봐. 말문이 트일 때 제일 먼저 말하게 되는 이유가. 그래서 일 거야. 말을 내뱉으면서 눈물이 나오는 이유가. [ 엄마 ] 그 한 단어가 주는 여운이 이리도 큰 이유가. 지금도, 마지막도 내 입으로 말 할 수 있는 제일 큰 단어라서. 그래서 일 거야.",
    descriptionEn:
      "The sleek cut highlights the head shape and facial features with clean, precise lines, offering a tidy and refined look. Tight sides and back blend seamlessly with the top for a polished and sophisticated appearance. This practical hairstyle suits professionals, students, and formal settings, requiring minimal maintenance while keeping a sharp image. Styling products can be used to add texture and volume, making it versatile for personal expression.",
    etc: "/images/bug2.png",
    image: "/images/bug3.png",
  },
  {
    id: 7,
    sex: "man",
    best: false,
    styleName: "같은 자리에서 흩어지는 연기, 널 담은 '매일 아침'",
    nameKr: "매일 아침",
    nameEn: "희망을 담은 아침",
    price: 25000,
    subdescriptionKr:
      "텍스쳐 컷은 머리의 질감을 살려 자연스러운 스타일을 완성합니다",
    subdescriptionEn: "Texture cut enhances hair texture for a natural look",
    descriptionKr:
      "같은 시간, 같은 자리. 하이얀 연기를 내뿜으며 생각을 정리한다. 한 모금에 걱정 하나씩을 실어 보내며 하나, 둘. 그렇게 사그러들고 흩어진다. 하나의 기쁨과, 하나의 절망 서로의 교차점에는 오롯이 너 뿐이다. 말 한마디에 흔들리는 모습이 마치 바람에 흘러가는 구름 같기도 한 잎, 한 잎 흩날리는 꽃잎 같기도 하구나. 그럼에도 결국 매일 아침은 너를 향한 희망을 갖게 하려고 온다. 그렇게 오늘 아침에도 머금은 연기에 널 실어 보낸다.",
    descriptionEn:
      "The texture cut emphasizes the natural texture of hair while balancing volume to create a sleek and stylish appearance. Its layered approach gives a lightweight feel, making it a versatile option for various face shapes. This style is especially beneficial for stiff or fine, lifeless hair, adding volume and vibrancy. Easy to maintain, it is ideal for everyday wear and suits those who prefer a combination of natural and stylish looks. Using the right styling products enhances the final look for a polished result.",
    etc: "/images/매일아침.png",
    image: "/images/매일아침책커버.png",
  },
  {
    id: 6,
    sex: "man",
    best: false,
    styleName: "엄마의 사랑으로 시작된 존재, 그 시작은 '시련'",
    nameKr: "시련",
    nameEn: "따라걷는 그녀의 길",
    price: 20000,
    subdescriptionKr: "깔끔한 느낌을 선호하는 남성들에게 추천되는 크롭 컷",
    subdescriptionEn: "Recommended crop cut for men who prefer a clean look",
    descriptionKr:
      "매 년 오늘이 되면 떠올라요. 내가 세번이나 겪었던 고통이 나만 겪은 고통이 아니구나 하고. 벌써 32년 전이 되어 버린 또 다른 이의 고통으로 나는 이렇게 또 존재하는 구나 하고. 각기 다른 시련이었을지는 몰라도 그 때의 엄마도 아팠으니까. 내가 버텨 냈던 그 시련들처럼 엄마도 시련을 이겨내줘서 고마워요. 당신이 버텨 주신 그 시련 덕분에 지금의 제가 있습니다. 감사하고, 사랑해요.",
    descriptionEn:
      "The crop cut aligns with the latest trends, offering a neat and clean impression that suits various face shapes. This style opens up the forehead while maintaining natural volume, enhancing facial brightness and definition. The sides are tidily trimmed, and the top is smoothly blended to ensure a polished look. Easy to manage and requiring minimal maintenance, this style is ideal for those seeking a trendy yet practical hairstyle for everyday wear.",
    etc: "/images/시련.png",
    image: "/images/시련책커버.png",
  },

  {
    id: 9,
    sex: "man",
    best: false,
    styleName: "가족과 나누고 싶던 사랑이 담겼던 바스락거리는 '봉투'",
    nameKr: "봉투",
    nameEn: "집안의 난로",
    price: 25000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "햇님이 집에 가고 하늘이 보라색 옷으로 갈아 입던 때, 뚜벅, 뚜벅 소리와 발 맞춰 바스락, 바스락 소리가 들려 오던 날. 한 겨울 시린 손을 불어가며 아르바이트를 끝내고 집에 돌아 오던 길에 노오란 전구 아래 더 샛 노오란 귤 들. 오랜만에 받은 용돈을 들고 신이 나서 뛰어가던 길 끝에 고소한 기름 냄새 풍기는 허름한 가게. 검은색, 하늘색, 갈색으로 각기 자기만의 색을 가지고서 각기 자기만의 무게를 쟀지. 그렇게 집에 가면 바스락 거리는 봉투 안에서 나온 건 다름 아닌 사랑이었어. 가족들과 나누어 먹고 싶었던 그 시절의 사랑.",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/봉투.png",
    image: "/images/봉투책커버.png",
  },
  {
    id: 6,
    sex: "man",
    best: false,
    styleName: "너에게 다가 선 날 밀어낸 이유 '바닥'",
    nameKr: "바닥",
    nameEn: "너는 그랬구나",
    price: 25000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "바닥을 찍었다. 절망이. 슬픔이. 고통이. '이렇게까지 힘 들 일일까?' 바닥이 말했다. '그래서? 포기할 거야?' 오기가 생겼다. 화가 났다. 버텨 내고야 말리라. 보여 줄 테다. 한 발, 한 발 걸음을 내딛고, 미끄러지고 떨어져도 다시 기어 올랐다. 시리도록 푸르고 포근한 바람이 불자 바닥이 말했다. 잘했어. 고생 많았어. 너는 나를 일으켜 세우려고 그랬구나. 너에게서 벗어나게 하려 그렇게 모질게 굴었구나. 너는 그렇게 또 누군가를 받쳐 주었구나. ",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/바닥.png",
    image: "/images/바닥책커버.png",
  },
  {
    id: 3,
    sex: "man",
    best: false,
    styleName: "지나갈 시간의 위로를 담은 차가운 계절의 '윤슬'",
    nameKr: "윤슬",
    nameEn: "지나갈거야,너도",
    price: 45000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "앞이 뻥 뚤린 도로를 달리다 보면 새하얀 절경들이 지나쳐가고.  하얀 솜을 뒤집어쓴 나무들이 하나, 둘 뒤로 사라지면 어둡고 긴 터널들을 지나게 된다. 길고 긴 터널을 통해서 낮과 밤이 교차되다 보면 드는 생각들. 이 또한 지나가리라. 넓게 펼쳐진 수평선 위로  하나, 둘 차가움의 결정들이 쏟아지면 드는 생각. 시리도록 차가운 눈들도 어딘가에 맞닿으면 녹아버리듯. 이 또한 지나가리라. 숱한 어둠들을 뚫고 냉혹한 현실에서 벗어나려  멀고 먼 겨울 바다를 찾아 수없이 내달려 왔듯이, 저물어가는 해마저도 끝까지 빛을 내어 저 바다에 아름다움을 펼치듯이. 힘듦이야 어디에든 있지만, 이겨내는 것은 내 몫이었다. 차가운 바람을 맞으면서도 추위마저 잊게 만드는 저 윤슬처럼 지금을 이겨내는 내 모습도 그처럼 빛나지 않을까. 이 또한 지나가리라.  지나고 나면 저 윤슬처럼 빛을 안고 흘려 보낼 수 있겠지.. 그렇게 어두웠던 마음을 한숨에 실어 보내어 버리고 윤슬의 반짝임을 연료 삼아 또다시 길고 긴 여정을 시작한다.",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/윤슬.jpeg",
    image: "/images/윤슬책커버.png",
  },
  {
    id: 5,
    sex: "man",
    best: false,
    styleName: "하얀 도화지 위를 수놓는 작은 이야기 '너의 이름은'",
    nameKr: "너의이름은",
    nameEn: "녹지않는 추억",
    price: 45000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "까만 밤에 내리는 하이얀 점 하나. 누가 제일 빠를까? 하나. 둘 달리기 시합을 하는 작은 솜뭉치들. 어디서 왔는지 모를 이 귀여운 아이들이 지붕이며 나무며 도로 위에 옹기종기 모여서 세상을 도화지 삼아 그림을 채워간다. 앙상한 나뭇가지가 추워 보이면 달려가 옷을 입혀주고 높은 지붕을 미끄럼틀 삼아 썰매놀이를 하고 창틀에 걸터앉아 따스한 행복함을 구경 해본다. 열심히 밤 사이 도화지를 다 채우면 얼마나 예쁘게 되었는지 궁금한 햇님이 천천히 고개를 내밀어 훑어보고 새들이 보고서는 짹짹거리며 칭찬을 하느라 바쁘다. 아무도 밟지 않은, 소복이 쌓인 부분을 살짝 밟아 보면. 사박, 사박. 뽀드득, 뽀드득.  저들끼리 말을 걸어오느라 바쁘다.'어때? 마음에 들어?' '어때? 우리 이쁘지?' 몇 걸음 내딛다 하얀 도화지 같은 너희를 만나면 무심코 내민 손이 아쉬워 작게나마 내 이름자를 끄적이게 돼. 손가락이 움직이는 방향대로 자리를 비켜주며, 너희들은 신이 나서 사박, 사박 소리를 내지. 그렇게 우리는 네가 묻지 않아도 이름을 알려주고는 정작 너의 이름을 묻는 이, 하나 없어. 서운함을 몰라주는 우리가 미운지 스르륵 녹아 눈물을 흘리지. 울지 말라 보듬어 주는 햇님에게 안겨, 속상한 마음 알아 달라고 구름에게 달려가 일러보지만 다음에 가면 꼭 알려주고 오라는 구름의 말에 다시금 용기를 얻어 만나러 와주기도 해. 어깨에 내려앉고, 머리에 내려앉아서 너희 말을 들어 달라 자꾸만 다가오지. '나는 송이야!' '나는 솜이야!' 움직이는 길을 구경하며 다른 친구들을 구경하다가 구름이 부르면 돌아가야 되는 것이 슬퍼, 또다시 사르르 녹으며 눈물을 남기고 가더라. 너무 슬퍼하지 마. 불어오는 바람이 차가워지고, 햇님이 바쁘게 집에 가는 때가 오면 또다시 놀러 와도 돼. 그때는 내가 먼저 물어봐줄게. 너의 이름을. ",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/너의이름은.jpeg",
    image: "/images/너의이름은책커버.png",
  },

  {
    id: 8,
    sex: "man",
    best: false,
    styleName: "네 불빛을 감싸는 영원한 따스함'불빛'",
    nameKr: "불빛",
    nameEn: "이제야 선명해진 불빛",
    price: 24000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "어릴 적에 보았던 동화책 속에서 너무도 작고 가여운 아이를 보았어. 사랑이 고팠지만 받지 못했던 아이 살려고 발버둥 쳤지만 결국 불빛이 사그라들듯 잠든 아이... 그 아이가 끝까지 붙잡고 싶고, 가지고 싶었던 것은 그 무엇도 아닌 작은 불빛이었을 뿐이더라. 그 손안에 있는 작은 불빛이 너무도 소중해서 얕은 숨결에도 꺼져버릴까 두려워 숨 조차 편히 쉬지 못했지. 불빛 안에 있던 것은 그 아이의 작은 바람이었을 뿐, 불빛이 중요한 게 아니었는데... 하나의 따스함 속에서 아이는 배고픔을 잊었고 하나의 따스함 속에서 아이는 사랑을 알았고 하나의 따스함 속에서 받아들여지는 안온함을 알았지. 결국은 그 모든 것들이 사라질 거란 걸 알았지만 아이는 그 잠시 잠깐조차도 소중했던거야. 얼마나 부러웠을까. 안전한 울타리 안에서 따스한 사랑을 받으며 빛 속에 있는 이들을 보면서, 그 속에 들어가고 싶은 자신의 아픔을 보면서 아이는 얼마나 외로웠을까. 어릴 시절엔 단순히 불쌍했던 마음이 이제 와 다시 보니 너무도 아프고 가엽고 애통하다... 지금이라도 그 아이가 내 곁에 있다면 말 해 줄 수 있을 것 같아. '어서 와, 환영해! 널 기다렸단다. 앞으로는 우리가 너의 불빛이 되어 줄게.'  한낱 바람에 꺼져 흩어져버릴 불빛이 아닌,  꺼지지 따스함으로 네 안의 불빛을 지켜줄게. ",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/불빛.jpeg",
    image: "/images/불빛책커버.png",
  },
  {
    id: 4,
    sex: "man",
    best: false,
    styleName: "한마디로 채우는 감정의 거리'가끔씩은'",
    nameKr: "가끔씩은",
    nameEn: "그냥 하면 돼",
    price: 24000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "가끔씩은 필요해. 오해하지 않기 위해. 의심하지 않기 위해. 확인하고 싶지 않기 위해. 가끔씩이면 되거든? 불안하지 않기 위해 망상하지 않기 위해 그러니까 부탁할게. 행동이 아니라. 표정이 아니라. 분위기가 아니라. 제발 말로 해. 애정, 관심, 사랑은 당사자가 아닌 이상 말로 들어야 와 닿는 거야. 말로 표현하지도 않고, 행동으로만 다 알아주기를 바라는 건 그냥 니 욕심이야. ",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/sometime.jpeg",
    image: "/images/sometime.png",
  },
  {
    id: 10,
    sex: "man",
    best: false,
    styleName: "한마디로 채우는 감정의 거리'강물'",
    nameKr: "강물",
    nameEn: "혼자, 그리고 강물",
    price: 24000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "간혹 울고 싶을 때가 있었다. 그 누군가의 방해도 받지 않고 조용히 나 혼자 울고 싶을 때. 소리 내어 우는 법을 잊은지 오래 되어서 속 울음으로만 삭혀 내는 법만 알게 되어서 삭히고 삭히다 밖으로 끄집어 내어야 하는데도 어떻게 끄집어 내야 할지를 모를 때. 참아 넘기다가 한계에 다다르면 한강으로 간다. 물이 흐르는 곳으로 간다. 강물이 흘러가는 소리에 마음을 맡기면 나도 모르게 주르륵 흐르는 눈물. 잔잔히 들리는 물 소리에 정신을 집중하고 멍하니 비워져 가는 생각들과 물 흐르는 대로 마음도 흘려 보내다 보니 어떻게 꺼내야하나 걱정 했던 눈물이 저절로 쉬이 흘러 나온다. 강물 소리에 맞춰 흘려 보내다 보면 가득 차 있던 눈물 단지가 다 비워지고 허전한 것도, 개운한 것도 같아... 울고 싶을 때에는 울어야 하나 봐. 단지 울었을 뿐인데 다시 살고 싶어졌다.",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/강물.png",
    image: "/images/강물책커버.png",
  },
  {
    id: 5,
    sex: "man",
    best: false,
    styleName: "남겨진 흔적 속에서 찾는 의미'걷다보면'",
    nameKr: "걷다보면",
    nameEn: "발자국",
    price: 29000,
    subdescriptionKr: "사이드 파트는 클래식하면서도 세련된 분위기를 연출합니다",
    subdescriptionEn: "Side part creates a classic yet sophisticated look",
    descriptionKr:
      "자박, 자박. 뚜벅, 뚜벅. 또각, 또각. 사뿐, 사뿐. 제각기 다른 소리들로 이루어진 공기 속을 지나친다. 스쳐 지나가는 발걸음들이 고요한 공기 속에서 어우러진다. 다들 어딘가로 향하는 것일까 누구에게로 향하는 것일까. 걷다 보면 이어지는 발자국들이 하루의 무게들을 나누어 지고 바닥에 자욱을 남겨 둔다. 각자의 무게와 각자의 생각들을 남겨두고 가는 걸음들은 갈 수록 무거워질까, 가벼워질까. 걷다 보면 알게 되겠지 그 무게가 어떻든 다들 걸어가는 길 끝에 평안이 있기를.",
    descriptionEn:
      "The side part reveals the forehead naturally and emphasizes a clean and elegant impression with a defined parting. It enhances facial features and creates a harmonious look by balancing both sides. This versatile style suits professionals, formal occasions, and casual daily wear. It is easy to maintain and style, making it a popular choice. Using styling products can further define the parting and add volume, maximizing its refined appeal.",
    etc: "/images/walkAlon.jpeg",
    image: "/images/walkAlon.png",
  },
];

export const BookData: Book[] = [
  {
    id: 1,
    category: "시",
    view: 3,
    title: "마음이 지친 날, 선생님에게",
    subTitle: "나에게 묻는다",
    description:
      "이 책은 어떠 어떠한 책이고, 독자들에게 이런 메세지를 주고 싶습니다 ~",
    price: 2,
    subdescription:
      "이 책은 어떠 어떠한 책이고, 독자들에게 이런 메세지를 주고 싶습니다 ~",
    contents: [
      {
        textContents: `
                      <마음이 지친 날, 선생님에게>\n\n 오늘 하루도 정말 수고 많았어요.\n 아이들의 웃음소리에 행복했던 순간도 있었겠지만,\n
                      때로는 지치고 외로움을 느꼈을지도 몰라요.\n\n
                      보육교사로 7년간 근무하고\n
                      2024년 11월 29일 금요일 퇴사한\n
                      제가 선생님들과 이야기하고 싶은 게 있어요.\n\n
                      
                      `,
        imege: "/images/id1-1.png",
      },
      {
        textContents: `잠시 시간을 내어 오늘 하루를 돌아보는 건 어떨까요?\n
        \n
                      “오늘 아침, 어떤 마음으로 하루를 시작했나요?\n설렘, 걱정, 피곤함, 기대감 중 어떤 감정이 가장 컸나요?”\n
                      “교실에서 만난 아이들의 모습에 어떤 마음이 들었나요?\n따뜻함, 벅찬 감동, 때로는 피로감이 느껴지기도 했나요?”\n
                      “오늘 하루 가장 기억에 남는 아이의 말이나 행동은 무엇이었나요?\n그 순간 어떤 감정을 느꼈나요?”\n
                      “점심시간, 짧은 휴식 동안 어떤 생각을 했나요?”\n
                      “혹시 오늘 하루를 돌아보며 후회되는 일은 없었나요?”\n
                      “어떤 아이와 갈등이 있었나요?\n화가 났다, 속상했다, 좌절했다 등 구체적인 감정을 떠올려보고,\n그 감정을 어떻게 다스렸나요?”\n
                      “동료 교사와 학부모와의 관계는 어떠했나요?\n오늘 하루 누군가에게 힘이 되어주었거나,\n누군가에게 힘을 얻었던 경험이 있나요?”\n
                      “퇴근하기 전 텅 빈 교실을 보며 어떠한 생각이 들었나요?\n성취감, 허무함, 피곤함 중 어떤 감정이 가장 컸나요?”\n\n
                      “오늘 하루, 나는 어떤 사람이었을까?”\n
                      “나는 무엇을 원하고, 무엇을 추구하고 있을까?”\n
                      하루를 마무리하며 어떠한지 물어본 적이 있나 생각해 보고\n`,
        imege: "/images/id1-2.png",
      },
      {
        textContents: `나에게 묻기를 바라요.\n\n
                      “아니요?” 그런 적이 없다면 이 순간 마음에 질문해보고,\n
                      자신을 칭찬하고 보듬어주고 위로해주기를 바라요.\n\n
                      온종일 아이들의 비언어적인 소통에도 귀 기울이고\n
                      관찰하느라 고생했을 선생님들\n
                      정작, 나에 대해서는 생각해 볼 수 없었다는 생각에\n
                      다양한 생각이 들 수 있어요. 저 또한 그랬으니까요.\n\n
                      오늘 하루도 수고한 우리 선생님,\n
                      자신에게 잘했다고 토닥이며 위로의 밤이 되기를\n
                      내일은 더 따스하고 빛나는 하루가 되기를\n
                      누구보다도 응원하고 존경해요. 잘 자요.\n`,
        imege: "/images/id1-3.png",
      },
    ], // 한국어 설명
    cover: "/images/id1.png",
  },
  {
    id: 2,
    category: "시",
    view: 3,
    title: "어른이의 감정",
    subTitle: "어린시절 나의 시선",
    description:
      "이 책은 어떠 어떠한 책이고, 독자들에게 이런 메세지를 주고 싶습니다 ~",
    price: 2,
    subdescription:
      "이 책은 어떠 어떠한 책이고, 독자들에게 이런 메세지를 주고 싶습니다 ~",
    contents: [
      {
        textContents: `
                      <어른이의 감정>\n\n
                      학생 시절의 나는 20살이 어른이 되면\n
                      새로운 삶의 시작이 될 거라 기대했고,\n
                      어른이 되고 싶어 화장이나 옷차림으로 흉내 내기도 했다.\n\n
                      화려한 화장을 하고 거리를 누비는 언니,\n
                      지나가는 군복을 입은 아저씨,\n
                      거리에서 나물을 파는 할머니,\n
                      서류가방을 들고 정장을 입고 바쁘게 움직이는 아저씨.\n\n
                      나의 시선에서 그들은 모두 어른이었다.\n\n
                      
                      `,
        imege: "/images/id2-1.png",
      },
      {
        textContents: `그런데 지금의 나는 그들에게 묻고 싶다.\n
                      “어른이의 감정은 어떠한가요?”\n
                      “이 삶을 살아가며 어떠한 고민을 짊어지고 있나요?”\n
                      “오늘 하루는 어땠나요?”\n
                      “혹시, 이런 질문을 할 여유조차 없지는 않았나요?”\n\n
                      어쩌면 우리는 어른의 모습만 흉내 내고\n
                      진짜 어른이 되는 방법을 몰랐을지도 모른다.\n\n
                      하지만 괜찮다.\n
                      오늘도 하루를 살아낸 당신, 정말 고생 많았어요.\n
                      이 말을 꼭 전하고 싶어서, 그래서.\n`,
        imege: "/images/id2-2.png",
      },
    ], // 한국어 설명
    cover: "/images/id2.png",
  },
  {
    id: 3,
    category: "시",
    view: 3,
    title: "제주에서 만난 나의 모습",
    subTitle: "제주, 마음의 섬",
    description:
      "이 책은 어떠 어떠한 책이고, 독자들에게 이런 메세지를 주고 싶습니다 ~",
    price: 2,
    subdescription:
      "이 책은 어떠 어떠한 책이고, 독자들에게 이런 메세지를 주고 싶습니다 ~",
    contents: [
      {
        textContents: `어떠한 마음으로 이곳 제주에 왔나요?\n혹시 떠나기 전, 어떤 기대를 하고 있었나요?\n당신이 느끼고 있는 제주는 어떠한 계절인가요?\n푸른 섬, 따뜻한 햇볕, 시원한 바람, 혹은 고요한 겨울 풍경일까요?\n돌담길을 따라 걸으며 어떠한 생각이 들었나요?\n제주에서 가장 맛있게 먹었던 음식은 무엇인가요?\n지금 당신의 마음은 좋아요, 슬퍼요, 화나요, 평온해요. 어떠한가요? 아니면 설레거나, 혹은 따뜻한 마음일지도 모를 것입니다.\n\n이 외에 당신의 마음을 표현해볼래요?\n`,
        imege: "/images/id3-1.png",
      },
      {
        textContents: `글, 그림, 사진 어떠한 방식이든 좋습니다.\n\n저는 사소하더라도 자신에게 물음표를 던지고 앞으로 모든 정답을 본인 속에서 찾아내기를 바랍니다. 정답을 찾는 중 흔들리기도 하고 여러 상황에 놓일 수 있지만, 햇빛만 있다면 어디서든 피어나는 민들레처럼 나만의 정답이라는 햇빛을 통해 이 삶을 피워내기를 바랍니다.\n\n마지막으로, 이 책을 통해 제주에서의 기억을 되새기고 앞으로의 삶에 대한 영감을 얻기를 바라며, 지금의 감정과 제주가 그리울 때 다시 이 책을 꺼내보기로 해요.`,
        imege: "/images/id3-2.png",
      },
    ], // 한국어 설명
    cover: "/images/id3.png",
  },
];
