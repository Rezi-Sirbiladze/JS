function getMotorcycle(id) {
    if (id < 0) {
        throw new Error('Invalid ID', {
            cause: new Error('ID cannot be negative')
        });
    } else if (id > 100) {
        throw new Error('ID too high', {
            cause: new Error('ID cannot be greater than 100')
        });
    }
    return { id, brand: 'Honda', model: 'CB500 Hornet', year: 2024 };
}

try {
    const motorcycle = getMotorcycle(101);
    console.log('Motorcycle:', motorcycle);
} catch (error) {
    console.error('Error:', error.message);
    console.error('Caused by:', error.cause.message);
}

