const roomForm = document.getElementById('room-form');

// Handle form submission
roomForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const roomData = {
        roomNumber: document.getElementById('roomNumber').value,
        type: document.getElementById('type').value,
        price: document.getElementById('price').value,
        status: document.getElementById('status').value,
    };

    try {
        const response = await fetch('http://localhost:5000/api/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roomData),
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Clear form fields after successful submission
        roomForm.reset();

        // Refresh room list
        fetchRooms();
    } catch (error) {
        console.error('Error adding room:', error);
        alert('Failed to add room. Please check the console for details.');
    }
});
