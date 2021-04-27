function init() {
    
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
    }
}

function toggle() {
    var id = this.id;
    switch (id) {
        case "LOWERtoggle": {
            var lowers = document.getElementsByClassName("lower");
            for (var i = 0; i < lowers.length; i++) {
                lowers[i].classList.toggle("on")
            }
        };
        break;
        case "MIDDLEtoggle": {
            var middles = document.getElementsByClassName("middle");
            for (var i = 0; i < middles.length; i++) {
                middles[i].classList.toggle("on")
            }
        };
        break;
        case "UPPERtoggle": {
            var uppers = document.getElementsByClassName("upper");
            for (var i = 0; i < uppers.length; i++) {
                uppers[i].classList.toggle("on")
            }
        };
        break;
        case "REPUBLICANtoggle": {
            var repubs = document.getElementsByClassName("Republican");
            for (var i = 0; i < repubs.length; i++) {
                repubs[i].classList.toggle("on")
            }
        };
        break;
        case "DEMOCRATICtoggle": {
            var dems = document.getElementsByClassName("Democratic");
            for (var i = 0; i < dems.length; i++) {
                dems[i].classList.toggle("on")
            }
        };
        break;
        case "FEDtoggle": {
            var feds = document.getElementsByClassName("Federalist");
            for (var i = 0; i < feds.length; i++) {
                feds[i].classList.toggle("on")
            }
        };
        break;
        case "WHIGtoggle": {
            var whigs = document.getElementsByClassName("Whig");
            for (var i = 0; i < whigs.length; i++) {
                whigs[i].classList.toggle("on")
            }
        };
        break;
        case "DRtoggle": {
            var drs = document.getElementsByClassName("Democratic-Republican");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "UNStoggle": {
            var uns = document.getElementsByClassName("Unaffiliated");
            for (var i = 0; i < uns.length; i++) {
                uns[i].classList.toggle("on")
            }
        };
         break;
        case "Episcopaltoggle": {
            var drs = document.getElementsByClassName("Episcopal");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
         break;
        case "Unitariantoggle": {
            var drs = document.getElementsByClassName("Unitarian");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
         break;
        case "Deisttoggle": {
            var drs = document.getElementsByClassName("Deist");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
         break;
        case "Dutch_Reformedtoggle": {
            var drs = document.getElementsByClassName("Dutch_Reformed");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Unaffiliatedtoggle": {
            var drs = document.getElementsByClassName("UnaffiliatedD");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Methodisttoggle": {
            var drs = document.getElementsByClassName("Methodist");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Disciple_of_Christtoggle": {
            var drs = document.getElementsByClassName("Disciple_of_Christ");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Baptisttoggle": {
            var drs = document.getElementsByClassName("Baptist");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Congregationalisttoggle": {
            var drs = document.getElementsByClassName("Congregationalist");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Quakertoggle": {
            var drs = document.getElementsByClassName("Quaker");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
         break;
        case "Roman_Catholictoggle": {
            var drs = document.getElementsByClassName("Roman_Catholic");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
         break;
        case "Episcopal_Deisttoggle": {
            var drs = document.getElementsByClassName("Episcopal_Deist");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
        break;
        case "Presbyteriantoggle": {
            var drs = document.getElementsByClassName("Presbyterian");
            for (var i = 0; i < drs.length; i++) {
                drs[i].classList.toggle("on")
            }
        };
    }
    
}

window.onload = init;