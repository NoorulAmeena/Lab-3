function areAnagrams (str1, str2) {

    // Remove non-alphanumeric characters and convert to lowercase
    
    const cleanedStr1 = str1.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    
    const cleanedStr2 = str2.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    
    // Sort the characters in both strings and compare them 
    const sortedStr1 = cleanedStr1.split(").sort().join(");
     const sortedStr2 = cleanedStr2.split(").sort().join(");
    
    return sortedStr1 === sortedStr2;
    
    }
    
    const testString1 = "listen";
    
    const testString2 = "silent";
    const testString3 = "hello";

    
    console.log(areAnagrams (testString1, testString2)); 
    console.log(areAnagrams (testString1, testString3));