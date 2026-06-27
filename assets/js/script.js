document.querySelectorAll('button').forEach(function(btn) {
            btn.addEventListener('click', function() {
                Swal.fire({
                    title: 'Sistem Sedang Dimaintenance',
                    text: 'Kami sedang melakukan pembaruan berkala untuk meningkatkan layanan. Silakan coba beberapa saat lagi.',
                    icon: 'info',
                    allowOutsideClick: true,
                    allowEscapeKey: true,   
                    showConfirmButton: true
                })
            });
        });