let clockInterval;

        function updateClock() {
            const now = new Date()
            let hours = now.getHours()
            let minutes = now.getMinutes()
            let seconds = now.getSeconds()

            if (hours < 10) {
                hours = "0" + hours
            }
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            if (seconds < 10) {
                seconds = "0" + seconds
            }

            document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds
        }

        document.getElementById('start').addEventListener('click', () => {
            if (!clockInterval) {
                updateClock()
                clockInterval = setInterval(updateClock, 1000)
            }
        })

        document.getElementById('stop').addEventListener('click', () => {
            clearInterval(clockInterval)
            clockInterval = 0
        })