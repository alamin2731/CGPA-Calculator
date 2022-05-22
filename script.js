function numOfCourses() {
            var numOfCourses = document.querySelector('#numCourses');

            if(numOfCourses.value == '') {
                let fieldstoRemove = document.querySelector('#fields');
                fieldstoRemove.innerHTML = '';
            } 
            addInputFields(numOfCourses.value);
        }

        function addInputFields(numOfCourses) {
            var inputFields = document.querySelector("#fields");
            
            for(let i=0; i<numOfCourses; i++){
                let courseNumber = i+1;
                let br = document.createElement('br');
                
                let label1 = document.createElement('label');
                label1.setAttribute('for', 'creditHours');
                label1.textContent = 'Credit Hours: ';

                let input1 = document.createElement('input');
                input1.setAttribute('type', 'number');
                input1.setAttribute('name', 'creditHours');
                input1.setAttribute('id', 'creditHours');
                input1.setAttribute('min', '0');
                input1.setAttribute('placeholder', 'Course ' + courseNumber + ' Credit Hours');

                let label2 = document.createElement('label');
                label2.setAttribute('for', 'grade');
                label2.textContent = 'Grade:    ';

                let input2 = document.createElement('select');
                input2.setAttribute('name', 'grade');
                input2.setAttribute('id', 'grade');

                input2.innerHTML = '<option value="-">-</option><option value="4">A+</option><option value="3.75">A</option><option value="3.5">A-</option><option value="3.25">B+</option><option value="3.0">B</option><option value="2.75">B-</option><option value="2.5">C+</option><option value="2.25">C</option><option value="2.00">D</option><option value="0">F</option>'

                inputFields.appendChild(label1);
                inputFields.appendChild(input1);

                inputFields.appendChild(label2);
                inputFields.appendChild(input2);

                inputFields.appendChild(br);

            }            
        }

        function calculateCGPA() {
            let grades = document.querySelectorAll('#grade');
            let creditHours = document.querySelectorAll('#creditHours');
            let GPA = document.querySelector("h2");

            let totalEarnedPoints = 0;
            let totalCreditHours = 0;

            for(let i=0; i<grades.length; i++){
                totalEarnedPoints += parseFloat(grades[i].value) * creditHours[i].value;
                totalCreditHours += parseFloat(creditHours[i].value);
            }
            // console.log(totalCreditHours);
            // console.log(totalEarnedPoints);
            GPA.innerHTML = "GPA: " + (totalEarnedPoints / totalCreditHours).toFixed(3);
        }
        
function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
}





// 

