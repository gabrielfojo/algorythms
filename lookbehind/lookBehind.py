def lookbehind(needle, heystack, greedy=True):
    size = len(needle)
    start = size - 1
    token= heystack[0:size]
    found = []

    for i in range(start,len(heystack)):
        if token == needle:
            found.append(i-start)
            if greedy == False:
                break
        if  i < len(heystack)-1:   
            token = token[1:] + heystack[i+1]


    return found

txt = "AABAACAADAABAABA"; #11
pat = "AABA";

print(lookbehind(pat,txt, True))