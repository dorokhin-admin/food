function handlePayment(response) {
    switch (response.status) {
        case 'pending':
            console.log("Платёж обрабатывается");
            break;
        case 'paid':
            console.log("Оплачено:", response.amount);
            break;
        case 'failed':
            console.log("Ошибка:", response.reason);
            break;
    }
}
handlePayment({ status: 'paid', amount: 0 });
