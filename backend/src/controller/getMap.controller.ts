import { Controller, Inject,Post } from "@midwayjs/core";
import { MapService } from "../service/map.service";
import { Context } from '@midwayjs/koa';
import axios from 'axios';

@Controller('/getMap')
export class MapController {
    @Inject()
    mapService: MapService;
    @Inject()
    ctx: Context;
    @Post('/getInfo')
    async getMap() {
        const userData = this.ctx.request.body;
        const { name } = userData as {
            name: string
        };

        try {
            const data = JSON.parse(mapInfo);
            const response = axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${data[name].id}_full.json`);
            return (await response).data;
        } catch (error) {
            return { success: false, message: "失败" };
        }
    }
}

    const mapInfo = `
{
  "中华人民共和国": {
    "id": 100000,
    "data": [
      {"name": "西藏自治区", "value": 2392.67},
      {"name": "青海省", "value": 3799.1},
      {"name": "宁夏回族自治区", "value": 5314.95},
      {"name": "海南省", "value": 7551.18},
      {"name": "甘肃省", "value": 11863.8},
      {"name": "吉林省", "value": 13531.19},
      {"name": "黑龙江省", "value": 15883.9},
      {"name": "天津市", "value": 16737.3},
      {"name": "新疆维吾尔自治区", "value": 19125.91},
      {"name": "贵州省", "value": 20913.25},
      {"name": "内蒙古自治区", "value": 24627},
      {"name": "山西省", "value": 25698.18},
      {"name": "广西壮族自治区", "value": 27202.39},
      {"name": "云南省", "value": 30021},
      {"name": "重庆市", "value": 30145.79},
      {"name": "辽宁省", "value": 30209.4},
      {"name": "江西省", "value": 32200.1},
      {"name": "陕西省", "value": 33786.07},
      {"name": "北京市", "value": 43760.7},
      {"name": "河北省", "value": 43944.1},
      {"name": "安徽省", "value": 47050.6},
      {"name": "上海市", "value": 47218.66},
      {"name": "湖南省", "value": 50012.85},
      {"name": "福建省", "value": 54355.1},
      {"name": "湖北省", "value": 55803.63},
      {"name": "河南省", "value": 59132.39},
      {"name": "四川省", "value": 60132.9},
      {"name": "浙江省", "value": 82553},
      {"name": "山东省", "value": 92069},
      {"name": "江苏省", "value": 128222.2},
      {"name": "广东省", "value": 135673.16}
    ]
  },
  "广西壮族自治区": {
    "id": 450000,
    "data": [
      {"name": "南宁市", "value": 5469.06},
      {"name": "柳州市", "value": 3115.86},
      {"name": "桂林市", "value": 2435.8},
      {"name": "梧州市", "value": 1200},
      {"name": "北海市", "value": 2000},
      {"name": "防城港市", "value": 2089.2},
      {"name": "钦州市", "value": 1500},
      {"name": "贵港市", "value": 1500},
      {"name": "百色市", "value": 1500},
      {"name": "贺州市", "value": 1100},
      {"name": "河池市", "value": 1100},
      {"name": "来宾市", "value": 1100},
      {"name": "崇左市", "value": 1100}
    ],
    "marks":[
      {
        "name":"百色市百坭村",
        "coord":[106.639424,24.715812]
      }
    ]
  },
  "云南省": {
    "id": 530000,
    "data": [
      {"name": "昆明市", "value": 7600},
      {"name": "曲靖市", "value": 4000},
      {"name": "红河哈尼族彝族自治州", "value": 2800},
      {"name": "玉溪市", "value": 2500},
      {"name": "楚雄彝族自治州", "value": 1400},
      {"name": "大理白族自治州", "value": 1300},
      {"name": "昭通市", "value": 1000},
      {"name": "文山壮族苗族自治州", "value": 700},
      {"name": "保山市", "value": 700},
      {"name": "普洱市", "value": 700},
      {"name": "临沧市", "value": 700},
      {"name": "西双版纳傣族自治州", "value": 1000},
      {"name": "丽江市", "value": 400},
      {"name": "德宏傣族景颇族自治州", "value": 400},
      {"name": "迪庆藏族自治州", "value": 400},
      {"name": "怒江傈僳族自治州", "value": 400}
    ],
    "marks": [
      {
        "name": "怒江傈僳族自治州",
        "coord": [98.915134, 26.538342]
      },
      {
        "name": "昆明市马鹿塘乡",
        "coord": [102.559751,26.144885]
      }
    ]
  },
    "四川省": {
      "id": 510000,
      "data": [
        {"name": "成都市", "value": 20540},
        {"name": "绵阳市", "value": 4038},
        {"name": "宜宾市", "value": 3806},
        {"name": "德阳市", "value": 2805.9},
        {"name": "泸州市", "value": 2540.2},
        {"name": "南充市", "value": 2520.5},
        {"name": "凉山彝族自治州", "value": 2251.3},
        {"name": "达州市", "value": 2233.1},
        {"name": "乐山市", "value": 2200.7},
        {"name": "内江市", "value": 1904.8},
        {"name": "自贡市", "value": 1801.3},
        {"name": "眉山市", "value": 1737},
        {"name": "遂宁市", "value": 1714.97},
        {"name": "广安市", "value": 1512.5},
        {"name": "攀枝花市", "value": 1303.8},
        {"name": "广元市", "value": 1179.82},
        {"name": "资阳市", "value": 1019.2},
        {"name": "雅安市", "value": 1010.03},
        {"name": "巴中市", "value": 780.3},
        {"name": "甘孜藏族自治州", "value": 513.35},
        {"name": "阿坝藏族羌族自治州", "value": 503.19}
      ],
      "marks":[
        {
          "name":"巴中市响水村",
          "coord":[106.699246,32.409809]
        },
        {
          "name":"凉山州金阳县",
          "coord":[103.166707,27.891223]
        }
      ]
    },
    "江西省": {
      "id": 360000,
      "data": [
        {"name": "南昌市", "value": 7324},
        {"name": "赣州市", "value": 4606},
        {"name": "九江市", "value": 3733},
        {"name": "宜春市", "value": 3468},
        {"name": "上饶市", "value": 3402},
        {"name": "吉安市", "value": 2528.6},
        {"name": "抚州市", "value": 1827.3},
        {"name": "景德镇市", "value": 1250},
        {"name": "萍乡市", "value": 1100},
        {"name": "鹰潭市", "value": 1000},
        {"name": "新余市", "value": 900}
      ],
      "marks":[
        {
          "name":"井冈山市神山村",
          "coord":[114.104477,26.644054]
        },
        {
          "name":"九江市修水县",
          "coord":[114.54685,29.02539]
        }
      ]
    },
  "福建省": {
    "id": 350000,
    "data": [
      {"name": "福州市", "value": 11562},
      {"name": "泉州市", "value": 12000},
      {"name": "厦门市", "value": 7500},
      {"name": "漳州市", "value": 5000},
      {"name": "莆田市", "value": 3100},
      {"name": "三明市", "value": 3100},
      {"name": "南平市", "value": 2100},
      {"name": "龙岩市", "value": 3300},
      {"name": "宁德市", "value": 3400}
    ],
    "marks":[
      {
        "name":"福鼎市磻溪镇赤溪村",
        "coord":[120.110863,27.06516]
      },
      {
        "name":"福州市永泰县",
        "coord":[118.768605,25.734944]
      },
      {
        "name":"泉州市石狮市",
        "coord":[118.6479709,24.731036]
      }
    ] 
  },
  "浙江省": {
    "id": 330000,
    "data": [
      {"name": "杭州市", "value": 20540},
      {"name": "宁波市", "value": 16452.8},
      {"name": "温州市", "value": 8730.6},
      {"name": "嘉兴市", "value": 7062.45},
      {"name": "金华市", "value": 6011.27},
      {"name": "湖州市", "value": 4015.1},
      {"name": "舟山市", "value": 2100.8}
    ],
    "marks":[
      {
        "name":"金华市磐安县乌石村",
        "coord":[120.73626,29.236594]
      },
      {
        "name":"景宁畲族自治县",
        "coord":[119.63564,27.973581]
      },
      {
        "name":"湖州市安吉县",
        "coord":[119.60650,30.58381]
      }
    ]
  },
  "贵州省": {
    "id": 520000,
    "data": [
      {"name": "贵阳市", "value": 5154.75},
      {"name": "遵义市", "value": 4601},
      {"name": "六盘水市", "value": 1500},
      {"name": "安顺市", "value": 1500},
      {"name": "毕节市", "value": 1800},
      {"name": "铜仁市", "value": 1514},
      {"name": "黔西南州", "value": 1500},
      {"name": "黔东南州", "value": 1500},
      {"name": "黔南州", "value": 1500}
    ],
    "marks":[
      {
        "name":"遵义市赤水市",
        "coord":[105.6974299,28.5905]
      },
      {
        "name":"毕节市新仁苗族乡化屋村",
        "coord":[106.10568,26.805661]
      },
      {
        "name":"黔南布依族苗族自治州罗甸县",
        "coord":[106.751714,25.42482]
      }
    ]
  },
  "辽宁省": {
    "id": 210000,
    "data": [
      {"name": "大连市", "value": 8752.9},
      {"name": "沈阳市", "value": 8122.1},
      {"name": "鞍山市", "value": 2011.9},
      {"name": "本溪市", "value": 700},
      {"name": "丹东市", "value": 700},
      {"name": "营口市", "value": 1100},
      {"name": "盘锦市", "value": 1000},
      {"name": "锦州市", "value": 900},
      {"name": "朝阳市", "value": 700},
      {"name": "辽阳市", "value": 650},
      {"name": "铁岭市", "value": 750},
      {"name": "抚顺市", "value": 700},
      {"name": "阜新市", "value": 600},
      {"name": "葫芦岛市", "value": 700}
    ],
    "marks":[
      {
        "name":"朝阳市木头城子镇十家子村",
        "coord":[120.06868,41.365001]
      }
    ]
  },
  "河北省": {
    "id": 130000,
    "data": [
      {"name": "唐山市", "value": 9133},
      {"name": "石家庄市", "value": 7534},
      {"name": "沧州市", "value": 4440},
      {"name": "邯郸市", "value": 4382},
      {"name": "保定市", "value": 4012},
      {"name": "廊坊市", "value": 3608},
      {"name": "邢台市", "value": 2000},
      {"name": "秦皇岛市", "value": 1800},
      {"name": "衡水市", "value": 1500},
      {"name": "张家口市", "value": 1400},
      {"name": "承德市", "value": 1500}
    ],
    "marks":[
      {
        "name":"承德市隆化县七家镇西道村",
        "coord":[118.091848,41.434893]
      }
    ]
  },
  "山东省": {
    "id": 370000,
    "data": [
      {"name": "青岛市", "value": 7508.71},
      {"name": "济南市", "value": 5744.31},
      {"name": "烟台市", "value": 10162.46},
      {"name": "潍坊市", "value": 7600},
      {"name": "临沂市", "value": 2876.1},
      {"name": "济宁市", "value": 2744.65},
      {"name": "淄博市", "value": 2795.4},
      {"name": "菏泽市", "value": 2215.69},
      {"name": "德州市", "value": 1887.79},
      {"name": "东营市", "value": 3778.74},
      {"name": "威海市", "value": 3615.39},
      {"name": "泰安市", "value": 3378.15},
      {"name": "滨州市", "value": 3010.85},
      {"name": "聊城市", "value": 2886.31},
      {"name": "日照市", "value": 1465.32},
      {"name": "枣庄市", "value": 1055.67}
    ],
    "marks":[
      {
        "name":"淄博市博山区池上镇中郝峪村",
        "coord":[118.080758,36.323183]
      }
    ]
  },
  "陕西省": {
    "id": 610000,
    "data": [
      {"name": "西安市", "value": 12013},
      {"name": "榆林市", "value": 7155},
      {"name": "咸阳市", "value": 2776},
      {"name": "宝鸡市", "value": 2776},
      {"name": "渭南市", "value": 2201},
      {"name": "延安市", "value": 2179},
      {"name": "汉中市", "value": 1937},
      {"name": "铜川市", "value": 547}
    ],
    "marks":[
      {
        "name":"咸阳市礼泉县烟霞镇袁家村",
        "coord":[108.53874,34.59044]
      }
    ]
  }
}
`