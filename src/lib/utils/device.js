function isMobile(ua){
    console.log(ua)
    return /mobile/i.test(ua);
}

module.exports = isMobile