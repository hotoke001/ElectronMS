
importPackage(Packages.client.items);

importPackage(Packages.server.items);
importPackage(Packages.tools);
importPackage(java.util);
importPackage(java.lang);
importPackage(java.io);
importPackage(java.awt);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
var enter = "\r\n";
var data, date, day;
var allPreqDone = false;

/*	보스 정보 설정란	*/

var bossid = 8880502; // 보스 몹 코드
var secondboss = 9999992; // (루시드, 스우만 적용. 2페 몹)
var startmap = 500000010; // 보스 맵
var secondmap = 450004250; // (루시드, 스우만 적용. 2페 맵)
var exitmap = 970060000; // 광장(퇴장 맵)
var bossname = "Black Mage"
var limit = 2; // 시간
//1135 48
var x = 1019, y = 50; // 보스 좌표
var x_2 = 718, y_2 = -490; // (루시드, 스우만 적용. 2페 보스 좌표)
/*------------------------------*/
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, sel) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
    	}
	if (status == 0) {
		var msg = "#fs11##d<#fUI/UIWindow2.img/MobGage/Mob/8880502# :: #r Black Mage#k>#d"+enter;
         msg += "< Extremely Difficult >"+enter;
         msg += "<Boss Reward : #i4001892# >"+enter;
		 msg += "< [Time limit :#k #r60 Minutes#k] >#k"+enter;
         msg += "#d<Death count :#k #r20 Times#k>#k"+enter;
		 msg += "#L1##rI'm moving to kill the boss.#k";
		cm.sendSimple(msg);
	} else if (status == 1) {
	    if(!allPreqDone) // jank boolean rn but hey it works???
        {
            for(var i = 0; i < cm.getParty().getMembers().size(); i++)
            {
                var partyMemberNames = cm.getParty().getMembers().get(i).getName();
                var partyMembers = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(partyMemberNames);
                if(partyMembers.getKeyValue("PurpleTierUnlock") == null)
                {
                    cm.sendOk("Make sure all your party members have done the Purple Tier Prequest.");
                    return cm.dispose();
                }
                else
                {
                    allPreqDone = true;
                }
            }
		}
		if(cm.getPlayer().checkBossClearDB(limit, bossname) != null) {
			cm.sendOk(cm.getPlayer().checkBossClearDB(limit, bossname) + " 남았습니다.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getParty() == null) {
			cm.sendOk("파티를 꾸리고 도전하시길 바랍니다.");
			cm.dispose();
			return;
		}
		if (!isPartyLeader()) {
			cm.sendOk("파티장이 아니면 신청할 수 없습니다.");
			cm.dispose();
			return;
		}
            	if (!cm.allMembersHere()) {
                	cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
			cm.dispose();
                	return;
            	}
                             if (cm.getPlayerCount(500000010) > 0 || cm.getPlayerCount(500000011) > 0) {
            		cm.sendOk("이미 누군가가 도전중입니다.\r\n#b다른 채널을 이용해 주세요.#k");
            		cm.dispose();
			return;
        	}
            	var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            	var countPass = true;
            	while (it.hasNext()) {
                	var chr = it.next();
                	if (chr.checkBossClearDB(limit, bossname) != null) {
                    		countPass = false;
                    		break;
                	}
            	}
            	if (!countPass) {
                	cm.sendOk("파티원 중 던전 입장 횟수가 남아있지 않은 파티원이 있습니다.");
                	cm.dispose();
                	return;
            	} else {
            /*	var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            	var countPass = true;
            	while (it.hasNext()) {
                	var chr = it.next();
			AC(chr, bossname+"c");
            	}*/
		}
		cm.resetMap(500000010);
		cm.resetMap(500000011);
		var em = cm.getEventManager("Raidboss");
		var eim = em.readyInstance();
		eim.setProperty("StartMap", startmap);
		eim.setProperty("SecondMap", secondmap);
		eim.setProperty("BossName", bossname);
		eim.setProperty("Boss_ID", bossid);
		eim.setProperty("Boss_Second", secondboss);
		eim.setProperty("Boss_x", x);
		eim.setProperty("Boss_y", y);
		eim.setProperty("Boss_x_2", x_2);
		eim.setProperty("Boss_y_2", y_2);
		eim.setProperty("KillCount", 0);
		eim.setProperty("Leader", cm.getPlayer().getParty().getLeader().getName());
		//cm.CountAdd(bossname+"c");
		eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		cm.dispose();
	}
}


function isPartyLeader() {
	if (cm.getPlayer().getParty().getLeader().getId() == cm.getPlayer().getId())
		return true;
	else
		return false;
}

function AC(player, boss) {
	player.setDateKey(boss, Integer.parseInt(player.getDateKey(boss, false)) + 1, false);
}

function CC(player, boss, limit) {
    if (player.getDateKey(boss, false) == null)
      player.setDateKey(boss, "0", false);
    return Integer.parseInt(player.getDateKey(boss, false)) < limit;
}