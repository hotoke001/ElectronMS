var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) { 
	    qm.sendNext("����~ ��, ��! �����! ����~! ��! ��?!");
        } else if (status == 1) {
            qm.sendNextPrevS("�� �и� ���谡�� �Ǳ� ���� ������ ����� ���� �־��µ�... ��� �� ����?",3);
        } else if (status == 2) {
	    qm.sendNextPrev("���ͳ���~ ��! ����! ����������!");
        } else if (status == 3) {
            qm.sendNextPrevS("������ϰ� ��⸦ �ϰ� �ֺ��� �ѷ����ٰ� �и�... �¾�! �߷�! �߷��� ��Ÿ����! �׸��� ��... �״�� �迡�� ������ �ǰ�? �׷� ��� ������ ����? �и� #b���� �ϴ� ���� ������#k �� ���߿� ������ ������ ������ �������� ���� ���µ�... Ȥ�� �� �ǿܷ� ���� �ŵ��̾��� �ǰ�?!",3);
        } else if (status == 4) {
	    qm.sendNextPrev("����������! ��! ��! (���׸��� �����̰� ���� �Ҹ��� ���� ��ó�� ���� ���� ������ �ִ�. ���� ����ó�� ���δ�. �׷��� ���� ���� �� �� �� ó�� �� ���� �� ���̾��� �� ������...)");
        } else if (status == 5) {
            qm.sendNextPrevS("��...? �׷������� �Ʊ���� �� ���� �׸� �ϰ� ���� ���� ���� �ž�? ��? �� �տ� �鸰 ��... (�����̰� ǰ �ȿ��� ����� �ϳ� ���´�. ���־� ���̴� �� ���� �����. �׷���... �� ����� ��¼���?)\r\n\r\n#i2010000#",3);
        } else if (status == 6) {
	    qm.askAcceptDecline("����������~ �ܲ�! (�����̴� ����ϴٴ� �󱼷� ����� ���и� ���� ������ �Դ� �ô��� �غ��δ�. ����... �� ü���� ������ �� �˰� ������� �ǰ�! �� �༮, ���� ���� �༮���ݾ�!)");
	} else if (status == 7) {
	    qm.gainItem(2010000,1);
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}