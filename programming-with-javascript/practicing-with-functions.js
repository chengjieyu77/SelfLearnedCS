function letterFinder(word,match){
    for(var i = 0; i < word.length;i++){
        if(match == word[i]){
            console.log('Found the', match, 'at', i);
        }else{
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test","t")