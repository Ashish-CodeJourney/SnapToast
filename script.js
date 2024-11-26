class ToastNotification {
    constructor() {
        this.container = null;
    }

    init() {
        this.container = document.getElementById('toast-container');

        if (!this.container) {
            this._error('Toast container not found in DOM!');
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            document.body.appendChild(this.container);
            this._log('Created toast container dynamically');
        }
    }

    show(message, type = 'success', duration = 3000) {
        this.init();

        const toast = document.createElement('div');
        toast.classList.add('toast', type, 'show');

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('toast-content');

        const messageEl = document.createElement('div');
        messageEl.classList.add('toast-message');
        messageEl.textContent = message;
        contentWrapper.appendChild(messageEl);

        const progressBar = document.createElement('div');
        progressBar.classList.add('toast-progress');
        progressBar.style.animationDuration = `${duration}ms`;

        const icon = this.createIcon(type);

        toast.appendChild(icon);
        toast.appendChild(contentWrapper);
        toast.appendChild(progressBar);

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                this.container.removeChild(toast);
            }, 300);
        }, duration);
    }

    createIcon(type) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('class', 'toast-icon');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('stroke', 'white');
        svg.setAttribute('stroke-width', '2');

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        const icons = {
            success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
            error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
            info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        };

        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('d', icons[type]);

        svg.appendChild(path);
        return svg;
    }

    success(message) { this.show(message, 'success'); }
    warning(message) { this.show(message, 'warning'); }
    error(message) { this.show(message, 'error'); }
    info(message) { this.show(message, 'info'); }
}

const toast = new ToastNotification();

function initToastButtons() {
    const buttons = {
        success: '#success-btn',
        warning: '#warning-btn',
        error: '#error-btn',
        info: '#info-btn'
    };

    Object.entries(buttons).forEach(([type, selector]) => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener('click', () => toast[type](getMessage(type)));
        }
    });
}

function getMessage(type) {
    const messages = {
        success: 'Operation completed successfully!',
        warning: 'Please proceed with caution.',
        error: 'An error occurred. Please try again.',
        info: 'Here\'s some additional information.'
    };
    return messages[type];
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToastButtons);
} else {
    initToastButtons();
}
