$(document).ready(function(){
		for(i = 3; i <=6; i++){
			if(i == 3){
				$("#sec").append("<h2 id = 'tri'>Triângulo</h2><svg height='200' width='200'><polygon points='125,30 50,200 200,200' class='triangle' /><br><br/>");
			}
			else if(i == 4){
				$("#sec").append("<h2 id = 'quad'>Quadrado</h2><svg><rect x='50' y='50' width='100' height='100'/></svg><br><br/>");
			}
			else if(i == 5){
				$("#sec").append("<h2 id = 'pent'>Pentagono</h2><svg height='200' width='200'><polygon points='180.90169943749476,158.77852522924732 69.09830056250527,195.10565162951536 0,100.00000000000001 69.09830056250524,4.89434837048465 180.90169943749473,41.221474770752664' fill='#000' class='pentagon' /><br><br/>");
			}
			else{
				$("#sec").append("<h2 id = 'hex'>Hexagono</h2><svg height='200' width='200'><polygon points='186.60254037844388,150 100,200 13.397459621556152,150.00000000000003 13.397459621556123,50.00000000000003 99.99999999999999,0 186.60254037844388,50.000000000000036' fill='#000' class='hexagon' /><br><br/>");
			}
		}
});