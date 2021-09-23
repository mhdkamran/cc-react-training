function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
delay(3000).then(() => alert("resolved"));