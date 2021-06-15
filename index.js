// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, 
// inclusive.
// Input to the function is guaranteed to be a single string.


function isValidIP(str) {
    return false;
}

Test.assertEquals(isValidIP("0.0.0.0"), true);
Test.assertEquals(isValidIP("12.255.56.1"), true);
Test.assertEquals(isValidIP("137.255.156.100"), true);

