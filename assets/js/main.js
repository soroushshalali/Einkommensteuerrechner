let zue=prompt();
let est;
let y;

function jahr2020{
    if (zue <= 9408){
        document.write("EST=0");
    }
    else if (9409 <= zue && zue <= 14532){
        y=(zue - 9408)/10000;
        est=((972 * y) + 1400)*y;
        document.write(est);
    }
    else if (14533 <= zue && zue <= 57051){
        y=(zue - 14532)/10000;
        est=((212.02 * y) + 2397)*y+972.79;
        document.write(est);
    }
    else if (57052 <= zue && zue <= 270500){
        est=0.42*zue-8963.74;
        document.write(est);
    }
    else if (270501 <= zue){
        est=0.45*zue-17078.74;
        document.write(est);
    }
}


function jahr2019{
    if (zue <= 9168){
        document.write("EST=0");
    }
    else if (9169 <= zue && zue <= 14254){
        y=(zue - 9168)/10000;
        est=((980.14 * y) + 1400)*y;
        document.write(est);
    }
    else if (14255 <= zue && zue <= 55960){
        y=(zue - 14254)/10000;
        est=((216.16 * y) + 2397)*y+965.58;
        document.write(est);
    }
    else if (55961 <= zue && zue <= 265326){
        est=0.42*zue-8780.90;
        document.write(est);
    }
    else if (265327 <= zue){
        est=0.45*zue-16740.68;
        document.write(est);
    }
}

function jahr2018{
    if (zue <= 9000){
        document.write("EST=0");
    }
    else if (9001 <= zue && zue <= 13966){
        y=(zue - 9000)/10000;
        est=((997.80 * y) + 1400)*y;
        document.write(est);
    }
    else if (13997 <= zue && zue <= 54942){
        y=(zue - 13966)/10000;
        est=((220.13 * y) + 2397)*y+948.49;
        document.write(est);
    }
    else if (54950 <= zue && zue <= 260532){
        est=0.42*zue-8621.75;
        document.write(est);
    }
    else if (260533 <= zue){
        est=0.45*zue-16437.70;
        document.write(est);
    }
}