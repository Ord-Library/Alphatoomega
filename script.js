function checkSatoshi() {
    const alphaUncommonSatoshi = "1270207500000000";
    const blackUncommonSatoshi = "1800131249999999";
    const omegaBlackUncommonSatoshi = "148944999999999";

    let input = document.getElementById("satoshiInput").value;
    let result = document.getElementById("result");

    if (input === alphaUncommonSatoshi) {
        result.textContent = "This is an Alpha Uncommon Satoshi!";
    } else if (input === blackUncommonSatoshi) {
        result.textContent = "This is a Black Uncommon Satoshi!";
    } else if (input === omegaBlackUncommonSatoshi) {
        result.textContent = "This is an Omega Black Uncommon Satoshi!";
    } else {
        result.textContent = "This is neither an Alpha, Black, nor Omega Black Uncommon Satoshi.";
    }
}
