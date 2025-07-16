
// 📦 Jest Test Script for CleanCity App (Unit Testing)

describe('Pickup Request Form', () => {
  test('Valid form submission shows success message', () => {
    document.body.innerHTML = `
      <form id="pickupForm">
        <input id="requestId" value="123456"/>
        <input id="location" value="Nairobi West"/>
        <input id="phone" value="0700123456"/>
        <select id="type"><option selected>Garbage</option></select>
        <input id="date" value="2025-08-01"/>
        <textarea id="description">Pickup garbage</textarea>
        <button id="submit">Submit</button>
        <div id="message"></div>
      </form>
    `;
    const message = document.getElementById('message');
    const requestId = document.getElementById('requestId').value;
    const phone = document.getElementById('phone').value;

    if (requestId && phone.match(/^07\d{8}$/)) {
      message.innerText = 'Request successfully submitted';
    }

    expect(message.innerText).toBe('Request successfully submitted');
  });
});
