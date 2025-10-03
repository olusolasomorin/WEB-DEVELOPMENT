function showMessage(text, type) {
            const message = document.getElementById('message');
            message.textContent = text;
            message.className = `message ${type} show`;
            
            setTimeout(() => {
                message.classList.remove('show');
            }, 3000);
        }

        function updateTimestamp() {
            const timestampEl = document.getElementById('timestamp');
            const savedAt = localStorage.getItem('savedAt');
            
            if (savedAt) {
                const date = new Date(savedAt);
                const formatted = date.toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                timestampEl.textContent = `Last saved: ${formatted}`;
            } else {
                timestampEl.textContent = 'No note saved yet';
            }
        }

        function saveNote() {
            const noteArea = document.getElementById('noteArea');
            const noteText = noteArea.value.trim();
            
            if (!noteText) {
                showMessage('Cannot save an empty note!', 'error');
                return;
            }
            
            // Save to localStorage
            localStorage.setItem('note', noteText);
            localStorage.setItem('savedAt', new Date().toISOString());
            
            updateTimestamp();
            showMessage('Note saved successfully!', 'success');
        }

        function loadNote() {
            const savedNote = localStorage.getItem('note');
            
            if (!savedNote) {
                showMessage('No saved note found', 'info');
                return;
            }
            
            const noteArea = document.getElementById('noteArea');
            noteArea.value = savedNote;
            
            showMessage('Note loaded successfully!', 'success');
        }

        // Load saved note on page load
        window.addEventListener('DOMContentLoaded', () => {
            updateTimestamp();
            const savedNote = localStorage.getItem('note');
            if (savedNote) {
                document.getElementById('noteArea').value = savedNote;
            }
        });