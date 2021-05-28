import React from "react"

const NotFound = () => {
  return <div>
    {/* Not Found */}
    <div className="page-not-found">
      <div className="content-not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>More restaurants are on the way :D</p>
        <a href="http://localhost:8080/restaurants" >back to home</a>
      </div>
      <img className="img-not-found" src="https://i1.wp.com/www.westside.social/wp-content/uploads/2017/12/food-background-food-concept-with-various-tasty-fresh-ingredients-for-cooking-italian-food-ingredients-view-from-above-with-copy-space_1220-1491-2-e1513108150131.jpg?" />
    </div>
  </div>
}

export default NotFound
