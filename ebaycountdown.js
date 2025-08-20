

<script>
        // Countdown timer
        function updateCountdown() {
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
            
            const diff = endOfDay - now;
            
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('countdown').innerHTML = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
        
        // Simple image gallery
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                const mainImg = document.querySelector('.main-image');
                mainImg.src = this.src.replace('100x80', '600x400');
                mainImg.alt = this.alt;
            });
        });
    </script>
