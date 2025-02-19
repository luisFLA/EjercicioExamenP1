function calculateDiscount() {
    let values = [];
    let hasValue = false; 

    for (let i = 1; i <= 5; i++) {
        let value = document.getElementById(`product${i}`).value.trim(); 
        let numericValue = value !== "" ? parseFloat(value) : 0; 

        if (value !== "" && (isNaN(numericValue) || numericValue < 0)) {
            Swal.fire('Error', 'Ingrese valores numéricos válidos en todos los campos.', 'error');
            return;
        }

        if (numericValue > 0) {
            hasValue = true; 
        }

        values.push(numericValue);
    }

    if (!hasValue) {
        Swal.fire('Error', 'Debes ingresar al menos un valor mayor a 0 para calcular el descuento.', 'error');
        return;
    }

    let subtotal = values.reduce((acc, val) => acc + val, 0);
    let discountRate = 0;

    if (subtotal >= 1000 && subtotal < 5000) discountRate = 10;
    else if (subtotal >= 5000 && subtotal < 9000) discountRate = 20;
    else if (subtotal >= 9000 && subtotal < 13000) discountRate = 30;
    else if (subtotal >= 13000) discountRate = 40;

    let discount = (subtotal * discountRate) / 100;
    let total = subtotal - discount;

    document.getElementById('subtotal').value = `L${subtotal.toFixed(2)}`;
    document.getElementById('discount').value = `L${discount.toFixed(2)}`;
    document.getElementById('total').value = `L${total.toFixed(2)}`;
    document.getElementById('discountLabel').innerText = `Descuento ${discountRate}%`;
}
