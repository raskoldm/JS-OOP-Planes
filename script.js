// Create classes

class MIG {
	// constructor(upTo,downTo){
	// 	this.upTo = upTo;
	// 	this.downTo = downTo;
	// }

	upTo(x,y){

	}

	downTo(x,y){

	}
	
}

class Tu154 extends MIG {
	// constructor(upTo,downTo,){
	// 	super(upTo,downTo);	
	//}
	planeAttak(x,y,gun){

	}
}
// Create Objs

let mig = new MIG();
mig.upTo(10, 30);
console.log(mig.upTo)

mig.downTo(25, 17);
console.log(mig.downTo);


let tu154 = new Tu154();
tu154.upTo(13,15);
console.log(tu154.upTo);

tu154.downTo(11,12);
console.log(tu154.downTo);

tu154.planeAttak(1,2,'machineGun');
console.log(tu154.planeAttak);

// Создать 2 класса для управления самолетами 
//(2 вида МИГ, ТУ-154), общие методы: Взлет, посадка.
//Для МИГ реализовать дополнительный метод "Атака".