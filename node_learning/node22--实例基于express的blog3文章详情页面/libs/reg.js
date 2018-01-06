var str = '\
    aaa\n\
    \n\
    a211321312313aa\n\
    \n\'

// 行首替换 <p>行尾替换成</p>
var str = str.replace(/^/gm,'<p>').replace(/$/gm,'<p>')