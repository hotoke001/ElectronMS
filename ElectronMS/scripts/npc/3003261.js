

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
         
	       var Lcoin = cm.itemQuantity(4031456);
               //var Lcoin2 = cm.itemQuantity(4033825);
                
	       var chat = "\r\n#L998#";
	       chat += "#b#h0##k님의#r#i4031456# 낚코 갯수 #r#e"+ Lcoin +" #n#k#k#n\r\n"

chat += "\r\n\r\n#L998##r#i4031456#  #e#r1#k#n(개)#L5# #i2450001##r1개#k#n";

chat += "\r\n\r\n#L998##r#i4031456#  #e#r3#k#n(개)#L6# #i2450001##r3개#k#n";

chat += "\r\n\r\n#L998##r#i4031456#  #e#r5#k#n(개)#L7# #i2450001##r5개#k#n";

chat += "\r\n\r\n#L998##r#i4031456#  #e#r10#k#n(개)#L8# #i2450001##r10개#k#n";
	       cm.sendSimple(chat);

	    }  if (selection >= 9999999) {
		    cm.dispose();
} else if (selection == 5) {
if (cm.haveItem(4031456, 1)) {
		    if (cm.canHold(4031456)) {
		        cm.sendOk("#r낚시 구슬로#k #i2450001##r1개#k#n 를 구입 하셨습니다.");
			cm.gainItem(4031456, -1);
                                           cm.gainItem(2450001, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("소비창에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r낚시 구슬#k가 부족합니다.");
		    cm.dispose();
}
} else if (selection == 6) {
if (cm.haveItem(4031456, 3)) {
		    if (cm.canHold(4031456)) {
		        cm.sendOk("#r낚시 구슬로#k #i2450001##r3개#k#n  를 구입 하셨습니다.");
			cm.gainItem(4031456, -3);
                                           cm.gainItem(2450001, 3);
			cm.dispose();
		    } else {
		        cm.sendOk("소비창에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r낚시 구슬#k가 부족합니다.");
		    cm.dispose();
}
} else if (selection == 7) {
if (cm.haveItem(4031456, 5)) {
		    if (cm.canHold(4031456)) {
		        cm.sendOk("#r낚시 구슬로#k #i2450001##r5개#k#n 를 구입 하셨습니다.");
			cm.gainItem(4031456, -5);
                                              cm.gainItem(2450001, 5);
			cm.dispose();
		    } else {
		        cm.sendOk("소비창에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r낚시 구슬#k가 부족합니다.");
		    cm.dispose();
}
} else if (selection == 8) {
if (cm.haveItem(4031456, 10)) {
		    if (cm.canHold(4031456)) {
		        cm.sendOk("#r낚시 구슬로#k#i2450001##r10개#k#n 를 구입 하셨습니다.");
			cm.gainItem(4031456, -10);
                                       cm.gainItem(2450001, 10);
			cm.dispose();
		    } else {
		        cm.sendOk("소비창에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r낚시 구슬#k가 부족합니다.");
		    cm.dispose();
}
             } else if (selection == 30001) {
		cm.dispose();
		cm.openNpc(1033221);
		return;

             } else if (selection == 30002) {
		cm.dispose();
		cm.openNpc(1033211);
		return;
             } else if (selection == 30003) {
		cm.dispose();
		cm.openNpc(1033206);
		return;
             } else if (selection == 30004) {
		cm.dispose();
		cm.openNpc(1033205);
		return;
             } else if (selection == 30009) {
		cm.dispose();
		cm.openNpc(1033111);
		return;
 } else if (selection == 6000) {
		cm.dispose();
		cm.openNpc(9072100);
		return;
             } else if (selection == 30006) {
		cm.dispose();
		cm.openNpc(1033202);
		return;
             } else if (selection == 30007) {
		cm.dispose();
		cm.openNpc(1033201);
		return;
            } else if (selection == 30008) {
		cm.dispose();
		cm.openNpc(1033200);
		return;
            } else if (selection == 10011) {
		cm.dispose();
		cm.openNpc(1033110);
		return;
  } else if (selection == 6001) {
		cm.dispose();
		cm.openNpc(1033105);
		return;
} else if (selection == 998) {
		cm.dispose();
		cm.openNpc(3003261);
		return;




		}
	}
}