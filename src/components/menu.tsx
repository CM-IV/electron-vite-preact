import { Link } from "wouter-preact";

const Menu = () => {
  return (
      <div id="boxMenu" class="box">
        <aside class="menu is-3">
          <p class="menu-label has-text-white">Admin</p>
          <ul class="menu-list">
            <li>
              <Link to={"/"} id="menuButton" class="menu-item has-text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/test-page"} id="menuButton" class="menu-item has-text-white">
                Test
              </Link>
            </li>
          </ul>
        </aside>
      </div>
  );
};

export { Menu };