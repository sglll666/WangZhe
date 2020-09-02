$(function(){
	$(".play-list .pattern").click(function(){
		$(".play-list li").css("border-bottom","none");
		$(".play-list li").css("color","#363636");
		$(".play-list .pattern").css("border-bottom","3px solid #3589DD");
		$(".play-list .pattern").css("color","#3589DD");
		$(".equiplist-box").css("display","none");
		$(".game-introduction").css("display","block");
		$(".summoner-spells-box").css("display","none");
	})
	$(".play-list .summoner-spells").click(function(){
		$(".play-list li").css("border-bottom","none");
		$(".play-list li").css("color","#363636");
		$(".play-list .summoner-spells").css("border-bottom","3px solid #3589DD");
		$(".play-list .summoner-spells").css("color","#3589DD");
		$(".equiplist-box").css("display","none");
		$(".summoner-spells-box").css("display","block");
		$(".game-introduction").css("display","none");
	})
	$(".play-list .equip").click(function(){
		$(".play-list li").css("border-bottom","none");
		$(".play-list li").css("color","#363636");
		$(".play-list .equip").css("border-bottom","3px solid #3589DD");
		$(".play-list .equip").css("color","#3589DD");
		$(".equiplist-box").css("display","block");
		$(".summoner-spells-box").css("display","none");
		$(".game-introduction").css("display","none");
	})
	$(".equip-div li").mouseover(function(){
		$("#equips-introduction").css("display","block");
		$(document).mousemove(function(e){	
			$("#equips-introduction").css({"left":e.pageX+15,"top":e.pageY+15});
		})				
	})
	$(".equip-div li").mouseout(function(){
		$("#equips-introduction").css("display","none");
	})
	$("#equip-sub-type1").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
	})
	$("#equip-sub-type2").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
		$(".equip-both li[class!=equip-attack]").css("display","none");
	})
	$("#equip-sub-type3").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
		$(".equip-both li[class!=equip-magic]").css("display","none");
	})
	$("#equip-sub-type4").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
		$(".equip-both li[class!=equip-defense]").css("display","none");
	})
	$("#equip-sub-type5").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
		$(".equip-both li[class!=equip-move]").css("display","none");
	})
	$("#equip-sub-type6").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
		$(".equip-both li[class!=equip-fighting-wild]").css("display","none");
	})
	$("#equip-sub-type7").click(function(){
		$(".equip-both li[class^=equip]").css("display","inherit");
		$(".equip-both li[class!=equip-auxiliary]").css("display","none");
	})
	$(".equip-div li:nth-child(1)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1111.jpg");
		$(".a1").append("<h4 id='a1Name'>铁剑</h4>");
		$(".a1").append("<p id='a1Price'>售价：150</p>");
		$(".a1").append("<p id='a1Tprice'>总价：250</p>");
		$("#content1").append("<p>+20物理攻击</p>");
	})
	$(".equip-div li:nth-child(2)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1112.jpg");
		$(".a1").append("<h4 id='a1Name'>匕首</h4>");
		$(".a1").append("<p id='a1Price'>售价：174</p>");
		$(".a1").append("<p id='a1Tprice'>总价：290</p>");
		$("#content1").append("<p>+10%攻击速度</p>");
	})
	$(".equip-div li:nth-child(3)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1113.jpg");
		$(".a1").append("<h4 id='a1Name'>搏击拳套</h4>");
		$(".a1").append("<p id='a1Price'>售价：192</p>");
		$(".a1").append("<p id='a1Tprice'>总价：320</p>");
		$("#content1").append("<p>+8%暴击率</p>");
	})
	$(".equip-div li:nth-child(4)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1114.jpg");
		$(".a1").append("<h4 id='a1Name'>吸血之镰</h4>");
		$(".a1").append("<p id='a1Price'>售价：246</p>");
		$(".a1").append("<p id='a1Tprice'>总价：410</p>");
		$("#content1").append("<p>+10物理攻击</p>");
		$("#content1").append("<p>+8%物理吸血</p>");
	})
	$(".equip-div li:nth-child(5)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1115.jpg");
		$(".a1").append("<h4 id='a1Name'>雷鸣刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：270</p>");
		$(".a1").append("<p id='a1Tprice'>总价：450</p>");
		$("#content1").append("<p>+40物理攻击</p>");
	})
	$(".equip-div li:nth-child(6)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1116.jpg");
		$(".a1").append("<h4 id='a1Name'>充能拳套</h4>");
		$(".a1").append("<p id='a1Price'>售价：330</p>");
		$(".a1").append("<p id='a1Tprice'>总价：550</p>");
		$("#content1").append("<p>+15%暴击率</p>");
	})
	$(".equip-div li:nth-child(7)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1117.jpg");
		$(".a1").append("<h4 id='a1Name'>风暴巨剑</h4>");
		$(".a1").append("<p id='a1Price'>售价：546</p>");
		$(".a1").append("<p id='a1Tprice'>总价：910</p>");
		$("#content1").append("<p>+80物理攻击</p>");
	})
	$(".equip-div li:nth-child(8)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1118.jpg");
		$(".a1").append("<h4 id='a1Name'>日冕</h4>");
		$(".a1").append("<p id='a1Price'>售价：474</p>");
		$(".a1").append("<p id='a1Tprice'>总价：790</p>");
		$("#content1").append("<p>+40物理攻击</p>");
		$("#content1").append("<p>+300最大生命</p>");
		$("#content2").append("<p>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒</p>");
	})
	$(".equip-div li:nth-child(9)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1119.jpg");
		$(".a1").append("<h4 id='a1Name'>狂暴双刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：534</p>");
		$(".a1").append("<p id='a1Tprice'>总价：890</p>");
		$("#content1").append("<p>+15%攻击速度</p>");
		$("#content1").append("<p>+10%暴击率</p>");
		$("#content1").append("<p>+5%移速</p>");
	})
	$(".equip-div li:nth-child(10)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1120.jpg");
		$(".a1").append("<h4 id='a1Name'>陨星</h4>");
		$(".a1").append("<p id='a1Price'>售价：648</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1080</p>");
		$("#content1").append("<p>+45物理攻击</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content2").append("<p>唯一被动-切割：+60物理穿透</p>");
	})
	$(".equip-div li:nth-child(11)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1121.jpg");
		$(".a1").append("<h4 id='a1Name'>碎星锤</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+80物理攻击</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content2").append("<p>唯一被动-破甲：+40%物理穿透</p>");
	})
	$(".equip-div li:nth-child(12)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1122.jpg");
		$(".a1").append("<h4 id='a1Name'>末世</h4>");
		$(".a1").append("<p id='a1Price'>售价：1296</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2160</p>");
		$("#content1").append("<p>+60物理攻击</p>");
		$("#content1").append("<p>+30%攻击速度</p>");
		$("#content1").append("<p>+10%物理吸血</p>");
		$("#content2").append("<p>唯一被动-破败：普通攻击附带敌人当前生命值8%的物理伤害（对野怪最多：80）</p>");
	})
	$(".equip-div li:nth-child(13)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1123.jpg");
		$(".a1").append("<h4 id='a1Name'>名刀-司命</h4>");
		$(".a1").append("<p id='a1Price'>售价：1056</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1900</p>");
		$("#content1").append("<p>+60物理攻击</p>");
		$("#content1").append("<p>+5%冷却缩减</p>");
		$("#content2").append("<p>唯一被动-暗幕：受到致命伤害时，进入短暂无敌状态并增加30%移动速度，持续1秒（远程英雄使用时用时持续时间缩短为0.5秒）冷却时间：120秒</p>");
	})
	$(".equip-div li:nth-child(14)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1124.jpg");
		$(".a1").append("<h4 id='a1Name'>冰霜长矛</h4>");
		$(".a1").append("<p id='a1Price'>售价：1188</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1980</p>");
		$("#content1").append("<p>+80物理攻击</p>");
		$("#content1").append("<p>+600最大生命</p>");
		$("#content1").append("<p>+15%攻击速度</p>");
		$("#content2").append("<p>唯一被动-碎冰：普通攻击会减少目标30%攻击速度和移动速度持续2秒<br/>远程英雄使用时减速效果持续时间衰减为1秒</p>");
	})
	$(".equip-div li:nth-child(15)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1125.jpg");
		$(".a1").append("<h4 id='a1Name'>速击之枪</h4>");
		$(".a1").append("<p id='a1Price'>售价：534</p>");
		$(".a1").append("<p id='a1Tprice'>总价：890</p>");
		$("#content1").append("<p>+25%攻击速度</p>");
		$("#content2").append("<p>唯一被动-精准：普通攻击伤害提升30点，远程英雄使用时该效果翻倍</p>");
	})
	$(".equip-div li:nth-child(16)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1126.jpg");
		$(".a1").append("<h4 id='a1Name'>制裁之刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：1080</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1800</p>");
		$("#content1").append("<p>+100物理攻击</p>");
		$("#content1").append("<p>+10%物理吸血</p>");
		$("#content2").append("<p>唯一被动-重伤：造成伤害是的目标的生命恢复效果减少50%，持续1.5秒（如果该伤害有普攻触发，则持续时间延长至3秒）</p>");
	})
	$(".equip-div li:nth-child(17)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1127.jpg");
		$(".a1").append("<h4 id='a1Name'>泣血之刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：1044</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1740</p>");
		$("#content1").append("<p>+100物理攻击</p>");
		$("#content1").append("<p>+25%物理吸血</p>");
	})
	$(".equip-div li:nth-child(18)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1128.jpg");
		$(".a1").append("<h4 id='a1Name'>无尽战刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：1284</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2140</p>");
		$("#content1").append("<p>+130物理攻击</p>");
		$("#content1").append("<p>+20%暴击率</p>");
		$("#content2").append("<p>唯一被动：加40%暴击效果</p>");
	})
	$(".equip-div li:nth-child(19)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1129.jpg");
		$(".a1").append("<h4 id='a1Name'>宗师之力</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+60物理攻击</p>");
		$("#content1").append("<p>+20%暴击率</p>");
		$("#content1").append("<p>+400最大法力</p>");
		$("#content1").append("<p>+400最大生命</p>");
		$("#content2").append("<p>唯一被动-强击：使用技能后，2秒内提升自己12%移动速度，并使得下次普通攻击造成额外0.8*物理攻击的物理伤害，冷却时间：2秒</p>");
	})
	$(".equip-div li:nth-child(20)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1130.jpg");
		$(".a1").append("<h4 id='a1Name'>闪电匕首</h4>");
		$(".a1").append("<p id='a1Price'>售价：1104</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1840</p>");
		$("#content1").append("<p>+35%攻击速度</p>");
		$("#content1").append("<p>+15%暴击率</p>");
		$("#content1").append("<p>+8%移速</p>");
		$("#content2").append("<p>唯一被动-电弧：普通攻击有30%几率释放连锁闪电，对目标造成（100+0.3*物理攻击）点法术伤害，这个伤害可以暴击，冷却时间：0.5秒</p>");
	})
	$(".equip-div li:nth-child(21)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1131.jpg");
		$(".a1").append("<h4 id='a1Name'>影刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：1242</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2070</p>");
		$("#content1").append("<p>+40%攻击速度</p>");
		$("#content1").append("<p>+20%暴击率</p>");
		$("#content1").append("<p>+5%移速</p>");
		$("#content2").append("<p>唯一被动-暴风：暴击后提升自身30%攻击速度和10%移动速度，持续2秒</p>");
	})
	$(".equip-div li:nth-child(22)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1132.jpg");
		$(".a1").append("<h4 id='a1Name'>暗影战斧</h4>");
		$(".a1").append("<p id='a1Price'>售价：1254</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2090</p>");
		$("#content1").append("<p>+85物理攻击</p>");
		$("#content1").append("<p>+15%冷却缩减</p>");
		$("#content1").append("<p>+500最大生命</p>");
		$("#content2").append("<p>唯一被动-切割：增加（50+英雄等级*8）点护甲穿透</p>");
		$("#content2").append("<p>唯一被动-残废：普通攻击有30%几率降低敌人20%移动速度，持续2秒</p>");
	})
	$(".equip-div li:nth-child(23)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1133.jpg");
		$(".a1").append("<h4 id='a1Name'>破军</h4>");
		$(".a1").append("<p id='a1Price'>售价：1770</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2950</p>");
		$("#content1").append("<p>+180物理攻击</p>");
		$("#content2").append("<p>唯一被动-破军：对生命值低于50%的敌人造成额外30%的伤害</p>");
	})
	$(".equip-div li:nth-child(24)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1134.jpg");
		$(".a1").append("<h4 id='a1Name'>纯净苍穹</h4>");
		$(".a1").append("<p id='a1Price'>售价：1338</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2230</p>");
		$("#content1").append("<p>+40%攻击速度</p>");
		$("#content1").append("<p>+20%暴击率</p>");
		$("#content2").append("<p>唯一被动-精准：普通攻击伤害提升35点，远程英雄使用时改效果翻倍</p>");
		$("#content2").append("<p>唯一主动-驱散：90秒CD，受到的所有伤害降低50%，持续1.5秒，可以在被控制时使用</p>");
	})
	$(".equip-div li:nth-child(25)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1135.jpg");
		$(".a1").append("<h4 id='a1Name'>逐日之弓</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+25%攻击速度</p>");
		$("#content1").append("<p>+15%暴击率</p>");
		$("#content2").append("<p>唯一被动-精准：普通攻击伤害提升35点，远程英雄使用时改效果翻倍</p>");
		$("#content2").append("<p>唯一主动-逐日：增加自己50点普攻射程和40%移动速度，持续5秒，冷却时间：60秒（增加射程效果仅远程英雄生效）</p>");
	})
	$(".equip-div li:nth-child(26)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1136.jpg");
		$(".a1").append("<h4 id='a1Name'>破魔刀</h4>");
		$(".a1").append("<p id='a1Price'>售价：1200</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2000</p>");
		$("#content1").append("<p>+100物理攻击</p>");
		$("#content1").append("<p>+150法术防御</p>");
		$("#content2").append("<p>唯一被动-破魔：获得额外的法术防御，数值等于你的物理攻击*0.5且最多增加300点</p>");
	})
	$(".equip-div li:nth-child(27)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1137.jpg");
		$(".a1").append("<h4 id='a1Name'>穿云弓</h4>");
		$(".a1").append("<p id='a1Price'>售价：660</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1100</p>");
		$("#content1").append("<p>+40物理攻击</p>");
		$("#content1").append("<p>+10%攻击速度</p>");
		$("#content2").append("<p>唯一被动-破甲：加10%物理穿透（远程英雄使用时效果翻倍）</p>");
	})
	$(".equip-div li:nth-child(28)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1138.jpg");
		$(".a1").append("<h4 id='a1Name'>破晓</h4>");
		$(".a1").append("<p id='a1Price'>售价：2040</p>");
		$(".a1").append("<p id='a1Tprice'>总价：3400</p>");
		$("#content1").append("<p>+50物理攻击</p>");
		$("#content1").append("<p>+35%攻击速度</p>");
		$("#content1").append("<p>+10%暴击率</p>");
		$("#content2").append("<p>唯一被动-破甲：加20%物理穿透（远程英雄使用时效果翻倍）</p>");
		$("#content2").append("<p>唯一被动：普通攻击伤害提升50点（远程英雄使用时效果翻倍）</p>");
	})
	$(".equip-div li:nth-child(29)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1139.jpg");
		$(".a1").append("<h4 id='a1Name'>咒术典籍</h4>");
		$(".a1").append("<p id='a1Price'>售价：180</p>");
		$(".a1").append("<p id='a1Tprice'>总价：300</p>");
		$("#content1").append("<p>+40法术攻击</p>");
	})
	$(".equip-div li:nth-child(30)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1140.jpg");
		$(".a1").append("<h4 id='a1Name'>咒术典籍</h4>");
		$(".a1").append("<p id='a1Price'>售价：132</p>");
		$(".a1").append("<p id='a1Tprice'>总价：220</p>");
		$("#content1").append("<p>+300最大法力</p>");
	})
	$(".equip-div li:nth-child(31)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1141.jpg");
		$(".a1").append("<h4 id='a1Name'>炼金护符</h4>");
		$(".a1").append("<p id='a1Price'>售价：72</p>");
		$(".a1").append("<p id='a1Tprice'>总价：120</p>");
		$("#content1").append("<p>+10每5秒回蓝</p>");
	})
	$(".equip-div li:nth-child(32)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1142.jpg");
		$(".a1").append("<h4 id='a1Name'>圣者法典</h4>");
		$(".a1").append("<p id='a1Price'>售价：300</p>");
		$(".a1").append("<p id='a1Tprice'>总价：500</p>");
		$("#content1").append("<p>+20法术攻击</p>");
		$("#content1").append("<p>+8%冷却缩减</p>");
	})
	$(".equip-div li:nth-child(33)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1143.jpg");
		$(".a1").append("<h4 id='a1Name'>元素杖</h4>");
		$(".a1").append("<p id='a1Price'>售价：324</p>");
		$(".a1").append("<p id='a1Tprice'>总价：540</p>");
		$("#content1").append("<p>+80法术攻击</p>");
	})
	$(".equip-div li:nth-child(34)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1144.jpg");
		$(".a1").append("<h4 id='a1Name'>大棒</h4>");
		$(".a1").append("<p id='a1Price'>售价：492</p>");
		$(".a1").append("<p id='a1Tprice'>总价：820</p>");
		$("#content1").append("<p>+120法术攻击</p>");
	})
	$(".equip-div li:nth-child(35)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1145.jpg");
		$(".a1").append("<h4 id='a1Name'>破碎圣杯</h4>");
		$(".a1").append("<p id='a1Price'>售价：480</p>");
		$(".a1").append("<p id='a1Tprice'>总价：800</p>");
		$("#content1").append("<p>+80法术攻击</p>");
		$("#content1").append("<p>+5%冷却缩减</p>");
		$("#content1").append("<p>+20每5秒回蓝</p>");
	})
	$(".equip-div li:nth-child(36)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1146.jpg");
		$(".a1").append("<h4 id='a1Name'>光辉之剑</h4>");
		$(".a1").append("<p id='a1Price'>售价：438</p>");
		$(".a1").append("<p id='a1Tprice'>总价：730</p>");
		$("#content1").append("<p>+400最大生命</p>");
		$("#content1").append("<p>+400最大法力</p>");
		$("#content2").append("<p>唯一被动-强击：使用技能后，5秒内的下一次普通攻击附加50%物理攻击的（+30%法术加成）法术伤害，这个效果有2秒的冷却时间</p>");
	})
	$(".equip-div li:nth-child(37)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1147.jpg");
		$(".a1").append("<h4 id='a1Name'>魅影面罩</h4>");
		$(".a1").append("<p id='a1Price'>售价：612</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1020</p>");
		$("#content1").append("<p>+70法术攻击</p>");
		$("#content1").append("<p>+300最大生命</p>");
		$("#content2").append("<p>唯一被动-折磨：技能命中敌人时，会对目标造成（125+英雄等级*5）点法术伤害，冷却时间：2秒</p>");
	})
	$(".equip-div li:nth-child(38)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1148.jpg");
		$(".a1").append("<h4 id='a1Name'>进化水晶</h4>");
		$(".a1").append("<p id='a1Price'>售价：432</p>");
		$(".a1").append("<p id='a1Tprice'>总价：720</p>");
		$("#content1").append("<p>+400最大法力</p>");
		$("#content1").append("<p>+400最大生命</p>");
		$("#content2").append("<p>唯一被动-英勇奖赏：升级后在3秒内回复20%生命与法力值</p>");
	})
	$(".equip-div li:nth-child(39)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1149.jpg");
		$(".a1").append("<h4 id='a1Name'>血族之书</h4>");
		$(".a1").append("<p id='a1Price'>售价：744</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1240</p>");
		$("#content1").append("<p>+75法术攻击</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content2").append("<p>唯一被动-嗜血：增加20%法术吸血</p>");
	})
	$(".equip-div li:nth-child(40)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1150.jpg");
		$(".a1").append("<h4 id='a1Name'>炽热支配者</h4>");
		$(".a1").append("<p id='a1Price'>售价：1170</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1950</p>");
		$("#content1").append("<p>+180法术攻击</p>");
		$("#content1").append("<p>+600最大法力</p>");
		$("#content1").append("<p>+15每5秒回蓝</p>");
		$("#content2").append("<p>唯一被动-法力护盾：血量低于30%时立即解除自身控制，同时获得一个吸收（500+1.5*法术攻击）伤害的护盾，护盾持续期间提升30%移动速度，持续4秒，冷却时间：90秒</p>");
	})
	$(".equip-div li:nth-child(41)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1151.jpg");
		$(".a1").append("<h4 id='a1Name'>梦魇之牙</h4>");
		$(".a1").append("<p id='a1Price'>售价：1230</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2050</p>");
		$("#content1").append("<p>+240法术攻击</p>");
		$("#content1").append("<p>+5%移速</p>");
		$("#content2").append("<p>唯一被动-重伤：造成伤害使得目标的恢复效果减少50%，持续1.5秒（如果该伤害由普攻触发，则持续时间延长至3秒）</p>");
	})
	$(".equip-div li:nth-child(42)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1152.jpg");
		$(".a1").append("<h4 id='a1Name'>虚无法杖</h4>");
		$(".a1").append("<p id='a1Price'>售价：1266</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+240法术攻击</p>");
		$("#content1").append("<p>+300最大生命值</p>");
		$("#content2").append("<p>唯一被动：加45%法术穿透</p>");
	})
	$(".equip-div li:nth-child(43)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1153.jpg");
		$(".a1").append("<h4 id='a1Name'>博学者之怒</h4>");
		$(".a1").append("<p id='a1Price'>售价：1380</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2300</p>");
		$("#content1").append("<p>+240法术攻击</p>");
		$("#content2").append("<p>唯一被动-毁灭：法术攻击提升35%</p>");
	})
	$(".equip-div li:nth-child(44)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1154.jpg");
		$(".a1").append("<h4 id='a1Name'>辉月</h4>");
		$(".a1").append("<p id='a1Price'>售价：1194</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1990</p>");
		$("#content1").append("<p>+160法术攻击</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content2").append("<p>唯一主动-月之守护：90秒CD，免疫所有效果，不能移动、攻击和使用技能，持续1.5秒</p>");
	})
	$(".equip-div li:nth-child(45)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1155.jpg");
		$(".a1").append("<h4 id='a1Name'>回响之杖</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+240法术攻击</p>");
		$("#content1").append("<p>+7%移速</p>");
		$("#content2").append("<p>唯一被动-回响：技能命中会触发小范围爆炸造成100（+40%法术加成）法术伤害，这个效果有5秒CD</p>");
	})
	$(".equip-div li:nth-child(46)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1156.jpg");
		$(".a1").append("<h4 id='a1Name'>冰霜法杖</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+180法术攻击</p>");
		$("#content1").append("<p>+1200最大生命</p>");
		$("#content2").append("<p>唯一被动-结霜：英雄技能造成伤害会附带20%的减速效果，持续2秒</p>");
	})
	$(".equip-div li:nth-child(47)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1157.jpg");
		$(".a1").append("<h4 id='a1Name'>痛苦面具</h4>");
		$(".a1").append("<p id='a1Price'>售价：1224</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2040</p>");
		$("#content1").append("<p>+120法术攻击</p>");
		$("#content1").append("<p>+5%冷却缩减</p>");
		$("#content1").append("<p>+800最大生命</p>");
		$("#content2").append("<p>唯一被动-折磨：技能命中敌人时会每0.5秒造成当前生命值3%的法术伤害，持续2秒，对野怪每次最多造成200点伤害，冷却时间：2秒</p>");
	})
	$(".equip-div li:nth-child(48)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1158.jpg");
		$(".a1").append("<h4 id='a1Name'>巫术法杖</h4>");
		$(".a1").append("<p id='a1Price'>售价：1272</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2120</p>");
		$("#content1").append("<p>+140法术攻击</p>");
		$("#content1").append("<p>+400最大生命</p>");
		$("#content1").append("<p>+400最大法力</p>");
		$("#content1").append("<p>+8%移速</p>");
		$("#content2").append("<p>唯一被动-强击：使用技能后，5秒内下一次普通攻击附加30%物理攻击（+80%法术加成）的法术伤害，这个效果有3秒冷却时间</p>");
	})
	$(".equip-div li:nth-child(49)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1159.jpg");
		$(".a1").append("<h4 id='a1Name'>圣杯</h4>");
		$(".a1").append("<p id='a1Price'>售价：1080</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1800</p>");
		$("#content1").append("<p>+180法术攻击</p>");
		$("#content1").append("<p>+15%冷却缩减</p>");
		$("#content1").append("<p>+25每5秒回蓝</p>");
		$("#content2").append("<p>唯一被动-法力源泉：每秒回复1%法力值，如果法力值已满，每秒回复1%生命值</p>");
	})
	$(".equip-div li:nth-child(50)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1160.jpg");
		$(".a1").append("<h4 id='a1Name'>时之预言</h4>");
		$(".a1").append("<p id='a1Price'>售价：1254</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2090</p>");
		$("#content1").append("<p>+140法术攻击</p>");
		$("#content1").append("<p>+500最大法力</p>");
		$("#content1").append("<p>+800最大生命</p>");
		$("#content2").append("<p>唯一被动-应用奖赏：升级后在3秒内回复20%生命值与法力值</p>");
		$("#content2").append("<p>唯一被动-守护：获得额外的物理和法术防御，数值等于你的法术攻击*0.4，且最多不超过250点</p>");
	})
	$(".equip-div li:nth-child(51)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1161.jpg");
		$(".a1").append("<h4 id='a1Name'>贤者之书</h4>");
		$(".a1").append("<p id='a1Price'>售价：1794</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2990</p>");
		$("#content1").append("<p>+400法术攻击</p>");
		$("#content2").append("<p>唯一被动-刻印：增加1600点生命值</p>");
	})
	$(".equip-div li:nth-child(52)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1162.jpg");
		$(".a1").append("<h4 id='a1Name'>噬神之书</h4>");
		$(".a1").append("<p id='a1Price'>售价：1254</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2090</p>");
		$("#content1").append("<p>+180法术攻击</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content1").append("<p>+800最大生命</p>");
		$("#content2").append("<p>唯一被动-嗜血：增加25%法术吸血</p>");
	})
	$(".equip-div li:nth-child(53)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1163.jpg");
		$(".a1").append("<h4 id='a1Name'>红玛瑙</h4>");
		$(".a1").append("<p id='a1Price'>售价：180</p>");
		$(".a1").append("<p id='a1Tprice'>总价：300</p>");
		$("#content1").append("<p>+300最大生命</p>");
	})
	$(".equip-div li:nth-child(54)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1164.jpg");
		$(".a1").append("<h4 id='a1Name'>布甲</h4>");
		$(".a1").append("<p id='a1Price'>售价：132</p>");
		$(".a1").append("<p id='a1Tprice'>总价：220</p>");
		$("#content1").append("<p>+90物理防御</p>");
	})
	$(".equip-div li:nth-child(55)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1165.jpg");
		$(".a1").append("<h4 id='a1Name'>抗魔披风</h4>");
		$(".a1").append("<p id='a1Price'>售价：132</p>");
		$(".a1").append("<p id='a1Tprice'>总价：220</p>");
		$("#content1").append("<p>+90法术防御</p>");
	})
	$(".equip-div li:nth-child(56)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1166.jpg");
		$(".a1").append("<h4 id='a1Name'>提神水晶</h4>");
		$(".a1").append("<p id='a1Price'>售价：84</p>");
		$(".a1").append("<p id='a1Tprice'>总价：140</p>");
		$("#content1").append("<p>+30每5秒回复</p>");
	})
	$(".equip-div li:nth-child(57)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1167.jpg");
		$(".a1").append("<h4 id='a1Name'>力量腰带</h4>");
		$(".a1").append("<p id='a1Price'>售价：540</p>");
		$(".a1").append("<p id='a1Tprice'>总价：900</p>");
		$("#content1").append("<p>+1000最大生命</p>");
	})
	$(".equip-div li:nth-child(58)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1168.jpg");
		$(".a1").append("<h4 id='a1Name'>熔炼之心</h4>");
		$(".a1").append("<p id='a1Price'>售价：540</p>");
		$(".a1").append("<p id='a1Tprice'>总价：900</p>");
		$("#content1").append("<p>+700最大生命</p>");
		$("#content2").append("<p>唯一被动-献祭：每秒对300范围内的敌人造成（60+英雄等级*2）点法术伤害</p>");
	})
	$(".equip-div li:nth-child(59)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1169.jpg");
		$(".a1").append("<h4 id='a1Name'>神隐斗篷</h4>");
		$(".a1").append("<p id='a1Price'>售价：612</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1020</p>");
		$("#content1").append("<p>+120法术防御</p>");
		$("#content1").append("<p>+700最大生命</p>");
		$("#content1").append("<p>+50每5秒回血</p>");
	})
	$(".equip-div li:nth-child(60)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1170.jpg");
		$(".a1").append("<h4 id='a1Name'>雪山圆盾</h4>");
		$(".a1").append("<p id='a1Price'>售价：540</p>");
		$(".a1").append("<p id='a1Tprice'>总价：900</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content1").append("<p>+400最大法力</p>");
		$("#content1").append("<p>+110物理防御</p>");
	})
	$(".equip-div li:nth-child(61)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1171.jpg");
		$(".a1").append("<h4 id='a1Name'>守护者之铠</h4>");
		$(".a1").append("<p id='a1Price'>售价：438</p>");
		$(".a1").append("<p id='a1Tprice'>总价：730</p>");
		$("#content1").append("<p>+210物理防御</p>");
		$("#content2").append("<p>唯一被动-寒铁：受到攻击会减少攻击者15%攻击速度，持续3秒</p>");
	})
	$(".equip-div li:nth-child(62)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1172.jpg");
		$(".a1").append("<h4 id='a1Name'>近卫荣耀</h4>");
		$(".a1").append("<p id='a1Price'>售价：1206</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2010</p>");
		$("#content1").append("<p>+10%移动速度</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益</p>");
		$("#content2").append("<p>唯一被动-守护光环：提升周围800范围友军（54+英雄等级*6）点物理防御和法术防御<br />多个辅助装光环无法同时生效</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
	})
	$(".equip-div li:nth-child(63)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1173.jpg");
		$(".a1").append("<h4 id='a1Name'>奔狼纹章</h4>");
		$(".a1").append("<p id='a1Price'>售价：1254</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2090</p>");
		$("#content1").append("<p>+10%移动速度</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
		$("#content2").append("<p>唯一主动-奔腾号令：给自己和周围友军增加移速，3秒内会递增（35%+15%*英雄等级）的移速，一共持续5秒，受到英雄攻击或敌方英雄攻击则效果消失，冷却时间：120秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>");
	})
	$(".equip-div li:nth-child(64)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1174.jpg");
		$(".a1").append("<h4 id='a1Name'>反伤刺甲</h4>");
		$(".a1").append("<p id='a1Price'>售价：1104</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1840</p>");
		$("#content1").append("<p>+40物理攻击</p>");
		$("#content1").append("<p>+420物理防御</p>");
		$("#content2").append("<p>唯一被动-荆棘：受到物理伤害时，会将伤害量的20%以法术伤害的形式回敬给对方。自身每20点物理防御属性提升1%该伤害（最多加100%）。攻击者距离越远，这个伤害越低，最多在距离800时衰减至70%</p>");
	})
	$(".equip-div li:nth-child(65)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1175.jpg");
		$(".a1").append("<h4 id='a1Name'>血魔之怒</h4>");
		$(".a1").append("<p id='a1Price'>售价：1272</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2120</p>");
		$("#content1").append("<p>+20物理攻击</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一主动-血怒：逐渐扣除30%当前生命值，逐渐获得40%最大生命值的护盾，并增加80点物理攻击，持续4秒<br />冷却时间：60秒</p>");
	})
	$(".equip-div li:nth-child(66)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1176.jpg");
		$(".a1").append("<h4 id='a1Name'>红莲斗篷</h4>");
		$(".a1").append("<p id='a1Price'>售价：1098</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1830</p>");
		$("#content1").append("<p>+240物理防御</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-献祭：每秒对身边300范围内的敌人造成使用者最大生命值2%的法术伤害</p>");
	})
	$(".equip-div li:nth-child(67)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1177.jpg");
		$(".a1").append("<h4 id='a1Name'>霸者重装</h4>");
		$(".a1").append("<p id='a1Price'>售价：1242</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2070</p>");
		$("#content1").append("<p>+2000最大生命</p>");
		$("#content1").append("<p>+100每5秒回血</p>");
		$("#content2").append("<p>唯一被动-复苏：脱离战斗后每秒回复3%最大生命值</p>");
	})
	$(".equip-div li:nth-child(68)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1178.jpg");
		$(".a1").append("<h4 id='a1Name'>冲击铠甲</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+240物理防御</p>");
		$("#content1").append("<p>+800最大生命</p>");
		$("#content2").append("<p>唯一主动-冲击：使用后1.5秒对500范围内敌人造成50%减速1秒，内圈敌人还会额外造成眩晕0.5秒，冷却时间：90秒</p>");
	})
	$(".equip-div li:nth-child(69)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1179.jpg");
		$(".a1").append("<h4 id='a1Name'>不祥征兆</h4>");
		$(".a1").append("<p id='a1Price'>售价：1308</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2180</p>");
		$("#content1").append("<p>+270物理防御</p>");
		$("#content1").append("<p>+1200最大生命</p>");
		$("#content2").append("<p>唯一被动-寒铁：受到攻击会减少攻击者30%攻击速度与15%移动速度，持续3秒</p>");
	})
	$(".equip-div li:nth-child(70)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1180.jpg");
		$(".a1").append("<h4 id='a1Name'>不死鸟之眼</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+100每5秒回血</p>");
		$("#content1").append("<p>+240法术防御</p>");
		$("#content1").append("<p>+1200最大生命</p>");
		$("#content2").append("<p>唯一被动-血统：每损失10%生命值，受到的所有治疗效果会额外增加6%</p>");
	})
	$(".equip-div li:nth-child(71)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1181.jpg");
		$(".a1").append("<h4 id='a1Name'>魔女斗篷</h4>");
		$(".a1").append("<p id='a1Price'>售价：1272</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2120</p>");
		$("#content1").append("<p>+360法术防御</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-迷雾：脱战3秒后获得一个吸收（200+英雄等级*120）点法术伤害的护盾</p>");
	})
	$(".equip-div li:nth-child(72)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1182.jpg");
		$(".a1").append("<h4 id='a1Name'>极寒风暴</h4>");
		$(".a1").append("<p id='a1Price'>售价：1260</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2100</p>");
		$("#content1").append("<p>+20%冷却缩减</p>");
		$("#content1").append("<p>+500最大法力</p>");
		$("#content1").append("<p>+360物理防御</p>");
		$("#content2").append("<p>唯一被动-冰心：受到单次伤害超过当前生命值10%时触发寒冰冲击，对周围敌人造成（50+英雄等级*10）点法术伤害并降低其30%攻击和移动速度，持续2秒，这个效果有2秒内置CD</p>");
	})
	$(".equip-div li:nth-child(73)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1183.jpg");
		$(".a1").append("<h4 id='a1Name'>冰痕之握</h4>");
		$(".a1").append("<p id='a1Price'>售价：1212</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2020</p>");
		$("#content1").append("<p>+800最大生命</p>");
		$("#content1").append("<p>+500最大法力</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content1").append("<p>+240物理防御</p>");
		$("#content2").append("<p>唯一被动-强击：使用技能后，5秒内的下一次普攻造成范围30%减速（远程英雄使用时减速效果衰减为20%）与（150+英雄等级*20）点物理伤害，这个效果有3秒的冷却时间</p>");
	})
	$(".equip-div li:nth-child(74)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1184.jpg");
		$(".a1").append("<h4 id='a1Name'>贤者的庇护</h4>");
		$(".a1").append("<p id='a1Price'>售价：1248</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2080</p>");
		$("#content1").append("<p>+140物理防御</p>");
		$("#content1").append("<p>+140法术防御</p>");
		$("#content2").append("<p>唯一被动-复生：死亡后2秒原地复活，并获得（2000+英雄等级*100）点生命值，冷却时间：150秒。这个效果每局游戏只能触发2次</p>");
	})
	$(".equip-div li:nth-child(75)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1185.jpg");
		$(".a1").append("<h4 id='a1Name'>暴烈之甲</h4>");
		$(".a1").append("<p id='a1Price'>售价：1170</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1950</p>");
		$("#content1").append("<p>+220物理防御</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-无畏：每次受到伤害后，自身造成的所有伤害提升2%并增加2%的移速，这个效果最高可以叠加5层，最多提升10%的伤害输出和10%移速，持续3秒</p>");
	})
	$(".equip-div li:nth-child(76)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1186.jpg");
		$(".a1").append("<h4 id='a1Name'>神速之靴</h4>");
		$(".a1").append("<p id='a1Price'>售价：150</p>");
		$(".a1").append("<p id='a1Tprice'>总价：250</p>");
		$("#content2").append("<p>唯一被动：+30移动速度</p>");
		$("#content2").append("<p>所有鞋类装备的移速加成效果不叠加</p>");
	})
	$(".equip-div li:nth-child(77)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1187.jpg");
		$(".a1").append("<h4 id='a1Name'>隐忍之足</h4>");
		$(".a1").append("<p id='a1Price'>售价：426</p>");
		$(".a1").append("<p id='a1Tprice'>总价：710</p>");
		$("#content1").append("<p>+110物理防御</p>");
		$("#content2").append("<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>");
		$("#content2").append("<p>唯一被动：减少15%受到普通攻击的伤害</p>");
	})
	$(".equip-div li:nth-child(78)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1188.jpg");
		$(".a1").append("<h4 id='a1Name'>抵抗之靴</h4>");
		$(".a1").append("<p id='a1Price'>售价：426</p>");
		$(".a1").append("<p id='a1Tprice'>总价：710</p>");
		$("#content1").append("<p>+110法术防御</p>");
		$("#content2").append("<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>");
		$("#content2").append("<p>唯一被动：+35%韧性</p>");
	})
	$(".equip-div li:nth-child(79)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1189.jpg");
		$(".a1").append("<h4 id='a1Name'>冷静之靴</h4>");
		$(".a1").append("<p id='a1Price'>售价：426</p>");
		$(".a1").append("<p id='a1Tprice'>总价：710</p>");
		$("#content1").append("<p>+15%冷却缩减</p>");
		$("#content2").append("<p>唯一被动-静谧：所有英雄技能的冷却恢复速度加快3%~10%（随英雄等级成长）这个效果对剩余冷却时间小于5秒的技能不会生效</p>");
		$("#content2").append("<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>");
	})
	$(".equip-div li:nth-child(80)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1190.jpg");
		$(".a1").append("<h4 id='a1Name'>秘法之靴</h4>");
		$(".a1").append("<p id='a1Price'>售价：426</p>");
		$(".a1").append("<p id='a1Tprice'>总价：710</p>");
		$("#content1").append("<p>+25 每5秒回蓝</p>");
		$("#content2").append("<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>");
		$("#content2").append("<p>唯一被动-法术精通：获得（45+英雄等级*5）点法术穿透</p>");
	})
	$(".equip-div li:nth-child(81)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1191.jpg");
		$(".a1").append("<h4 id='a1Name'>极速战靴</h4>");
		$(".a1").append("<p id='a1Price'>售价：426</p>");
		$(".a1").append("<p id='a1Tprice'>总价：710</p>");
		$("#content1").append("<p>+25%攻速</p>");
		$("#content2").append("<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>");
	})
	$(".equip-div li:nth-child(82)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1192.jpg");
		$(".a1").append("<h4 id='a1Name'>疾步之靴</h4>");
		$(".a1").append("<p id='a1Price'>售价：318</p>");
		$(".a1").append("<p id='a1Tprice'>总价：530</p>");
		$("#content2").append("<p>唯一被动-神行：脱离战斗后增加60移动速度</p>");
		$("#content2").append("<p>唯一被动：+60移动速度（所有鞋类装备的移速加成效果不叠加）</p>");
	})
	$(".equip-div li:nth-child(83)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1193.jpg");
		$(".a1").append("<h4 id='a1Name'>狩猎宽刃</h4>");
		$(".a1").append("<p id='a1Price'>售价：150</p>");
		$(".a1").append("<p id='a1Tprice'>总价：250</p>");
		$("#content1").append("<p>（打野刀升级后将惩击技能替换为寒冰惩击：寒冰惩击可对英雄使用，造成伤害和减速效果）<br />必须携带惩击才可购买</p>");
		$("#content2").append("<p>唯一被动-打野：增加50%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得20%经验</p>");
	})
	$(".equip-div li:nth-child(84)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1194.jpg");
		$(".a1").append("<h4 id='a1Name'>游击弯刀</h4>");
		$(".a1").append("<p id='a1Price'>售价：450</p>");
		$(".a1").append("<p id='a1Tprice'>总价：750</p>");
		$("#content1").append("<p>必须携带惩击才可购买，获得寒冰惩击效果</p>");
		$("#content2").append("<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币</p>");
		$("#content2").append("<p>唯一被动-磨砺：自己击杀或500范围内友方击杀野怪增加自身6点法术攻击，最多叠加20层</p>");
	})
	$(".equip-div li:nth-child(85)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1195.jpg");
		$(".a1").append("<h4 id='a1Name'>巡守利斧</h4>");
		$(".a1").append("<p id='a1Price'>售价：450</p>");
		$(".a1").append("<p id='a1Tprice'>总价：750</p>");
		$("#content1").append("<p>唯一被动-献祭：每秒对范围内的野怪和小兵造成自身最大生命值2%的法术伤害（对英雄不生效）</p>");
		$("#content1").append("<p>必须携带惩击才可购买，获得寒冰惩击效果</p>");
		$("#content2").append("<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币</p>");
		$("#content2").append("<p>唯一被动-磨砺：自己击杀或500范围内友方击杀野怪增加自身50点最大生命，最多叠加10层</p>");
	})
	$(".equip-div li:nth-child(86)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1196.jpg");
		$(".a1").append("<h4 id='a1Name'>追击刀锋</h4>");
		$(".a1").append("<p id='a1Price'>售价：450</p>");
		$(".a1").append("<p id='a1Tprice'>总价：750</p>");
		$("#content1").append("<p>必须携带惩击才可购买，获得寒冰惩击效果</p>");
		$("#content2").append("<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币</p>");
		$("#content2").append("<p>唯一被动-磨砺：自己击杀或500范围内友方击杀野怪增加自身2点物理攻击和0.5%冷却缩减，最多叠加20层</p>");
	})
	$(".equip-div li:nth-child(87)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1197.jpg");
		$(".a1").append("<h4 id='a1Name'>符文大剑</h4>");
		$(".a1").append("<p id='a1Price'>售价：1296</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2160</p>");
		$("#content1").append("<p>+100法术攻击</p>");
		$("#content1").append("<p>+400最大法力</p>");
		$("#content1").append("<p>必须携带惩击才可购买，获得寒冰惩击效果</p>");
		$("#content2").append("<p>唯一被动-强击：使用技能后，5秒内的下一次普通攻击附加（50+0.5*法术攻击）的法术伤害，冷却时间：2秒</p>");
		$("#content2").append("<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币</p>");
		$("#content2").append("<p>唯一被动-磨砺：自己击杀或500范围内友方击杀野怪增加自身6点法术攻击，最多叠加30层</p>");
	})
	$(".equip-div li:nth-child(88)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1198.jpg");
		$(".a1").append("<h4 id='a1Name'>巨人之握</h4>");
		$(".a1").append("<p id='a1Price'>售价：1080</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1800</p>");
		$("#content1").append("<p>+120物理防御</p>");
		$("#content1").append("<p>+120法术防御</p>");
		$("#content1").append("<p>必须携带惩击才可购买，获得寒冰惩击效果</p>");
		$("#content2").append("<p>唯一被动-献祭：每秒对身边小范围的敌人造成自身最大生命值2%的法术伤害</p>");
		$("#content2").append("<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币</p>");
		$("#content2").append("<p>唯一被动-磨砺：自己击杀或500范围内友方击杀野怪增加自身50点最大生命，最多叠加15层</p>");
	})
	$(".equip-div li:nth-child(89)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1199.jpg");
		$(".a1").append("<h4 id='a1Name'>贪婪之噬</h4>");
		$(".a1").append("<p id='a1Price'>售价：1296</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2160</p>");
		$("#content1").append("<p>+40物理攻击</p>");
		$("#content1").append("<p>+20%攻击速度</p>");
		$("#content1").append("<p>+8%移速</p>");
		$("#content1").append("<p>必须携带惩击才可购买，获得寒冰惩击效果</p>");
		$("#content2").append("<p>唯一被动-献祭：每秒对身边小范围的敌人造成自身最大生命值2%的法术伤害</p>");
		$("#content2").append("<p>唯一被动-打野：增加60%对野怪的伤害（仅近战英雄生效），自己击杀或500范围内友方击杀野怪时，自己会额外获得30%经验和20%金币</p>");
		$("#content2").append("<p>唯一被动-磨砺：自己击杀或500范围内友方击杀野怪增加自身2点物理攻击和0.5%冷却缩减，最多叠加30层</p>");
	})
	$(".equip-div li:nth-child(90)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1200.jpg");
		$(".a1").append("<h4 id='a1Name'>鼓舞之盾</h4>");
		$(".a1").append("<p id='a1Price'>售价：726</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1210</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content1").append("<p>+500最大生命</p>");
		$("#content2").append("<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验</p>");
		$("#content2").append("<p>唯一被动-守护光环：提升周围800范围友军（36+英雄等级*4）点物理防御和法术防御<br />多个辅助装光环无法同时生效</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
	})
	$(".equip-div li:nth-child(91)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1201.jpg");
		$(".a1").append("<h4 id='a1Name'>风灵纹章</h4>");
		$(".a1").append("<p id='a1Price'>售价：708</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1180</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content1").append("<p>+500最大生命</p>");
		$("#content2").append("<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
		$("#content2").append("<p>唯一主动-奔腾号令：给自己和周围友军增加移速，3秒内会递增（21%+9%*英雄等级）的移速，一共持续5秒，受到英雄攻击或敌方英雄攻击则效果消失，冷却时间：120秒。<br />所有同CD辅助装备的主动技能均为全队共享冷却时间</p>");
	})
	$(".equip-div li:nth-child(92)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1202.jpg");
		$(".a1").append("<h4 id='a1Name'>救赎之翼</h4>");
		$(".a1").append("<p id='a1Price'>售价：1080</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1800</p>");
		$("#content1").append("<p>+10%移动速度</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
		$("#content2").append("<p>唯一主动-救赎：立即为周围友方英雄（包括自己）提供一个吸收（600+60*英雄等级）伤害的护盾，持续3秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>");
	})
	$(".equip-div li:nth-child(93)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1203.jpg");
		$(".a1").append("<h4 id='a1Name'>风之轻语</h4>");
		$(".a1").append("<p id='a1Price'>售价：606</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1010</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content1").append("<p>+500最大生命</p>");
		$("#content2").append("<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
		$("#content2").append("<p>唯一主动-救赎：立即为周围友方英雄（包括自己）提供一个吸收（380+38*英雄等级）伤害的护盾，持续3秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>");
	})
	$(".equip-div li:nth-child(94)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1204.jpg");
		$(".a1").append("<h4 id='a1Name'>极影</h4>");
		$(".a1").append("<p id='a1Price'>售价：1146</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1910</p>");
		$("#content1").append("<p>+10%移动速度</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益</p>");
		$("#content2").append("<p>唯一被动-迅捷光环：提升周围800范围友军30%攻击速度和10%冷却缩减。<br />多个辅助装光环无法同时生效</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
	})
	$(".equip-div li:nth-child(95)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1205.jpg");
		$(".a1").append("<h4 id='a1Name'>星泉</h4>");
		$(".a1").append("<p id='a1Price'>售价：1128</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1880</p>");
		$("#content1").append("<p>+10%移动速度</p>");
		$("#content1").append("<p>+1000最大生命</p>");
		$("#content2").append("<p>唯一被动-解放：拔除其他装备中的奉献效果，周围小兵和野怪死亡后你可以与队友平分收益</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
		$("#content2").append("<p>唯一主动-星芒：立即与周围血量最低的友方英雄建立链接，分摊其50%所受伤害。链接在超过一定范围后会断开，持续2秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>");
	})
	$(".equip-div li:nth-child(96)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1206.jpg");
		$(".a1").append("<h4 id='a1Name'>星之配饰</h4>");
		$(".a1").append("<p id='a1Price'>售价：600</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1000</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content1").append("<p>+500最大生命</p>");
		$("#content2").append("<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
		$("#content2").append("<p>唯一主动-星芒：立即与周围血量最低的友方英雄建立链接，分摊其50%所受伤害。链接在超过一定范围后会断开，持续2秒，冷却时间：60秒。所有同CD辅助装备的主动技能均为全队共享冷却时间</p>");
	})
	$(".equip-div li:nth-child(97)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1207.jpg");
		$(".a1").append("<h4 id='a1Name'>凤鸣指环</h4>");
		$(".a1").append("<p id='a1Price'>售价：642</p>");
		$(".a1").append("<p id='a1Tprice'>总价：1070</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content1").append("<p>+500最大生命</p>");
		$("#content2").append("<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验</p>");
		$("#content2").append("<p>唯一被动-迅捷光环：提升周围800范围友军20%攻击速度和6%冷却缩减。<br />多个辅助装光环无法同时生效</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
	})
	$(".equip-div li:nth-child(98)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1208.jpg");
		$(".a1").append("<h4 id='a1Name'>学识宝石</h4>");
		$(".a1").append("<p id='a1Price'>售价：180</p>");
		$(".a1").append("<p id='a1Tprice'>总价：300</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content2").append("<p>唯一被动-奉献：己方所有出了辅助装的英雄中如果自己经济最低，当身边有队友时，周围小兵和野怪死亡后你的队友会获得全额收益，你会获得不影响队友的30%金币和经验</p>");
		$("#content2").append("<p>唯一被动-恩赐：如果自己的经验或经济是己方最低，每3秒会额外获得5点经验或金币</p>");
	})
	$(".equip-div li:nth-child(99)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1209.jpg");
		$(".a1").append("<h4 id='a1Name'>日暮之流</h4>");
		$(".a1").append("<p id='a1Price'>售价：1272</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2120</p>");
		$("#content1").append("<p>+180法术攻击</p>");
		$("#content1").append("<p>+10%冷却缩减</p>");
		$("#content2").append("<p>唯一被动-日暮时分：对英雄造成伤害会获得（9+英雄等级*1）点法术穿透，持续4秒，该效果可叠加10层</p>");
	})
	$(".equip-div li:nth-child(100)").mouseover(function(){
		$(".a1").children().remove();
		$("#content1 p").remove();
		$("#content2 p").remove();
		$(".equips-introduction-top img").attr("src","img/1210.jpg");
		$(".a1").append("<h4 id='a1Name'>金色圣剑</h4>");
		$(".a1").append("<p id='a1Price'>售价：1242</p>");
		$(".a1").append("<p id='a1Tprice'>总价：2070</p>");
		$("#content1").append("<p>+140法术攻击</p>");
		$("#content1").append("<p>+20%攻击速度</p>");
		$("#content1").append("<p>+5%移动速度</p>");
		$("#content2").append("<p>唯一被动-圣剑：普攻命中敌人会获得10%攻速，持续5秒，最多可叠加2层；叠满后，普攻会额外附带（0.3*法术攻击）点法术伤害，该伤害冷却时间：0.2秒</p>");
		$("#content2").append("<p>唯一被动-精准：普通攻击伤害提升35点（远程英雄使用时该效果翻倍）</p>");
	})
	$(".skillList li:nth-child(1)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(1) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80104-big.jpg",alt:"惩击"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>惩击</h4>");
		$(".spell-title").append("<p>LV.1解锁</p>");
		$(".spell-desc").append("<p>30秒CD：对身边的野怪和小兵造成真实伤害并眩晕1秒</p>");
	})
	$(".skillList li:nth-child(2)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(2) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80108-big.jpg",alt:"终结"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>终结</h4>");
		$(".spell-title").append("<p>LV.3解锁</p>");
		$(".spell-desc").append("<p>90秒CD：立即对身边敌军英雄造成其已损失生命值14%的真实伤害</p>");
	})
	$(".skillList li:nth-child(3)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(3) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80110-big.jpg",alt:"狂暴"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>狂暴</h4>");
		$(".spell-title").append("<p>LV.5解锁</p>");
		$(".spell-desc").append("<p>60秒CD：使用期间增加10%伤害、增加15%韧性、20%的物理吸血和法术吸血，持续7秒</p>");
	})
	$(".skillList li:nth-child(4)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(4) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80109-big.jpg",alt:"疾跑"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>疾跑</h4>");
		$(".spell-title").append("<p>LV.7解锁</p>");
		$(".spell-desc").append("<p>100秒CD：增加30%移动速度持续10秒，且使用期间不受减速效果的影响</p>");
	})
	$(".skillList li:nth-child(5)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(5) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80102-big.jpg",alt:"治疗术"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>治疗术</h4>");
		$(".spell-title").append("<p>LV.9解锁</p>");
		$(".spell-desc").append("<p>120秒CD：回复自己与附近队友15%生命值，提高附近友军移动速度15%持续2秒</p>");
	})
	$(".skillList li:nth-child(6)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(6) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80105-big.jpg",alt:"干扰"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>干扰</h4>");
		$(".spell-title").append("<p>LV.11解锁</p>");
		$(".spell-desc").append("<p>60秒CD：对敌方机关使用，沉默机关持续6秒；对己方机关使用，使己方机关免疫所有伤害4秒，同时攻击速度提升100%；60秒内叠加效果只有1秒的有效时间</p>");
	})
	$(".skillList li:nth-child(7)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(7) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80103-big.jpg",alt:"晕眩"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>晕眩</h4>");
		$(".spell-title").append("<p>LV.13解锁</p>");
		$(".spell-desc").append("<p>90秒CD：晕眩身边所有敌人0.75秒，并附带持续1秒的减速效果</p>");
	})
	$(".skillList li:nth-child(8)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(8) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80107-big.jpg",alt:"净化"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>净化</h4>");
		$(".spell-title").append("<p>LV.15解锁</p>");
		$(".spell-desc").append("<p>120秒CD：解除自身所有负面和控制效果并免疫控制持续1.5秒</p>");
	})
	$(".skillList li:nth-child(9)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(9) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80121-big.jpg",alt:"弱化"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>弱化</h4>");
		$(".spell-title").append("<p>LV.17解锁</p>");
		$(".spell-desc").append("<p>90秒CD：减少身边敌人伤害输出25%，并增加自身20%的免伤率，持续4秒</p>");
	})
	$(".skillList li:nth-child(10)").click(function(){
		$(".skillList li p").css("color","black");
		$(".skillList li:nth-child(10) p").css("color","blue");
		$(".spell-title img").attr({src:"img/80115-big.jpg",alt:"闪现"});
		$(".spell-title h4").remove();
		$(".spell-title p").remove();
		$(".spell-desc p").remove();
		$(".spell-title").append("<h4>闪现</h4>");
		$(".spell-title").append("<p>LV.19解锁</p>");
		$(".spell-desc").append("<p>120秒CD：向指定方向位移一段距离</p>");
	})
})
