function setupPlayer(ispc) {
var y,x;

grid = [];
for (y=0;y<gridx;++y) {
grid[y] = [];
for (x=0;x<gridx;++x)
grid[y][x] = [100,-1,0];
}

return grid;
}
function showGrid(ispc) {
var y,x;
if (bandera==1){
for (y=0;y<gridy;++y) {
for (x=0;x<gridx;++x) {
if ( ispc )
document.write ('<a href="javascript:gridClick('+y+','+x+');"><img name="pc'+y+'_'+x+'"  src="transparencia.png" width=16 height=16></a>');
}
document.write('<br>');
   }
   bandera = 0;
  }
}
showGrid(true);
	