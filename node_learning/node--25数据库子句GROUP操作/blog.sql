/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-01-06 15:09:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(16) NOT NULL,
  `author_src` varchar(64) NOT NULL,
  `title` varchar(32) NOT NULL,
  `post_time` int(11) NOT NULL,
  `content` text NOT NULL,
  `n_like` int(11) NOT NULL,
  `summary` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES ('1', '王猛', 'img/face-opt.jpg', '习近平视察中部战区陆军某师 登上99A坦克', '1515073406', '中共中央总书记、国家主席、中央军委主席习近平3日视察中部战区陆军某师，强调要认真贯彻党的十九大精神，贯彻新时代党的强军思想，大抓实战化军事训练，深入推进数字化部队建设管理和作战运用创新，聚力打造精锐作战力量。习近平代表党中央和中央军委，向全体解放军指战员、武警部队官兵、民兵预备役人员致以新年祝福。\r\n\r\n　　新年伊始，燕赵大地，生机盎然。3日上午10时30分许，习近平来到中部战区陆军某师。他首先察看了部队武器装备。数十台套数字化装备整齐列阵，威风凛凛，习近平边走边看，不时驻足询问。在地面突击系统装备前，习近平饶有兴致地登上99A坦克。这是我国自主研制的新一代主战坦克，有“陆战之王”美誉。在火力打击系统装备前，习近平登上红箭-10导弹发射车，详细了解装备战技性能。习近平强调，要抓住科技创新这个牛鼻子，把部队科技含量充分释放出来，把科技优势转化为能力优势、作战优势。\r\n\r\n　　随后，习近平来到侦察情报营训练场。该营侦察2连是侦察英雄杨子荣生前所在连，被中央军委授予“英雄侦察连”荣誉称号。习近平仔细观看狙击手构筑工事和伪装训练，询问数字化单兵作战系统情况。看到侦察兵生龙活虎，训练有素，习近平很高兴。\r\n\r\n　　习近平对新入伍战士十分牵挂。训练场上，2连新战士正在进行侦察格斗技能训练，习近平同他们亲切交流，详细询问有关情况。得知新战士中有不少小能人、小行家，有的是国家一级运动员，有的练过多年武术，在大型比赛中拿过奖牌，习近平点头称赞。战士徐大庆现场打了一套长拳，虎虎生风，赢得热烈掌声。习近平勉励他们苦练侦察本领，争取成为杨子荣式的侦察英雄。战士们提出想同习主席合个影，习近平高兴地把他们招拢过来，大家簇拥在习近平身旁，一张张青春的脸庞上写满了幸福和喜悦。分别的时候到了，全场官兵依依不舍送别习近平，高呼“听党指挥、能打胜仗、作风优良”，表达官兵坚决听习主席的话、做习主席的好战士的坚定决心。\r\n下午3时许，习近平来到模拟训练中心，接见师机关全体干部和所属部队团以上干部，同大家亲切握手，合影留念。接着，习近平参观了师史馆。在一幅幅照片、一件件实物前，习近平看得很仔细。在反映该师抗美援朝战争期间激战松骨峰情况的展板前，习近平感慨地说，这一仗打得很激烈，官兵战斗作风很顽强。我军历来是打精气神的，过去钢少气多，现在钢多了，气要更多，骨头要更硬。\r\n\r\n　　随后，习近平听取了该师工作情况汇报，并发表重要讲话。他强调，要强化练兵备战，全部心思向打仗聚焦，各项工作向打仗用劲，加强数字化部队作战研究，创新作战概念和战法，大抓实战化军事训练，不断提高训练水平和打赢能力。要强化体系建设，统筹加强各种力量、各个系统、各类要素建设，加强信息系统和作战数据建设，确保成体系形成作战能力，有机融入全军联合作战体系。要强化改革创新，优化编成结构，加强科技运用，增强官兵科技素养，积极推进创新型人民军队实践探索。要强化政治保证，抓好党的十九大精神学习贯彻，贯彻古田全军政治工作会议精神，按照新时代党的建设总要求加强各级党组织建设，开展“传承红色基因、担当强军重任”主题教育，确保部队坚决听从党中央和中央军委指挥。各级要高度重视数字化部队人才队伍建设，培养一批高素质新型军事人才。要满腔热忱为官兵办实事、解难事，坚决纠治基层官兵身边的“微腐败”和不正之风，把广大官兵积极性、主动性、创造性充分调动起来，共同把部队建设推向前进。\r\n\r\n　　中共中央政治局委员、中央军委副主席许其亮，中共中央政治局委员、中央军委副主席张又侠，中央军委委员魏凤和、李作成、苗华、张升民参加活动。（央视记者 张伟 徐少兵 张建庆 摄影 李刚）', '4', '习近平在视察中部战区陆军某师时强调 大抓实战化军事训练 聚力打造精锐作战力量');
INSERT INTO `article_table` VALUES ('2', '王小贱', 'img/face-opt2.jpg', '歌曲涉及吸毒和侮辱妇女？PG One道歉:已主动下架', '1515073725', '新浪娱乐讯 1月4日，有媒体称PG One歌曲《圣诞夜》被网友举报教唆青少年吸毒与侮辱妇女，歌词含有“纯白色的粉末在地上走”等不良言论。随后，PG One微博发文道歉，表示自己“早期接触嘻哈文化受黑人音乐影响深厚，对核心价值理解偏颇”，并称“现已主动全网下架作品，感谢大众监督，嘻哈精神应该永远是和平与爱”。\r\n\r\n　　随后，PG One工作室官博也转发了该微博，表示：“作品的成熟度会随着音乐人的成长而日趋完美，今后的音乐制作中定去粕存精！”（实习生春岫/文）', '21', 'PGone摊上大事了！PG被网友举报“教嗦青少年吸毒和侮辱妇女');

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `sub_title` varchar(16) NOT NULL,
  `src` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='这个是banner表';

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('1', '你好百度', '隔壁老王1', 'images/1.jpg');
INSERT INTO `banner_table` VALUES ('2', '你好阿里', '隔壁老王2', 'images/2.jpg');
INSERT INTO `banner_table` VALUES ('3', '你好腾讯', '隔壁老王3', 'images/3.jpg');

-- ----------------------------
-- Table structure for group_demo
-- ----------------------------
DROP TABLE IF EXISTS `group_demo`;
CREATE TABLE `group_demo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) DEFAULT NULL,
  `class` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group_demo
-- ----------------------------
INSERT INTO `group_demo` VALUES ('1', '王猛1', '3');
INSERT INTO `group_demo` VALUES ('2', '小碗', '2');
INSERT INTO `group_demo` VALUES ('3', '王猛2', '2');
INSERT INTO `group_demo` VALUES ('4', '111', '1');
INSERT INTO `group_demo` VALUES ('5', '222', '2');
INSERT INTO `group_demo` VALUES ('6', '333', '3');
INSERT INTO `group_demo` VALUES ('7', '444', '1');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `src` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
