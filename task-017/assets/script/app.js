function randomInt(range){
    return Math.floor(Math.random() * range);
}
function rangedRandomInt(range, min){
    return Math.floor(Math.random() * range) + min;
}
const profile = {
    window: document.getElementById('profile-window'),
    button: document.getElementById('profile-button'),
    isOpened: false,
    openWindow: () => {
        this.isOpened ? profile.window.classList.replace('flex', 'hidden') : profile.window.classList.replace('hidden', 'flex');
        this.isOpened = !this.isOpened;
    }
}
const database = {
    field: document.getElementById('database'),
    append: (data) => {
        const row = document.createElement('tr');
        row.innerHTML = 
            `<td>${data.id}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.firstName}</td>
            <td>${data.lastName}</td>
            <td>${data.address}</td>
            <td>${data.postal}</td>
            <td>${data.birthDate}</td>
            <td>${data.age}</td>
            <td class="flex gap-1">${data.payment}</td>
            <td class="text-center">${data.paymentAmout()} ${data.currencyType()}</td>
            <td>${data.paymentStatus()}</td>`;
        database.field.appendChild(row);
    }
}
const chart = {
    month: [
        "January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"
    ],
    mothlyChart: (target, data, desc, bg, label) => {
        const ctx = document.getElementById(target);
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                    label: desc,
                    data: data,
                    borderWidth: 1,
                    backgroundColor: bg,
                    borderColor: bg
                }]
            },
            options: {
                scales: {
                    y: {
                      beginAtZero: true
                    }
                }
            },
        });
    },
    pieChart: (target, bg, label) => {
        const ctx = document.getElementById(target);
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [label[0], label[1]],
                datasets: [{
                    label: '',
                    data: [chart.buyersToday[0], chart.buyersToday[1]],
                    backgroundColor: [
                        bg[0], bg[1]
                    ],
                    borderColor: [
                        bg[0], bg[1]
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        })
    },
    buyersToday: [0,0]
}
class Users {
    constructor(id) {
        return fetch(`https://dummyjson.com/users/${id}`)
        .then(response => response.json())
        .then(json => {
            this.id = id;
            this.email = json.email;
            this.phone = json.phone;
            this.firstName = json.firstName;
            this.lastName = json.lastName;
            this.address = json.address.state + ', ' + json.address.city + ', ' + json.address.address;
            this.postal = json.address.postalCode;
            this.birthDate = json.birthDate;
            this.age = json.age;
            this.payment = json.bank.cardNumber + ' - ' + json.bank.cardExpire;
            return this;
        });
    }
    paymentStatus(){
        let status = [
            '<span class="bg-red-300 text-red-900 rounded-full px-2 ml-auto">Failed</span>',
            '<span class="bg-yellow-300 text-yellow-800 rounded-full px-2 ml-auto">Pending</span>',
            '<span class="bg-blue-300 text-blue-900 rounded-full px-2 ml-auto">Verifiying</span>',
            '<span class="bg-red-400 text-red-950 rounded-full px-2 ml-auto">Blocked</span>',
            '<span class="bg-orange-300 text-orange-700 rounded-full px-2 ml-auto">Canceled</span>',
            '<span class="bg-lime-300 text-lime-800 rounded-full px-2 ml-auto">Refunded</span>',
        ];
        if(randomInt(2)+1 == 1){
            chart.buyersToday[1]++;
            return status[randomInt(status.length)];
        } else {
            chart.buyersToday[0]++;
            return '<span class="bg-green-300 text-green-900 rounded-full px-2 ml-auto">Successful</span>'
        }
    }
    paymentAmout(){
        return randomInt(1000);
    }
    currencyType(){
        let currency = [
            '€', '£', '$',
        ];
        return currency[randomInt(currency.length)];
    }
}
var existingChart = Chart.getChart('statusOfBuyers');
profile.button.addEventListener('click', profile.openWindow);
chart.mothlyChart('buyersPerMonth', Array.from({length: 12}, () => rangedRandomInt(2000, 700)), 'Buyers per month','hsl(220, 60%, 60%)', chart.month);
chart.mothlyChart('earningsPerMonth', Array.from({length: 12}, () => rangedRandomInt(24000, 5000)), 'Earnings per month (in USD)','hsl(230, 50%, 40%)', chart.month);
(async () => {
    for (let i = 0; i < rangedRandomInt(80,90); i++) {
        const elem = document.getElementById('user-amount');
        const userID = randomInt(40) + 1;
        database.append(await new Users(userID));   
        elem.textContent = `Currently have ${i+1} buyers today`;
    }
    chart.pieChart('statusOfBuyers', ['hsl(220, 60%, 60%)', 'hsl(230, 50%, 40%)'], ['Successful', 'Failed or pending']);
})();