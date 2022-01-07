import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import "./styles.css";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { ColumnOrder } from "./components/ColumnOrder";
import { ColumnHiding } from "./components/ColumnHiding";
import { StickyTable } from "./components/StickyTable";
export default function App() {
  return (
    <div className="App">
      <StickyTable />
    </div>
  );
}
