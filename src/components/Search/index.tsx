import { InputGroup } from "./syles"

export const Search = () => (
  <form className="container">
    <InputGroup>
      <label htmlFor="search">Digite seu problema</label>
      <input type="search" id="search" placeholder="Digite seu problema" />
    </InputGroup>
  </form>
)

export default Search
