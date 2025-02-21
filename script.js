function showToast(type, message) {
    const toastContainer = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconClass;
    switch(type) {
        case 'success':
            iconClass = 'fa-solid fa-circle-check';
            break;
        case 'warning':
            iconClass = 'fa-solid fa-triangle-exclamation';
            break;
        case 'error':
            iconClass = 'fa-solid fa-circle-xmark';
            break;
        case 'info':
            iconClass = 'fa-solid fa-circle-info';
            break;
        default:
            iconClass = 'fa-solid fa-bell';
    }

    toast.innerHTML = `
        <i class="${iconClass} toast-icon"></i>
        <div class="toast-content">
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-progress"></div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    const duration = 5000;
    toast.querySelector('.toast-progress').style.animationDuration = `${duration}ms`;

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, duration);
}

document.getElementById('success-btn').addEventListener('click', () => {
    showToast('success', 'Operation completed successfully!');
});

document.getElementById('warning-btn').addEventListener('click', () => {
    showToast('warning', 'This action might have consequences');
});

document.getElementById('error-btn').addEventListener('click', () => {
    showToast('error', 'The operation failed');
});

document.getElementById('info-btn').addEventListener('click', () => {
    showToast('info', 'Here is some useful information');
});