define(function (require) {

    var ancestors = {
        '304':'13','305':'13','306':'13','307':'13','325':'13','326':'13','327':'13','329':'13','330':'13',
        '331':'13','332':'13',
        '205':'26','206':'26','209':'26','210':'26','211':'26','212':'26','213':'26','214':'26','215':'26',
        '216':'26','217':'26',
        '158':'22','159':'22','160':'22','161':'22','162':'22','163':'22','164':'22','165':'22','166':'22',
        '167':'22','168':'22','169':'22',
        '1': '990','3': '990','13': '990','26': '990','22': '990',
        '144':'21','145':'21','146':'21','147':'21','148':'21','149':'21','150':'21','151':'21','152':'21',
        '153':'21','154':'21','155':'21','156':'21','157':'21',
        '38':'18','39':'18','40':'18','41':'18','42':'18','43':'18','44':'18','45':'18','47':'18',
        '333':'15','334':'15','335':'15','336':'15','337':'15','338':'15','339':'15','340':'15','341':'15',
        '342':'15','343':'15','344':'15','345':'15',
        '21':'991','18':'991','15':'991',
        '53':'19','54':'19','55':'19','56':'19','57':'19','58':'19','59':'19','60':'19','61':'19','62':'19',
        '63':'19','64':'19','65':'19',
        '272':'32','273':'32','274':'32','275':'32','276':'32','277':'32','278':'32','279':'32','280':'32',
        '281':'32','282':'32',
        '127':'9','128':'9','129':'9','130':'9','131':'9','132':'9','133':'9','134':'9','135':'9',
        '136':'9','137':'9','138':'9','139':'9','140':'9','141':'9','142':'9','143':'9',
        '48':'5','49':'5','50':'5','51':'5','52':'5','66':'5','70':'5','80':'5','81':'5',
        '67':'20','68':'20','69':'20','71':'20','72':'20','73':'20','74':'20','75':'20','76':'20','77':'20',
        '78':'20',
        '196':'25','197':'25','198':'25','199':'25','200':'25','201':'25','202':'25','203':'25','204':'25',
        '207':'25','208':'25','218':'25','219':'25','220':'25','221':'25','222':'25','223':'25',
        '2':'992','19':'992','32':'992','9':'992','5':'992','20':'992','25':'992',
        '308':'14','309':'14','310':'14','311':'14','312':'14','313':'14','314':'14','315':'14','316':'14',
        '317':'14','318':'14','319':'14','320':'14','321':'14','322':'14','323':'14','324':'14','476':'14',
        '346':'16','347':'16','348':'16','349':'16','364':'16','365':'16','366':'16','367':'16','368':'16',
        '369':'16','370':'16','371':'16','372':'16','373':'16','375':'16','376':'16','377':'16',
        '350':'17','351':'17','352':'17','353':'17','354':'17','355':'17','356':'17','357':'17','358':'17',
        '359':'17','360':'17','361':'17','362':'17','363':'17',
        '14':'993','16':'993','17':'993',
        '82':'4','83':'4','84':'4','85':'4','86':'4','88':'4','89':'4','90':'4','91':'4','92':'4','93':'4',
        '94':'4','109':'4','110':'4','111':'4','112':'4','113':'4','114':'4','115':'4','116':'4','117':'4',
        '493':'8','488':'8','492':'8','487':'8','303':'8','484':'8','296':'8','302':'8','490':'8','491':'8',
        '486':'8','297':'8','489':'8','297':'8','489':'8','298':'8','485':'8','301':'8','299':'8','300':'8',
        '95':'12','96':'12','98':'12','99':'12','100':'12','101':'12','102':'12','103':'12','104':'12','105':'12',
        '106':'12','107':'12','108':'12','478':'12',
        '4':'994','8':'994','12':'994',
        '224':'28','225':'28','226':'28','227':'28','228':'28','229':'28','230':'28','231':'28','232':'28',
        '233':'28','234':'28','235':'28','236':'28','237':'28','238':'28','247':'28','250':'28','251':'28',
        '252':'28','253':'28','254':'28',
        '118':'10','119':'10','120':'10','121':'10','122':'10','123':'10','124':'10','125':'10','126':'10',
        '283':'31','284':'31','285':'31','286':'31','287':'31','288':'31','289':'31','290':'31','291':'31',
        '292':'31','293':'31','294':'31','295':'31','481':'31','482':'31','483':'31',
        '498':'29','480':'29','269':'29','470':'29','268':'29','271':'29','497':'29',
        '33':'995','28':'995','10':'995','31':'995','29':'995',
        '239':'27','240':'27','241':'27','242':'27','243':'27','244':'27','245':'27','246':'27','248':'27','249':'27',
        '255':'11','256':'11','257':'11','258':'11','259':'11','260':'11','261':'11','262':'11','263':'11',
        '264':'11','265':'11','266':'11','267':'11','477':'11',
        '496':'24','494':'24','176':'24','479':'24','177':'24','495':'24','175':'24','178':'24',
        '170':'23','171':'23','172':'23','173':'23','174':'23',
        '185':'30','499':'30','182':'30','191':'30','180':'30','181':'30','179':'30','195':'30','183':'30',
        '184':'30','186':'30','187':'30','188':'30','500':'30','190':'30','189':'30','192':'30','193':'30',
        '27':'996','11':'996','24':'996','23':'996','30':'996',
        '34':'997','36':'997','35':'997',
        '990':'998','991':'998','992':'998','993':'998','994':'998','995':'998','996':'998','997':'998',
        '7':'999','37':'999'
    };

    var filiation = {
        '13': [327, 304, 305, 306, 330, 332, 307, 325, 329, 326, 331],
        '26': [214, 209, 217, 205, 206, 211, 210, 213, 212, 215, 216],
        '22': [167, 159, 162, 169, 158, 168, 166, 161, 164, 163, 165, 160],
        '990': [1, 3, 13, 26, 22],
        '21': [153, 151, 145, 147, 155, 144, 152, 150, 157, 146, 148, 149, 154, 156],
        '18': [40, 39, 42, 38, 41, 43, 44, 45, 47],
        '15': [335, 342, 343, 344, 345, 333, 334, 336, 337, 338, 340, 339, 341],
        '991': [21, 18, 15],
        '19': [55, 54, 53, 57, 56, 60, 59, 61, 62, 58, 63, 64, 65],
        '32': [280, 282, 273, 272, 275, 276, 274, 277, 279, 278, 281],
        '9': [142, 128, 141, 143, 129, 130, 131, 140, 127, 133, 132, 135, 134, 137, 138, 139, 136],
        '5': [81, 50, 49, 51, 48, 52, 66, 70, 80],
        '20': [72, 78, 77, 68, 69, 67, 71, 74, 73, 75, 76],
        '25': [196, 223, 200, 220, 222, 197, 198, 199, 201, 202, 203, 208, 204, 218, 219, 221, 207],
        '992': [2, 19, 32, 9, 5, 20, 25],
        '14': [322, 309, 323, 476, 308, 310, 312, 311, 315, 313, 316, 321, 320, 317, 318, 319, 324, 314],
        '16': [371, 377, 366, 349, 348, 346, 347, 364, 368, 369, 367, 373, 375, 372, 370, 365, 376],
        '17': [352, 351, 353, 360, 350, 354, 355, 356, 357, 359, 362, 361, 358, 363],
        '993': [14, 16, 17],
        '4': [84, 85, 116, 90, 115, 117, 82, 83, 86, 88, 89, 91, 92, 94, 93, 109, 111, 110, 114, 112, 113],
        '8': [302, 493, 488, 492, 487, 303, 484, 296, 490, 491, 486, 297, 489, 298, 485, 301, 299, 300],
        '12': [99, 108, 104, 478, 98, 96, 95, 106, 107, 100, 101, 102, 103, 105],
        '994': [4, 8, 12],
        '28': [226, 252, 247, 250, 232, 236, 224, 225, 233, 228, 234,
                227, 229, 231, 235, 230, 237, 251, 254, 253, 238],
        '10': [118, 119, 124, 120, 122, 121, 123, 125, 126],
        '31': [284, 289, 283, 292, 286, 482, 293, 285, 287, 481, 290, 288, 291, 483, 295, 294],
        '29': [269, 498, 480, 270, 268, 271, 497],
        '995': [33, 28, 10, 31, 29],
        '27': [244, 240, 239, 248, 241, 242, 243, 245, 246, 249],
        '11': [258, 267, 263, 477, 257, 256, 255, 261, 259, 260, 262, 265, 264, 266],
        '24': [175, 496, 494, 176, 479, 177, 495, 178],
        '23': [174, 170, 171, 172, 173],
        '30': [192, 185, 499, 182, 191, 180, 181, 179, 195, 183, 184, 186, 187, 188, 500, 190, 189, 193],
        '996': [27, 11, 24, 23, 30],
        '997': [34, 36, 35],
        '998': [990, 991, 992, 993, 994, 995, 996, 997],
        '999': [7, 37]
    };

    return {

        ancestors: ancestors,

        filiation: filiation,

        getSelectedState: function (id, value) {
            var result = {
                checked: false,
                indeterminate: false,
                selected: 0,
                total: 0
            };
            findChildren(filiation[id]);
            result.checked = value[id] || (result.selected === result.total && result.total > 0);
            result.indeterminate = result.selected > 0 && !result.checked;
            return result;
            function findChildren(arr) {
                if (!arr || arr.length === 0) return;
                for (var i = 0; i < arr.length; i++) {
                    var key = arr[i];
                    result.total += 1;
                    result.selected += value[key] === true ? 1 : 0;
                    findChildren(filiation[key]);
                }
            }
        },

        addValue: function (key, value) {
            var me = this;
            // 添加当前
            value[key] = true;
            // 添加子孙
            addChildren(filiation[key]);
            // 添加祖先
            addParent(key);
            function addParent(id) {
                while (ancestors.hasOwnProperty(id)) {
                    id = ancestors[id];
                    var selected = me.getSelectedState(id, value);
                    if (selected.selected === selected.total && selected.total !== 0) {
                        value[id] = true;
                    }
                }
            }
            function addChildren(arr) {
                if (!arr || !arr.length) return;
                for (var i = 0; i < arr.length; i++) {
                    value[arr[i]] = true;
                    addChildren(filiation[arr[i]]);
                }
            }
        },

        deleteValue: function (key, value) {
            // 删除当前
            delete value[key];
            // 删除子孙;
            deleteChildren(filiation[key]);
            // 删除祖先
            deleteParent(key);
            function deleteParent(id) {
                while (ancestors.hasOwnProperty(id)) {
                    id = ancestors[id];
                    delete value[id];
                }
            }
            function deleteChildren(arr) {
                if (!arr || !arr.length) return;
                for (var i = 0; i < arr.length; i++) {
                    delete value[arr[i]];
                    deleteChildren(filiation[arr[i]]);
                }
            } 
        },

        clearValue: function (value) {
            for (var key in value) {
                if (value.hasOwnProperty(key)) delete value[key];
            }
        },

        parseValue: function (value) {
            if (typeof value !== 'string') return {};
            var result = {};
            value = value.split(',');
            for (var i = 0; i < value.length; i++) {
                if (value[i].length === 0) continue;
                result[value[i]] = true;
            }
            return result;
        },

        stringifyValue: function (value) {
            var result = [];
            for (var key in value) {
                if (value.hasOwnProperty(key)) result.push(key);
            }
            result.sort();
            return result.join(',');
        }

    };


});
