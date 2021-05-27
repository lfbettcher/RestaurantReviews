import React from "react"

// var lFollowX = 0,
//   lFollowY = 0,
//   x = 0,
//   y = 0,
//   friction = 1 / 30;

// function animate() {
//   x += (lFollowX - x) * friction;
//   y += (lFollowY - y) * friction;

//   translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

//   $('img').css({
//     '-webit-transform': translate,
//     '-moz-transform': translate,
//     'transform': translate
//   });

//   window.requestAnimationFrame(animate);
// }

// $(window).on('mousemove click', function (e) {

//   var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//   lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//   lFollowY = (10 * lMouseY) / 100;

// });

// animate();

const NotFound = () => {
  return <div>
    {/* Not Found */}
    <div className="page-not-found">
      <div className="content-not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>More restaurants are on the way :D</p>
        <a>back to home</a>
      </div>
      <img className="img-not-found" src="https://i1.wp.com/www.westside.social/wp-content/uploads/2017/12/food-background-food-concept-with-various-tasty-fresh-ingredients-for-cooking-italian-food-ingredients-view-from-above-with-copy-space_1220-1491-2-e1513108150131.jpg?" />
    </div>
  </div>
}

export default NotFound
