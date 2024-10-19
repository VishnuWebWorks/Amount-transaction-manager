let totalAssets = 0;
let totalDebits = 0;

function addTransaction() {
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (name && !isNaN(amount)) {
        const creditTableBody = document.querySelector('#creditTable tbody');
        const debitTableBody = document.querySelector('#debitTable tbody');

        if (type === 'credit') {
            totalAssets += amount;
            const row = `<tr><td>${name}</td><td>${amount}</td></tr>`;
            creditTableBody.insertAdjacentHTML('beforeend', row);
        } else {
            totalDebits += amount;
            const row = `<tr><td>${name}</td><td>${amount}</td></tr>`;
            debitTableBody.insertAdjacentHTML('beforeend', row);
        }

        updateTotals();
        clearInputs();
    } else {
        alert('Please fill all fields correctly.');
    }
}

function updateTotals() {
    document.getElementById('totalAssets').innerText = totalAssets;
    document.getElementById('totalDebits').innerText = totalDebits;
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('type').value = 'credit';
}
