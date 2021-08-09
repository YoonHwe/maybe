/*
음정표:
  0옥타브 도 = 1
  0옥타브 레 = 2
  0옥타브 미 = 3
  0옥타브 파 = 4
  0옥타브 솔 = 5
  0옥타브 라 = 6
  0옥타브 시 = 7
  1옥타브 도 = 8
  1옥타브 레 = 9
  1옥타브 미 = 10
  1옥타브 파 = 11
  1옥타브 솔 = 12
  1옥타브 라 = 13
  1옥타브 시 = 14
  2옥타브 도 = 15
  2옥타브 레 = 16
  2옥타브 미 = 17
  2옥타브 파 = 18
  2옥타브 솔 = 19
  2옥타브 라 = 20
  2옥타브 시 = 21
  3옥타브 도 = 22
  3옥타브 레 = 23
  3옥타브 미 = 24
  3옥타브 파 = 25
  3옥타브 솔 = 26
  3옥타브 라 = 27
  3옥타브 시 = 28
*/

const btn = document.getElementById('btn-change-text');
const special = document.getElementById('special');
const normal = document.getElementById('normal');
const myMin = document.querySelector("#my_min");
const myMax = document.querySelector("#my_max");
const chosenSong = document.querySelector("#chosen_song");
const wantSong = document.querySelector(".want_song")
const resultBoolean = document.querySelector(".result_boolean");
const resultDetail = document.querySelector(".result_detail");
const totalSongList = [
  {
    name: "Marry Me",
    singer: "마크튭&구윤회",
    min: "5",
    max: "15",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=Marry+me",
    image_name: "marryme",
    genre: "ballad",
  },
  {
    name: "NEXT LEVEL",
    singer: "aespa",
    min: "7",
    max: "25",
    min_name: "0옥타브 시",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=NEXT+LEVEL",
    image_name: "nextlevel",
    genre: "dance",
  },
  {
    name: "One Love",
    singer: "MC THE MAX",
    min: "6",
    max: "24",
    min_name: "0옥타브 라",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=One+Love",
    image_name: "onelove",
    genre: "ballad",
  },
  {
    name: "Timeless",
    singer: "SG워너비",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=Timeless",
    image_name: "timeless",
    genre: "ballad",
  },
  {
    name: "그 날에 나는 맘이 편했을까",
    singer: "이예준",
    min: "6",
    max: "16",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=%EA%B7%B8%EB%82%A0%EC%97%90+%EB%82%98%EB%8A%94+%EB%A7%98%EC%9D%B4+%ED%8E%B8%ED%96%88%EC%9D%84%EA%B9%8C",
    image_name: "그날에나는맘이편했을까",
    genre: "ballad",
  },
  {
    name: "그녀를 사랑해줘요",
    singer: "하동균",
    min: "5",
    max: "15",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=그녀를+사랑해줘요",
    image_name: "그녀를사랑해줘요",
    genre: "ballad",
  },
  {
    name: "그대라는 사치",
    singer: "한동근",
    min: "3",
    max: "22",
    min_name: "0옥타브 미",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=그대라는+사치",
    image_name: "그대라는사치",
    genre: "ballad",
  },
  {
    name: "그대를 사랑하는 10가지 이유",
    singer: "이석훈",
    min: "1",
    max: "19",
    min_name: "0옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=그대를+사랑하는+10가지+이유",
    image_name: "그대를사랑하는10가지이유",
    genre: "ballad",
  },
  {
    name: "기다릴게",
    singer: "하동균 & 이정",
    min: "7",
    max: "23",
    min_name: "0옥타브 시",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=기다릴게",
    image_name: "기다릴게",
    genre: "ballad",
  },
  {
    name: "까만안경",
    singer: "이루",
    min: "3",
    max: "16",
    min_name: "0옥타브 미",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=까만안경",
    image_name: "까만안경",
    genre: "ballad",
  },
  {
    name: "꿈속에 너",
    singer: "에이치코드(feat.전상근)",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=꿈속에+너",
    image_name: "꿈속에너",
    genre: "ballad",
  },
  {
    name: "나를 사랑했던 사람아",
    singer: "허각",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=나를+사랑했던+사람아",
    image_name: "나를사랑했던사람아",
    genre: "ballad",
  },
  {
    name: "내 사람",
    singer: "SG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=내+사람",
    image_name: "내사람",
    genre: "R&B",
  },
  {
    name: "내 손을 잡아(최고의 사랑 OST)",
    singer: "IU",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=내+손을+잡아(최고의+사랑+OST)",
    image_name: "내손을잡아",
    genre: "ballad",
  },
  {
    name: "너를 만나",
    singer: "폴킴",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너를+만나",
    image_name: "너를만나",
    genre: "ballad",
  },
  {
    name: "너였다면(또 오해영 OST)",
    singer: "정승환",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너였다면(또+오해영+OST)",
    image_name: "너였다면",
    genre: "ballad",
  },
  {
    name: "너의 모든 순간(별에서 온 그대 OST)",
    singer: "성시경",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너의+모든+순간(별에서+온+그대+OST)",
    image_name: "너의모든순간",
    genre: "ballad",
  },
  {
    name: "너의 번호를 누르고",
    singer: "#안녕(prod.영화처럼)",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=너의+번호를+누르고",
    image_name: "너의 번호를 누르고",
    genre: "ballad",
  },
  {
    name: "노래방에서",
    singer: "장범준",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=노래방에서",
    image_name: "노래방에서",
    genre: "rock",
  },
  {
    name: "다시 만날까봐",
    singer: "V.O.S",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=다시+만날까봐",
    image_name: "다시만날까봐",
    genre: "ballad",
  },
  {
    name: "라라라",
    singer: "SG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=라라라",
    image_name: "라라라",
    genre: "ballad",
  },
  {
    name: "롤린(Rollin')",
    singer: "브레이브걸스",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=롤린(Rollin')",
    image_name: "롤린",
    genre: "dance",
  },
  {
    name: "모든 날, 모든 순간",
    singer: "폴킴",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=모든+날,+모든+순간",
    image_name: "모든날모든순간",
    genre: "ballad",
  },
  {
    name: "밝게 빛나는 별이 되어 비춰줄게",
    singer: "송이한",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=밝게+빛나는+별이+되어+비춰줄게",
    image_name: "밝게빛나는별이되어비춰줄게",
    genre: "R%B",
  },
  {
    name: "벌써 일년",
    singer: "브라운 아이즈",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=벌써+일년",
    image_name: "벌써일년",
    genre: "ballad",
  },
  {
    name: "사계",
    singer: "태연",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=사계",
    image_name: "사계",
    genre: "ballad",
  },
  {
    name: "사랑이 식었다고 말해도 돼",
    singer: "먼데이키즈",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=사랑이+식었다고+말해도+돼",
    image_name: "사랑이식었다고말해도돼",
    genre: "ballad",
  },
  {
    name: "삭제",
    singer: "이승기",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=삭제",
    image_name: "삭제",
    genre: "ballad",
  },
  {
    name: "살다가",
    singer: "SG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=살다가",
    image_name: "살다가",
    genre: "ballad",
  },
  {
    name: "상상더하기",
    singer: "MSG워너비",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=상상더하기",
    image_name: "상상더하기",
    genre: "dance",
  },
  {
    name: "소주 한 잔",
    singer: "임창정",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=소주+한+잔",
    image_name: "소주한잔",
    genre: "ballad",
  },
  {
    name: "스토커",
    singer: "10cm",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=스토커",
    image_name: "스토커",
    genre: "indi",
  },
  {
    name: "신호등",
    singer: "이무진",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=신호등",
    image_name: "신호등",
    genre: "rock",
  },
  {
    name: "아로하(슬기로운 의사생활 OST)",
    singer: "조정석",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=아로하(슬기로운+의사생활+OST)",
    image_name: "아로하",
    genre: "ballad",
  },
  {
    name: "안아줘",
    singer: "정준일",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=안아줘",
    image_name: "안아줘",
    genre: "ballad",
  },
  {
    name: "야생화",
    singer: "박효신",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=야생화",
    image_name: "야생화",
    genre: "ballad",
  },
  {
    name: "어디에도",
    singer: "MC THE MAX",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=어디에도",
    image_name: "어디에도",
    genre: "ballad",
  },
  {
    name: "오래된 노래",
    singer: "스탠딩에그",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=오래된+노래",
    image_name: "오래된노래",
    genre: "indi",
  },
  {
    name: "우리 왜 헤어져야 해",
    singer: "신예영",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=우리+왜+헤어져야+해",
    image_name: "우리왜헤어져야해",
    genre: "ballad",
  },
  {
    name: "응급실(쾌걸춘향 OST)",
    singer: "izi",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=응급실(쾌걸춘향+OST)",
    image_name: "응급실",
    genre: "ballad",
  },
  {
    name: "이미 슬픈 사랑",
    singer: "야다",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=이미+슬픈+사랑",
    image_name: "이미슬픈사랑",
    genre: "rock",
  },
  {
    name: "조금 취했어",
    singer: "임재현",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=조금+취했어",
    image_name: "조금취했어",
    genre: "ballad",
  },
  {
    name: "좋니",
    singer: "윤종신",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=좋니",
    image_name: "좋니",
    genre: "ballad",
  },
  {
    name: "지나오다",
    singer: "닐로",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=지나오다",
    image_name: "지나오다",
    genre: "ballad",
  },
  {
    name: "첫눈처럼 너에게 가겠다",
    singer: "에일리",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=첫눈처럼+너에게+가겠다",
    image_name: "첫눈처럼너에게가겠다",
    genre: "ballad",
  },
  {
    name: "체념",
    singer: "빅마마",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=체념",
    image_name: "체념",
    genre: "ballad",
  },
  {
    name: "추억은 만남보다 이별에 남아",
    singer: "정동하",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=추억은+만남보다+이별에+남아",
    image_name: "추억은만남보다이별에남아",
    genre: "ballad",
  },
  {
    name: "축가",
    singer: "전우성",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=축가",
    image_name: "축가",
    genre: "ballad",
  },
  {
    name: "포장마차",
    singer: "황인욱",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=포장마자",
    image_name: "포장마차",
    genre: "ballad",
  },
  {
    name: "형",
    singer: "노라조",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=형",
    image_name: "형",
    genre: "rock",
  },
  {
    name: "홍연",
    singer: "안예은",
    min: "3",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=홍연",
    image_name: "홍연",
    genre: "ballad",
  },
  {
    name: "초혼",
    singer: "장윤정",
    min: "20",
    max: "28",
    min_name: "2옥타브 라",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=초혼",
    image_name: "초혼",
    genre: "trot",
  },
  {
    name: "사랑아",
    singer: "장윤정",
    min: "13",
    max: "25",
    min_name: "1옥타브 라",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=장윤정+사랑아",
    image_name: "사랑아",
    genre: "trot",
  },
  {
    name: "안동역에서",
    singer: "진성",
    min: "10",
    max: "20",
    min_name: "1옥타브 미",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=안동역에서",
    image_name: "안동역에서",
    genre: "trot",
  },
  {
    name: "꽃",
    singer: "장윤정",
    min: "15",
    max: "24",
    min_name: "2옥타브 도",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=장윤정+꽃",
    image_name: "꽃",
    genre: "trot",
  },
  {
    name: "보릿고개",
    singer: "진성",
    min: "10",
    max: "20",
    min_name: "1옥타브 미",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=진성+보릿고개",
    image_name: "보릿고개",
    genre: "trot",
  },
  {
    name: "당신이 좋아",
    singer: "장윤정",
    min: "6",
    max: "19",
    min_name: "0옥타브 라",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=당신이+좋아",
    image_name: "당신이 좋아",
    genre: "trot",
  },
  {
    name: "내 사랑",
    singer: "홍진영",
    min: "15",
    max: "23",
    min_name: "2옥타브 도",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=홍진영+내+사랑",
    image_name: "내 사랑",
    genre: "trot",
  },
  {
    name: "어머나",
    singer: "장윤정",
    min: "16",
    max: "22",
    min_name: "2옥타브 레",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=어머나",
    image_name: "어머나",
    genre: "trot",
  },
  {
    name: "시계바늘",
    singer: "신유",
    min: "8",
    max: "19",
    min_name: "1옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=신유+시계바늘",
    image_name: "시계바늘",
    genre: "trot",
  },
  {
    name: "천태만상",
    singer: "윤수현",
    min: "13",
    max: "21",
    min_name: "1옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=천태만상",
    image_name: "천태만상",
    genre: "trot",
  },
  {
    name: "미운 사랑",
    singer: "전미령",
    min: "16",
    max: "28",
    min_name: "2옥타브 레",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=전미령+미운+사랑",
    image_name: "미운 사랑",
    genre: "trot",
  },
  {
    name: "둥지",
    singer: "남진",
    min: "8",
    max: "18",
    min_name: "1옥타브 도",
    max_name: "2옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=남진+둥지",
    image_name: "둥지",
    genre: "trot",
  },
  {
    name: "내 나이가 어때서",
    singer: "오승근",
    min: "6",
    max: "19",
    min_name: "0옥타브 라",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=내+나이가+어때서",
    image_name: "내 나이가 어때서",
    genre: "trot",
  },
  {
    name: "오라버니",
    singer: "금잔디",
    min: "19",
    max: "29",
    min_name: "2옥타브 솔",
    max_name: "4옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=오라버니",
    image_name: "오라버니",
    genre: "trot",
  },
  {
    name: "짠짜라",
    singer: "장윤정",
    min: "13",
    max: "23",
    min_name: "1옥타브 라",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=짠짜라",
    image_name: "짠짜라",
    genre: "trot",
  },
  {
    name: "이 소설의 끝을 다시 써보려 해",
    singer: "한동근",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=이+소설의+끝을+다시+써보려+해",
    image_name: "이 소설의 끝을 다시 써보려 해",
    genre: "ballad",
  },
  {
    name: "바람이 불었으면 좋겠어",
    singer: "길구봉구",
    min: "11",
    max: "22",
    min_name: "1옥타브 파",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=바람이+불었으면+좋겠어",
    image_name: "바람이 불었으면 좋겠어",
    genre: "ballad",
  },
  {
    name: "봄 사랑 벚꽃 말고",
    singer: "HIGH4(하이포),아이유",
    min: "7",
    max: "23",
    min_name: "0옥타브 시",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=봄+사랑+벚꽃+말고",
    image_name: "봄 사랑 벚꽃 말고",
    genre: "ballad",
  },
  {
    name: "금요일에 만나요(Feat.장이정 Of HISTORY)",
    singer: "아이유",
    min: "14",
    max: "26",
    min_name: "1옥타브 시",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=금요일에+만나요",
    image_name: "금요일에 만나요",
    genre: "ballad",
  },
  {
    name: "또 다시 사랑",
    singer: "임창정",
    min: "8",
    max: "21",
    min_name: "1옥타브 도",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=또+다시+사랑",
    image_name: "또 다시 사랑",
    genre: "ballad",
  },
  {
    name: "걱정말아요 그대",
    singer: "이적",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=이적+걱정말아요+그대",
    image_name: "걱정말아요 그대",
    genre: "ballad",
  },
  {
    name: "우연히 봄",
    singer: "로꼬,유주(여자친구)",
    min: "14",
    max: "24",
    min_name: "1옥타브 시",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=우연히+봄",
    image_name: "우연히 봄",
    genre: "ballad",
  },
  {
    name: "너의 의미",
    singer: "아이유",
    min: "13",
    max: "22",
    min_name: "1옥타브 라",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=아이유+너의+의미",
    image_name: "너의 의미",
    genre: "ballad",
  },
  {
    name: "너의 모든 순간(Original)",
    singer: "성시경",
    min: "4",
    max: "21",
    min_name: "0옥타브 파",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=성시경+너의+모든+순간",
    image_name: "너의 모든 순간",
    genre: "ballad",
  },
  {
    name: "내 손을 잡아",
    singer: "아이유",
    min: "11",
    max: "24",
    min_name: "1옥타브 파",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=내+손을+잡아",
    image_name: "내 손을 잡아",
    genre: "ballad",
  },
  {
    name: "미리 메리 크리스마스(Feat.천둥 Of MBLAQ)",
    singer: "아이유",
    min: "5",
    max: "15",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=미리+메리+크리스마스",
    image_name: "미리 메리 크리스마스",
    genre: "dance",
  },
  {
    name: "미리 메리 크리스마스(Feat.천둥 Of MBLAQ)",
    singer: "아이유",
    min: "11",
    max: "24",
    min_name: "1옥타브 파",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=미리+메리+크리스마스",
    image_name: "미리 메리 크리스마스",
    genre: "dance",
  },
  {
    name: "스물셋",
    singer: "아이유",
    min: "12",
    max: "24",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=아이유+스물셋",
    image_name: "스물셋",
    genre: "dance",
  },
  {
    name: "오늘부터 우리는",
    singer: "여자친구",
    min: "12",
    max: "26",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=아이유+스물셋",
    image_name: "오늘부터 우리는",
    genre: "dance",
  },
  {
    name: "좋은 날",
    singer: "아이유",
    min: "14",
    max: "26",
    min_name: "1옥타브 시",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=아이유+좋은+날",
    image_name: "좋은 날",
    genre: "dance",
  },
  {
    name: "ooh-ahh하게",
    singer: "트와이스",
    min: "11",
    max: "23",
    min_name: "1옥타브 파",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=트와이스+우아하게",
    image_name: "ooh-ahh하게",
    genre: "dance",
  },
  {
    name: "너랑 나",
    singer: "아이유",
    min: "11",
    max: "25",
    min_name: "1옥타브 파",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=아이유+너랑+나",
    image_name: "너랑 나",
    genre: "dance",
  },
  {
    name: "비행기",
    singer: "거북이",
    min: "5",
    max: "27",
    min_name: "0옥타브 솔",
    max_name: "3옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=거북이+비행기",
    image_name: "비행기",
    genre: "dance",
  },
  {
    name: "shake it",
    singer: "씨스타",
    min: "13",
    max: "26",
    min_name: "1옥타브 라",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=씨스타+shake it",
    image_name: "shake it",
    genre: "dance",
  },
  {
    name: "거짓말",
    singer: "빅뱅",
    min: "5",
    max: "16",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=빅뱅+거짓말",
    image_name: "거짓말",
    genre: "dance",
  },
  {
    name: "하루 끝",
    singer: "아이유",
    min: "12",
    max: "25",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=아이유+하루+끝",
    image_name: "하루 끝",
    genre: "dance",
  },
  {
    name: "어땠을까",
    singer: "싸이,박정현",
    min: "14",
    max: "22",
    min_name: "1옥타브 시",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=싸이+어땠을까",
    image_name: "어땠을까",
    genre: "rap",
  },
  {
    name: "헤어지지 못하는 여자, 떠나가지 못하는 남자",
    singer: "리쌍,정인",
    min: "11",
    max: "28",
    min_name: "1옥타브 파",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=헤어지지 못하는 여자, 떠나가지 못하는 남자",
    image_name: "헤어지지 못하는 여자, 떠나가지 못하는 남자",
    genre: "rap",
  },
  {
    name: "한여름밤의 꿀",
    singer: "San E,레이나",
    min: "13",
    max: "23",
    min_name: "1옥타브 라",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=산이+한여름밤의 꿀",
    image_name: "한여름밤의 꿀",
    genre: "rap",
  },
  {
    name: "y",
    singer: "프리스타일",
    min: "17",
    max: "25",
    min_name: "2옥타브 미",
    max_name: "3옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=프리스타일+y",
    image_name: "y",
    genre: "rap",
  },
  {
    name: "자니",
    singer: "프라이머리",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=프라이머리+자니",
    image_name: "자니",
    genre: "rap",
  },
  {
    name: "죽일놈",
    singer: "다이나믹 듀오",
    min: "6",
    max: "14",
    min_name: "0옥타브 라",
    max_name: "1옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=다이나믹+듀오+죽일놈",
    image_name: "죽일놈",
    genre: "rap",
  },
  {
    name: "너에게 쓰는 편지",
    singer: "MC몽,린",
    min: "14",
    max: "23",
    min_name: "1옥타브 시",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=MC몽+너에게+쓰는+편지",
    image_name: "너에게 쓰는 편지",
    genre: "rap",
  },
  {
    name: "the time goes on",
    singer: "BewhY",
    min: "8",
    max: "11",
    min_name: "1옥타브 도",
    max_name: "1옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=비와이+the+time+goes+on",
    image_name: "the time goes on",
    genre: "rap",
  },
  {
    name: "그땐 그땐 그땐",
    singer: "영준,Supreme Team",
    min: "14",
    max: "19",
    min_name: "1옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=슈프림팀+그땐+그땐+그땐",
    image_name: "그땐 그땐 그땐",
    genre: "rap",
  },
  {
    name: "marry me",
    singer: "마크튭,구윤회",
    min: "7",
    max: "19",
    min_name: "0옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=마크튭+marry+me",
    image_name: "marry me",
    genre: "R&B",
  },
  {
    name: "바람기억",
    singer: "나얼",
    min: "3",
    max: "23",
    min_name: "0옥타브 미",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=나얼+바람기억",
    image_name: "바람기억",
    genre: "R&B",
  },
  {
    name: "벌써일년",
    singer: "브라운 아이즈",
    min: "11",
    max: "22",
    min_name: "1옥타브 파",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=브라운+아이즈+벌써일년",
    image_name: "벌써일년",
    genre: "R&B",
  },
  {
    name: "내사람",
    singer: "SG워너비",
    min: "6",
    max: "21",
    min_name: "0옥타브 라",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=SG워너비+내사람",
    image_name: "내사람",
    genre: "R&B",
  },
  {
    name: "친구라도 될 걸 그랬어",
    singer: "거미",
    min: "17",
    max: "28",
    min_name: "2옥타브 미",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=거미+친구라도 될 걸 그랬어",
    image_name: "친구라도 될 걸 그랬어",
    genre: "R&B",
  },
  {
    name: "oasis",
    singer: "Crush",
    min: "9",
    max: "20",
    min_name: "1옥타브 레",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=크러쉬+oasis",
    image_name: "oasis",
    genre: "R&B",
  },
  {
    name: "사랑했잖아",
    singer: "린",
    min: "18",
    max: "28",
    min_name: "2옥타브 파",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=린+사랑했잖아",
    image_name: "사랑했잖아",
    genre: "R&B",
  },
  {
    name: "가끔",
    singer: "Crush",
    min: "9",
    max: "21",
    min_name: "1옥타브 레",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=크러쉬+가끔",
    image_name: "가끔",
    genre: "R&B",
  },
  {
    name: "같은 시간 속의 너",
    singer: "나얼",
    min: "5",
    max: "23",
    min_name: "0옥타브 솔",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=나얼+같은+시간+속의+너",
    image_name: "같은 시간 속의 너",
    genre: "R&B",
  },
  {
    name: "우주를 건너",
    singer: "백예린",
    min: "12",
    max: "24",
    min_name: "1옥타브 솔",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=백예린+우주를+건너",
    image_name: "우주를 건너",
    genre: "R&B",
  },
  {
    name: "벚꽃엔딩",
    singer: "버스커 버스커",
    min: "8",
    max: "20",
    min_name: "1옥타브 도",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=벚꽃엔딩",
    image_name: "벚꽃엔딩",
    genre: "rock",
  },
  {
    name: "기억을 걷는 시간",
    singer: "넬",
    min: "11",
    max: "22",
    min_name: "1옥타브 파",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=기억을+걷는+시간",
    image_name: "기억을 걷는 시간",
    genre: "rock",
  },
  {
    name: "남자를 몰라",
    singer: "버즈",
    min: "12",
    max: "20",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=버즈+남자를+몰라",
    image_name: "남자를 몰라",
    genre: "rock",
  },
  {
    name: "응급실",
    singer: "izi",
    min: "7",
    max: "21",
    min_name: "0옥타브 시",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=izi+응급실",
    image_name: "응급실",
    genre: "rock",
  },
  {
    name: "여수 밤바다",
    singer: "버스커 버스커",
    min: "8",
    max: "18",
    min_name: "1옥타브 도",
    max_name: "2옥타브 파",
    youtube: "https://www.youtube.com/results?search_query=버스커버스커+여수+밤바다",
    image_name: "여수 밤바다",
    genre: "rock",
  },
  {
    name: "사랑했나봐",
    singer: "윤도현",
    min: "8",
    max: "20",
    min_name: "1옥타브 도",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=윤도현+사랑했나봐",
    image_name: "사랑했나봐",
    genre: "rock",
  },
  {
    name: "겁쟁이",
    singer: "버즈",
    min: "12",
    max: "20",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=버즈+겁쟁이",
    image_name: "겁쟁이",
    genre: "rock",
  },
  {
    name: "나에게로 떠나는 여행",
    singer: "버즈",
    min: "12",
    max: "20",
    min_name: "1옥타브 솔",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=버즈+나에게로 떠나는 여행",
    image_name: "나에게로 떠나는 여행",
    genre: "rock",
  },
  {
    name: "꽃송이가",
    singer: "버스커버스커",
    min: "11",
    max: "19",
    min_name: "1옥타브 파",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=꽃송이가",
    image_name: "꽃송이가",
    genre: "rock",
  },
  {
    name: "never ending story",
    singer: "부활",
    min: "9",
    max: "21",
    min_name: "1옥타브 레",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=부활+never ending story",
    image_name: "never ending story",
    genre: "rock",
  },
  {
    name: "오래된 노래",
    singer: "스탠딩 에그",
    min: "8",
    max: "21",
    min_name: "1옥타브 도",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=스탠딩+에그+오래된+노래",
    image_name: "오래된 노래",
    genre: "indi",
  },
  {
    name: "안아줘",
    singer: "정준일",
    min: "5",
    max: "19",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=정준일+안아줘",
    image_name: "안아줘",
    genre: "indi",
  },
  {
    name: "스토커",
    singer: "10cm",
    min: "8",
    max: "19",
    min_name: "0옥타브 도",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=10cm+스토커",
    image_name: "스토커",
    genre: "indi",
  },
  {
    name: "겨울을 걷는다",
    singer: "윤딴딴",
    min: "7",
    max: "19",
    min_name: "0옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=윤딴딴+겨울을+걷는다",
    image_name: "겨울을 걷는다",
    genre: "indi",
  },
  {
    name: "madeleine love",
    singer: "CHEEZE",
    min: "14",
    max: "26",
    min_name: "1옥타브 시",
    max_name: "3옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=cheeze+madeleine+love",
    image_name: "madeleine love",
    genre: "indi",
  },
  {
    name: "위잉위잉",
    singer: "혁오",
    min: "8",
    max: "20",
    min_name: "1옥타브 도",
    max_name: "2옥타브 라",
    youtube: "https://www.youtube.com/results?search_query=혁오+위잉위잉",
    image_name: "위잉위잉",
    genre: "indi",
  },
  {
    name: "널 생각해",
    singer: "원 모어 찬스",
    min: "9",
    max: "21",
    min_name: "1옥타브 레",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=원+모어+찬스+널+생각해",
    image_name: "널 생각해",
    genre: "indi",
  },
  {
    name: "고백",
    singer: "정준일",
    min: "5",
    max: "19",
    min_name: "0옥타브 솔",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=정준일+고백",
    image_name: "고백",
    genre: "indi",
  },
  {
    name: "사랑은 은하수 다방에서",
    singer: "10cm",
    min: "11",
    max: "19",
    min_name: "1옥타브 파",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=사랑은+은하수+다방에서",
    image_name: "사랑은 은하수 다방에서",
    genre: "indi",
  },
  {
    name: "little star",
    singer: "스탠딩 에그",
    min: "8",
    max: "21",
    min_name: "1옥타브 도",
    max_name: "2옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=스탠딩+에그+little+star",
    image_name: "little star",
    genre: "indi",
  },
  {
    name: "오빠야",
    singer: "신현희와 김루트",
    min: "14",
    max: "28",
    min_name: "1옥타브 시",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=신현희와+김루트+오빠야",
    image_name: "오빠야",
    genre: "fork",
  },
  {
    name: "마음",
    singer: "아이유",
    min: "14",
    max: "28",
    min_name: "1옥타브 시",
    max_name: "3옥타브 시",
    youtube: "https://www.youtube.com/results?search_query=아이유+마음",
    image_name: "마음",
    genre: "fork",
  },
  {
    name: "200%",
    singer: "악동뮤지션",
    min: "13",
    max: "24",
    min_name: "1옥타브 라",
    max_name: "3옥타브 미",
    youtube: "https://www.youtube.com/results?search_query=악동뮤지션+200%",
    image_name: "200%",
    genre: "fork",
  },
  {
    name: "청춘",
    singer: "김필",
    min: "8",
    max: "16",
    min_name: "1옥타브 도",
    max_name: "2옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=김필+청춘",
    image_name: "청춘",
    genre: "fork",
  },
  {
    name: "give love",
    singer: "악동뮤지션",
    min: "8",
    max: "23",
    min_name: "1옥타브 도",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=악동뮤지션+give+love",
    image_name: "give love",
    genre: "fork",
  },
  {
    name: "그대와 나 설레임",
    singer: "어쿠스틱 콜라보",
    min: "11",
    max: "23",
    min_name: "1옥타브 파",
    max_name: "3옥타브 레",
    youtube: "https://www.youtube.com/results?search_query=어쿠스틱+콜라보+그대와+나+설레임",
    image_name: "그대와 나 설레임",
    genre: "fork",
  },
  {
    name: "너 사용법",
    singer: "에디킴",
    min: "6",
    max: "22",
    min_name: "0옥타브 라",
    max_name: "3옥타브 도",
    youtube: "https://www.youtube.com/results?search_query=에디킴+너+사용법",
    image_name: "너 사용법",
    genre: "fork",
  },
  {
    name: "애상",
    singer: "10cm",
    min: "7",
    max: "19",
    min_name: "0옥타브 시",
    max_name: "2옥타브 솔",
    youtube: "https://www.youtube.com/results?search_query=10cm+애상",
    image_name: "애상",
    genre: "fork",
  },
]

btn.addEventListener("click", service2);
function service2(){
  // special.innerHTML = "나의 최저음정: " + myMin.value +" / 나의 최고 음정: " + myMax.value;
  const myMinCompare = parseInt(myMin.value);
  const myMaxCompare = parseInt(myMax.value);
  for (let index = 0; index < totalSongList.length; index++) {
    const element = totalSongList[index];
    if(element.name === chosenSong.value){//이름 일치하면
      //노래의 음정 출력(숫자로)
      normal.innerHTML = `노래의 최저음정: ${element.min_name} / 노래의 최고 음정: ${element.max_name}`;
      //당신이 선택한 노래는 (가수)의 (제목)입니다.
      wantSong.innerText = `당신이 부르고 싶은 노래는 ${element.singer}의 ${element.name}입니다.`;
      //부를수 있는지 없는지 판정
      element.min = parseInt(element.min);
      element.max = parseInt(element.max);
      if(myMinCompare <= element.min && myMaxCompare >= element.max){
        resultBoolean.innerText = "당신은 이 노래를 충분히 소화할 수 있습니다!";
        resultDetail.innerText = resultDetail.innerText = "당신의 실력을 보여주세요.";
      }
      else{
        resultBoolean.innerText = "아쉽게도 당신은 이 노래를 소화하기 어렵습니다.";
        if(myMinCompare > element.min){
          resultDetail.innerText = `이 노래를 소화하기 위해서는 ${(myMinCompare - element.min)}음정 더 낮게 부를 수 있어야 합니다.`;
        }
        if(myMaxCompare < element.max){
          resultDetail.innerText = `이 노래를 소화하기 위해서는 ${(element.max - myMaxCompare)}음정 더 높게 부를 수 있어야 합니다.`;
        }
        if(myMinCompare > element.min && myMaxCompare < element.max){
          resultDetail.innerText = `이 노래를 소화하기 위해서는 ${(myMinCompare - element.min)}음정 더 낮게, ${(element.max - myMaxCompare)}음정 더 높게 부를 수 있어야 합니다.`;
        }
      }
    }
  }
};

function MovetoResult(seq){
  var offset = $("." + seq).offset();
  $('html, body').animate({scrollTop : offset.top - 150}, 100);
}