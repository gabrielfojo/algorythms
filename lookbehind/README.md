# Lookbehind approach

In the process of learning algorythms I stumbled upon the substring problem, the naive solution seems to be bad, at least to pass a challenge for a company, and I found the KMP algorythm in the process of learning, which for my taste is to much effort to save a few steps just in the case that the needle has suffix and posfix in common. 

My question is, why are we checking forward instead of checking backward and advance just one char each time. The approach seems to be BigO(n) , now my question is, we are paying extra for removing the first char and adding the new one? 