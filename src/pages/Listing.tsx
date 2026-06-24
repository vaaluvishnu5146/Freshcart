import { Link, Outlet } from "react-router";

export default function Listing() {
  return (
    <div>
      <section id="center">
        <nav>
          <Link to={`/listing`}>Vegetables</Link>
          <Link to={`/listing/groceries`}>Groceries</Link>
          <Link to={`/listing/meat`}>Meat</Link>
        </nav>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
