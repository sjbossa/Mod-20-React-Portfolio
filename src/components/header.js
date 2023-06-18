// import the navigation component
import Navigation from "./navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Scott Bossard</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}