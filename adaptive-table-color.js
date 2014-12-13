/*!
 * HEXColor & Bootstrap 3 v1.0 (http://atmpl.ru/)
 * Copyright 2014 aTmpl.
 * Licensed under MIT (https://github.com/aTmpl/HEXColor-Bootstrap-3/blob/master/LICENSE)
 */
clr=new Array('00','20','40','60','80','a0','c0','ff'); for (i=0;i<8;i++) {
document.write("<div class=table-responsive>");
document.write("<table class=table border=1 cellpadding=8>"); for (j=0;j<8;j++) {
document.write("<tr>"); for (k=0;k<8;k++) {
document.write('<td class=center-text bgcolor="#'+clr[i]+clr[j]+clr[k]+'">');
document.write('<tt><font color="#'+clr[7-i]+clr[7-j]+clr[7-k]+'"> ');
document.write(clr[i]+clr[j]+clr[k]+' </font></tt></td>');}
document.write("</tr>");}
document.write("</table>");
document.write("</div>");}
$(".center-text").css(
{'textAlign': 'center'}
);
