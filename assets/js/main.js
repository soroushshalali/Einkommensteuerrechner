let zue=prompt();
let est;
if (zue <= 9408){
    document.write("EST=0");
}
else if (9409 <= zue && zue <= 14532){
    let y=(zue - 9408)/10000;
    est=(972.87 * y + 1400)*y;
    document.write(est);
}