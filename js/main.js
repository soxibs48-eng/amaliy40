/**
 * FURNITURE WEB UI — 40-Amaliy Ish
 * Skandinaviya Yog'och Mebellari & Interyer Platformasi JavaScript Moduli
 */

document.addEventListener('DOMContentLoaded', () => {
  initDreamRooms();
  initJoinForm();
});

function initDreamRooms() {
  const tiles = document.querySelectorAll('.room-tile');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const room = tile.getAttribute('data-room');
      alert(`"${room}" toifasidagi barcha yangi mebel to'plamlari katalogi yuklanmoqda...`);
    });
  });
}

function initJoinForm() {
  const form = document.getElementById('furnitureJoinForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    alert(`Rahmat! ${email} manziliga 10% chegirmali vaucher va yangi katalogimiz yuborildi.`);
    form.reset();
  });
}
