var scope = this;
function setParams(ev) {
	scope.resultContent = document.getElementById('resultContent');
	scope.resultInput = document.getElementById('result');
	scope.resultContent.hidden = true;
	scope.resultInput.value = '';
	var trs = document.getElementsByTagName('tr');
	for (var i in trs) {
		if ((trs[i].style) && (trs[i].style.backgroundColor = 'rgba(150,150,150, 0.5)')) {
			trs[i].style.backgroundColor = '';
		}
	}
	validation(ev, ev.name, ev.value);
	calculate();
};
var categories = {
	first: {
		min: 0,
		max: 18.5
	},
	second: {
		min: 18.5,
		max: 24.9
	},
	third: {
		min: 25,
		max: 29.9
	},
	fourth: {
		min: 30.0,
		max: 34.9
	},
	fifth: {
		min: 35,
		max: 39.9
	},
	sixth: {
		min: 40,
		max: 1000
	}
};
var validG = '';
var validW = '';

function validation (input, input_name, input_value) {
	var min = 0;
	var max = 0;
	if (input_name == 'growth') {
		min = 100;
		max = 280;
	}
	if (input_name == 'weight') {
		min = 20;
		max = 300;
	}
	if (input_name == 'weight') {
			validW = '';
		} else {
			validG = '';
		}
	if (input_value > min && input_value < max) {
		input.style.backgroundColor = 'rgba(0,255,0, 0.2)';
		if (input_name == 'weight') {
			validW = input_value;			
		} else {
			validG = input_value;
		}
	} else if (input_value == '') {
		input.style.backgroundColor = '';
	} 
	else {
		input.style.backgroundColor = 'rgba(255,0,0, 0.2)';
	}
};
function calculate () {
	if (validG && validW) {
		var index = indexOfBodyWeight(validG/100, +validW);
		for (var j in categories) {
			if (index < categories[j].max && index > categories[j].min) {
				document.getElementById(j).style.backgroundColor = 'rgba(150,150,150, 0.5)';
				scope.resultContent.hidden = false;
				scope.resultInput.value = index.toFixed(1);
			}
		}
	} else {
		
	}
}
function indexOfBodyWeight(growth, weight) {
	return (weight / Math.pow(growth, 2));
}



